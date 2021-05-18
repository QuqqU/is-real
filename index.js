
/*
 * function
 * is_real
 * input  : A string consists of numbers.
 * output : If string represents number, true.
 *          Otherwise, false.
 */

function is_real(number) {
    console.log(number)
    const regExp = /^[0-9]*$/g
    if(regExp.test(number)) return true
    else return false
}


/*
 * Export 
 * module : function is_real()
 */

module.exports = is_real
