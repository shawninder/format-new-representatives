module.exports = exports = function formatNewRepresentatives (inStream, outStream) {
  inStream.resume()
  inStream.setEncoding('utf8')
  inStream.on('data', function (data) {
    outStream.write(data);
  });
  inStream.on('end', function () {
    outStream.end()
  })
}
