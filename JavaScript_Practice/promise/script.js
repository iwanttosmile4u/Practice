// let promice = new Promice(function (resolve, reject) {
//   setTimeout(() => resolve("done"), 1000);
// });

// console.log("Request data...");

// setTimeout(() => {
//   console.log("Preparing data...");
//   const backendData = {
//     server: "avs",
//     port: 2000,
//     status: "working",
//   };
//   setTimeout(() => {
//     backendData.modified = true;
//     console.log("Data received", backendData);
//   }, 2000);
// }, 2000);

// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Preparing data...");
//     const backendData = {
//       server: "avs",
//       port: 2000,
//       status: "working",
//     };
//     resolve(backendData);
//   }, 2000);
// });

// p.then((data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true;
//       resolve(data);
//     }, 2000);
//   });
// })
//   .then((clientData) => {
//     clientData.fromPromice = true;
//     return clientData;
//   })
//   .then((data) => {
//     console.log("Modified", data);
//   })
//   .catch((err) => console.error("Error: ", err))
//   .finally(() => console.log("Finally"));

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

Promise.all([sleep(2000), sleep(3000)]).then(() => {
  console.log("All promises");
});

Promise.race([sleep(2000), sleep(3000)]).then(() => {
  console.log("Race promises");
});
