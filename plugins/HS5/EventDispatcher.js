module.exports = {
    Command: function(input){
      return(`ReactFulVariableMaker(${input[0]})`)
    },
    Dependencies: function(){
      return(`let ReactFulVariableMaker = (interal) => { return { aInternal: interal, aListener: function(val) {}, set update(val) { this.aInternal = val; this.aListener(val); }, get update() { return this.aInternal; }, registerListener: function(listener) { this.aListener = listener; } }}`)
    }
  }