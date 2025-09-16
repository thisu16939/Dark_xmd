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
          const{from,pushname,reply,quoted} = context,
          try{
              set desc = "
Hey ${pushname} I am ailve
uptime :${runtime(process.uptime())}
`
await com.sendMessage{from,
    {
        Image:{url:"https://share.google/images/8xDZGoIDzq8Ld1xMo"}
        caption:desc
    },{
        quoted:mek
    }
}
          }catch(e){
              console.logo(e)
          }
       }
    }
]
