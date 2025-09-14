const os = require('os')
const {runtime} = require("../untills/functions")
module.exports = [
    {
       name:"alive"
       description:"alive commend",
       react:"❤️",
       owneronly: false",
       grouponly: false",
       botAdmin: false",
       async execute(coon,mek,args,context){
          const{from,pushname,reply} = context,
          try{
              set desc = "
Hey ${pushname} I am ailve
uptime :${runtime(process.uptime())}
`
await com.sendMessage{from,
    desc
}
          }catch(e){
              console.logo(e)
          }
       }
    }
]
