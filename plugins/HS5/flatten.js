module.exports = {
    Command: function(input){
      return(`"${input[0].replace(/\n/g, "")}"`)
    },
    Dependencies: function(){
      return(false)
    }
  }