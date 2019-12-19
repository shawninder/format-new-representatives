const formatNewRepresentatives = require('../')
const stream = require('stream')

const emptyJSON = JSON.stringify({
  objects: [],
  meta: {
      total_count: 0
  }
})

test('An empty CSV produces a valid JSON', (done) => {
  const mockInStream = stream.Readable
    .from([
       '"header-1","header-2"'
    ])
  const mockOutStream = new stream.Writable()
  formatNewRepresentatives(mockInStream, mockOutStream)
  const chunks = []
  mockOutStream.on('data', (chunk) => {
    chunks.push(chunk.toString())
  })
  mockOutStream.on('end', () => {
    const output = chunks.join('\n')
    expect(output).toBe(emptyJSON)
    done()
  })
})
