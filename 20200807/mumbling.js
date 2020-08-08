// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
  const arr = s.toLowerCase().split('')
  return arr.map((a, index) => a.toUpperCase() + a.repeat(index)).join('-')

}
