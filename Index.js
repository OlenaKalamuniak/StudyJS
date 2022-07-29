//alert(1)
// const firstName='Olena'
// const lastName='Kalamunyak'

// let currentYear=2022
// const birthYear=2002

// const a=10
// const b=5

// console.log(a+b)
// console.log(a-b)
// console.log(a/b)
// console.log(a*b)
// console.log(currentYear++)
// console.log(currentYear)

// for(let i=0;i<20; i++) {
//     for( let j=0; j<10; j++){
//         document.write ("*")
//     }
//     document.write("<br>" )
// }

// var animals=["Catc","Dogs"]
// // animals.push("Cats");
// // animals.push("Dog");
// animals.length;
// document.write (animals)
// // animals.unshift("bear")
// // document.write(animals.unshift)
// document.write ("<br>")
// document.write (animals.length)

// const array = ["h", "e"];
// array.length=4
// for (let i=0; i < array.lendth; i++){
//     document.write(array[i]+ "<br/>");
// }

// const a=['a', 'b', 'c',];
// a.reverse()
// document.write(  a.join(" , ") + "</br>" + a.length)

// const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// arr.reverse()

// const res = parseInt(prompt("вибери число",0))
// let str = arr.join(" * ")
// document.write(str + "<br>")
// arr.splice(res,2)

// document.write(arr)

// const arr =["cat","dog", "hamster"]
// arr.reverse()
//  let str= arr.join(" * ")
// const  res = parseInt(prompt("write out your number"))

// document.write (str + "<br>" + arr.length)
// var name = "Olena";
// document.write("Hello " + name + "<br>")
// if(name.length > 7){
//     document.write("WOW, your name is so long")
// } else{
// document.write("your name is short")
// }

// const cat ="marysia"
// if(cat.length>7){
//     document.write("it`s a beautiful name")
// } else if (cat.length<1){
// document.write("good job")
// }
// else{
//     document.write("nice")
// }
// let sheepCounted=0
// while(sheepCounted<11){
//     console.log("I have counted " + sheepCounted + " sheep!");
//      sheepCounted++ ;
// }
// console.log("yeeee")

// const arr = ['hi','I','am','developer','qweqqqqqqq','qwe2']
// arr.forEach((el) => console.log(el))

// let theLargestWorld = ''
// for(let i = 0; i < arr.length; i++){
//     if(theLargestWorld.length < arr[i].length){
//         theLargestWorld = arr[i]
//     }
// }

// function loop () {
//     for (let i of arr){
//         console.log(i)
//     }
// }




// function calculate (a,b) {
//     return a + b
// }


// const olena = {
//     name: 'Olena',
//     male: 'Female',
//     year: 19,
//     house: {
//         street: 'street',
//         floors: 2,
//         hasGarage: true
//     },
//     speak () {return this.name}
// }




// console.log(olena.speak())


/////////// functions ///////////////////


/// 1 Function declaration ////////////////

// завди мають ключов слово function
//function add (some params) {
// some actions    
// } (example of declaration)

// console.log(add(1,2))

// // можем викликати в лбому місці коду
// function add (a, b) {

//     // масив аргументів
//     console.log(arguments)
//     // return - те що повернеться;
//     return a + b;
// }

// виклик функції 
// add(1,1)
///////////////////////////////////////////

//////// 2 function expression /////////

//тільки після оголошення


//фунуція просвоюється до змінної
// let add = function (a, b) {
//     // console.log(arguments)
//     return a + b;
// }
// console.log(add(1,1))

///////////////////////////////////////////


/// 3 arrow function ////

//тільки після оголошення
// console.log(minus(10,3))
// без function 
// немає arguments
// const minus = (a, b) => {
//     console.log(arguments)
//     return a - b
// }

// console.log(minus(10,3))
///////////////////////////////////////////////

// function add(a,b){
//     return a+b
// // console.log(a)
// }

// console.log(add(1,2))

// let plus = (a, b) => {
// return a + b
// }
// console.log(plus(1,1))

// function add(a) {
//     return function (b){
//         return a + b
//     }
// }

// let ten = add(10)
// console.log(ten(15))

// /////////////////?
// let name ="Olena", 
// sname= "Iv", 
// age=22, repeater;
// function ask(){
//     name = prompt("write your name");
//     sname = prompt("write your last name");
//     age = prompt(" write your age");
// }

// function say() {
//     document.write('Name: ' + name + '<br>')
//     document.write('SName: ' + sname + '<br>')
//     document.write('Age: ' + age + '<br>')
// }
// do{
//     ask()
//     say()
//     repeater=confirm("Repate again?")
//  } while(repeater);
// ///////////////


// function print( msg, count=3) {
//     for ( let i = 0; i < count; i++){
//         document.write(" <p>" + msg );
//     } 
//     document.write("<hr>")
// }
//  print("hello")
//  print("Olena is a cool girl", 10 )
//  print()
 

//  function add(a,b) {
//     return `The result ${a + b}!`
//  }

//  const num = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]



//  num.forEach((el,idx) => console.log(el,idx))

// function returnDayOfWeek(number){
//     const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
//     if( number < 1 || number > 5 ) return
//     return days[number-1]
// }


// console.log(returnDayOfWeek(2))
// console.log(returnDayOfWeek(4))
// console.log(returnDayOfWeek(1))
// console.log(returnDayOfWeek(5))
// console.log(returnDayOfWeek(5))
// console.log(returnDayOfWeek(57))

// const returnDayOfWeek = number => {
//     let days =['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
//         if( number < 1 || number > 5 ) return
//         return days[number-1]
// // }
// console.log(returnDayOfWeek(2))

// let str = 'var_text_hello'; //[VAR,TEXT,HELLO]
// function convertToArray(str){
//     return str.split('_').map(item => item.length)
// }

// console.log(convertToArray(str))
// let arr =[1,15,2]
// // arr.sort( function (a,b) {return a-b; } );
// arr.sort((a,b) => a-b );

// alert(arr)

// let arr= ['Ukraine', 'England', 'USA'];
// arr.sort( (a,b) => a.localeCompare(b));
// alert(arr)

// let str = 'test';
// alert( str.split('') );
// let arr = ['h', 'e', 'l','l', 'o',];
// let str = arr.join('')
// alert(str)
// let questoinsNumber;

// do{
//     questoinsNumber = +prompt('введіть число, більше ніж 100', 0);

// } while(questoinsNumber <=100 && questoinsNumber)

// let a = 2 + 2
// switch (a){
//     case 3:
//         alert('замало');
//         break;
//     case 4:
//     case 2 + 2:
//         alert('точно');
//         alert('молодець!')
//         break;
//     default:
//         alert('я незнаю');
// }
// a=4
// if(a == 3){
//     alert(3)

// } else {
//     alert(" нема")
// }
// let a = +prompt( 'a?', '')
// switch(a){
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert('2,3')
//     default:
//         alert('нема')     
// }
// let name = 'Olena';
// function showMessage(){
//     let message = 'Hello ' + name;
//     alert(message)
// }
// showMessage();

// function checkAge(age){
//     return (age > 18 ) ? true : confirm ( 'батьки дозволили ')
// }

// function checkAge(age){
//     if( age > 18){
//         return true
//     } else
//     return confirm (:'чи батьки дозволили ')
// }
// function min ( a, b) {
// return a < b ? a : b; }
// alert (min)

// let user = {}
// user.name = "Ivan",
// user.surname = "Smit",
// user.name1 = "Petro"
// delete user.name
// console.log(user)


// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "Вставай";

// alert( isEmpty(schedule) ); // false

// function isEmpty(obj){
//  for (let key in obj){
//     return false;
//  }
//  return true
// }

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

//   let sum = 0
//     for (let key in salaries){
//    sum+= salaries[key]
//   }
//   alert(sum)

// let salary = {
//     vova : 100,
//     petro : 150,
// }

//   document.write(salary.vova + " " + salary["petro"])
//   document.write("<br>")
//   document.write(salary["petro"])
// let sum = 0

// for(let key in salary){
//     sum+= salary[key]
// }
// alert(sum)
// let information = {
//     name : 'John',
//     sayHi : function(){
//         alert('привіт')
//     }
// }
// // information.sayHi()
// let nameI = function(){
//     alert('John hi')
// }
// nameI()

// let user = {
//     name: 'John',
//     age:30

// }
// user.sayHi = () => {
//     alert('Hi!')
// }
// user.sayHi()

// let user = {
// name : 'Іван',
// age : 30,

// sayHi() {
//     alert(this.name)
// }

// }
// user.sayHi()

// let user1 = { name:'іван'};
// let user2 = { name:'петро'};

// function sayHi() {
//     alert(this.name);
// }
// user1.f = sayHi;
// user2.f = sayHi;

// user1.f()
// user2.f()

// calculator
// let calculator = {
//  read(){
//  this.a = +prompt('a?', 0);
//  this.b = +prompt('b?', 0)
//  },
//  sum() {
//     return rhis.a + this.b;
//  },
//  mul(){
//     return this.a * this.b
//  }
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );

// let x = 10
// let n = 11
// x += n
// x= x+n
// function sumAll(...all){
//     let result = 0
//     for (let num of all){
//         result +=num
//     }
//     return result

// } const res = sumAll(1,3,5,3,9)
// console.log(res())

// let name1 = '1';
// console.log(+name1)
// let inf = prompt()
// console.log(typeof inf)
// if(typeof inf ===  'number'){
//     alert('number')
// } else {
//     alert (typeof '' )
// }

// let cars = [ 'porshe', 'honda', 'audi']
// for(let car1 = 0; car1 < cars.length; car1++){
//     console.log(cars[car1])
// }
// let arr = [['a','b','c',],['q','w','e',]]
// for(let el of arr){
//     for( let j of el){
//         console.log(j)
//     }
   
// }
// let sum = []
// let results
// do {
//    results = parseInt(prompt())
//    console.log(results)
//    if(!isNaN(results)) {
//    sum.push(results)
   
// } else{
//     const initialValue = 0;
// const sumWithInitial = sum.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );
//     alert('this is sum ' + sumWithInitial)
// }
// } while (!isNaN(results))

// let arr = [1,2,3,4,5];
// let result = arr.reduce((prev,curr) =>{
//  return prev + curr
// },0)

// console.log(result)

// let arr = ['a', 'b', 'c']
// let result = arr.reduce((prev, curr) => {
//     return prev + curr

// }, '')
// console.log(result)

// let num = [ 1, 2, 3, 4, 5]

// function reverseNumber(num){
//     let str = String(num).split('')
//     return str
// }
// console.log('12345')

// let arr = [1,4,66,4,3]
// let result = arr.reduce((prev,curr) =>{
//     return prev + curr
// }
// )
// console.log(result)


// function sumTo(n){
//     let sum = 0
//     for(let i = 1; i<=n; i++){
//         sum+= i;
//     }
//     return sum
// }
// alert (sumTo(200))
// function sumTo(n){
//     return n * (n + 1)/2

// } alert(sumTo(100))

// showMessage()
// function showMessage(){
//     alert('hi')
// }
// let showMessage = function(){

// }
// let showMessage = () => {


// }


// function sortNumbers(arr){

//     return arr.sort (function(a, b) {
//         return a - b;
//     });
// } console.log(sortNumbers([1,2,3,7,53,9,5,3]))

// function showString(str) {
//     return str.split('').reverse().splice(0,1)
// } console.log(showString('hello'))
// let user = {
// name :
// age :
// } user.name

// let user1 = new Object(  {

// })

// Object.assign
// Object.keys()
// let user = {
//     name: 'Roma',
//     f () {
//         return this.name
//     }
// } 
// console.log(user.f())

// function bild (name,age){
//     return {
//         name,
//         age,
//     }
// }
// console.log(bild("roma",'2'))


// let task1
// let returnEvenNumber = () => {
//     let arr = [1,2,3,4,5,6]
//     let theEven = arr.filter(number => number % 2 ==0)
//     console.log ('Even nubers ' + theEven)
// }

// returnEvenNumber()

// let task2

// let strorage = []
//  function UserInfo(name,age) { 
//     this.name = name;
//     this.age = age;
     
// }



//  let inf = Object.assign(user,strorage)

//  console.log( new UserInfo('Olena',20))
//  console.log(new UserInfo =('Roman',21))
//  console.log( new UserInfo =('Sofia',20))


// 2
// const arr = [];

// function users(name,age){
//         let userInfo = {
//             name,
//             age,
//         }
//     arr.push(userInfo)
//     }
//   users('roman', 21)
//   users('olena', 20)
//   console.log(arr)





// let task3

// function changeToUpperCase(founder) {
//     return founder.toUpperCase();
//   }
  

//  const result = changeToUpperCase("hi olena");
  

//  console.log(result);

// 3

// function changeToUpperCase(){
//     let arr = ['hi', 'olena'].toString('')
//     return arr.toUpperCase()

// }
// console.log(changeToUpperCase())
//  function showLetters(word){
//     word.forEach(element => {
//         const letter = element.split('')
//         console.log(letter)
//  });  
// };

//  showLetters(['Sofia'])

// function showLastLetter(letter){
//    return letter[(letter.length-2)]
// }
// console.log(showLastLetter('sofia'))

// function showLastLetter(letter){
//    return letter.slice()
// }
// console.log(showLastLetter('sofa'))

// const person = {
//     name1: 'Sofia',
//     age: 20,
// }
// console.log(person.name1)

// function users(user){
//     name,age
// }
// console.log("sofia", 20)
// console.log('Roma', 21)

// function returnNotEvenNumber(num){

//   return num.filter((number) => number % 2 !== 0)

//  }

// console.log (returnNotEvenNumber([1,2,3,4,5,6]))

// const word = 'arra'

// console.log(word == word.split('').reverse().join('') )


// function changeToUpperCase(){
//     let arr = ['hi', 'olena'].toString('')
//     return arr.toUpperCase()

// }
// console.log(changeToUpperCase())

// const result1 = array.map((el) => el.toUpperCase())
// return result

// console.log(changeToUpperCase(['gfhvkjvn', 'dfbnm']))
// console.log(changeToUpperCase(['love', 'france']))

// const arr1 = ['hi', 'olena']
// const result = arr1.map((el) => el.toUpperCase())

// console.log(result)