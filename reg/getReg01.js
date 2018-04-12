function getK(val){
  if (val == "25E85E7D6E8CF97A2E8EA90A04F0E297A54ECEAB") {
    return 1;
  } else if (val == "1911FDD636BAF809B67F14E47C1D6F7F24BC9FD9") {
    return 2;
  } else {
    return 0;
  }
};

function assessIntegrity() {
  if (!supportsStorage()) {
		window.location.href = '/badconnection';
		return;
	}
document.title = "supports"
  if (document.title != "Login"){
    if (!isLogged()) {
      localStorage.clear();
  		window.location.href = '/auth';
  		return;
  	}
    document.title = "is logged";
    if (!validLog(localStorage.getItem("sess"), parseInt(localStorage.getItem("expire")))) {
      localStorage.clear();
      window.location.href = '/auth';
  		return;
    }
    document.title = "valid log";
  }
	return;
};

function supportsStorage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
};

function isLogged(){
    return localStorage.getItem("sess") != null;
};

function validLog(k,d){
  return (getK(k) > 0 && Date.now() < d);
};

function regSession(ID){
  localStorage.setItem("sess",ID);
  localStorage.setItem("expire",Date.now()+10000);
};
