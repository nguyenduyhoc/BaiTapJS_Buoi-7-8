document.getElementById("btnThemSo").addEventListener("click", themSo);

var listNumber = [];


function themSo() {
    var number = parseFloat(document.getElementById("txtNumber").value)
    if (isNaN(number)) {
        alert("Thêm số vào bạn êi")
    } else {
        listNumber.push(number)
    }
    document.getElementById("txtThemSo").innerHTML = "Các số nguyên đã chọn: " + listNumber
};



// 1. Tổng các số dương


document.getElementById("btnTongCacSoDuong").addEventListener("click", function() {
    if (listNumber.length <= 0) {
        alert("Thêm số vào bạn êi")
        return
    }
    var tong = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] >= 0) {
            tong += listNumber[i]
        }
    }
    document.getElementById("txtTongCacSoDuongTrongMang").innerHTML = "Tổng số dương là: " + tong
});