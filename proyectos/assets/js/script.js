document.getElementById("btn_login").addEventListener("click", iniciarSesion);
document.getElementById("btn_register").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

var content_login_register = document.querySelector(".content_login-register");
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var rear_box_login = document.querySelector(".box login_box");
var rear_box_register = document.querySelector(".box register_box");

function anchoPage(){
    if(window.innerWidth > 850){
        rear_box_login.style.display = "block";
        rear_box_register.style.display = "block";
    }else{
        rear_box_register.style.display = "block";
        rear_box_register.style.opacity = "1";
        rear_box_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        content_login_register.style.left = "0px";
        
    }
}

anchoPage();

function iniciarSesion(){

    if(window.innerWidth > 850){
        formulario_register.style.display = "none";
        content_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        rear_box_register.style.opacity = "1";
        rear_box_login.style.opacity = "0";
    }else{
        formulario_register.style.display = "none";
        content_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        rear_box_register.style.display = "block";
        rear_box_login.style.display = "none";
    }
}

function register(){

    if(window.innerWidth > 850){
        formulario_register.style.display = "block";
        content_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        rear_box_register.style.opacity = "0";
        rear_box_login.style.opacity = "1";
    }else{
        formulario_register.style.display = "block";
        content_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        rear_box_register.style.display = "none";
        rear_box_login.style.display = "block";
        rear_box_login.style.opacity = "1";
    }
}

