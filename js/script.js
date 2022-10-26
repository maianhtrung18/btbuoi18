var array = [];

function themSo(){
    var soNguyen = document.getElementById("inputSo").value;
        if(isNaN(Number(soNguyen)) || soNguyen == "" || Number.isInteger(Number(soNguyen))== false){
            document.getElementById("mang").innerHTML = "Hãy nhập số nguyên";
        }
        else{
            soNguyen = Number(soNguyen);
            array.push(soNguyen);
            document.getElementById("mang").innerHTML = "Mảng: " + array;
        }  
}

document.getElementById("btnThemSo").onclick = themSo;

function tongSoDuong(){
    var s = 0;
    for(var i=0; i<array.length; i++){
        if(array[i]>0){
            s += array[i];
        }
    }
    document.getElementById("tongSoDuong").innerHTML = s;
}
document.getElementById("btnTongSoDuong").onclick = tongSoDuong;

function demSoDuong(){
    var s = 0;
    for(var i=0; i<array.length; i++){
        if(array[i]>0){
            s += 1;
        }
    }
    document.getElementById("demSoDuong").innerHTML = s;
}
document.getElementById("btnDemSoDuong").onclick = demSoDuong;

function soNhoNhat(){
    var min = array[0];
    for(var i=1; i<array.length; i++){
        if(min>array[i]){
            min=array[i];
        }
    }
    document.getElementById("soNhoNhat").innerHTML = min;
}
document.getElementById("btnSoNhoNhat").onclick = soNhoNhat;

function soDuongNhoNhat(){
    var min = 0;
    for(var i=0; i<array.length; i++){
        if(array[i]>min){
            min = array[i];
        }
        else{
            continue;
        }
        for(var j=i; j<array.length; j++){
            if(min>array[j] && array[j]>0){
                min=array[j];
            }
        }
        break;
    }
    if(min==0){
        document.getElementById("soDuongNhoNhat").innerHTML = "Không có số dương nhỏ nhất";
    }
    else{
        document.getElementById("soDuongNhoNhat").innerHTML = min;
    }
    
}
document.getElementById("btnSoDuongNhoNhat").onclick = soDuongNhoNhat;


function soChanCuoiCung(){
    var so = -1;
    for(var i=0; i< array.length; i++){
        if(array[i]%2==0){
            so = array[i];
        }
    }
    if(so==-1){
        document.getElementById("soChanCuoiCung").innerHTML = "Không có số chẵn cuối cùng";
    }
    else{
        document.getElementById("soChanCuoiCung").innerHTML = so;
    }
    
}
document.getElementById("btnSoChanCuoiCung").onclick = soChanCuoiCung;