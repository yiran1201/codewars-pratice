/**
 * 1. find the fail case and return false as soon as we can. (fast fail)
 * 2. return true if strAmount pass all checks.
 */
function isCurrency(strAmount) {
  // minus sign check
  // parenthesis check
  // currency sign check
  // decimal check
  // thousand check
  return true;
}

// console.log(isCurrency('$450') === true);
console.log(isCurrency('-€23') === true);
console.log(isCurrency('(¥2400)') === true);
// console.log(isCurrency('$4,500.00') === true);
// console.log(isCurrency('€0.25') === true);

// console.log(isCurrency('cat') === false);
// console.log(isCurrency('£25') === false);
// console.log(isCurrency('$45,0') === false);
console.log(isCurrency('(€350') === false);
console.log(isCurrency('(-$3.50)') === false); //
// console.log(isCurrency('¥120.00') === false);
console.log(isCurrency('$-50') === false);
// console.log(isCurrency(' €43.25') === false);
// console.log(isCurrency('$65.') === false);
// console.log(isCurrency('€82.1') === false);
// console.log(isCurrency('48.50') === false);
// console.log(isCurrency('¥1200,000') === false);

console.log(isCurrency('($)') === false);
console.log(isCurrency('$01') === false);
console.log(isCurrency('$01.25') === false);
