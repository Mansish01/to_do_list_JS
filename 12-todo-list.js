const todoList = [];

renderTodo();

function renderTodo(){

    let todolistHTML = '';

    todoList.forEach(function (todoObject, index){

        const name = todoObject.name;
        const date = todoObject.deuDate;

        const html = `
            <div>${name} </div>
            <div>${date} </div>
            <button 
                todoList.splice(${index}, 1);
                renderTodo();
          " class="delete-btn js-delete-btn">Delete</button>
        `;
        //html generation  

        
        todolistHTML += html;
    })

    // console.log(todolistHTML);

    document.querySelector('.js-todo-list')
        .innerHTML = todolistHTML;

    //there are multiple delete buttons and querySelector only selects the first one
    //so querySelectorALL is used to select all
    //it will give a array that matches the given classs
    document.querySelectorAll('.js-delete-btn')
        .forEach((deleteBtn , index) => {
            deleteBtn.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodo();
            })
        })

}


    // for (let i = 0; i<todoList.length; i++){
    //     const todoObject = todoList[i];

    //     const name = todoObject.name;
    //     const date = todoObject.deuDate;

    //     const html = `
    //         <div>${name} </div>
    //         <div>${date} </div>
    //         <button onclick = "
    //             todoList.splice(${i}, 1);
    //             renderTodo();
    //       " class="delete-btn">Delete</button>
    //     `;
    //     //html generation  

        
    //     todolistHTML += html;
    // }

    // // console.log(todolistHTML);

    // document.querySelector('.js-todo-list')
    //     .innerHTML = todolistHTML;
document.querySelector('.js-add-btn')
    .addEventListener('click', () => {
        addTodo();
    })

document.querySelector

function addTodo (){
    const inputElement = document.querySelector('.js-inputtask');
    const task = inputElement.value;
    // console.log(task)

    const inputDate = document.querySelector('.js-duedate');
    const date = inputDate.value;

    todoList.push({
        name : task,
        deuDate : date,
    })

    // console.log(todoList)

    inputElement.value = '';
    //to empty the input value in the input button

    renderTodo();
}