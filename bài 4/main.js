document.getElementById("btnTb").onclick = function(){
    var so1 = +document.getElementById("txt01").value;
    var so2 = +document.getElementById("txt02").value;
    var so3 = +document.getElementById("txt03").value;
    var so4 = +document.getElementById("txt04").value;
    var so5 = +document.getElementById("txt05").value;

    var Tb= (so1 + so2 +so3 +so4 +so5) /5 ;

    var tbcong = "<div>Tong so Trung Binh la: "+ Tb +" </div>"
    document.getElementById("tinhTb").innerHTML =tbcong;
        

};