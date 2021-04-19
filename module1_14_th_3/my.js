let array1 = [3, 5, 1, 8, -3, 7, 8];
 let array2 = [7, 12, 6, 9, 20, 56, 89];
 let array3 = [];
let array4 = [0,0,0,0,0,0];
function isMin(arr){
    let min = arr[0];
    for (let i = 0; i<arr.length; i++){
        if (min > arr[i]){
            min = arr[i];
        }
    }
    document.write(min);
    document.write("<br>");
}
isMin(array1);
isMin(array2);
isMin(array3);
isMin(array4);
