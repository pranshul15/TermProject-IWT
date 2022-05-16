let text=document.getElementById('text');
let k=0;
setInterval(blink,500)

function blink()
{
    if(text.style.visibility === "hidden")
    {
        text.style.visibility="visible";
    }
    else
    {
        text.style.visibility="hidden"
    }
    k++;
}
blink();