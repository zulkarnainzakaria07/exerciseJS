//buatlah 2 fungsi untuk mencari nilai terbesar dan terkecil dari sebuah data array

// fungsi mencari nilai terbesar
function nilaiTerbesar(dataArr){
    let max = 0;
    for (arr of dataArr){
        if (arr > max){
            max = arr;
        }
    }
    return max;
}

// fungsi mencari nilai terkecil
function nilaiTerkecil(dataArr){
    let min;
    for (arr of dataArr){
        if (min == null){
            min = arr    
        } else {
            if(arr < min){
                min = arr;
            }
        }
    }
    return min;
}

