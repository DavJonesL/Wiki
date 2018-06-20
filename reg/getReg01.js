function getK(val){
  if (val == "A3601C9200D5B288DC94DAC34F1DB38A123C0166" || val == "6F8A3DF60C96AE43D0AF739B128A88C72C3541A6" ||
  val == "FAD24F2EFCD68C990CAEFBF4A0B33A234DA04B81" || val == "26135AF5BDF58387E718C63635A4E6A27B4F6CAA" ||
  val == "CB8F9836D87F05A7E73D184AD0CFFB4D4137E027" ) {
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
