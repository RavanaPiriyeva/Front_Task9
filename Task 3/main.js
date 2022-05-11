let num1=prompt("Eded 1");
let num2=prompt("Eded 2");
function Power(num1 ,num2){
    var result=1;
    for(let i = 1 ;i<=num2;i++){
        result*=num1
    }
    return result;
}
alert(Power(num1 ,num2));