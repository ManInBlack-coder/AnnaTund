const numbers = [33,22,11,55,3]
const numbers2 = new Array()

for(let i = 1; i < 6; i++ ){
    let randomValue = Math.ceil(Math.random() * 100)
    console.log(randomValue)
}  

numbers2.forEach((number)=>{

    console.log(number)
} )

numbers.sort((x,y)=>{
    return y - x
} )

console.log(numbers2)

