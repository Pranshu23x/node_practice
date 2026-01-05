//async awit patterns
//setup promises
//it is to write effective code, such that it could handle mutiple file reads
//--------------------------------------------------------------------------

// using util promisify
// util.promisify:util.promisify converts a callback-based function into a
// Promise-based function.

//Alternatively 
const {readFile , writeFile}=require(`fs`).promises
// const util= require(`util`)
// const readFilePromise= util.promisify(readFile)
// const writeFilePromise= util.promisify(writeFile)

const start= async()=>{
    const first= await readFile(`./content/firstText.txt`, `utf8`)
    const second= await readFile(`./content/secondText.txt` , `utf8`)
    console.log(first ,second)
    await writeFile(
        `./content/secondText.txt`, 
        `THIS IS AWSOME : ${first} ${second}`,
        `utf8`
    )
}

start()





// const getText= (path)=>{
//     return new Promise((resolve, reject)=>{
//         readFile(path, `utf8` , (err, data)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }








// //method 2
// const start= async()=>{
//    try{
//      const first= await getText(`./content/firstText.txt`)
//      const second= await getText(`./content/secondText.txt`)
//     console.log(first)
//     console.log(second)
//    }
//    catch(error){
//     console.log(error)
//    }
// }
// start()





// // way to return a promise object
// getText(`./content/firstText.txt`)
//     .then((result)=>console.log(result))
//     .catch((err)=> console.log(err))




