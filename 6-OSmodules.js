const osModule= require(`os`)
// info about the current user
const user= osModule.userInfo()
// console.log(user)

// info about system uptime in seconds 

console.log(`System uptime is: ${osModule.uptime} seconds`)

// other modules,
// shown in objects format
// ex: (name of modules type): (that OS module)

const currentOs={
    name: osModule.type(),
    release: osModule.release(),
    totalMemory: osModule.totalmem(),
    freeMemory: osModule.freemem()

}
console.log(currentOs)