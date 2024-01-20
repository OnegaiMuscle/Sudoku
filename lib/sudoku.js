const range = (n) => [...Array(n).keys()]
const table = document.createElement("table")
range(9).forEach( y => {
  const tr = document.createElement("tr")
  range(9).forEach( x => {
    const td = document.createElement("td");
      const input = document.createElement("input")
      input.type="number"
      input.min= 1
      input.max= 9
      input.id='case' + y + '-' + x
      td.appendChild(input)
    tr.appendChild(td)
  })
  table.appendChild(tr)
})
document.body.appendChild(table)

const shuffle = (n) => {
  let array = Array.from({length: n}, () => Math.random())
  return array.map(z => array.toSorted().indexOf(z))
}
const permute = () => {
  return (shuffle(3).map(z=>3*z).map(y=>shuffle(3).map(x=>x+y))).flat()
}
let valeur

const sudokuCreate = () => {
  const [a, b, c, d, e, f, g, h, i] = shuffle(9).map(z=>z+1)
  const px = permute(), py = permute()
  let grid = [
    [a,b,c,d,e,f,g,h,i],
    [g,h,d,b,i,c,f,a,e],
    [i,f,e,g,a,h,b,d,c],
    [b,e,i,h,f,a,d,c,g],
    [f,a,h,c,g,d,e,i,b],
    [d,c,g,e,b,i,h,f,a],
    [e,d,a,i,h,b,c,g,f],
    [h,i,b,f,c,g,a,e,d],
    [c,g,f,a,d,e,i,b,h]]
  grid.forEach(row=>shuffle(9).slice(3).forEach(z=>row.splice(z,1,"")))
  grid = py.map((y,q)=>px.map((x,p)=>{
    const idcase = 'case' + q + '-' + p
    const input = document.getElementById(idcase)
    z = grid[x][y]
    input.readOnly = z != ""
    input.onclick = false
    return input.value = z
  }))


  let coco= document.querySelectorAll("input:not([readOnly]")
  console.log(coco)
  coco.forEach(tt=>{
    tt.onclick = ()=>{
      console.log(tt)
      tt.value = (tt.value == valeur) ? "" : valeur
  }})
}
sudokuCreate()
const newgrid = document.querySelector(".newgrid")
newgrid.addEventListener("click", () => {
  sudokuCreate()})

const spans =document.querySelectorAll("span")
spans.forEach(x=>x.addEventListener("click",()=>{
  valeur = parseInt(x.textContent)
  console.log(valeur)
  spans.forEach(span => {
    span.style.backgroundColor = "#2b2b88";
  });
  x.style.backgroundColor = "#FF0000";
  valeur = parseInt(x.textContent)

}))
