window.onload=function(){
var ans=document.getElementById("text");
ans.addEventListener("keydown",function(event){
   // event.preventDefault();
    console.log(event.key);
    console.log(ans.value);
    if(event.key==="Ctrl"){
        alert("you pressed enter");
    }
})
};