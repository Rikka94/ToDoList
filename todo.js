var taskInput=document.getElementById('taskInput');
var taskHolder=document.getElementById('task-holder');

var enterSub=document.addEventListener("keypress", enterTask);

function enterTask(evt){
    console.log(evt.keyCode)
    if(evt.keyCode == 13){
        submitTask();
    }
}

function submitTask(){
    console.log('Button clicked');
    var val = taskInput.value;
    console.log(val);
    if(val !== ""){
        var taskDiv = document.createElement("div");
        var addBtn = document.createElement("button");
        addBtn.className = "dltBtn";
        addBtn.addEventListener('click', delTask);
        taskDiv.className = "task";
        // taskDiv.addEventListener('click', delTask);
        var pEle=document.createElement('p');
        pEle.innerHTML = val;
        taskDiv.append(pEle);
        taskHolder.append(taskDiv);
        taskDiv.append(addBtn);
        taskInput.value = "";

        function delTask(){
         this.remove();
         taskDiv.remove();
        }
    }else{
        alert('Please fill in task');
    }
    
}


