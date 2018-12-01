function buildPage(){
  document.getElementById("lastUpdateP").innerHTML = "<b>Last Update</b> 01/12/2018";
  document.getElementById("header-wrapper").style.backgroundImage = "url('./images/banner1.jpg')";
  assessRP01();
  loopUpdate();
}

function assessRP01(){
  if (RP01isToggled() == "false"){
    document.getElementById("RP01Button").innerHTML = "Hide Roleplay";
    document.getElementById("RPDiv").style.display = "block";
  } else {
    document.getElementById("RP01Button").innerHTML = "Show Roleplay";
    document.getElementById("RPDiv").style.display = "none";
  }
}

function toggleRP01(){
  if (RP01isToggled() == "false"){
    localStorage.setItem("lockerSkip01",true);
  } else {
    localStorage.setItem("lockerSkip01",false);
  }
  assessRP01();
}

function RP01isToggled(){
  if (localStorage.getItem("lockerSkip01") === null){return "false";}
  return localStorage.getItem("lockerSkip01");
}

function loopUpdate() {
  populateTable(document.getElementById("cityInput").value);
  var t = setTimeout(loopUpdate, 1000);
}

function swapCity() {
  var cityName = document.getElementById("cityInput").value;
  switch (cityName) {
    case "All Cities":
      populateTable("All");
      break;
    case "Las Vegas":
      populateTable("LV");
      break;
    case "Los Angeles":
      populateTable("LA");
      break;
    case "New York":
      populateTable("NY");
      break;
    case "Philadelphia":
      populateTable("PH");
      break;
    case "Chicago":
      populateTable("CH");
      break;
    case "Detroit":
      populateTable("DT");
      break;
    case "Seattle":
      populateTable("SEA");
  }
}

function populateTable(passedCity) {
  var rawArray = popAllCharsArray();
  document.getElementsByTagName("tbody").item(0).innerHTML = ""

  var statCount = 0;
  var i;
  for (i = 0; i < rawArray.length; i++) {
    if (passedCity == "All Cities" || rawArray[i].city == passedCity) {
      if (passedCity == "Hiding" && rawArray[i].city == passedCity) {
        addRow(rawArray[i].name, rawArray[i].time, rawArray[i].location);
        statCount++;
        continue;
      }
      if (rawArray[i].time > -21600000 && rawArray[i].time < 86400000 && rawArray[i].city != "Hiding") {
        addRow(rawArray[i].name, rawArray[i].time, rawArray[i].location);
        statCount++;
      }
    }
  }
    document.getElementById("showingP").innerHTML = statCount + " character(s) in <b>" + document.getElementById("cityInput").value + ".</b>";
    return
  }

function addRow(name, time, location){
   if (!document.getElementsByTagName) return;
   tabBody=document.getElementsByTagName("tbody").item(0);
   row=document.createElement("tr");
   cell1 = document.createElement("td");
   cell2 = document.createElement("td");
   cell3 = document.createElement("td");
   cName=document.createTextNode(name);
   readyState=document.createTextNode(calcReady(time));
   location=document.createTextNode(location);
   link = document.createElement("a");
   link.appendChild(cName);
   link.href = ("https://mafiareturns.com/news/uprofile.php?id=" + name);
   cell1.appendChild(link);
   cell2.appendChild(readyState);
   cell3.appendChild(location);
   row.appendChild(cell1);
   row.appendChild(cell2);
   row.appendChild(cell3);
   tabBody.appendChild(row);
   return
}

function calcReady(difference) {
    if (difference < 0) {
      difference = Math.abs(difference);
      var hours = Math.floor(((difference / 1000) / 60) / 60);
      difference = difference - (((hours*60)*60)*1000);
      var minutes = Math.floor((difference/1000) / 60);
      difference = difference - ((minutes*60)*1000);
      var seconds = Math.floor(difference/1000);
      return "Ready (" + padN(hours) + ":" + padN(minutes) + ":" + padN(seconds) + "h)";
    } else {
      var hours = Math.floor(((difference / 1000) / 60) / 60);
      difference = difference - (((hours*60)*60)*1000);
      var minutes = Math.floor((difference/1000) / 60);
      difference = difference - ((minutes*60)*1000);
      var seconds = Math.floor(difference/1000);
      return padN(hours) + ":" + padN(minutes) + ":" + padN(seconds) + "h";
    }
  }

function padN(Num) {
  if (Num < 10) {
    return "0" + Num;
    } else {
      return Num;
  }
}

function getUTC(now) {
  now = new Date(now.toUTCString());
  return now.getTime() + (now.getTimezoneOffset() * 60000);
}

function popAllCharsArray() {
  var rawArray = [];
  <!-- Start Here -->
		rawArray.push({name:"Packwood", time: new Date(2018,11,1,3,51,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"GroverSullens", time: new Date(2018,11,1,5,8,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"ellis", time: new Date(2018,11,1,5,33,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"_Bonnie_", time: new Date(2018,11,1,6,29,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"ThadPeatman", time: new Date(2018,11,1,6,34,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"EldonRogers", time: new Date(2018,11,1,8,2,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Damien_Duarte", time: new Date(2018,11,1,8,9,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"tabondjimek", time: new Date(2018,11,1,8,13,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"MariaBeilke", time: new Date(2018,11,1,8,32,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"GodMother", time: new Date(2018,11,1,8,32,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Bradley_Wadding", time: new Date(2018,11,1,8,47,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Joel_Petaway", time: new Date(2018,11,1,9,29,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Spammdonis", time: new Date(2018,11,1,11,3,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Chick", time: new Date(2018,11,1,12,6,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"KarolineSchmaling", time: new Date(2018,11,1,12,54,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"china", time: new Date(2018,11,1,13,7,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"ivelisse_voracek", time: new Date(2018,11,1,13,15,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"MarkGarcia", time: new Date(2018,11,1,14,52,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"oldlei", time: new Date(2018,11,1,15,26,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Luckydlb", time: new Date(2018,11,1,16,17,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Vallez", time: new Date(2018,11,1,16,24,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Hunker", time: new Date(2018,11,1,16,47,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"sarisky", time: new Date(2018,11,1,16,56,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"EdwardMedosch", time: new Date(2018,11,1,17,22,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Sawsauge", time: new Date(2018,11,1,17,37,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Francisdowell", time: new Date(2018,11,1,17,40,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"StephenZumstein", time: new Date(2018,11,1,17,41,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Jimking", time: new Date(2018,11,1,17,53,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Vincent_Collins", time: new Date(2018,11,1,18,16,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Modesto_Koehler", time: new Date(2018,11,1,18,29,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"BigSilvio", time: new Date(2018,11,1,19,9,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Randa_Froehner", time: new Date(2018,11,1,19,54,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"DaftLeaders", time: new Date(2018,11,1,20,53,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Anthony_Mayo", time: new Date(2018,11,1,22,55,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Rookwood", time: new Date(2018,11,1,23,28,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"BrianSchuchat", time: new Date(2018,11,2,0,1,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Evan_Flebbe", time: new Date(2018,11,2,0,24,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Grajeda", time: new Date(2018,11,2,1,8,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Hilda_Pratt", time: new Date(2018,11,2,1,31,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"ChadBohnsack", time: new Date(2018,11,2,2,2,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"cherise_deloy", time: new Date(2018,11,2,2,34,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Koetz", time: new Date(2018,11,2,3,29,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"LetishaKappelmann", time: new Date(2018,11,2,3,34,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Ruth_casassa", time: new Date(2018,11,2,3,48,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Alan_Koeller", time: new Date(2018,11,2,4,13,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Roger-Lodeiro-", time: new Date(2018,11,2,4,45,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Tench", time: new Date(2018,11,2,4,49,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Hattie_Sherlock", time: new Date(2018,11,2,4,50,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"JohnnyLoyd", time: new Date(2018,11,2,5,0,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Strycker", time: new Date(2018,11,2,5,38,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Tiblier", time: new Date(2018,11,2,6,21,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"JoeEligio", time: new Date(2018,11,2,6,29,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"SerenaMabee", time: new Date(2018,11,2,6,31,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"dre", time: new Date(2018,11,2,6,54,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Stefanie", time: new Date(2018,11,2,8,3,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Callen", time: new Date(2018,11,2,9,11,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Tighe", time: new Date(2018,11,2,9,14,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"tamplin", time: new Date(2018,11,2,10,19,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Jedi", time: new Date(2018,11,2,10,54,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"WilbertSwilley", time: new Date(2018,11,2,10,59,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"ChristinaRoseboro", time: new Date(2018,11,2,11,26,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Xu", time: new Date(2018,11,2,11,29,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Jefferyliedke", time: new Date(2018,11,2,13,5,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Annaliese", time: new Date(2018,11,2,13,47,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"InSchoolKids", time: new Date(2018,11,2,13,55,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"wadelabrecque", time: new Date(2018,11,2,14,38,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"DeanMcIff", time: new Date(2018,11,2,15,7,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"scruffy", time: new Date(2018,11,2,15,54,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Royaluke", time: new Date(2018,11,2,16,6,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"AlfredGuess", time: new Date(2018,11,2,18,31,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"ZOMG", time: new Date(2018,11,2,19,25,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"oduska", time: new Date(2018,11,2,20,47,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Matilde", time: new Date(2018,11,2,20,52,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Decuir", time: new Date(2018,11,2,20,54,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"beesmiley", time: new Date(2018,11,2,21,1,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Barboza", time: new Date(2018,11,2,21,42,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Sarah_Farron", time: new Date(2018,11,2,21,55,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Nephist", time: new Date(2018,11,2,23,2,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"GarthBodine", time: new Date(2018,11,2,23,52,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Mitchell_Penn", time: new Date(2018,11,2,23,52,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"TimeLord", time: new Date(2018,11,3,0,11,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"jeffrey26", time: new Date(2018,11,3,0,22,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"sherrer", time: new Date(2018,11,3,0,23,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"pacitti-", time: new Date(2018,11,3,0,50,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"steven_cuna", time: new Date(2018,11,3,1,25,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"ChastityMiller", time: new Date(2018,11,3,3,16,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"DustinWhitted", time: new Date(2018,11,3,4,40,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"JackGustafson", time: new Date(2018,11,3,4,52,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Alan_Gettman", time: new Date(2018,11,3,4,55,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Agunzi", time: new Date(2018,11,3,5,29,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Margret", time: new Date(2018,11,3,6,0,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Ruth_Griffin", time: new Date(2018,11,3,6,16,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"deborah_sims", time: new Date(2018,11,3,6,36,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"IreneGroves", time: new Date(2018,11,3,6,46,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Perez", time: new Date(2018,11,3,6,51,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"garfinkel", time: new Date(2018,11,3,7,34,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"CarsonErickson", time: new Date(2018,11,3,8,42,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"ZacharyEsbrandt", time: new Date(2018,11,3,9,33,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"cortez_hibbitts", time: new Date(2018,11,3,11,15,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Wanda", time: new Date(2018,11,3,11,15,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"_Maestas", time: new Date(2018,11,3,11,50,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"KevinOsmun", time: new Date(2018,11,3,12,16,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"FreddyIglesias", time: new Date(2018,11,3,12,44,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"OmaMinnick", time: new Date(2018,11,3,13,21,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"james_parker", time: new Date(2018,11,3,17,49,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Richard_Baggio", time: new Date(2018,11,3,17,53,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"ReGaiN", time: new Date(2018,11,3,18,1,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Jenderer", time: new Date(2018,11,3,18,10,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"arndt", time: new Date(2018,11,3,18,38,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Patrina_Borok", time: new Date(2018,11,3,18,44,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Dottie", time: new Date(2018,11,3,20,29,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"GotlandYard", time: new Date(2018,11,3,20,36,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Serafina", time: new Date(2018,11,3,20,37,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Mark_Wright", time: new Date(2018,11,3,21,26,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Ojeda", time: new Date(2018,11,3,21,58,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"ShirleneHarvill", time: new Date(2018,11,3,22,4,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"genevieve_hayes", time: new Date(2018,11,3,22,20,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Laurence_Brainerd", time: new Date(2018,11,3,23,12,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Barbara_miniuk", time: new Date(2018,11,3,23,59,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Micheal-Speice", time: new Date(2018,11,4,0,8,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Bise", time: new Date(2018,11,4,0,36,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Krank", time: new Date(2018,11,4,0,55,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Jacqueline_Head", time: new Date(2018,11,4,1,22,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"bigpimp", time: new Date(2018,11,4,1,24,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"MissBoss", time: new Date(2018,11,4,1,33,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Tony_Herbert", time: new Date(2018,11,4,1,41,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"perkiss", time: new Date(2018,11,4,4,10,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"BrittaKiley", time: new Date(2018,11,4,4,53,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"PacificBoast", time: new Date(2018,11,4,5,40,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Sgtluther", time: new Date(2018,11,4,5,50,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"blarg", time: new Date(2018,11,4,6,4,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"GregoryWichland", time: new Date(2018,11,4,6,21,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Hettie_Golba", time: new Date(2018,11,4,6,44,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"ShuLivshits", time: new Date(2018,11,4,7,33,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"rutenbar", time: new Date(2018,11,4,7,47,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Hechinger", time: new Date(2018,11,4,8,1,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"forrister", time: new Date(2018,11,4,8,5,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"CherylGiannini", time: new Date(2018,11,4,9,18,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"horace_alcantara", time: new Date(2018,11,4,9,40,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Grebor", time: new Date(2018,11,4,10,14,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Lacko", time: new Date(2018,11,4,10,20,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"AllenBeese", time: new Date(2018,11,4,10,53,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"FrankBaird", time: new Date(2018,11,4,11,0,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"galina", time: new Date(2018,11,4,11,6,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Nedelman", time: new Date(2018,11,4,11,46,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"LeifInzana", time: new Date(2018,11,4,11,49,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"ShaneSwestka", time: new Date(2018,11,4,12,55,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"ChrisMayeux", time: new Date(2018,11,4,13,25,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"VincentDelfuente", time: new Date(2018,11,4,13,38,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Basil_Teager", time: new Date(2018,11,4,14,33,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Dylan", time: new Date(2018,11,4,14,54,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"schange", time: new Date(2018,11,4,15,12,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Ehrmann", time: new Date(2018,11,4,16,12,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"DannieHarmon", time: new Date(2018,11,4,16,15,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"MiguelHereda", time: new Date(2018,11,4,16,21,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Lizette", time: new Date(2018,11,4,17,26,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"SeanHalter", time: new Date(2018,11,4,17,35,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"ClarenceWalsh", time: new Date(2018,11,4,18,17,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"AracelyBosserman", time: new Date(2018,11,4,18,17,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"ChristopherBrothers", time: new Date(2018,11,4,18,18,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Hyman_Noland", time: new Date(2018,11,4,18,18,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Olejniczak", time: new Date(2018,11,4,18,48,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"IvanBuseck", time: new Date(2018,11,4,19,16,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Dwight_teesdale", time: new Date(2018,11,4,19,17,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Kerry_Tutterow", time: new Date(2018,11,4,19,25,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"RogerRodriguez", time: new Date(2018,11,4,19,39,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"CraigHernandes", time: new Date(2018,11,4,20,10,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Nicolson", time: new Date(2018,11,4,20,28,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"KarlMarx", time: new Date(2018,11,4,20,33,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Glenn_Mimozo", time: new Date(2018,11,4,21,11,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"BridgetKazan", time: new Date(2018,11,4,21,20,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Diane_Kortz", time: new Date(2018,11,4,22,25,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Roman_Enrico", time: new Date(2018,11,5,1,9,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Adolph_Cerventez", time: new Date(2018,11,5,1,11,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"vasilis13", time: new Date(2018,11,5,1,52,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Perry_Beverly", time: new Date(2018,11,5,2,2,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"roger_gaver", time: new Date(2018,11,5,2,8,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Linda_Vario", time: new Date(2018,11,5,2,22,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Thomas_Holt", time: new Date(2018,11,5,2,22,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Tenshck", time: new Date(2018,11,5,2,29,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"GarfieldBrumlow", time: new Date(2018,11,5,2,47,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Tsou", time: new Date(2018,11,5,3,16,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Andrew_Ihle", time: new Date(2018,11,5,3,43,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"KatieObyrne", time: new Date(2018,11,5,3,47,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Stanley_Torrez", time: new Date(2018,11,5,3,51,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Kennethbellingtier", time: new Date(2018,11,5,3,58,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Nilsson", time: new Date(2018,11,5,4,7,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"_George_Baars", time: new Date(2018,11,5,4,18,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"GregoryManiscalco", time: new Date(2018,11,5,6,22,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"rodas", time: new Date(2018,11,5,6,44,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Summa", time: new Date(2018,11,5,6,56,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"TawanaDipaolo", time: new Date(2018,11,5,7,26,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"CelesteRendle", time: new Date(2018,11,5,8,8,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"GeraldKhoury", time: new Date(2018,11,5,8,33,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"JessieCaswell", time: new Date(2018,11,5,8,45,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"PatrickLew", time: new Date(2018,11,5,8,48,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"pergande", time: new Date(2018,11,5,9,11,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"AmeN", time: new Date(2018,11,5,9,34,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Javier_Kralik", time: new Date(2018,11,5,10,58,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Sarcia", time: new Date(2018,11,5,11,6,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Dolgas", time: new Date(2018,11,5,11,30,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"EdytheLent", time: new Date(2018,11,5,11,43,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Kiddie", time: new Date(2018,11,5,12,34,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Jasmin", time: new Date(2018,11,5,13,5,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"See_Pair", time: new Date(2018,11,5,13,45,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Tad_Jacob", time: new Date(2018,11,5,13,52,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"j240", time: new Date(2018,11,5,13,59,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"RobinFinley", time: new Date(2018,11,5,14,2,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Christina_Knudsen", time: new Date(2018,11,5,14,3,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"tisdelljuan", time: new Date(2018,11,5,14,53,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Rothstein", time: new Date(2018,11,5,15,1,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"brendavillerreal", time: new Date(2018,11,5,15,25,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"bhsbdhd", time: new Date(2018,11,5,15,43,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Walshe", time: new Date(2018,11,5,16,25,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Bruno", time: new Date(2018,11,5,17,26,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Emile_Cerveny", time: new Date(2018,11,5,17,39,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"KevinGreene-", time: new Date(2018,11,5,18,34,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Yowell", time: new Date(2018,11,5,20,24,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Barrientos", time: new Date(2018,11,5,20,48,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Joseph_Lane", time: new Date(2018,11,5,20,52,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Lasure", time: new Date(2018,11,5,21,1,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"KyleKalinowski", time: new Date(2018,11,5,21,36,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Tiny", time: new Date(2018,11,5,21,45,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Dead", time: new Date(2018,11,5,21,47,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Tanisha", time: new Date(2018,11,5,22,23,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"RickOneill", time: new Date(2018,11,5,22,42,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"GavinBoardman", time: new Date(2018,11,5,22,48,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Emilee_Reilly", time: new Date(2018,11,5,23,21,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Gangster", time: new Date(2018,11,5,23,28,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Johnnie_benson", time: new Date(2018,11,5,23,52,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Keiger", time: new Date(2018,11,5,23,56,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"CurtSpragg", time: new Date(2018,11,6,0,30,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"WillardBohol", time: new Date(2018,11,6,0,52,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Kostich", time: new Date(2018,11,6,1,23,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Literature", time: new Date(2018,11,6,1,33,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"daniel_hemmings", time: new Date(2018,11,6,1,35,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Mullis", time: new Date(2018,11,6,1,48,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"RitaGest", time: new Date(2018,11,6,2,8,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"LeonardLopez", time: new Date(2018,11,6,2,59,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"HowardMand", time: new Date(2018,11,6,3,4,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"DanielleGrimaldi", time: new Date(2018,11,6,3,16,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"kuebler", time: new Date(2018,11,6,4,17,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"JinFialkowski", time: new Date(2018,11,6,5,4,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Jonathan", time: new Date(2018,11,6,5,41,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Giovanna", time: new Date(2018,11,6,5,53,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Samella_Elam", time: new Date(2018,11,6,6,55,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"vincentthomas", time: new Date(2018,11,6,6,58,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Strohecker", time: new Date(2018,11,6,7,41,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Ahmad_Hubby", time: new Date(2018,11,6,8,6,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"TimothyOschmann", time: new Date(2018,11,6,8,7,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Roger-Guittar", time: new Date(2018,11,6,8,30,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"GaryGschwind", time: new Date(2018,11,6,9,7,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Bassi", time: new Date(2018,11,6,10,12,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"dogwhistle", time: new Date(2018,11,6,14,49,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Marth", time: new Date(2018,11,6,14,56,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Thepimp", time: new Date(2018,11,6,15,26,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Patatas", time: new Date(2018,11,6,15,30,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Steve_Saenz", time: new Date(2018,11,6,15,37,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"AnthonyLaPaglia", time: new Date(2018,11,6,15,39,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Michael_Hussey", time: new Date(2018,11,6,16,27,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Julia_Zombo-", time: new Date(2018,11,6,16,27,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"JoannieSlockbower", time: new Date(2018,11,6,18,20,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Arthur_Beckham", time: new Date(2018,11,6,18,31,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Charles_Haupert", time: new Date(2018,11,6,18,32,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"ricky_richards", time: new Date(2018,11,6,18,32,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"VitoLuciano", time: new Date(2018,11,6,18,33,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"ChristineSwatzell", time: new Date(2018,11,6,18,54,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Dominguez", time: new Date(2018,11,6,19,6,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"SprtieCranberry", time: new Date(2018,11,6,19,14,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Verna_Minshall", time: new Date(2018,11,6,19,23,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Frizzle", time: new Date(2018,11,6,19,40,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"DestruidorTT", time: new Date(2018,11,6,19,40,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"MichellRodak", time: new Date(2018,11,6,20,57,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Camie", time: new Date(2018,11,6,22,1,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"martyburgess", time: new Date(2018,11,6,23,52,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"AuraRicciuti", time: new Date(2018,11,7,0,51,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Edgar_Golt", time: new Date(2018,11,7,0,53,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"enkindle-test-lag", time: new Date(2018,11,7,1,31,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"ore", time: new Date(2018,11,7,1,54,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Tomoko_Bishop", time: new Date(2018,11,7,2,34,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"BrianSnowden", time: new Date(2018,11,7,2,37,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Dulce", time: new Date(2018,11,7,3,39,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Ernest-Popken", time: new Date(2018,11,7,6,10,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"niladecker", time: new Date(2018,11,7,7,3,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"annalee_piros", time: new Date(2018,11,7,7,4,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Andrew_Crestwood", time: new Date(2018,11,7,8,10,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"huawei", time: new Date(2018,11,7,8,22,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Latoya_Gebert", time: new Date(2018,11,7,8,28,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Mavicah", time: new Date(2018,11,7,10,10,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"JohnnieHale", time: new Date(2018,11,7,11,12,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Yourii", time: new Date(2018,11,7,12,18,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"kanisha_iburg", time: new Date(2018,11,7,12,34,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Borich", time: new Date(2018,11,7,13,36,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Kuchel", time: new Date(2018,11,7,17,56,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Dick_Kupik", time: new Date(2018,11,7,18,58,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Talamante", time: new Date(2018,11,7,23,47,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"MiltonLasik", time: new Date(2018,11,8,0,45,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"infamous_OG", time: new Date(2018,11,8,1,7,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Revon", time: new Date(2018,11,8,2,16,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"vercher", time: new Date(2018,11,8,4,2,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Cruse", time: new Date(2018,11,8,4,48,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Davis", time: new Date(2018,11,8,4,55,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Joshpauldo", time: new Date(2018,11,8,4,57,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Heuwinkel", time: new Date(2018,11,8,5,25,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Michael_hamett", time: new Date(2018,11,8,5,47,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"ImZagrean", time: new Date(2018,11,8,6,59,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Swifte", time: new Date(2018,11,8,8,3,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
<!-- End Here -->
  return rawArray;
}
