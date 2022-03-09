/**
 * Khai báo các biến bao gồm Tên phim, Giá vé người lớn(Giave_01), Giá vé trẻ em(Giave_02) 
 và số lượng của 2 loại vé để người dùng nhập vào
 * Tạo biến xử lý:
 -Số lượng: vé trẻ em và người lớn cộng lại để ra được tổng vé
 - Doanh thu: Số lượng * Giá vé cộng hai loại vé lại với nhau để ra được tổng doanh thu
  - Trích 10% từ thiện lấy Doanh thu * 10% để ra kết quả Từ thiện
  - Doanh thu sau khi từ thiện: Lấy Doanh thu - Từ thiện để ra kết quả
  Hiển thị Tên phim Số lượng vé bán ra Tiền Doanh Thu và Tiền Doanh thu sau khi từ thiện ra màn hình
 */
document.getElementById("btnTuthien").onclick= function(){
    var Tenphim = document.getElementById("txtTenphim").value;
    var Giave01 = document.getElementById("txtGiave01").value *1;
    var Giave02 = document.getElementById("txtGiave02").value *1;
    var Soluong01 = +document.getElementById("txtSoluong1").value ;
    var Soluong02 = +document.getElementById("txtSoluong2").value ;

    var Soluong = Soluong01 + Soluong02;
    var Doanhthu= (Soluong01* Giave01)+( Soluong02*Giave02);
    //format Vnd
   

    var Tuthien = Doanhthu * 0.1;
    var TongDoanhThu = Doanhthu -Tuthien;
    var currentFormat = new Intl.NumberFormat("vn-Vn");
    var TienVndTuThien = currentFormat.format(Tuthien);
    var TienVndTDT = currentFormat.format(TongDoanhThu);
    var TienVndDT = currentFormat.format(Doanhthu);

    var tp = "<div class='alert alert-success'>" ;
    tp += " <p> Ten phim: ";
    tp += Tenphim;

    tp += "</p>";

    tp += "<p> So luong: ";
    tp+= Soluong;
    tp += "</p>";
    tp += "<p> Doanh Thu: ";
    tp+= TienVndDT;
    tp += "VND</p>";
    tp += "<p> Tong Thu sau tu thien: ";
    tp+= TienVndTDT;
    tp += "VND</p>";
    tp += "</p>Tien tu thien 10% </p>";
    tp += "<p> Tien Tu thien: ";
    tp+= currentFormat.format(Tuthien);
    tp += "VND </p>";
    tp += "</div>";
    document.getElementById("tien").innerHTML = tp;

}