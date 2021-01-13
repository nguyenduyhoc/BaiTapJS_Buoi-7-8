// 2. Đếm các số dương trong mảng

document.getElementById("btnDemSoDuongTrongMang").addEventListener("click", function() {
    var demCacSoDuong = 0;
    if (listNumber.length <= 0) {
        alert("Thêm số vào bạn êi")
        return
    }
    for (var i = 0; i <= listNumber.length; i++) {
        if (listNumber[i] >= 0) {
            demCacSoDuong++;
        }

    }
    document.getElementById("txtDemSoDuongTrongMang").innerHTML = "Số lượng số dương là: " + demCacSoDuong
});