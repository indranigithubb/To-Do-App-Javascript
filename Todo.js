
let Todo = [];

let req = prompt("Enter a request");

while(true){
    if(req == "quit"){
        console.log("quitting the app");
        break;
    }

    if(req == "list"){
      console.log("-------------");
      for(let i = 0;i<Todo.length;i++){
        console.log(i, Todo[i]);
      }
      console.log("-------------");
    }else if(req == "add"){
       let task= prompt("please enter the task you want to add");
       Todo.push(task);
       console.log("task added");
    }else if(req =="delete"){
        let index = prompt("enter the index of the task you want to delete");
        Todo.splice(index,1);
        console.log("task deleted");
    }else{
        console.log("wrong request");
    }

    req=prompt("Enter a request");
}