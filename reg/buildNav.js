function buildNav(logType){
  if (logType != 2){
    nav = document.getElementById("nav");
    navBody = cBody();
    nav.appendChild(navBody);

    if (logType == 0){
      var loginButt = cButton("Login","./auth.html")
      window.addEventListener("click", loginButtClick);
      navBody.appendChild(loginButt);
    } else {
      navBody.appendChild(cButton("Locker","./locker.html"));
      navBody.appendChild(cDrop(cButton("How To's", "#"), new Array(
        cButton("Report", "./guide-report.html"))));
    }

  //  navBody.appendChild(cDrop(cButton("Drop", "#"), new Array(
  //    cButton("Drop3", "#"),
  //    cButton("Drop2", "#"),
  //    cButton("Drop1", "#")
  //  )));
  //  More here;

    nav.style.display = "block";
  }
}

function loginButtClick(){
  localStorage.setItem("r",window.location.href);
}

function cBody(){
  return document.createElement("ul");
}

function cButton(name,ref){
  button = document.createElement("li");
  txt = document.createTextNode(name);
  link = document.createElement("a");
  link.href = (ref);
  link.appendChild(txt);
  button.appendChild(link);
  return button;
}

function cDrop(parentB, arrayBs){
  var dropBody = cBody();
  var aLength = arrayBs.length;
  var i;
  for (i=0; i < aLength; i++) {
    dropBody.appendChild(arrayBs[i]);
  }
  parentB.appendChild(dropBody);
  return parentB;
}
