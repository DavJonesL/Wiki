function getK(val){
  if (val == "25E85E7D6E8CF97A2E8EA90A04F0E297A54ECEAB") {
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
  localStorage.setItem("e",Date.now()+28800000);
}
