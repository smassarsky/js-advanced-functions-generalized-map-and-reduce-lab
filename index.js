function map(sourceArray, func) {
  let out = []
  for (let element of sourceArray) {
    out.push(func(element))
  }
  return out
}

function reduce(sourceArray, func, startingPoint) {
  let i
  if (!startingPoint) {
    startingPoint = sourceArray[0]
    i = 1
  } else {
    i = 0
  }
  for (; i < sourceArray.length; i++) {
    startingPoint = func(sourceArray[i], startingPoint)
  }
  return startingPoint
}