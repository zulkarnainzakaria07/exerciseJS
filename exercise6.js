//buatlah sebuah fungsi untuk menjumlahkan seluruh nilai array
function totalArr(dataArr){
    let total = 0;
    for (arr of dataArr){
        total = total + arr
    }
    return total;
}