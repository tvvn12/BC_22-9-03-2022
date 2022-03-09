/**
 * Khai báo 3 biến Tổng tiền, Phần trăm và số người để người dùng nhập vào
 * Tạo biến xử lý kết quả Lấy (Tổng tiền * Phần trăm) /100 /số người
 * Hiển thị kết quả
 */
document.getElementById("btnTinh_Tip").onclick = function(){
    var TongTien = document.getElementById("txtTongtien").value;
    var phantram = document.getElementById("Phantram").value;
    var songuoi = document.getElementById("songuoi").value;
    var total = (TongTien *phantram)/100 /songuoi;

    var KetQua ="<div> Moi nguoi chia : ";

    KetQua = KetQua + total;

    KetQua = KetQua+ " $</div>";
    document.getElementById("tiep").innerHTML = KetQua;


};