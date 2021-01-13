// 5.Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.

document.getElementById("btnSoChanCuoiCung").addEventListener("click", function() {
    var soChanCuoiCungTrongMang = listNumber[0];
    if (listNumber.length <= 0) {
        alert("Thêm số vào bạn êi")
        return
    }
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] == 1) {
            soChanCuoiCungTrongMang = -1
        }
    }
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] % 2 == 0) {
            soChanCuoiCungTrongMang = listNumber[i]
        }
    }

    document.getElementById("txtSoChanCuoiCung").innerHTML = "Số chẵn cuối cùng trong mảng:  " + soChanCuoiCungTrongMang
});