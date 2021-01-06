
let infoLink = document.getElementsByClassName('info-link');

for(let i=0;i<infoLink.length;i++){

    document.getElementsByClassName('info-link')[i].addEventListener('click', viewModal);

}



function viewModal(event){
    
    let modalTitle = event.target.parentNode.parentNode.innerText;
    document.getElementsByClassName('modal-title')[0].innerText = modalTitle;

    let idToDisplay;
    let modalTexts = document.getElementsByClassName('modal-text');

    if(event.target.id == "styleStage"){

        // modalTexts.forEach(modalText => {
        //     modalText.classList.add('d-none');
        // });
        for (var i = 0; i < modalTexts.length; i++) {
            modalTexts[i].classList.add('d-none');
        }

        idToDisplay = "styleStageText";
    }
    if(event.target.id == "brainToPocket"){

        for (var i = 0; i < modalTexts.length; i++) {
            modalTexts[i].classList.add('d-none');
        }

        idToDisplay = "brainToPocketText";
    }
    if(event.target.id == "sAgroInd"){

        for (var i = 0; i < modalTexts.length; i++) {
            modalTexts[i].classList.add('d-none');
        }

        idToDisplay = "sAgroIndText";
    }
    if(event.target.id == "expenseTracker"){

        for (var i = 0; i < modalTexts.length; i++) {
            modalTexts[i].classList.add('d-none');
        }

        idToDisplay = "expenseTrackerText";
    }
    if(event.target.id == "noteTaker"){

        for (var i = 0; i < modalTexts.length; i++) {
            modalTexts[i].classList.add('d-none');
        }

        idToDisplay = "noteTakerText";
    }
    if(event.target.id == "GithubLBUI"){
       
        for (var i = 0; i < modalTexts.length; i++) {
            modalTexts[i].classList.add('d-none');
        }

        idToDisplay = "GithubLBUIText";
    }
    if(event.target.id == "moviesBrowser"){
       
        for (var i = 0; i < modalTexts.length; i++) {
            modalTexts[i].classList.add('d-none');
        }

        idToDisplay = "moviesBrowserText";
    }

    document.getElementById(idToDisplay).classList.remove("d-none");

    // switch(event.target.id){
    //     case 'styleStage':
    //         idToDisplay = "styleStageText";
    //     break;
    //     case 'brainToPocket':
    //         idToDisplay = "brainToPocketText";
    //     break;
    //     case 'sAgroInd':
    //         idToDisplay = "sAgroIndText";
    //     break;
    //     case 'expenseTracker':
    //         idToDisplay = "expenseTrackerText";
    //     break;
    //     case 'noteTaker':
    //         idToDisplay = "noteTakerText";
    //     break;
    //     case 'GithubLBUI':
    //         idToDisplay = "GithubLBUIText";
    //     break;
    //     case 'moviesBrowser':
    //         idToDisplay = "moviesBrowserText";
    //     break;
    // }
    // document.getElementById(idToDisplay).classList.remove("d-none");
    
}
