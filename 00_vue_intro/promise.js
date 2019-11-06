// 외부에 요청을 보내서 그 결과를 출력하는 코드를 작성하고자 한다.
// 1. 몇초 뒤에 데이터가 응답되면
// 2. 데이터를 변수에 저장하여 출력!

// function getData() {
//   let data

//   setTimeout(() => {
//     console.log('INFO: 요청을 보냈습니다.')
//     data = {'data': 'somedata'}
//   }, 100);

//   return data
// }

// function printData() {
//   let response1 = getData()
//   console.log(response1)
// }

// printData()

// $ node 00_vue_intro/promise.js
// undefined => setTimeout 이 끝나기전 출력이 이루어져 발생하는 문제
// INFO: 요청을 보냈습니다.  

// function getDataCallback(callback) {  // 2. callback 으로 함수가 넘어옴. 즉, callback = 저 익명함수
//   setTimeout(() => {
//     console.log('INFO: 요청을 보냈습니다.')
//     const data = {'data': 'somedata'}
//     callback(data) // 3. 다 끝나고 저 함수를 실행
    
//   }, 100);
// }

// // 1. 출력하는 작업을 하는 함수를 인수로 넘김
// getDataCallback(function(data) {
//   console.log(data)
//   console.log(1)
//   getDataCallback(function(data2){
//     console.log(2)
//     getDataCallback(function(data3) {
//       console.log(3)
//     })
//   })
// })

// Callback 으로는 나중 유지보수에 어려움이 있어 promise를 같이 사용하여 비동기 함수를 처리한다.

// // 1. 다짐을 반환한다.
// // 2. 어떤다짐? ==> 데이터를 요청한 뒤 어떻게 할꺼야  // Promise 안쪽의 함수에 표현한다.
// function getDataPromise() {  // axios.get 와 유사한 역할
//   return new Promise(resolve => {
    
//     setTimeout(() => {
//       if(true) {
//         console.log('INFO: 요청을 보냈습니다.')
//         const data = {'data': 'somedata'}
//         resolve(data) // .then 으로 꺼낼 수 있는 객체
//       } else {
//         resject('조건에 통과하지 못했어요')
//       }
//     }, 100);
//   })
// }

// // getDataPromise()
// //   .then(data => {
// //     console.log(data)
// //     console.log(1)
// //   })
// //   .then(() => {
// //     console.log(2)
// //   })
// //   .then(() => {
// //     console.log(3)
// //   })
// //   .catch(error => { // catch 는 마지막 하나만 두면 된다.
// //     console.error(error)
// //   })

// const handleData = async function() {  // 비동기적으로 동작하는 함수를 동기적으로 처리하겠다는 표시
//   const response = await getDataPromise()
//   console.log(response)
// }
// handleData()




// Review!
// 1. 데이터를 가져온다.
// 2. 가져온 데이터를 출력한다.

// function getData() {
//   let data

//   data = {'data': 'domedata'}

//   return data
// }

// function printData() {  // 일반적인 흐름
//   const data = getData()
//   console.log(data)
// }
// printData()

// function getData() {
//   let data

//   setTimeout(() => {
//     console.log('INFO: 요청 보냄')
//     data = {'data': 'domedata'}
//   }, 100);

//   return data
// }

// function printData() {
//   const data = getData()
//   console.log(data)
// }
// printData()

// function getDataCallback(callback) { // => callback 함수
//   setTimeout(() => {
//     console.log('INFO: 요청보냄')
//     const data = {data: 'somedata'}
//     callback(data)
//   }, 100);
// }


// // 데이터를 꺼내온 뒤 작업하는 함수를 전달 
// // => 한개 처리에는 나쁘지 않으나 callback 함수 내에 작성해야하는 특성 때문에 처리 갯수가 많아질수록 코드가 지저분해진다.
// getDataCallback(function(data) {
//   console.log(data)
//   getDataCallback(function(login) {
//       console.log(login)
//       if (login) {
//        ....
//       }
// })
  
// })

function getDataPromise() {
  return new Promise(resolve => {

    setTimeout(() => {
      console.log('INFO: 요청 보냄')
      const data = { data: 'somedata' }
      resolve(data)
    }, 100);

  })
}
// getDataPromise()
//   .then(data => {
//     console.log(data)
//     return getDataPromise()
//   })
//   .then(login => {
//     if (login) {
//       return getDataPromise()
//     }
//   })
//   .then(userInfo => {
//     console.log(userInfo)
//   })


// 간결하게 쓰기 위해
async function printData() {
  const data = await getDataPromise()
  console.log(data)
}
printData()