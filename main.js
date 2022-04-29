function getEle(id) {
  return document.getElementById(id);
}

// Bài 5
getEle("btn-tinh").onclick = function () {
  var n = getEle("soN").value * 1;
  var soNguyenTo = "";
  var mark = 1; //Nguyên tố

  for (var i = 1; i <= n; i++) {
    mark = 1;
    for (var j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        mark = 0;
        break;
      }
    }
    if (mark === 1) {
      soNguyenTo += i + " ";
    }
  }

  // Show kq
  var result = "Các số nguyên tố từ 1 tới n là: " + soNguyenTo;
  getEle("ketqua-tinh").innerHTML = result;
};
