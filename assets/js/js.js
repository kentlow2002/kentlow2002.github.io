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
if(window.location.href.indexOf("projects")>=0) {
  document.getElementById("projects").className="nav-link active";
}
else if(window.location.href.indexOf("journey")>=0) {
  document.getElementById("journey").className="nav-link active";;
}
else if(window.location.href.indexOf("contact")>=0) {
  document.getElementById("contact").className="nav-link active";
}
else if(window.location.href.indexOf("about")>=0) {
  document.getElementById("about").className="nav-link active";
}
