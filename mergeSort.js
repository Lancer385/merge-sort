function mergeSort(array){
    if (array.length <= 1){
        return array;
    }
    let mid = Math.floor(array.length / 2);

    let first = mergeSort(array.slice(0, mid))
    let second = mergeSort (array.slice(mid));
    let merged = []
    while (first.length > 0 && second.length > 0){
        if (first[0] <= second[0]){
            merged.push(first.shift())
        }
        else {
            merged.push(second.shift())
        }
    }
    if (first.length != 0){
        merged.push(...first)
    }
    else{
        merged.push(...second)
    }
    return merged;
}
console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));