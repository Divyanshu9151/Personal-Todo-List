const inputData = document.querySelector(".inputField input")
const addbtn = document.querySelector(".inputField button")
const todo=document.querySelector(".todo");
const clear=document.querySelector(".footer button");
inputData.onkeyup = () => {
    let userdata = inputData.value;
    if (userdata.trim() != 0) {
        addbtn.classList.add("active")
    }
    else{
        addbtn.classList.remove("active")
    }
}
showtodo()
addbtn.onclick=()=>{
     let userdata=inputData.value;
     let getlocalstorage=localStorage.getItem("New Todo");

    if(getlocalstorage==null)
    {
        ListArr=[];
    }
    else{
        ListArr=JSON.parse(getlocalstorage);
    }
    ListArr.push(userdata);
    localStorage.setItem("New Todo",JSON.stringify(ListArr));
    showtodo();
}
function showtodo()
{
    let userdata=inputData.value;
    let getlocalstorage=localStorage.getItem("New Todo");
    const pending=document.querySelector(".pending");
   if(getlocalstorage==null)
   {
       ListArr=[];
   }
   else{
       ListArr=JSON.parse(getlocalstorage);
   }
   let newli='';
   ListArr.forEach((element,index) => {
       newli+=`<li>${element}<span onclick="deletelist(${index})"><i class="fa fa-trash-o"></i></span> </li>`
   });
   pending.textContent=ListArr.length;
   if (ListArr.length>0) {
       clear.classList.add("active")   
   }
   else{
    clear.classList.remove("active") 
   }
   todo.innerHTML=newli;
inputData.value="";
addbtn.classList.remove("active")

}
function deletelist(index)
{
    let getlocalstorage=localStorage.getItem("New Todo");
    ListArr=JSON.parse(getlocalstorage);
    ListArr.splice(index,1);
    localStorage.setItem("New Todo",JSON.stringify(ListArr));
showtodo();
}

clear.onclick=()=>
{
    ListArr=[];
    localStorage.setItem("New Todo",JSON.stringify(ListArr));
showtodo();
}