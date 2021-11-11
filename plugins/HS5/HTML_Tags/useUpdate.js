
module.exports = {
    Command: function (input) {
        return `OpenFuns.push(useUpdate(${input[0]},${input[1]}))`;
    },
    Dependencies: function () {
        return false;
    },
};
