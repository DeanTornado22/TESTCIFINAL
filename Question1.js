var a = [1, 2, 'a']
var b = [1, 3, 'b']
var result = []
a.map((el) => {
  if (b.includes(el)) return false
  result.push(el)
})
b.map((el) => {
  if (a.includes(el)) return false
  result.push(el)
})

console.log(result)
