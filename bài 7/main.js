document.getElementById("btnso").onclick = function (){

    var n= +document.getElementById("txtso").value;

    var a = Math.floor(n%10);
    var b = Math.floor(n%100/10);

    var tinhN = a +b ;
     var hienthikyso = `<div>
     <p>Chu vi hinh chu nhat la ${tinhN} </p>
     </div>`

    document.getElementById("so").innerHTML =hienthikyso;


}