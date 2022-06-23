
let addBtn = document.querySelector('.add-button')
let modalCont = document.querySelector('.model-cont')

let addFlag = false

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
})









