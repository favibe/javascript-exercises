const removeFromArray = function(arrry, ...removed) {
    return arrry.filter(element => !removed.includes(element))
};

// Do not edit below this line
module.exports = removeFromArray;
