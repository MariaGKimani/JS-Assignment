//Write a function that accepts an array of strings and 
//console.logs each element using a for loop.

let arr1 =[2,4,6,14,26,37,48,59,60]

function x(arr1){
    for(let i =0;i<arr1.length;i++){
        console.log(arr1[i])
    }

}
x(arr1)

//Write a function that accepts an array of numbers and 
//uses the forEach() method to console.log each number multiplied by 2.
let arr2 =[2,4,6,8,10,20]
Arrs(arr2)
function Arrs (arr2){
    arr2.forEach(element => console.log(element*2));
}
//Write a function that takes in an array of numbers
// and consoles the first four items multiplied by 8 
//and the last two added by 5. Console the array with the new values

function numbers(){
    let newNumber =[]
  for(let i =0;i <num.length;i++){
    if(i<4){
        newNumber.push(num[i]*8)
    }else if(i >= num.length-2){
        newNumber.push(num[i] + 5)
    }else{
        newNumber.push(num[i])
    }      
    }
    console.log(newNumber)
  }   
        
let num =[3,5,7,9,11,13,15,17]
numbers(num)

//Write a function that takes in the following array
// and use a while loop to iterate and break
// when the item is equal to the fourth index
function num1(arrNum){
    let i =0;
    while(i< arrNum.length){
        if(i===4){
            break;
        }
        console.log(arrNum[i]);
        i++;
    }
    
} 
let arrNum = [1,2,3,4,5,6,7,8,9];
num1(arrNum)



//Write a function that takes in a an array of strings 
//and use a continue statement when the item is at the second index
function fruit(fruits){
    for(let x =0; x< fruits.length;x++){
    if (x ===2){
        continue;
    }
    console.log(fruits[x])
}

}
let fruits= ['apple','plum','banana','strawberries','kiwi']
fruit(fruits)
