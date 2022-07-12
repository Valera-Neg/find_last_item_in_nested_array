function findLastEl(arr) {
 let res = [];
    for (let i=0; i < arr.length; i++) {
      res.push(arr[i][arr[i].length - 1])
    }
    return res;
  }

console.log(findLastEl([[1, 2, 4], [1, 5], [4, 4]])) //=> [4, 5, 4]
console.log(findLastEl([[1, 2, NaN], [1, false], [4, undefined]])) //=> [NaN, false, undefined]
console.log(findLastEl([[1, 2, "cool"], [1,"like"], [4, "undefined"]])) //=> ["cool", "like", "undefined"]
console.log(findLastEl([[1, 2, 4], [1,"string"], [4, true]])) //=> [4, "string", true]