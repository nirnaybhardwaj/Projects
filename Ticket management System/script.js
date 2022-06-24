
let addBtn = document.querySelector('.add-button')
let modalCont = document.querySelector('.model-cont')
let mainCont = document.querySelector('.main-cont')
let taskArea = document.querySelector('.textarea-cont')

let removeBtn = document.querySelector('.remove-button')

let addFlag = false
let removeFlag = false

// modalCont.style.display = 'none'

addBtn.addEventListener('click', function(){

    //display the model
    addFlag =! addFlag

    if(addFlag == true){
        modalCont.style.display = 'flex'
    }
    else{
        modalCont.style.display = 'none'
    }
});

                // ---- GENTERATE THE TICKET ---- // 

modalCont.addEventListener("keydown", function(e){

    let key = e.key

    if(key == 'Shift'){
        createTicket(taskArea.value)
        modalCont.style.display = 'none'

        addFlag = false // bcoz dubara whi s shuru ho agr nhi krenge yaha to ek ticket 
        // bnne k baad jb + click krenge nhi aega model 2 baar click krne s aega 

        taskArea.value = "" // pichla task likha na aye isliye empty string daaldi
    }
});

function createTicket(ticketTask){
    // for unique id 
    let id = shortid()

    let ticketCont = document.createElement('div')
    ticketCont.setAttribute('class', 'ticket-cont')

    ticketCont.innerHTML = `<div class="ticket-color"></div>
    <div class="ticket-id">${id}</div>
    <div class="task-area">${ticketTask}</div>

    <div class="ticket-lock">
        <i class="fa-solid fa-lock"></i>
    </div>`

    mainCont.append(ticketCont)

    handleRemoval(ticketCont)
}


removeBtn.addEventListener('click', function(){
    removeFlag =!removeFlag // changes to true

    if(removeFlag == true){
        removeBtn.style.color = 'red'
    }
    else{
        removeBtn.style.color = 'white'
    }
})


function handleRemoval(ticket){

    ticket.addEventListener('click', function(){
        if(!removeFlag) return // false to return
        ticket.remove()//ui removal
    })
    
}



