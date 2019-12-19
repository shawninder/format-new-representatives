# Format New Representatives (CSV -> JSON)

This is just a script to convert a CSV table full of new representatives into a json file structure like the API results from Open North. It aims at providing them with new data in the easiest way format for them to ingest quickly.

## Usage

### locally (for testing)
```sh
infile.csv > ./bin/format-new-representatives.js > outfile.json
```

###  remotely
**Install**
```sh
npm i git+https://git@github.com/shawninder/format-new-representatives.git
```
OR
```sh
npm i git+ssh://git@github.com/shawninder/format-new-representatives.git
```

**Use**
```sh
infile.csv > ./node_modules/format-new-representatives/bin/format-new-representatives.js > outfile.json
```
OR in an npm script:
```sh
cat infile.csv | format-new-representatives > outfile.json
```
