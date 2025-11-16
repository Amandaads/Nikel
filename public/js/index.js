const myModal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
checkLogged();

document.getElementById("login-form").addEventListener("submit", function(e){
    e.preventDefault();
    const email = document.getElementById("email-input").value;
    const password =document.getElementById("password-input").value;
    const session = document.getElementById("session-check").checked;
     const account= getAccount(email);
     if(!account){
        alert("Ops...check your email or password.");
        return;
     }

     if(account){
        if(account.password !== password){
            alert("Ops...check your email or password.");
            return;
        }
        saveSession(email, session);

         window.location.href = "home.html";


     }


});





// CRIAR CONTA
// no index tem a  modal de criacao de usuario, com id, vamos pegar a modal criada e programar pra nao aparecer mais depois que a conta foi criada


document.getElementById("create-form").addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById("email-create-input").value;
    const password =document.getElementById("password-create-input").value;

    if(email.length < 5){
        alert("Please fill in the field with a valid email address.");
        return
    }

    if(password.length < 4){
        alert("Enter a password with at least 4 digits.");
        return
    }
    saveAccount({
        login: email,
        password: password,
        transactions:[]
    })
    myModal.hide();
    alert("Congrats, account create with sucess!")
});

function checkLogged(){
    if(session){
        sessionStorage.setItem("logged", session);
        logged = session;
    }
    if (logged){
        saveSession(logged,session);
        window.location.href = "home.html"
    }

}
function saveAccount(data){
    // console.log(data);
    localStorage.setItem(data.login, JSON.stringify(data)) 
    // login usado pra identificar, e o user passada mesmo sendo um objeto precisa ser passado como string
        // armazenamento local da aplicacao 

}

function getAccount(key){
    const account = localStorage.getItem(key);

    if(account){
        return JSON.parse(account);
    }

    return "";
}


function saveSession(data, saveSession){
    if(saveSession ){
        localStorage.setItem("session" , data);
    }
    sessionStorage.setItem("logged", data)
}