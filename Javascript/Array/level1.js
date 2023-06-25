// const allUsers = ['hari', 'shyam', 'thakur']

// allUsers.map((item,idx)=>{
//     if (item === 'hari'){
//         console.log('true')
//     }
// })


// const user= 'hari'
// const userArr = ['hari','shyam','hari','thakur']

// let count= 0
// userArr.map((item)=>{
//     if (item === 'hari'){
//       count = count + 1
//     }
// })
// console.log(count)



//question 1
const arr = [2,5,6,7]

let added = 0
for(let item of arr){
     added = added + item }
console.log(added)



//question 2
const users = ['hari', 'shyam','hari']
let tempArr=[]
users.map((item,idx)=>{
      if(!tempArr.includes(item)){
        
        tempArr.push(item)
      }
  
})

console.log(tempArr)





//question 3

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


