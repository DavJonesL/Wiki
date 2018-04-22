function buildPage(){
  document.getElementById("header-wrapper").style.backgroundImage = "url('./images/banner6.jpg')";
  changeStep(assessStep());
}

function assessStep(){
  if (localStorage.getItem("reportCurrStep") === null){return "Basic";}
  return localStorage.getItem("reportCurrStep");
}

function changeStep(val){
  resetDisplay();
  document.getElementById(val).style.display = "block";
  document.getElementById("currentStep").value = val;
  localStorage.setItem("reportCurrStep",val);
}

function resetDisplay(){
  document.getElementById("Basic").style.display = "none";
  document.getElementById("BGs").style.display = "none";
  document.getElementById("Skills").style.display = "none";
  document.getElementById("Shots").style.display = "none";
}
