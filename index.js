const modal = document.querySelector(".modal")
const dialog = document.querySelector('.dialog')
const login = document.querySelector('.login')

modal.addEventListener('click',e=>{
    if(e.target == modal){
        hideModal()
    }
    
})

login.addEventListener('click',e=>{
    showModal()
})

const showModal = ()=>{
    dialog.style.animation = 'showDialog .8s forwards'
    modal.style.display = 'block'
}

const hideModal = ()=>{
    dialog.style.animation = 'hideDialog .8s forwards'
    setTimeout(()=>{
        modal.style.display = 'none'
    },700)
}