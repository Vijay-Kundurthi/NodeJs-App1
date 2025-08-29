function getDate() {
    return new Date().toISOString();
}

const multiply = (param1, param2) => param1 * param2;


//exports.getDate = getDate;
//exports.multiply = multiply;

module.exports = {getDate, multiply};