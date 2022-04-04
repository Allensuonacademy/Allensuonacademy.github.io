function change(){
 var select = document.getElementById('demo');
 select.style.color='pink';
 select.style.backgroundColor='lightred';
 select.style.fontFamily='impact';
 select.innerHTML='Yes';
 select.style.textAlign='center';
}
function ha(){
 alert('Welcome to my world')
}
function sum1(){
 var a = parseFloat(prompt('first number:'));
 var b = parseFloat(prompt('second number:'));
document.getElementById('Lee').innerHTML=a+b;
}
function sum2(){
    var a = prompt('First name')
    var b = prompt('Second name')
    document.getElementById('ze').innerHTML='Nice to meet you'+a+b;
}
function Q6more(f){
    return (5/9) * (f-32)
}
function Q6(){
    document.getElementById("Q6").innerHTML =  Q6more(20);
}