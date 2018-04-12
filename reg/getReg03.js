function assessIntegrity() {
  if (!supportsStorage()) {
		window.location.href = '/404.html';
		return;
	}
	if (!isLogged() && document.title != "Login") {
		window.location.href = '/auth.html';
		return;
	}
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

function regSession(ID){
  localStorage.setItem("sess",ID);
}
