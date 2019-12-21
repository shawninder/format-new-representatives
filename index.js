const { Transform } = require('stream')
const csvtojson = require('csvtojson')

const decorate = new Transform({
  transform (chunk, encoding, cb) {
    // add [ to very front
    // add , between rows
    // remove crlf from row
    if (!this.notFirst) {
      this.push('{ "objects": [')
      this.count = 0
      this.notFirst = true;
    } else {
      this.push(', ')
      this.count += 1
    }
    this.push(JSON.stringify(JSON.parse(chunk.toString()), null, 2));
    cb()
  },
  flush (cb) {
    // add ] to very end or [] if no rows
    if (!this.notFirst) {
      this.push('[]')
      this.count = 0
    } else {
      this.push(']')
      this.count += 1
    }

    this.push(`,\n  "meta": { "total_count": ${this.count} }\n}\n`)
    cb()
  }
})

module.exports = exports = function formatNewRepresentatives (inStream, outStream) {
  inStream.resume()
  inStream.setEncoding('utf8')
  inStream.pipe(csvtojson({ ignoreEmpty: true, downstreamFormat: 'line' }))
    .pipe(decorate)
    .pipe(outStream)
}
