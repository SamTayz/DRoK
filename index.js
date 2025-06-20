var open=false;
function nav() 
{
    if (open == true) 
    {   
        document.getElementById("Text").style.left = "";
        document.getElementById("nav").style.display = "none";
        console.log("if");
        open = false;
    }
    else 
    {
        document.getElementById("Text").style.left = "20%";
        document.getElementById("nav").style.display = "block";
        console.log("else");
        open = true;
    }
    console.log(document.getElementById("Text")).left;
}