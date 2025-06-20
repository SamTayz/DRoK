var open=false;
function nav() 
{
    if (open == true) 
    {   
        document.getElementById("Text").style.left = "";
        document.getElementById("nav").style.display = "none";
        document.getElementById("lines").classList.add("rotate2");
        document.getElementById("lines").classList.remove("rotate");
        open = false;
    }
    else 
    {
        document.getElementById("Text").style.left = "30%";
        document.getElementById("nav").style.display = "block";
        document.getElementById("lines").classList.add("rotate");
        document.getElementById("lines").classList.remove("rotate2");
        open = true;
    }
} 