function getK(val){
  if (val == "EE55FB9A8BA946174795EF301B58E3E892C456FC" || val == "5F16F7EA6CC1629548A5F96EC1285D3884B21C7D") {
    return 1;
  } else if (val == "1911FDD636BAF809B67F14E47C1D6F7F24BC9FD9") {
    return 2;
  } else {
    return 0;
  }
}

function validate() {
  if (!supportsStorage()) {
		window.location.href = "./badconnection";
		return false;
	}
  if (document.title != "Login"){
    if (!isLogged()) {
      window.location.href = "./auth";
      localStorage.setItem("r",window.location.href);
      return false;
    }
  }
  return true;
}

function authenticate(k) {
  if (validLog(k)) {return true}
  localStorage.removeItem("s");
  localStorage.removeItem("e");
  localStorage.setItem("r",window.location.href);
  window.location.href = "./auth";
  return false;
}

function supportsStorage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

function isLogged(){
    return (localStorage.getItem("s") != null && localStorage.getItem("e") != null);
}

function isRedirect(){
    return localStorage.getItem("r") != null;
}

function validLog(k){
  return (getK(k) > 0 && Date.now() < parseInt(localStorage.getItem("e")));
}

function regSession(ID){
  localStorage.setItem("s",ID);
  localStorage.setItem("e",Date.now()+43200000);
}
