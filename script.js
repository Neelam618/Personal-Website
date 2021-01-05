
    let infoLink = document.getElementsByClassName('info-link');

for(let i=0;i<infoLink.length;i++){

    document.getElementsByClassName('info-link')[i].addEventListener('click', viewModal);     

}




function viewModal(event){
    

    let modalTitle = event.target.parentNode.parentNode.innerText;

    document.getElementsByClassName('modal-title')[0].innerText = modalTitle;
}
