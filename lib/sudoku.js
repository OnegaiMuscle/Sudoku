let array = Array.from({length: 9}, () => Math.random())
let [a, b, c, d, e, f, g, h, i] = array.map(
  (z) => array.slice().sort().indexOf(z) + 1)
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
sudoku.forEach((x) => console.log(x))
