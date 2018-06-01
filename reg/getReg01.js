function getK(val){
  if (val == "62A7F18C0EFF0ECF196069E1EF3A19602F08AE4F" || val == "D63E7257559B6702E0FDE74D3814C27598E34B61" || val == "D04CFFE6A7384CE61F56E7EB0B482256DD4A68D8" || val == "6F88697E00B16C76C521980DF41E3676BA11C793") {
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
