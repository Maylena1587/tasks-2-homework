const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
for (let i = 0; i < arr.length; i += 1) {
    console.log(‘for’, i + 1, arr[i]);
};
for (let item of arr) {
    console.log(‘for of’, item);
}
for (let i in arr) {
    console.log(‘for in’, i);
}
arr.forEach(function (item, i) {
    console.log(‘forEach’, item, i)
})
console.log(‘/////////////’)