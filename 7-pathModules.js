//path modules and its methods

const path= require(`path`)

// console.log(path.sep)

// .join method

const filePath= path.join(`./content` , `subfolder` , `test.txt`)
// console.log(filePath)

// if i just want the baseName(here test.txt, we use basename method)

const baseName= path.basename(filePath)
console.log(baseName)

// if i want the absoulute path (we use path.resolve)

const absoulute= path.resolve(__dirname , `content`, `sucontent` , `text.txt`)
console.log(absoulute) 