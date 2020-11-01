function isCurrency(strAmount) {
  // minus sign check
  if (strAmount.startsWith('-')) {
    strAmount = strAmount.slice(1);
  }
  if (strAmount.includes('-')) return false;

  // parenthesis check
  if (strAmount.startsWith('(')) {
    if (strAmount[strAmount.length - 1] !== ')') return false;
    strAmount = strAmount.slice(1, strAmount.length - 1);
  }

  // currency sign check
  const sign = strAmount[0];
  strAmount = strAmount.slice(1);
  if (!['$', '¥', '€'].includes(sign)) return false;
  if (strAmount === '') return false;

  // decimal separation & check
  const [integer, decimal, remain] = strAmount.split('.');
  // 如果有小数而且小数长度不等于2，就fail
  if (decimal !== undefined && decimal.length !== 2) return false;
  if (decimal !== undefined && sign === '¥') return false;

  if (remain !== undefined) return false;

  // integer thousand sign check
  if (integer.length > 1 && integer.startsWith(0)) return false;
  if (integer.includes(',')) {
    const parts = integer.split(',');
    if (parts[0].length > 3) return false;
    // 从整数部分切分之后的第二个数开始。必须每一个数长度都为3
    for (let i = 1; i < parts.length; i++) {
      if (parts[i].length !== 3) return false;
    }
  }
  return true;
}

// console.log(isCurrency('$450') === true);
// console.log(isCurrency('-€23') === true);
// console.log(isCurrency('(¥2400)') === true);
// console.log(isCurrency('$4,500.00') === true);
// console.log(isCurrency('€0.25') === true);

// console.log(isCurrency('cat') === false);
// console.log(isCurrency('£25') === false);
// console.log(isCurrency('$45,0') === false);
// console.log(isCurrency('(€350') === false);
// console.log(isCurrency('(-$3.50)') === false);
// console.log(isCurrency('¥120.00') === false);
// console.log(isCurrency('$-50') === false);
// console.log(isCurrency(' €43.25') === false);
// console.log(isCurrency('$65.') === false);
// console.log(isCurrency('€82.1') === false);
// console.log(isCurrency('48.50') === false);
// console.log(isCurrency('¥1200,000') === false);
console.log(isCurrency('($)') === false);
console.log(isCurrency('$01') === false);
console.log(isCurrency('$01.25') === false);
