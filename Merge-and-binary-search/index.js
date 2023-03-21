// binary search works by spliting a sorted array into 2
// compare the middle of the division to the search value
// if its less than the middle, divide the left part of the division by 2 till you find the search value
// if its more  than the middle, divide the right part of the division by 2 till you find the search valu



function merge(left, right) {

    let sortednum = [] 
    while (left.length && right.length) {
      
      if (left[0] < right[0]) {
        sortednum.push(left.shift())
      } else {
        sortednum.push(right.shift())
      }
    }
    
    return [...sortednum, ...left, ...right]
  }

  function mergeSort(num) {
    let middle = Math.floor(num.length / 2)

    if (num.length < 2){
         return num
    }
    
    let left = mergeSort(num.slice(0, middle))
    let right = mergeSort(num.slice(middle))
    return merge(left, right)
  }
  let num = [45,12,6,89,2,5]
  //console.log(mergeSort(num))


  function binary(arr,target){
    let left=0;
    let right=arr.length -1;


while(left <= right){

let middle=Math.floor((left +right)/2);

    if(arr[middle]===target){
        return middle;
    }
    else if(arr[middle]>target){
        right= middle -1
    }
    else{
        left=middle +1
    }

}
return null

}
let target= 6;
console.log(num.indexOf(6));


//Given an unsorted array of numbers return the sorted array in descending order
let arr=[123,89,5,23,9,56]
console.log(arr.sort((a,b)=> -a +b));


//Given the following array, search for the following target
function bin(arr2,targetx){
let targetx = 34
let arr2 = [1,4,78,2,67,3];
let leftIndex = 0;
let rightIndex = arr2.length-1;
while(leftIndex <= rightIndex){
    let targetx = Math.floor((leftIndex +rightIndex)/2);
    if(arr[targetx] ===targetx){
        return targetx;
    }else if (arr[targetx] > targetx){
        rightIndex = targetx-1;
    }else{
        leftIndex = targetx +1;
    }
}

}
console.log(bin(arr2,targetx))
