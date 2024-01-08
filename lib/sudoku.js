const shuffle = (n) => {
  let array = Array.from({length: n}, () => Math.random())
  return array.map(z => [...array].sort().indexOf(z))
}
const [a, b, c, d, e, f, g, h, i] = shuffle(9).map(x=>x+1)
let sudoku = [
  [a,b,c,d,e,f,g,h,i],
  [d,h,e,g,a,i,f,c,b],
  [i,f,g,c,h,b,a,d,e],
  [f,d,b,h,i,g,c,e,a],
  [g,c,a,e,b,d,h,i,f],
  [e,i,h,a,f,c,d,b,g],
  [b,e,d,f,g,h,i,a,c],
  [h,a,f,i,c,e,b,g,d],
  [c,g,i,b,d,a,e,f,h]]
const permute = () => {
  return (shuffle(3).map(z=>3*z).map(y=>shuffle(3).map(x=>x+y))).flat()
}
const px = permute(), py = permute()
console.log(sudoku)
console.log(px)
console.log(py)
const yyy = py.map(y=>sudoku[y])
console.log(yyy)
sudoku = sudoku.map((row,y)=>row.map((col,x)=>sudoku[py[y]][px[x]]))
console.log(sudoku)
