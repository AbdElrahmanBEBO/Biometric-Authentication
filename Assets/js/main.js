// Change-Language
let Language = 'en';
changeLang(Language);
function changeLang(lang){
    var Doc = document.getElementById('html');
    if(lang == "en"){
        Doc.setAttribute('lang','en');
        Doc.setAttribute('dir','ltr');
    }
    else if(lang == "ar"){
        Doc.setAttribute('lang','ar');
        Doc.setAttribute('dir','rtl');
    }
}

//Change-Page
function changePage(page){
    window.location.href = page;
}

// Preloader
var loader = document.getElementById('preloader');
window.addEventListener('load',function(){
    loader.style.display = 'none';
});

// Notifications-Counter
let Numbers = 0; 
const counter = document.getElementById("counter");
function count(){
    counter.innerHTML = `${++Numbers}`;
}

// Modal-header
function Content(Btn1,Btn2,content1,content2){
    let Btn11 = document.getElementById(Btn1);
    let Btn22 = document.getElementById(Btn2);
    Btn11.setAttribute('class','modal-header'.concat(" ",content1));
    Btn22.setAttribute('class','btn btn-success'.concat(" ",content2));
}

// Actions
function createActions(head){
    item = document.createElement('th');
    item.setAttribute('class','action');
    item.innerHTML = '<i class="far fa-edit edit-icon"></i><i class="fas fa-trash-alt delete-icon"></i>';
    head.appendChild(item);
}

// Close-Modal  -> we don't use it now :(
function closeModal(){    
    // modal-header
    let modalHeader = document.createElement('div');
    modalHeader.setAttribute('class','modal-header');
    modalHeader.setAttribute('style','font-size:35px;');
    let modalWarning = document.createElement('h1');
    modalWarning.setAttribute('class','modal-title text-warning warning');
    modalHeader.appendChild(modalWarning);

    //modal-body
    let modalBody = document.createElement('div');
    modalBody.setAttribute('class','modal-body warningMsg');

    //modal-footer
    let modalFooter = document.createElement('div');
    modalFooter.setAttribute('class','modal-footer');
    modalFooter.setAttribute('style','display:flex; justify-content: center;');
    let closeBtn = document.createElement('button');
    closeBtn.setAttribute('class','btn btn-danger bool-close');
    closeBtn.setAttribute('data-bs-dissmiss','modal');
    let saveBtn = document.createElement('button');
    saveBtn.setAttribute('class','btn btn-success bool-save');
    saveBtn.setAttribute('data-bs-dissmiss','modal');
    modalFooter.appendChild(closeBtn);
    modalFooter.appendChild(saveBtn);    

    //modal-content
    let modalContent = document.createElement(div);
    modalContent.setAttribute('class','modal-content');
    modalContent.setAttribute('id','close-modal-content');
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    
    //modal-dialog
    let modalDialog = document.createElement(div);
    modalDialog.setAttribute('class','modal-dialog');
    modalDialog.setAttribute('id','close-modal-dialog');
    modalDialog.appendChild(modalContent);

    //close-modal
    let Close_Modal = document.createElement(div);
    Close_Modal.setAttribute('class','modal fade');
    Close_Modal.setAttribute('id','close-modal');
    Close_Modal.appendChild(modalDialog);

    let body =document.getElementsByTagName('body');
    body[0].appendChild(Close_Modal);
}