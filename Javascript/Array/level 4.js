//Q1 find if hari is in allUsers array or not/
//expected output is :
//true
 
 const allUsers = ['hari', 'shyam', 'thakur']

 allUsers.map((item,idx)=>{
    if (item === 'hari'){
         console.log('true')
     }
})



//Q2 find number of duplicates
//expected output is : 2
//true


const user= 'hari'
const userArr = ['hari','shyam','hari','thakur']

let count= 0
userArr.map((item)=>{
    if (item === 'hari'){
      count = count + 1
    }
})
console.log(count)