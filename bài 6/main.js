document.getElementById("btnhinhchunhat").onclick = function (){
    var chieudai= +document.getElementById("txtdai").value;
    var chieurong= +document.getElementById("txtrong").value;
    var chuvi =(chieudai +chieurong) *2;
    var dientich = chieudai *chieurong;

    var hinhchunhat = `<div>
    <p>Chu vi hinh chu nhat la ${chuvi} </p>
    <p>Dien tich hinh chu nhat la ${dientich} </p>

    
    
    </div>`

    document.getElementById("hcn").innerHTML =hinhchunhat;


}