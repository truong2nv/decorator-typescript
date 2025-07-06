
function split(str) {
    return str.split('')
}

function reverse(arr){
    return arr.reverse()
}

function join(arr, s){
    return !s ? arr.join('') : arr.join(s)
}


const compose = (...functions) => (str, s) => functions.reduce((acc, fn, index) => index === 0? fn(acc) : (index === functions.length - 1) ? fn(acc, s) : fn(acc), str)

const compFunc = compose(split, reverse, join)

console.log(compFunc('hello','_'))