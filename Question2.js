var testCase = [
  {
    name: 'Arsenal',
    points: 99,
    GD: 45,
  },
  {
    name: 'Chelsea',
    points: 75,
    GD: 39,
  },
  {
    name: 'Manchester United',
    points: 60,
    GD: 29,
  },
  {
    name: 'Liverpool',
    points: 88,
    GD: 29,
  },
  {
    name: 'VietNam',
    points: 60,
    GD: 30,
  },
  {
    name: 'Lao',
    points: 60,
    GD: 28,
  },
  {
    name: 'Hawaii',
    points: 75,
    GD: 30,
  },
  {
    name: 'Bawaii',
    points: 75,
    GD: 30,
  },
]
var sortTestCase = [...testCase]
sortTestCase.sort((a, b) => {
  if (a.points < b.points) {
    return 1
  } else if (a.points > b.points) {
    return -1
  } else if (a.points === b.points) {
    if (a.GD < b.GD) {
      return 1
    } else if (a.GD > b.GD) {
      return -1
    } else if (a.GD === b.GD) {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1
      } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1
      } else if (a.name.toLowerCase() === b.name.toLowerCase()) {
        return 0
      }
    }
  }
})
var result = sortTestCase.map((test, index) => {
  return { ...test, position: index + 1 }
})

console.log(result)
