printC();

function readC(){

    let strC = localStorage.getItem('data');
    let objC = {};    
    if (strC) {
        objC = JSON.parse (strC);
    }else {objC = { comments: []}}
    return objC;
}

function addC (){

    let objC = readC();    
    let strNome = document.getElementById ('name').value;
    let strComm = document.getElementById ('comentario').value;    
    let newComment = {
        name: strNome,
        comment: strComm
    };
    objC.comments.push(newComment);
    saveC (objC);
    document.location.reload();
}

function printC (){
    
    let comS = document.getElementById('comS');
    let strHtml = '';
    let objC = readC();
    for (i = 0; i < objC.comments.length; i++) {
        strHtml += `<p>${objC.comments[i].name} <br></br> ${objC.comments[i].comment}<br></br></p>`
    }
    comS.innerHTML = strHtml;
}

function clearC(){
    window.localStorage.removeItem('data');
    document.location.reload();
}

function saveC(comm){
    localStorage.setItem('data', JSON.stringify (comm));
}


document.getElementById ('btnComm').addEventListener('click', addC);
document.getElementById ('btnComm').addEventListener('click', printC);
document.getElementById ('btnApag').addEventListener('click', clearC);

