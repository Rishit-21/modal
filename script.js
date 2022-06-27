'use strict';
const modal = document.querySelector('.modal');
const overylay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const m2 = document.getElementById('m2');


var openModal =  function(){
    modal.classList.remove('hidden');
    overylay.classList.remove('hidden');
}

var  closeModal=function(){
    modal.classList.add('hidden');
    overylay.classList.add('hidden');
}  
btnsCloseModal.addEventListener('click',closeModal);

overylay.addEventListener('click',closeModal);

function esc (){
    document.addEventListener('keydown',function(e){
        if(e.key === 'Escape'){
            if (!modal.classList.contains('hidden')   ){
                closeModal();
            }
        }
        })
}



//console.log(btsOpenModal);

for(var i = 0; i<btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click',openModal);

    if(btnsOpenModal[1]){
        esc();
    }
    

}