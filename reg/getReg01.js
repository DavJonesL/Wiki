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
		return false;
	}
  if (document.title != "Login"){
    if (isLogged()) {
      document.title = "Logged";
      localStorage.setItem("level","Logged");
      if (validLog(localStorage.getItem("sess"), parseInt(localStorage.getItem("expire")))) {
        document.title = "Valid";
        localStorage.setItem("level","validLog");
        return true;}
    }
    if (parseInt(localStorage.getItem("expire")) === localStorage.getItem("expire")){
      localStorage.setItem("level","same thing");
    } else {localStorage.setItem("level","NOT same thing");}
    //localStorage.clear();

    window.location.href = '/auth';
    return false;
  }
	return true;
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
  localStorage.setItem("level",Date.now()+" / "+d);
  return (getK(k) > 0 && Date.now() < d);
};

function regSession(ID){
  localStorage.setItem("sess",ID);
  localStorage.setItem("expire",Date.now()+10000);
};
