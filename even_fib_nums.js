/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */

function _sumFibs( maxFibValue ) {
  let sum = 0;

  let fibA = 0;
  let fibB = 1;
  let fibSum = 1;

  while (fibSum <= maxFibValue) {
    if (fibSum % 2 === 0) {
      sum += fibSum;
    }
    fibA = fibB;
    fibB = fibSum;
    fibSum = fibA + fibB;
  }
  return sum;
};

let sum = _sumFibs();

console.log('result: ');
console.log(_sumFibs(13));
console.log(sum);

// bonus round
function _highestFibonacciNumber (maxFibValue){
  let highest = 0;

  //define your base case, validate your input


  //do your work here

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};
