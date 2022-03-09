
document.getElementById("btnTinhTien").onclick = function(){
    var songaylam = document.getElementById("txtTinhngay").value;
    const Luong= 100000;
    var tinhluong = songaylam * Luong;
    var currentFormat = new Intl.NumberFormat("vn-Vn");


    var tl = "<div class='alert alert-success'>";
    tl += "So tien luong cua ban la "+currentFormat.format(tinhluong) +" "
    tl += " Vnd</div>";
    document.getElementById("tinhluong").innerHTML =tl;

}