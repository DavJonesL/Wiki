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
		window.location.href = "./badconnection.html";
		return false;
	}
  if (document.title != "Login"){
    if (!isLogged()) {
      window.location.href = "./auth.html";
      return false;
    }
  }
  return true;
}

function authenticate(k) {
  if (validLog(k, parseInt(localStorage.getItem("expire")))) {return true}
  localStorage.clear();
  window.location.href = "/auth";
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
    return localStorage.getItem("sess") != null;
}

function validLog(k,d){
  if (getK(k) > 0 && Date.now() < d) {return true}
  return false;
}

function regSession(ID){
  localStorage.setItem("sess",ID);
  localStorage.setItem("expire",Date.now()+10000);
}
