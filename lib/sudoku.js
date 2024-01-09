const shuffle = (n) => {
  let array = Array.from({length: n}, () => Math.random())
  return array.map(z => array.toSorted().indexOf(z))
}
const [a, b, c, d, e, f, g, h, i] = shuffle(9).map(x=>x+1)
const permute = () => {
  return (shuffle(3).map(z=>3*z).map(y=>shuffle(3).map(x=>x+y))).flat()
}
const px = permute(), py = permute()
const sudoku = () => {
  let grid = [
    [a,b,c,d,e,f,g,h,i],
    [d,h,e,g,a,i,f,c,b],
    [i,f,g,c,h,b,a,d,e],
    [f,d,b,h,i,g,c,e,a],
    [g,c,a,e,b,d,h,i,f],
    [e,i,h,a,f,c,d,b,g],
    [b,e,d,f,g,h,i,a,c],
    [h,a,f,i,c,e,b,g,d],
    [c,g,i,b,d,a,e,f,h]]
  grid.forEach(row=>shuffle(9).slice(3).forEach(z=>row.splice(z,1,"")))
  grid = grid[0].map((col,z)=>grid.map(row=>row[z]))
  grid.forEach((row,y)=>row.forEach((col,x)=>{
    let z = grid[py[y]][px[x]]
    if (z != "") {
    const idcase = 'case' + y + '-' + x
    const input = document.getElementById(idcase)
    input.readOnly = true
    input.value = z
    }
  }))
}
sudoku()
