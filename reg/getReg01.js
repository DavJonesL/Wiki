function getK(val){
  switch(val) {
              case "E6B2B334814E5FA595D5F332AA53C4FC98B17324": return 1; break;
       case "99122B474D9C5C858FE1933E659089FEC20543B0": return 1; break;
       case "6ABCAF8502A1D09C205A038191996AD94C3DFD6F": return 1; break;
       case "2AD1B1F09903C2CE03C832298BE23EFEE99864D5": return 1; break;
       case "CECAAF8823A95417460709C0C57A5324EC7CA87A": return 1; break;
       case "0C0640B7FC8598B41AE1B363B3BACC3619C565C5": return 1; break;
       case "6AB49A68CDB05B73AB97F202C56F841F0CEC4EAD": return 1; break;
       case "2C387720F6761B139F5B1EEEE086452D8172CA44": return 1; break;
       case "195320C10AE8162E5F93F2DD06417136C8F15F57": return 1; break;
       case "13B2B1680F0DBFC137DF8E79BD925ACC4C07C60F": return 1; break;
       case "323823EE0781701AAB3B39468D53746369C31F0B": return 1; break;
       case "13CAC4EB49BA40BEA7B32B4FC424618AED37CB75": return 1; break;
       case "E3900DF6925BABFC4D4E91FB207CDB06FD1E8207": return 1; break;
       case "1CC34208F11C082C7446E0747F0AE15711DE5538": return 1; break;
       case "F0549C797E58CACB84FC112774D51BBA51FDE18B": return 1; break;
       case "C7FEFC111374EC74F13E6FC8B798B0CC1FD7D22A": return 1; break;
       case "1138DD37FA96932899B34936FF6CD0F7ECD72AE1": return 1; break;
       case "6D3DCC8E43A7A87F5343B64D484BAA899C5C1D40": return 1; break;
       case "54AB6EFE075A029FBF20E6F29E21470451C4E0EE": return 1; break;
       case "69624C90371D4A2277216074647BD7A5FE095EE0": return 1; break;
       case "CAE5311DC46B83FD851782A9ABFB2F3E9F19C40B": return 1; break;
       case "DF7EF87187BA962BD12E36D1C4FC9866258CFD5C": return 1; break;
       case "0A6C5CFF7E8B736352F8C79D65E1C9FA59DFFD8A": return 1; break;
       case "57156F8E970A8848059EDC769FCA937A80618B0F": return 1; break;
       case "5A9DEA4882E175F48FDDCC2860328AE0A5F69643": return 1; break;
       case "F757538F6AFA168C17F59D0278C52EFE1F1C8832": return 1; break;
       case "6897194DDD451460606F4FB75326C41E4AA55710": return 1; break;
       case "F13FA414322B9281EB255A44450A83D3828C4AA7": return 1; break;
       case "6D8C104ACA49B55343D83FF565C3356FDD07D793": return 1; break;
       case "E17D4EABDD11164AD466BC134074523BDF387FD6": return 1; break;
       case "137C18FE76432D0CFA626702140A3E385639DBED": return 1; break;
       case "C81AFB84E4E7FCA54AAD2C64BE78A094E8236C27": return 1; break;
       case "EA7EDBF45420CFF0C45310877118417E380EF135": return 1; break;
       case "4A8DA25FCE3BD7D7F1C4D8640AC8AE604732E265": return 1; break;
       case "9993E11C09E6DD10EE5C5143A0A3D5CF2F7AA83C": return 1; break;
       case "A2D2F9D39856C2674BD8DCA93AB75DCA6BDCC09E": return 1; break;
       case "699367050B29C54ED0F643F87235022AF29F87EB": return 1; break;
       case "07393D804603C115C727C046D5564CC75E1144CD": return 1; break;
       case "AD1DEC5DB0984BF708526DF5B3CDBB6D0AF24D35": return 1; break;
  default: return 0;
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
