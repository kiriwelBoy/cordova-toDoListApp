function addTask(){
    let newTask= document.createElement('li');
    if(task.value){
        newTask.innerHTML = task.value;
    }
    else{
        alert('Veillez écrire une tâche');
    }
    
    taskList.appendChild(newTask);
    $(taskList).listview('refresh');
  
    $(newTask).on("swiperight",finish);
   
    function finish(){        
       taskEnd.appendChild(newTask);    
       
       $(newTask).on("swipeleft", restart);

       function restart(){
        taskList.appendChild(newTask);
       }
    }
}

function reinitialiser(){
    taskList.innerHTML = "";
    taskEnd.innerHTML = "";
}