function valtition(){
    if(document.formFill.Username.value==""){
        document.getElementById("result").innerHTML = "Enetr Username*";
        return false;
    }
    
    else if(document.formFill.Username.value.length<6){
        document.getElementById("result").innerHTML = "Atlist Six Letter*";
        return false;
    }

    else if(document.formFill.Email.value==""){
        document.getElementById("result").innerHTML = "Enter Email*";
        return false;
    }
    else if(document.formFill.Password.value==""){
        document.getElementById("result").innerHTML = "Enter Password*";
        return false;
    }

    else if(document.formFill.ConformPassword.value==""){
        document.getElementById("result").innerHTML = "Enter Conform Password*";
        return false;
    }
    else if(document.formFill.Password.value!==document.formFill.ConformPassword.value){
        document.getElementById("result").innerHTML = "Password Don't Match*";
        return false;
    }
    else if(document.formFill.Password.value.length<6){
        document.getElementById("result").innerHTML = "Password Must be 6-digits";
        return false;
    }
    else if(document.formFill.Password.value == document.formFill.ConformPassword.value){
        popup.classList.add("open-side")
        return false;
    }
}
var popup = document.getElementById('popup');

function closeSlide(){
    popup.classList.remove("open-side");
}