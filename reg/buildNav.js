function buildNav(){
  nav = document.getElementById("nav");
  navBody = cBody();
  nav.appendChild(navBody);

  navBody.appendChild(cButton("Home","./"));
  navBody.appendChild(cDrop(cButton("Drop", "#"), new Array(
    cButton("Drop3", "#"),
    cButton("Drop2", "#"),
    cButton("Drop1", "#")
  )));
  //More here;
  
  nav.style.display = "block";
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
