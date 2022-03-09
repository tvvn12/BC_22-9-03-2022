document.getElementById("btnUSD").onclick =function(){
    var USD = +document.getElementById("txtUSD").value;
    const NgoaiTE= 23500;
    var TinhUSD = USD * NgoaiTE;
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var hienthi = "<div> Gia tri doi Ngoai te "+ currentFormat.format(TinhUSD) +" VND </div>";
    document.getElementById("USD").innerHTML = hienthi;
}