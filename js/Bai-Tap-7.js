document.getElementById("btnSapXepMang").addEventListener("click", function() {
    if (listNumber.length <= 0) {
        alert("Thêm số vào bạn êi")
        return
    }


    document.getElementById("txtSapXepMang").innerHTML = "Sắp xếp mảng theo giá trị tăng dần: " + listNumber.sort(function(a, b) { return a - b });

});