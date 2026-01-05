//streams are bascailly used to avoid the storage limitation to store everything
//inside one variable while reading files (itna he hai according to this lecture)


// const stream = createReadStream(`./content/big-file.txt`)

//default buffer size 64kb
//last buffer - remainder
//highWaterMark - control size
//const stream =createReadStream(`./content/big-file.txt`, {highWaterMark:9000})
//highWaterMark:9000 :It sets the buffer size limit for a stream to 9000 bytes. (increase the bucket size)

//const stream =createReadStream(`./content/big-file.txt`, {encoding `utf8`})
const { error } = require("console")
const {createReadStream} = require(`fs`)
const stream= createReadStream(`./content/big-file.txt` ,
                        {highWaterMark:9000,
                            encoding: `utf8`
                        }
                     
                    )

stream.on(`data` , result=>{ //gives the size  in bytes
    console.log(result)
} )

stream.on(`error` , (error)=>{
    console.log(error)
})