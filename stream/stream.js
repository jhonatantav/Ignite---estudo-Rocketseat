import http from 'node:http'
import { Transform } from 'node:stream'

class inverse extends Transform {
    _transform(chunk, encoding, callback){
        const transformed = Number(chunk.toString()) * -1

        console.log(transformed)

        callback(null, Buffer.from(String(transformed)))
    }
}

const server = http.createServer(async(req, res) => {
    const buffers = []

    
    
    for await (const chuck of req){
        buffers.push(chuck)
    }

    const fullstream = Buffer.concat(buffers).toString()

    console.log(fullstream)

    return res.end(fullstream)

})

server.listen(3334)