function CheckPass() {
    const firstpass = document.querySelector("#password1").value;
    const secondpass = document.querySelector("#password2").value;

    if (firstpass == "") {
        document.getElementById("password1").style = "border: 1px solid red";
        document.getElementById("password2").style = "border: 1px solid red";
        return false;
    }
    else if (firstpass != secondpass) {
        document.getElementById("password1").style = "border: 1px solid green";
        document.getElementById("password2").style = "border: 1px solid red";
        return false;
    }
    else if (firstpass == secondpass) {
        document.getElementById("password1").style = "border: 1px solid green";
        document.getElementById("password2").style = "border: 1px solid green";
        return true;
       
    }
};

function LoadEventListner() {
    document.querySelector(".form_auth-btn").addEventListener('click', (evnt) => {
       /* evnt.preventDefault();*/
        if (!CheckPass()) {
            let buff = document.getElementById("password2");
            buff.placeholder= "Password is incorrect";
            buff.value = "";
        }
    });
    document.querySelector("#password2").addEventListener('change', () => {
        CheckPass();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    LoadEventListner();

});