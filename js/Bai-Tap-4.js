// 4. Tìm số dương nhỏ nhất trong mảng.

document.getElementById("btnSoDuongNhoNhat").addEventListener("click", function() {
    var soDuongNhoNhat = listNumber[0];
    if (listNumber.length <= 0) {
        alert("Thêm số vào bạn êi")
        return
    };
    for (var i = 0; i <= listNumber.length; i++) {
        if (listNumber[i] >= 0 && listNumber[i] < soDuongNhoNhat) {
            soDuongNhoNhat = listNumber[i];
        }

    }

    document.getElementById("txtSoDuongNhoNhat").innerHTML = "Số dương nhỏ nhất trong mảng là: " + soDuongNhoNhat
});