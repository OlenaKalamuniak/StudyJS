let task1
let returnEvenNumber = () => {
    let arr = [1,2,3,4,5,6]
    let theEven = arr.filter(number => number % 2 ==0)
    console.log ('Even nubers ' + theEven)
}

returnEvenNumber()


task2

const arr = [];

function users(name,age){
        let userInfo = {
            name,
            age,
        }
    arr.push(userInfo)
    }
  users('roman', 21)
  users('olena', 20)
  console.log(arr)

task3

function changeToUpperCase(array){ 
    const result = array.map((el) => el.toUpperCase())
return result
}
console.log(changeToUpperCase(['hi', 'olena']))



