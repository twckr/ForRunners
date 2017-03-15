function average(arr, prec) {
 'use strict'; 
 var cnt = 1;
 var len = arr.length;
 var av;

if (len===0) return 0;

if (arr[0] instanceof Date) {
    av = arr[i].getTime();
} else {
	av = arr[0];
}

for (var i = 1; i < len; i++) {
  
  if (arr[0] instanceof Date) {
    av += arr[i].getTime();
    cnt++;
  } else if (!isNaN(arr[i])) {
    av += arr[i];
    cnt++;
  }

}

if (arr[0] instanceof Date) {
  return new Date(av/cnt);
}

return Math.round(av/cnt * Math.pow(10, prec+1)) / (Math.pow(10, prec+1));

}
