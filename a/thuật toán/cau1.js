let getDiffMem = function(arr1, arr2) {
    let filterArr1 = []
    for (let i of arr1) {
        if (filterArr1.indexOf(i) === -1) {
            filterArr1.push(i)
        }
    }
    let filterArr2 = []
    for (let i of arr2) {
        if (filterArr2.indexOf(i) === -1) {
            filterArr2.push(i)
        }
    }
    let combineArr = filterArr1.concat(filterArr2)
    console.log(combineArr)
    let dupMens = []
    for (let i of filterArr1) {
        for (let j of filterArr2) {
            if (i === j) {
                dupMens.push(j)
                break
            }
        }
    }
    for (let i of dupMens) {
        for (let j of combineArr) {
            if (i === j) {
                combineArr = combineArr.filter(item => item !== j)
            }
        }
    }
    return combineArr
}