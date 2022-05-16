function loadXMLDoc(){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status == 200){
            myFunction(this);
        }
    }
    xmlhttp.open("GET","../Question 13/books.xml",true);
    xmlhttp.send();
}

function myFunction(xml){
    let xmlDoc = xml.responseXML;
    // console.log(xmlDoc);
    let author_array = xmlDoc.getElementsByTagName("author");
    // console.log(author_array);
    let title_array = xmlDoc.getElementsByTagName("title");
    // console.log(title_array);
    let price_array = xmlDoc.getElementsByTagName("price");
    // console.log(price_array);
    let genre_array = xmlDoc.getElementsByTagName("genre");
    // console.log(genre_array);
    let table = document.getElementById("books");
    for(let i = 0; i < author_array.length; i++){
        let row = table.insertRow(i+1);
        let author = row.insertCell(0);
        let title = row.insertCell(1);
        let price = row.insertCell(2);
        let genre = row.insertCell(3);
        author.innerHTML = author_array[i].childNodes[0].nodeValue;
        title.innerHTML = title_array[i].childNodes[0].nodeValue;
        price.innerHTML = price_array[i].childNodes[0].nodeValue;
        genre.innerHTML = genre_array[i].childNodes[0].nodeValue;
    }
}