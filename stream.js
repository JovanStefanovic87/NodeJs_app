const fs = require('fs')

const readStream = fs.createReadStream('small.webm')
const writeStream = fs.WriteStream('smallCopy.webm')

readStream.pipe(writeStream)

/* readStream.on('data', (chank) => {
    writeStream.write(chank)
})

readStream.on('open', () => {
    console.log('Stream open')
})

readStream.on('close', () => {
    console.log('Stream close')
}) */