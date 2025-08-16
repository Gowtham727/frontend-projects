
var climate;
function change(){
  const tem=document.getElementById("temperature");
  const citys= document.getElementById("city").value;
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citys}&appid=5da2a92d043db33f79aada3e52b58994&units=metric`)
.then((res) => {
    return res.json();
})
.then((mes) =>{
     console.log(mes);
     changeimgTop(mes);
})
.catch((error) =>{
    console.log("error" +error)
})  
}
 var count=0;
   document.getElementById("city").addEventListener("keydown" ,function(event){
   if(event.key==="Enter") {
   change();
  }
   })
   function changeimgTop(data){
   if(data.cod!="404"){
    var imgtop=document.querySelector(".image");
   imgtop.style.height="60vh";
   imgtop.style.transitionProperty ="all";
   imgtop.style.transitionDuration="1s";
   imgtop.style.transitionTimingFunction="ease";


   let countryname=document.querySelector("#name");
    countryname.textContent=data.name;
    console.log(countryname);
     let hum=document.getElementById("himid");
    hum.textContent=data.main.humidity;
    console.log(hum);
   let temper=document.getElementById("temp");
    temper.textContent=data.main.temp;
    console.log(temper);
     let desc=document.getElementById("description");
    desc.textContent=data.weather[0].description;
    climate=data.weather[0].description;
    console.log(climate);
    console.log(temper);}
    else{
      window.location.reload();
      alert("no such name exits"); 
   }
    var i= document.querySelector(".image");
    if(climate==="overcast clouds"){
     i.style.width="100%"
     i.style.height="60vh";
     i.style.backgroundImage = "url(sun.jpg?time=" + Date.now() + ")";
// i.style.backgroundImage = "url(sun.jpg?time=" + Date.now() + ")";
   i.style.backgroundImage="url(sun.jpg)";
     i.style.backgroundSize="cover";
    i.style.backgroundPosition="center";
    }
    else if(climate === "clear sky"){
      i.style.height="50vh";
      i.style.backgroundImage="url(rain.jpg)";

    }
      let immages=["nature1.jpg","nature2.jpg","nature3.jpg","nature4.jpg","nature5.jpg"];
    let index=0;
    setTimeout(() => {
    setInterval(() =>{
     index=(index+1)%immages.length;
     document.querySelector(".image").style.backgroundImage= `url(${immages[index]})`;
    },7000);
    }, 10000)   
  
  
  }
  
    
//change the image
//image slider
//time showing
