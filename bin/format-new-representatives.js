#!/usr/bin/env node

try {
  const formatNewRepresentatives = require('../')

  // Validate and sanitize input arguments
  // Provide things like --help, --version, etc.

  formatNewRepresentatives(process.stdin, process.stdout)

  process.stdout.on('end', () => {
    process.exit(0)
  })
} catch (ex) {
  console.error('Caught exception', ex)
  process.exit(1)
}
