var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var btn=document.getElementById('button');
btn.addEventListener('click',check);

function check()
{
    var at = document.getElementById("email").value.indexOf("@");
    var password = document.getElementById("password").value;
    var name = document.getElementById("name").value;
    submitOK = "true";
    if (name.length < 6) {
        submitOK = "false";
    } 

    if (password.length < 6) {
        submitOK = "false";
    }

    if (at == -1) {
        submitOK = "false";
    }

    if (submitOK == "false") {
        alert("Enter correct details")
    }
}
