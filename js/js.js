document.addEventListener("scroll",shadow)
function shadow()
{
  if(document.body.scrollTop>40 || document.documentElement.scrollTop>40){
      document.getElementsByClassName("navbar")[0].style.boxShadow="0px 1px 10px 0px gray";
  }
  else{
    document.getElementsByClassName("navbar")[0].style.boxShadow="none";
  }
}
//check url for strng and bold correct option on navbar
if(window.location.href.indexOf("index.html")>=0) {
  document.getElementById("home").className="nav-link active";
}
else if(window.location.href.indexOf("recipe.html")>=0) {
  document.getElementById("recipe").className="nav-link active";
}
else if(window.location.href.indexOf("calc.html")>=0) {
  document.getElementById("calc").className="nav-link active";;
}
else if(window.location.href.indexOf("contact.html")>=0) {
  document.getElementById("contact").className="nav-link active";
}
else if(window.location.href.indexOf("about.html")>=0) {
  document.getElementById("about").className="nav-link active";
}
else if(window.location.href.indexOf("thank.html")>=0) {

}
else {
  document.getElementById("home").className="nav-link active";
}
