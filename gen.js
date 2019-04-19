// function* fib(max) {
//     var
//         t,
//         a = 0,
//         b = 1,
//         n = 0;
//     while (n < max) {
//         yield a;
//         [a, b] = [b, a + b];
//         n ++;
//     }
//     return;
// }
// var f = fib(5);
// console.log(f);
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());

// async function data(){
//     return 'data'
// }
// data().then(v=>{
//     console.log(v)
// })

// const p = new Promise((resolve, reject)=>{
//     console.log('P');
//     resolve('data');
// })
// p.then((res)=>{
//     console.log(res)
// })

// console.log(123)

const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('fail')), 3000)
})

const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(p1), 1000)
})

p2.then(result => console.log(result))
    .catch(error => console.log(error+1))
