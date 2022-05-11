var arr =[1,5,7,2,9]
var max =0;
for(let i = 0 ;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i]
    }
}
alert(max);