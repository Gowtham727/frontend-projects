var taskid=0;
window.onload=function(){
 let inp = document.getElementById("input");
 inp.addEventListener("keydown",function(event){
  if(event.key==="Enter"){
    addtask(event);
  }
 })

}
function addtask(event){
   // event.preventDefault();
     var input= document.getElementById("input").value ;
    var table= document.getElementById("table");
     table.style.visibility="visible";
    const tbod=document.getElementById("tbody");
    const tr= document.createElement("tr");
    tr.setAttribute("id",`${taskid}`)
    tr.setAttribute("style","height:50px")  //style="height:50px" line inline css

    tr.innerHTML=`<td>${input}</td>
     <td> <button onclick="deletetask('${taskid}',event)" style="cursor:pointer">delete</button></td>
     <td>  
     <input type="radio" class="radio" name="tasks${taskid}" value="yes">yes
     <input type="radio" class="radio" name="tasks${taskid}" value="no" checked>no
     </td>`
    tbod.appendChild(tr);
  document.getElementById("input").value = "";

    taskid++;

   
     

}
function deletetask(rowid,event){
    event.preventDefault();
      const ids=document.getElementById(rowid);
    if(ids)ids.remove();

}
