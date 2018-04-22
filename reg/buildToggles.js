function buildToggles(pageName){
  switch (pageName) {
    case "reportGuide":
      assessDivToggle("reportToggleDiv01", 1);
      assessDivToggle("reportToggleDiv02", 2);
      break;
  }
}

function assessDivToggle(ID,IDX){
  if (divIsToggled(ID) == "false"){
    document.getElementById(ID).innerHTML = "Hide Content";
    document.getElementById("Div" + IDX).style.display = "block";
  } else {
    document.getElementById(ID).innerHTML = "Show Content";
    document.getElementById("Div" + IDX).style.display = "none";
  }
}

function toggleDiv(ID,IDX){
  if (divIsToggled(ID) == "false"){
    localStorage.setItem(ID,true);
  } else {
    localStorage.setItem(ID,false);
  }
  assessDivToggle(ID, IDX);
}

function divIsToggled(ID){
  if (localStorage.getItem(ID) === null){return "false";}
  return localStorage.getItem(ID);
}
