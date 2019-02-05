(function() {
  // ---------------------- ЗАДАНИЕ 1 ---------------------------- //
  // var count = 0;
  // function getSevenCol(array) {
  //   var str = array.join("");
  //   var mass = str.split("");
  //   for (let i = 0; i < mass.length; i++) {
  //     if (mass[i] === "7") {
  //       count++;
  //     }
  //   }
  //   return(count);
  // }
  // console.log(getSevenCol([1, 7, 4, 77, 73]));
    // ---------------------- ЗАДАНИЕ 2 ---------------------------- //
    var arr = ["a", "b", "c", "d", "e","f"];
    function arrToStr (array) {
      var b = [];
      var count = array.length;
        for (var i = 0; i< count ; i++) {
          b[i] = array[0];
          array.shift();
          array.reverse();
        }
        console.log(b);
  }
    arrToStr(arr);
})();
