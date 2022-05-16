let input;

function fncDisplayInfo() {
    input=parseInt(document.frm.uname.value);

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState==4 && this.status == 200) {
            myFunction(this);
        }
    }
    xmlhttp.open("GET", "user.xml", true);
    xmlhttp.send();
}

function myFunction(xml) {
    console.log(xml);
    let xmlDoc = xml.responseXML;
    let roll_number = xmlDoc.getElementsByTagName("roll_number");
    let names = xmlDoc.getElementsByTagName("name");
    let college = xmlDoc.getElementsByTagName("college");
    let branch = xmlDoc.getElementsByTagName("branch");
    let year = xmlDoc.getElementsByTagName("year_of_joining");
    let email = xmlDoc.getElementsByTagName("email");
    let result = false;
    for(let i=0;i<roll_number.length;i++){
        if(input==roll_number[i].childNodes[0].nodeValue){
            document.getElementById("result").innerHTML="<strong>Roll Number: </strong>"+roll_number[i].childNodes[0].nodeValue + "<br>"
            + "<strong>Name: </strong>" + names[i].childNodes[0].nodeValue + "<br>"
            + "<strong>College: </strong>" + college[i].childNodes[0].nodeValue + "<br>"
            + "<strong>Branch: </strong>" + branch[i].childNodes[0].nodeValue + "<br>"
            + "<strong>Year: </strong>" + year[i].childNodes[0].nodeValue + "<br>"
            + "<strong>E-mail: </strong>" + email[i].childNodes[0].nodeValue;
            result = true;
        }
    }
    if(result == false) {
        document.getElementById("result").innerHTML="No such user found";
    }
}