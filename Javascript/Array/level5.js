//Q3
// calculate sum of array using either for in or for of
//Output= 20

const arr = [2,5,6,7]

let added = 0
for(let item of arr){
     added = added + item }
console.log(added)



//Q4
//high level
//remove from array if duplicate

const users = ['hari', 'shyam','hari']
let tempArr=[]
users.map((item,idx)=>{
      if(!tempArr.includes(item)){
        
        tempArr.push(item)
      }
  
})

console.log(tempArr)





//Q5
//calculate the sum of all the odd numbers inside this nested array
//Output= 24

const newArr = [[4,5], [5,7], [7,2]]

let sum= 0
newArr.map((item)=>{
  
  item.map((item)=>{
    
     if(item % 2 !== 0) {
       sum = sum + item
     }
  })
})

console.log(sum)


