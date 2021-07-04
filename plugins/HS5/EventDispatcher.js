module.exports = {
    Command: function (input) {
        return `ReactFulVariableMaker(${input[0]})`;
    },
    Dependencies: function () {
        return `let ReactFulVariableMaker = (interal, moreData, extraData) => { return { acompanyingData: moreData, eventMoreData: extraData, aInternal: interal, hooks: [], aListener: function(val) {}, set update(val) { this.aInternal = val; this.hooks.forEach(element => { element(val); }); this.aListener(val); }, get update() { return this.aInternal; }, registerListener: function(listener) { this.aListener = listener; }, addListener: function(listener){ this.hooks.push(listener) } } }`;
    },
};
