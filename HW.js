// let task1
// let returnEvenNumber = () => {
//     let arr = [1,2,3,4,5,6]
//     let theEven = arr.filter(number => number % 2 ==0)
//     console.log ('Even nubers ' + theEven)
// }

// returnEvenNumber()


// task2

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

// task3

// function changeToUpperCase(array){ 
//     const result = array.map((el) => el.toUpperCase())
// return result
// }
// console.log(changeToUpperCase(['hi', 'olena']))



// let user={}
// user.name ='Ivan';
// user.surname ='Smith';
// user.name = "petro"

// alert(user.name)

// let schedule = {};
// function isEmpty(obj){
//     for(let key in obj){
//         return false
//     }
//     return true;
// }

// // alert( isEmpty(schedule) ); // true

// schedule.act= "Вставай";

// alert( schedule.act ); // false

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
// let sum = 0
//  for (let key in salaries){
//   sum += salaries[key]
//  }

// alert(sum

// let haveFriends = {
//     olena:3,
//     roman: 4,
//     sofiia: 45,
// }
// let sum = 0;
// for ( let key in haveFriends){
//     sum+= haveFriends[key]
// }
// alert(sum)

// ???????
// let menu = {
//     width: 200,
//     height: 300,
//     title: "Моє меню"
//   };
//   function multiplyNumeric(menu){ 
//   for(let key in menu){
//     if(typeof menu[key]=='number'){
//         menu[key] *= 2
//     }
//   }
//  }
//   console.log(multiplyNumeric(menu));

//  let usr = {
//     name: 'Petro'
//  }
//  let changeUser = usr
//  alert(changeUser.name)

// let usr = { name: 'petro'}
// Object.assign(usr,{name: 'Ivan'})
// alert(usr.name)

// let usr = {
//     name: 'petro',
//     age : 22
// }
// let clone={}
// for(let key in usr ){
//     clone[key]=usr[key]
// }
// clone.name = 'vas'
// alert(usr.name)