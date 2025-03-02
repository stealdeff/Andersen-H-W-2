
function myFilter(array, callback, contextObject) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] !== undefined) {
            if (callback.call(contextObject, array[index], index, array)) {
                result.push(array[index]);
            }
        }
    }

    return result;
}

const arr=[1,4,5,2,3,5,1,2]
let res=myFilter(arr,e=>e<5);
console.log(res)

