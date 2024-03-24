//Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.
import{ guest_list } from '../day5/app'
console.log(`n\ PRINTING NUMBER OF GUEST INVITED`)
console.log(`we had finally invited ${guest_list.length}from day5`) 
//Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these item
let language : string [] = ['english','urdu','hindi','french','arabic']
console.log("list of countries:")
for(let top of language){
    console.log(top)
}
//Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
interface item {
    name:string
    price:number
}
//create two objects
const book: item ={
    name:'ESSIENTIAL TYPESCRIPT'
    price: 450
}
const apple: item ={
    name:'apple'
    price:200
}
console.log(`book name: ${book.name}, price : $${book.price}`)
console.log(`apple name: ${apple.name}, price : $${apple.price}`)
