Number_of_Clicks=0;
CPS=0;
function Click(){
Number_of_Clicks=Number_of_Clicks+1;
CPS=Number_of_Clicks/5;
document.getElementById("clicks").innerHTML=Number_of_Clicks;
document.getElementById("cps").innerHTML=CPS;

setTimeout(function()
    {
        
       stop();
    },5000);
}
function stop(){
document.getElementById("click").style.display="none";
}
