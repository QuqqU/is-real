
/*
 * function
 * is_real
 * input  : A string
 * output : If string represents real number, true.
 *          Otherwise, false.
 */

function is_real(number) {
    const regExp = /^[+-]?[0-9]+$/g
    if (regExp.test(number)) return true
    else return false
}


/*
 * Export 
 * module : function is_real()
 */

module.exports = is_real
