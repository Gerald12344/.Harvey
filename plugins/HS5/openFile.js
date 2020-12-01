module.exports = {
  Command: function(input){
    return(`fs.readFileSync(${input[0]},'utf8',(${input[1]},${input[2]})=>{${input[3]}});`)
  },
  Dependencies: function(){
    return('let fs = require("fs")')
  }
}