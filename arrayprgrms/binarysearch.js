//input of binary search is sorted array
var arr = [1, 2, 3, 4, 5, 6, 7]
var flg = 0;
var low = 0
var upp = arr.length - 1
var elem = 11;
while (low < upp) {
    var mid = Math.floor((low + upp) /2);
    if (elem > arr[mid]) {
        low = mid + 1;
    }
    else if (elem < arr[mid]) {
        low = mid - 1;
    }
    else if (elem == arr[mid]) {
        flg += 1;
        break;
    }
}
    if (flg > 0) {
        console.log("element found")
    }
    else {
        console.log("element not found")
    }

