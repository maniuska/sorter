class Sorter {
  constructor() {
   this.arr = [];
   this.compareFunction = (a, b) => a - b;
 }

 add(element) {
   this.arr.push(element);
 }

 at(index) {
   return this.arr [index];
 }
 
 get length() {
   return this.arr.length;
 }

 toArray() {
   return this.arr;
 }

  sort(indices) {
    var newArr=[];
    indices.sort();
    for(var i=0;i<indices.length;i++){
      newArr.push(this.arr[indices[i]]);
    }

    newArr.sort(this.compareFunction);

    for(var i=0;i<indices.length;i++){
      this.arr[indices[i]]=newArr[i];
    }
    return this.arr;
 }  
   
 setComparator(compareFunction) {
   this.compareFunction=compareFunction;
 }
}

module.exports = Sorter;