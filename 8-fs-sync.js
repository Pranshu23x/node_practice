// fs module (sychornous)

const {readFileSync , writeFileSync} = require(`fs`)

// const first = readFileSync(`(path)` , `encoding`)
const first = readFileSync(`./content/firstText.txt` , `utf8`)

const second= readFileSync(`./content/firstText.txt` , `utf8`)

console.log(first , second)

// writeFileSync( // if the file is not there, node will create one
//                 // else it would overwrite the existing one
//             `./content/result-sync-txt` , 
//             `Here is the result : ${first} : ${second}`
// )

// if i want to append to the file , adding text to the end, without overwriting
writeFileSync( // if the file is not there, node will create one
                // else it would overwrite the existing one
            `./content/result-sync-txt` , 
            `Here is the result : ${first} : ${second}` , {flag: `a`}
)
