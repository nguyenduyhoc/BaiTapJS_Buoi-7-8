document.getElementById("btnDoiCho").addEventListener("click", function() {
    if (listNumber.length <= 0) {
        alert("Thêm số vào bạn êi")
        return
    }
    Array.prototype.move = function(from, to) {
        this.splice(to, 0, this.splice(from, 1)[0]);
        return this;
    };
    var num1 = document.getElementById("txtNum1").value;
    var num2 = document.getElementById("txtNum2").value;
    var ketQua = [];
    ketQua = listNumber.move(num1, num2)



    document.getElementById("txtDoiCho").innerHTML = "Đổi chỗ 2 giá trị trong mảng theo vị trí: " + ketQua

});