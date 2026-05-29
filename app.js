let todo =[]; 
let req = prompt("please enter your request");
while(true){
    if(req == "quit"){
        console.log("quiting the app");
        break;
    }

    if(req =="list"){
        console.log("----------------");
        for(let i=0; i< todo.length; i++){
            console.log(i , todo[i]);
        }
        console.log("----------------");
    }
    else if(req == "add"){
        let newtask = prompt("enter the task to add"); 
        todo.push(newtask);
        console.log("task added");
    }
    else if(req =="delete"){
        let index = prompt("enter the task index to delete");
        todo.splice(index , 1);
        console.log("task deleted"); 
    }
    else {
        console.log("wrong request");
    }

    req = prompt("please enter your request");
}