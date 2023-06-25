 const allUsers = ['hari', 'shyam', 'thakur']

 allUsers.map((item,idx)=>{
    if (item === 'hari'){
         console.log('true')
     }
})


const user= 'hari'
const userArr = ['hari','shyam','hari','thakur']

let count= 0
userArr.map((item)=>{
    if (item === 'hari'){
      count = count + 1
    }
})
console.log(count)