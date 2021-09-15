// function pow(x, n) {
//   let result = 1;
//   // множимо результат - result - на x n-нну к-сть разів у циклі
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }
// alert(pow(2, 3));

// Рекурсивний спосіб написання функції pow:

// function pow(x, n) {
//   //   if (n == 1) {
//   //     return x;
//   //   } else {
//   //     return x * pow(x, n - 1);
//   //   }
//   return n == 1 ? x : x * pow(x, n - 1);
// }

// alert(pow(2, 3));
