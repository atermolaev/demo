$(document).ready(function () {
  /**
   * Задача. Что будет в консоли?
   * Ответ. Десять десяток.
   * Как это исправить?
   */
  //   for (var i = 0; i < 10; i++) {
  //     setTimeout(function () {
  //       console.log(i);
  //     }, 1000);
  //   }
  /**
   * Решение №1. Вынести setTimeout в функцию замыкание.
   */
  //   function print(j) {
  //     setTimeout(function () {
  //       console.log(j);
  //     }, 1000);
  //   }
  //   for (var i = 0; i < 10; i++) {
  //     print(i);
  //   }
  /**
   * Решение №2. Поставить вместо var let
   */
  //   for (let i = 0; i < 10; i++) {
  //     setTimeout(function () {
  //       console.log(i);
  //     }, 1000);
  //   }
  /**
   * Решение №3. Предать в setTimeout третий аргумент.
   */
  //   for (let i = 0; i < 10; i++) {
  //     setTimeout(
  //       function (j) {
  //         console.log(j);
  //       },
  //       1000,
  //       i,
  //     );
  //   }
  /**
   * Решение №4. Использовать IIFE
   */
  //   for (let i = 0; i < 10; i++) {
  //     (function (j) {
  //       setTimeout(function () {
  //         console.log(j);
  //       }, 1000);
  //     })(i);
  //   }
});
