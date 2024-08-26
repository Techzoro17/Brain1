const output = document.getElementById("output");

var Task =[

]

function show() {
    output.innerHTML =""
    Task.forEach(element => {
        const div = document.createElement('div');
        const data =document.createElement('h3');
        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox'); 
        input.checked = element.check
        input.addEventListener("click",()=>toggle(element.id))
        div.appendChild(input);


        data.textContent =element.task; 
        data.classList.add("data_h2")
        if(element.check){
            data.classList.add("strikethrough")
        }
        div.appendChild(data)
        

        const del = document.createElement('button');
        del.textContent = 'delete';
        del.classList.add("btn")
        del.addEventListener("click", ()=>taskRemove(element.id))
        div.appendChild(del)

        div.classList.add('data')
        output.appendChild(div);
        
        
    });
    
}
function toggle(id){
 Task=Task.map((item)=>{
    if(item.id===id){
        item.check=!item.check
    }
    return item
    
    
 })
 show();
}
function addTask(event) {
    event.preventDefault();
    const ttask = document.getElementById('Task').value;
    if(ttask.trim()!==""){
    const newtask ={
        id:Date.now(),
        task:ttask,
        check:false
    }
    Task.push(newtask);
    
    
    document.getElementById("Task").value ="";
    show()
}
}

function taskRemove( id) {
    Task =Task.filter(element=>element.id!=id)
    show();
}