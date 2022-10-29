var array = [];
var arraySoThuc = [];

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

function doiCho(){
    var index1 = Number(document.getElementById("index1").value);
    var index2 = Number(document.getElementById("index2").value);

    if(index1 > array.length-1 || index2 > array.length-1){
        document.getElementById("doiViTri").innerHTML = "Độ dài mảng không phù hợp với index";
    }else if(index1 == index2){
        document.getElementById("doiViTri").innerHTML = array;
    }else{
        array[index1] = array[index1] + array[index2];
        array[index2] = array[index1] - array[index2];
        array[index1] = array[index1] - array[index2];
        document.getElementById("doiViTri").innerHTML = array;
    }
}

document.getElementById("btnDoiCho").onclick = doiCho;

function tangDan(){
    for(var i=0;i<array.length-1;i++){
        for(var j=0; j<array.length; j++){
            if(array[j]>array[j+1]){
                array[j] = array[j] + array[j+1];
                array[j+1] = array[j] - array[j+1];
                array[j] = array[j] - array[j+1];
            }
        }
    }
    document.getElementById("sapXepTangDan").innerHTML = array;
}

document.getElementById("btnTangDan").onclick = tangDan;

function soNguyenTo(){
    var soNguyenTo = -1;
    
    for(var i=0; i<array.length; i++){
        var count = 0;
        if(array[i] == 2){
            soNguyenTo = 2;
            break;
        }
        else{
            for(var j=2; j<=Math.floor(Math.sqrt(array[i])); j++){
                if(array[i]%j==0){
                    count++;
                    break;
                }
            }
            if(count==0){
                soNguyenTo = array[i];
                break;
            }

        }
    }
    if(soNguyenTo==-1){
        document.getElementById("soNguyenToDauTien").innerHTML = "Không có số nguyên tố";
    }else{
        document.getElementById("soNguyenToDauTien").innerHTML = soNguyenTo;
    }

}

document.getElementById("btnSoNguyenTo").onclick = soNguyenTo;

function themSoThuc(){
    var soThuc = document.getElementById("inputSoThuc").value;
        if(isNaN(Number(soThuc)) || soThuc == ""){
            document.getElementById("mangSoThuc").innerHTML = "Hãy nhập số thực";
        }
        else{
            soThuc = Number(soThuc);
            arraySoThuc.push(soThuc);
            document.getElementById("mangSoThuc").innerHTML = "Mảng số thực: " + arraySoThuc;
        }  
}

document.getElementById("btnThemSoThuc").onclick = themSoThuc;

function demSoNguyen(){
    var count = 0;
    for(var i=0; i<arraySoThuc.length; i++){
        if(arraySoThuc[i]%Math.floor(arraySoThuc[i])==0){
            count++
        }
    }
    document.getElementById("demSoNguyen").innerHTML = count;
}

document.getElementById("btnDemSoNguyen").onclick = demSoNguyen;

function soSanhAmDuong(){
    var soAm = 0;
    var soDuong = 0;
    for(var i=0; i<arraySoThuc.length; i++){
        if(arraySoThuc[i]<0){
            soAm++;
        }
        else if(arraySoThuc[i]>0){
            soDuong++;
        }
    }
    if(soAm>soDuong){
        document.getElementById("soSanhAmDuong").innerHTML = "Số âm nhiều hơn số dương";
    }
    else if(soAm<soDuong){
        document.getElementById("soSanhAmDuong").innerHTML = "Số âm ít hơn số dương";
    }
    else{
        document.getElementById("soSanhAmDuong").innerHTML = "Số âm bằng số dương";
    }
}

document.getElementById("btnSoSanhAmDuong").onclick = soSanhAmDuong;