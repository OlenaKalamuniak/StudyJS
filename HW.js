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

function changeToUpperCase(){
    let arr = ['hi', 'olena'].toString('')
    return arr.toUpperCase()

}
console.log(changeToUpperCase())

