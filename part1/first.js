/ 1
// for (let i = 0; i < 10; i++) {
//   setTimeout(function () {
//     // console.log(i);
//   })
// };
// It will show number 10 because var hasn't got scope and while in async is working it becomes 10
// ---------------------------------------

// 2
function secondTask() {
    const today = new Date()
    const days = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
    }
    // console.log(`Today is ${days[today.getDay()]}`)
    // console.log(`Current time is: ${today.getHours()}:${today.getMinutes()}:${today.getMilliseconds()}`)
}
secondTask()
// ---------------------------------------

// 3
function thirdTask(arg) {
    return arg.toString().split('').reverse().join('')
}
// console.log(thirdTask(32243))
// ---------------------------------------


// 4
const fourthTask = (n) => {
    return n != 1 ? n * fourthTask(n - 1) : 1;
}
// console.log(fourthTask(5))
// ---------------------------------------
// 5


const fifthTask = () => {
    let num1, num2;
    num1 = window.prompt("Input the First integer", "0");
    num2 = window.prompt("Input the second integer", "0");
    if (num1 > num2) {
        alert(num1)
    } else if (num1 === num2) {
        alert('equals')
    } else {
        alert(num2)
    }
}

// 6
function sixthTask(arg) {
    let res1 = arg.join(',')
    let res2 = arg.join('+')
    return res1, res2
}

// console.log(sixthTask(["Red", "Green", "White", "Black"]))
// ---------------------------------------

// 7
function seventhTask(arg) {
    const check = arg.toString().split(' ').splice(1, 1)
    return check[0]
}
// console.log(seventhTask(new Date("10/11/2009")))
// ---------------------------------------

// 8
function eighthTask(arg) {
    let upper = arg[0].toUpperCase()
    return arg[0] == upper
}
// console.log(eighthTask('Hello'))

// -------------------------------
// 9
