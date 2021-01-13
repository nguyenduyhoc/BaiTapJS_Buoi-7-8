// 3. Tìm số nhỏ nhất trong mảng.

document.getElementById("btnSoNhoNhat").addEventListener("click", function() {
    var soNhoNhat = listNumber[0];
    if (listNumber.length <= 0) {
        alert("Thêm số vào bạn êi")
        return
    };
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] < soNhoNhat) {
            soNhoNhat = listNumber[i]
        }
    };
    document.getElementById("txtSoNhoNhat").innerHTML = "Số nhỏ nhất trong mảng là: " + soNhoNhat

});