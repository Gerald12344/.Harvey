const { v4: uuidv4 } = require('uuid');
module.exports = {
    Command: function(input){
        let uuid = uuidv4(); 
        let Parent = input[0]
        let className = input[1]
        input.splice(0,2)
        let Children = input.join(";")
        let secondPart = ""
        if(Children !== ""){
          secondPart = `((parent) => {${Children}})("${uuid}")`
        }
        return(`(() => {let ElementWeWant = ReactfulElement('h2',${Parent},parent, "${uuid}", ${className}); components.push(ElementWeWant); ${secondPart}})();`)
    },
    Dependencies: function(){
      return(false)
    }
  }