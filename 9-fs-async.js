// fs module (asychornous)

const {readFile , writeFile} = require(`fs`)

// kinda a callback thing

console.log(`starting new task`)
readFile(`./content/firstText.txt`, `utf8` , (err, first)=>{
    if(err){
        console.log(err)
        return
    }
readFile(`./content/secondText.txt` , `utf8` , (err, second)=>{
    if(err){
        console.log(err)
        return
    }
writeFile(
        `./content/result-sync.txt`,
        `Here is the result ${first+ second} , whatever its cool!` ,
         (err ,result)=>{
            if(err){
                console.log(err)
                return
            }
            else{
                console.log(`task ends`)
            }
        }
        
)
})
})
console.log(`starting next task`)
