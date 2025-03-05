const obj={
    array:[],
    callback:null,
    contextObject:null,
     myFilter() {
    let result = [];
    for (let index = 0; index < this.array.length; index++) {
        if (this.array[index] !== undefined) {
            if (this.callback.call(this.contextObject, this.array[index], index, this.array)) {
                result.push(this.array[index]);
            }
        }
    }

    return result;
}
};
const arr=[1,4,5,2,3,5,1,2]
obj.array=arr
obj.callback=(e)=>e<5
obj.contextObject=null
let res=obj.myFilter()
console.log(res)
