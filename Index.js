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

// function Accumulator(startingValue){
//     this.value = startingValue
    
//     this.read = function(){
//         this.value+= +prompt('how',0)
//     };

//     // this.sum = function(){
//     //     return this.read + this.value
//     // }
// }
// let accumulator = new Accumulator(1)
// accumulator.read();
// accumulator.read();
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);

// const human = new Object()
// human.name ="Olena";
// human.surname = "K"
// console.log(`Name: ${human.name}`)

// human.occup = new Object()
// human.occup.possition = "wb"
// console.log("possition : " + human.occup.possition);

// human.show = function() {
//     document.write("<p> Name: " + human.name);

// }
// human.show()

// const obj = {
//     kol : 20,
//     ol:100,
//     rom:13,
// }

// console.log(obj.kol)

// const obj ={
//     name:'Olena',
// }
// const newKey = 'passportId'
// const newValue = 33333
// obj[newKey] = newValue;
// console.log(obj)
 
// const obj = {
//     age: 33
// }
// const obj2 ={
//     age: 40
// }
// const resultAge = {}

// for( let key in obj){
// if(obj2[key]){
//     resultAge[key] = obj[key] + obj2[key]
// }
// }
// console.log(resultAge)

// const firstS ={
//     name:'V',
//     age : 10
// }
// const secondS = {
//     name: 'Ol',
//     age: 11
// }
// const thirdS ={
//     name:'s',
//     age:9
// }
// const allS =[firstS,secondS]
// console.log(allS)

// allS.push(thirdS)
// console.log(allS)

// allS.pop()
// console.log(allS)

// const maleS = [ firstS]
// const femaleS = [secondS,thirdS]

// const allStud =[...maleS, ...femaleS]
// console.log(allStud)
// const allStudents = [
//     {name: 'petya', grade: 4},
//     {name: 'vasya', grade: 5},
//     {name: 'misha', grade: 6},
// ]

// const names = allStudents.map(st => st.name)
// const grades = allStudents.map(st => st.grade)

// const res = {
//     students: names,
//     studentGrades: grades
// }

// console.log(res)

// const arr =[1,2]
// const b = arr.concat(3,4)
// console.log(b)
// console.log(arr)
// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// arr.reverse().join(' * ')

// const quest = +prompt('index?')
// arr.splice(quest,1)
// console.log(arr)


// function showMe(){ 
// const str = 'var_text_hello'

// return str.split('_').join(' ').toUpperCase()
// }
// console.log(showMe())

// function getN(num){
//     const dayOfWeek = ['Monday','Thursday','Wednesday']
//     if(num<1 || num> 5)return
//     return dayOfWeek[num-1]
// }
// console.log(getN(2))

// const num = []
// for(let i = 0; i < 11; i++ ){
//     num.push(i)
//     console.log("element:",i)
// };
// // num.push(i)
// console.log("Array:",num)

// const arr = new Array(10)
// arr[0]=1
// arr[1]=2
// arr[2]=3
// arr[3]=4
// arr[4]=5
// arr[5]=6
// arr[6]=7
// arr[7]=8
// arr[8]=9
// arr[9]=10

// console.log(arr)

// function whatTheArr(arr){ 
// if(arr % 2 == 0){
//     return `The arr is even ${arr} `
// } else {
//     return ` <div> Not even arr ${arr}`
// }
// }
// console.log(whatTheArr(arr[4]))

// let num = +prompt('write num')
// let a;
// let ggg;
// function show () {
//     if(num < 1){
//         return  a = "!"
//     } else{
//         return ggg = "!!"
//     }

// }
// console.log(show(num))
// console.log(ggg)

// function sum(a,b){
//     return a+b
// }
// function mul(a,b){
//     return a * b
// }
// const op1 = parseInt(prompt('write n'))
// sing = prompt('sing')
// op2 = parseInt(prompt('write n2'))
// let result;
//  switch(sing){
//     case '+':
//         result= sum(op1,op2);
//         break;
//     case '*':
//         result= mul(op1,op2);
//         break;
//     default:
//         console.log('it`s a mistake')
//  }
//  if( result != undefined)
//  document.write(result)

// let anonym1 = function(){
//     return 3
// }
// let anonym2 = function(){
//     return 4
// }
// function ggg(anonym1,anonym2){
//  return anonym1 + anonym2
// }
// console.log(ggg(3,4))

// const myName = (name) => {
//     return ` I am Olena`
// }
// const myAge = (age) =>{
//     return `I am 20`
// }
// function showText(callback){
//     // const a = text === 'Hello' ? 'Olena' : '20'
//     document.write(callback() + "<br>" )
// }
// showText(myName )
// showText(myAge )

// const arr = [ 1,2,3,5,-1,3,-4,80,50]
// const chan = arr.filter((v)=> v > 0)
// console.log(chan)

// function filterBy (arr,type ) {
//     return arr.filter((el) => typeof el !== type )
// }
// console.log(filterBy(['hello', 'world', 23, '23', null], 'string'))

// function Human (name,age){
//     this.name = name;
//     this.age = age;
// }
// const arr = [];
// arr.push(new Human ('Olena', 20))
// arr.push(new Human ('Roman', 30))
// arr.push(new Human ('Sofa', 2))

// const resut = arr.sort((a,b) => a.age - b.age)

// console.log(resut)

// const obj ={
//     name: 'dog'
// }
// obj.legs= 5;
// // console.log(obj)

// obj.sayN = function(){
// return `This animal is ${this.name} !`
// }
// console.log(obj.sayN())

// const cat = {
// name: 'M',
// sounds:'mmmmmmyr',
// age: 1
// }
// const dog = {
//     name:'Rex',
//     sounds:'haw',
//     age:2
// }

// const horse = {
//     name:'Grace',
//     sounds:'iho-ho',
//     age:3
// }
// const speak = function (){
    
//  console.log(`${horse.sounds} Hi! I am ${horse.name} !`);
// }
// speak()


// ???? +

// const speak = function (){
    
//     console.log(`${this.sounds} Hi! I am ${this.name} !`);
//    }

// const horse = {
//     name:'Grace',
//     sounds:'iho-ho',
//     age:3,
//     speak,
// }
// horse.speak()

// const newName = new String('Olena')

// function sayHi(str){
//     console.log(str + ' hi ' + typeof str )
// } 
//   sayHi(newName) 

// function Rec (w,h){
//     this.width=w;
//     this.height = h;
// }
// Rec.prototype.getA= function(){
//     return this.width * this.height
// }
// const rect = new Rec(100,50)
// console.log(rect.getA())

class Human {
    constructor(name,age){
    this.name = name;
    this.age= age;
}
sayHi(){
    return this.name + this.age
}
}
const olena = new Human ('Olena', 21)

class Develp extends Human{
    constructor (name, age, lang){
        super(name,age);
        this.lang= lang
    
    }
}
const rom = new Develp('roman', 21,'js')
console.log(rom)
console.log(rom.sayHi())

Human.prototype.goForWalk = function(){
    return `Hi! Go for a walk ${this.name}`
}
console.log(olena.goForWalk())
console.log(olena.sayHi())