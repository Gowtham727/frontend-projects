var value=0;
function add(event){
    event.preventDefault();
      // const cart=document.getElementById("box2").value;
    const textvalue=document.getElementById("text");
    const cart=document.getElementById("card");
    const img=cart.style.backgroundImage;
  const match=img.background.match(/url\((['"]?)(.*?)\1\)/);
   const url = match ? match[2] : null;
    console.log(url);
    const ins=document.getElementById("inner");
    ins.innerHTML=`<h4>cart(${value++})</h4>`

}