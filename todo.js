const inputtask = document.getElementById("task");
const displaytask = document.getElementById("unorderlist");

function addtask(){
    if(inputtask.value==''){
        alert("Please enter a task");
    }
    else{
        const newtask= document.createElement("LI");
        newtask.innerHTML = inputtask.value;
        displaytask.appendChild(newtask);

        let span = document.createElement("SPAN");
        span.innerHTML = "\u00d7";
        newtask.appendChild(span);
    }
    inputtask.value="";
    // console.log("hello")
    savedata();
    // console.log("hello");
}

displaytask.addEventListener("click",function(data){
    // console.log(data);
    if(data.target.tagName === "LI"){
        // console.log("hi");
        data.target.classList.toggle("checked");
        savedata();
    }else if(data.target.tagName === "SPAN"){
        
        data.target.parentElement.remove();
        savedata();
    }

},false)

function savedata(){
    localStorage.setItem("task",displaytask.innerHTML);
}

function showtask(){
    displaytask.innerHTML = localStorage.getItem("task");
}
showtask();