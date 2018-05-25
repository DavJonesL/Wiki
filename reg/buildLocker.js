function buildPage(){
  document.getElementById("lastUpdateP").innerHTML = "<b>Last Update</b> 25/05/2018";
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
      if (rawArray[i].time > -21600000 && rawArray[i].time < 86400000) {
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
		rawArray.push({name:"weingard", time: new Date(2018,4,25,10,35,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Emilee", time: new Date(2018,4,25,10,36,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Lawrence_Risk", time: new Date(2018,4,25,10,36,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"FrankDobrunz", time: new Date(2018,4,25,10,36,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Shaun_Seevers", time: new Date(2018,4,25,10,56,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Craig_robertson", time: new Date(2018,4,25,11,18,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Suvienur", time: new Date(2018,4,25,11,26,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Kempinski", time: new Date(2018,4,25,11,34,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"antonetteszymanski", time: new Date(2018,4,25,11,53,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"NolanVisco-", time: new Date(2018,4,25,12,11,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Chielio", time: new Date(2018,4,25,12,20,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Curtis_Midkiff", time: new Date(2018,4,25,12,42,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Herriot", time: new Date(2018,4,25,12,56,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Shreeves", time: new Date(2018,4,25,13,12,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"jogotanto", time: new Date(2018,4,25,14,18,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"NobleOutLaw", time: new Date(2018,4,25,14,21,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"lizbethcastiglione", time: new Date(2018,4,25,15,49,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"LeonoreSchwerdtfeger", time: new Date(2018,4,25,17,45,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Beuthener", time: new Date(2018,4,25,17,50,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"satunus", time: new Date(2018,4,25,18,34,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Lippy", time: new Date(2018,4,25,18,38,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Issac_Fenix", time: new Date(2018,4,25,18,46,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Regan_carter", time: new Date(2018,4,25,19,2,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Chester_Sears", time: new Date(2018,4,25,19,4,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"ReginaHackett", time: new Date(2018,4,25,19,38,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"SamuelJohnson", time: new Date(2018,4,25,19,39,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"deancase", time: new Date(2018,4,25,19,42,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Lunawolf2006", time: new Date(2018,4,25,19,54,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Macdiarmid", time: new Date(2018,4,25,20,9,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"TheLicker", time: new Date(2018,4,25,20,20,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"JerryScott", time: new Date(2018,4,25,20,43,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"SeanNash", time: new Date(2018,4,25,20,48,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"TifanyBayird", time: new Date(2018,4,25,21,27,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Websster", time: new Date(2018,4,25,21,36,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Meyer-Wolfsheim", time: new Date(2018,4,25,21,58,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Eichinger", time: new Date(2018,4,25,22,10,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Billy_the_kid", time: new Date(2018,4,25,23,1,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Daniel_Neujahr", time: new Date(2018,4,26,0,24,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"TyroneAllison", time: new Date(2018,4,26,1,33,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Joanetrigo", time: new Date(2018,4,26,1,43,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Sadlycold42", time: new Date(2018,4,26,2,25,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"KilloWatt", time: new Date(2018,4,26,2,50,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Leana", time: new Date(2018,4,26,2,50,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Bob_Alvacado", time: new Date(2018,4,26,3,8,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"DebraMadre", time: new Date(2018,4,26,3,10,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"SpikeS", time: new Date(2018,4,26,3,49,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Cecil_Burgard", time: new Date(2018,4,26,4,19,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Marc_Osborne", time: new Date(2018,4,26,5,41,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Anning", time: new Date(2018,4,26,6,30,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"WadeMyles", time: new Date(2018,4,26,6,32,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Empty", time: new Date(2018,4,26,7,22,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Salford", time: new Date(2018,4,26,7,32,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Everett_Lakner", time: new Date(2018,4,26,8,21,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Binder", time: new Date(2018,4,26,8,32,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Wtfdawg", time: new Date(2018,4,26,8,53,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"DuncanManfra", time: new Date(2018,4,26,9,2,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"penelope", time: new Date(2018,4,26,9,27,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Sticks1988", time: new Date(2018,4,26,9,28,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Theo_zeegers", time: new Date(2018,4,26,9,40,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Stanley_Cockman", time: new Date(2018,4,26,10,2,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Nzjzk", time: new Date(2018,4,26,10,9,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"NeonKarma", time: new Date(2018,4,26,10,12,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"GerardoLafarga_", time: new Date(2018,4,26,10,35,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Meghan", time: new Date(2018,4,26,11,7,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Ma", time: new Date(2018,4,26,11,9,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"VirginiaMotley", time: new Date(2018,4,26,11,15,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"ericwilkins", time: new Date(2018,4,26,11,36,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Herpqderp", time: new Date(2018,4,26,12,28,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"irawright", time: new Date(2018,4,26,12,45,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Bruce-Gill", time: new Date(2018,4,26,13,19,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"MyNameToReedemCredit", time: new Date(2018,4,26,13,24,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"BulletsHurt", time: new Date(2018,4,26,14,9,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"roost", time: new Date(2018,4,26,14,33,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Bryan_Macha", time: new Date(2018,4,26,14,47,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"CelindaMcCracken", time: new Date(2018,4,26,15,18,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"CharleyBattaglia", time: new Date(2018,4,26,15,22,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Bob_Belchur", time: new Date(2018,4,26,16,33,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Matthewseton", time: new Date(2018,4,26,16,34,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Hope_Racer", time: new Date(2018,4,26,16,43,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"BozLii", time: new Date(2018,4,26,17,9,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"_Peggy_Purcell", time: new Date(2018,4,26,17,27,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Leon_Scudieri", time: new Date(2018,4,26,17,48,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Rudolph_Ossola", time: new Date(2018,4,26,18,1,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"NviWrath", time: new Date(2018,4,26,19,11,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"albertvanderstappen", time: new Date(2018,4,26,21,16,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Gena", time: new Date(2018,4,26,22,4,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Snelson", time: new Date(2018,4,26,22,26,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"ny_yanks", time: new Date(2018,4,26,23,2,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"DerrickMartin", time: new Date(2018,4,26,23,23,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Butt_her_fly", time: new Date(2018,4,26,23,55,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Deku", time: new Date(2018,4,27,0,20,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"MartineLarson", time: new Date(2018,4,27,0,24,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"JosephGaines", time: new Date(2018,4,27,0,27,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"glenn_banchero", time: new Date(2018,4,27,0,59,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Mazino", time: new Date(2018,4,27,1,29,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Iago", time: new Date(2018,4,27,2,12,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"CliffordWingfield", time: new Date(2018,4,27,2,27,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Jeffery_Guoan", time: new Date(2018,4,27,2,41,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Weldon_Thomas", time: new Date(2018,4,27,3,27,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Britteny_Ottinger", time: new Date(2018,4,27,3,33,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"EveryoneEverywhere", time: new Date(2018,4,27,3,51,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Halo", time: new Date(2018,4,27,4,7,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Wayne_pedaci", time: new Date(2018,4,27,4,21,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"AnthonyLavalais", time: new Date(2018,4,27,4,25,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"EmmanuelWhite", time: new Date(2018,4,27,5,51,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Elliot", time: new Date(2018,4,27,6,48,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Dezzaaaa", time: new Date(2018,4,27,8,21,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Humbertokenney", time: new Date(2018,4,27,9,29,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Terrell", time: new Date(2018,4,27,9,38,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"DonAdel", time: new Date(2018,4,27,9,56,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Comeau", time: new Date(2018,4,27,10,28,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Def", time: new Date(2018,4,27,12,26,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Clarettagabak", time: new Date(2018,4,27,12,36,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Warburton", time: new Date(2018,4,27,12,52,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"PeterMasciantonio", time: new Date(2018,4,27,13,57,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Sniperxxx", time: new Date(2018,4,27,14,30,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Johann_Rothstein", time: new Date(2018,4,27,14,49,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Hedy_Oneal", time: new Date(2018,4,27,14,56,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Schnair", time: new Date(2018,4,27,15,31,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Pearly", time: new Date(2018,4,27,15,55,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"EldoraScott", time: new Date(2018,4,27,15,55,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Nubia", time: new Date(2018,4,27,16,1,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Louis_fernandes", time: new Date(2018,4,27,16,2,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"DwightBohrer", time: new Date(2018,4,27,16,2,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"PhilKrapfl", time: new Date(2018,4,27,16,2,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Eloise_Camp", time: new Date(2018,4,27,16,24,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"ChelseaGuzman", time: new Date(2018,4,27,16,54,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Inviciblios", time: new Date(2018,4,27,17,21,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Chris_bovee", time: new Date(2018,4,27,17,24,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Canada", time: new Date(2018,4,27,18,15,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Santana_haverland", time: new Date(2018,4,27,19,0,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Eddie_Milici", time: new Date(2018,4,27,19,40,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Luper", time: new Date(2018,4,27,20,22,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"HeathroGordon", time: new Date(2018,4,27,20,52,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Minnier", time: new Date(2018,4,27,22,59,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Sylvester_Chase", time: new Date(2018,4,27,23,20,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"lawanna_aranda", time: new Date(2018,4,28,0,7,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"voodoo13", time: new Date(2018,4,28,2,1,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Kira_Trombley", time: new Date(2018,4,28,2,4,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"booya", time: new Date(2018,4,28,3,25,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Sheri_Petruso", time: new Date(2018,4,28,5,28,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"johnankersen", time: new Date(2018,4,28,6,56,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"TyberZann1337", time: new Date(2018,4,28,7,48,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Joe_McLean", time: new Date(2018,4,28,10,36,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"AugustAllen", time: new Date(2018,4,28,13,15,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"karensroczynski", time: new Date(2018,4,28,13,41,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Rapper_Sjors", time: new Date(2018,4,28,14,1,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Disturbed", time: new Date(2018,4,28,14,51,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"WillisStevenson", time: new Date(2018,4,28,15,21,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"GOLDEN_NEW", time: new Date(2018,4,28,16,13,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Agustinbousman", time: new Date(2018,4,28,21,27,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Britt_Poro", time: new Date(2018,4,28,23,33,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"DorianChaol", time: new Date(2018,4,29,0,14,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"PhilipDalmata", time: new Date(2018,4,29,0,44,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"dorothyalmeyda", time: new Date(2018,4,29,1,28,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Sean_Loa", time: new Date(2018,4,29,3,47,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Mohammed_Pineda", time: new Date(2018,4,29,5,26,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Pierro", time: new Date(2018,4,29,6,42,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Olszewski", time: new Date(2018,4,29,6,44,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"george-stupka", time: new Date(2018,4,29,9,12,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Dibs", time: new Date(2018,4,29,10,23,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"SilentDriller", time: new Date(2018,4,29,11,37,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Alim", time: new Date(2018,4,29,11,59,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Hector_Bird", time: new Date(2018,4,29,14,53,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"norlin", time: new Date(2018,4,29,14,57,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"ForestHorr", time: new Date(2018,4,29,16,40,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Jimmy2Toes", time: new Date(2018,4,29,16,44,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Anthony_Hankins", time: new Date(2018,4,29,17,8,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"okjmkiok", time: new Date(2018,4,29,17,21,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Negrete", time: new Date(2018,4,29,18,53,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"JayQuinn", time: new Date(2018,4,29,20,12,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Justin_kreider", time: new Date(2018,4,29,22,9,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Scott_Phillips", time: new Date(2018,4,29,22,9,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"AutumnBolds", time: new Date(2018,4,29,22,10,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Barry-Hoffman", time: new Date(2018,4,29,23,11,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Vincent-Valentine", time: new Date(2018,4,30,1,17,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Youngerman", time: new Date(2018,4,30,1,40,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"alanworden", time: new Date(2018,4,30,3,12,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"DeanAzar", time: new Date(2018,4,30,4,13,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Ross_Null", time: new Date(2018,4,30,4,24,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Jacot", time: new Date(2018,4,30,5,36,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"MiltonAnreozzi", time: new Date(2018,4,30,5,43,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"alexandruzar", time: new Date(2018,4,30,8,44,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Gary_Lewis", time: new Date(2018,4,30,8,53,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Rodney-Wardian", time: new Date(2018,4,30,9,7,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"HalinaCriddle", time: new Date(2018,4,30,9,28,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Fallenlegend", time: new Date(2018,4,30,9,29,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"TerinaFelton", time: new Date(2018,4,30,9,46,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"SalvadorSutherlin", time: new Date(2018,4,30,10,29,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"prestoncano", time: new Date(2018,4,30,11,41,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Cinthia", time: new Date(2018,4,30,13,35,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Drost", time: new Date(2018,4,30,14,34,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"chusaengsri5", time: new Date(2018,4,30,15,26,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Ricky_yarbough", time: new Date(2018,4,30,15,31,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"RalphHollingsworth", time: new Date(2018,4,30,16,4,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Ramon_Lassiter", time: new Date(2018,4,30,16,18,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"SammyDuplessis", time: new Date(2018,4,30,16,39,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Paul-Ertl", time: new Date(2018,4,30,17,26,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Tetrahydrocannabinol", time: new Date(2018,4,30,19,12,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Darren_glover", time: new Date(2018,4,30,20,3,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Kary_barney", time: new Date(2018,4,30,21,28,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"_Scott", time: new Date(2018,4,30,21,33,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"law", time: new Date(2018,4,30,22,6,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Rogal_stanley", time: new Date(2018,4,30,22,7,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Leo_rothstein", time: new Date(2018,4,30,23,21,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"noellakridler", time: new Date(2018,4,31,4,28,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"RubenCramer", time: new Date(2018,4,31,5,7,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"ShanelleMohorovich", time: new Date(2018,4,31,6,6,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Dana_Aquas", time: new Date(2018,4,31,6,25,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"ChristopherToniatti", time: new Date(2018,4,31,6,55,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"BULA", time: new Date(2018,4,31,7,58,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"MartyNasers", time: new Date(2018,4,31,8,9,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Greenleaf", time: new Date(2018,4,31,10,2,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"KerryCrosby", time: new Date(2018,4,31,11,35,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Glenn_Vidmar", time: new Date(2018,4,31,11,59,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"carla_bergman", time: new Date(2018,4,31,14,19,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"datboi", time: new Date(2018,4,31,17,3,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Tracy_Page", time: new Date(2018,4,31,17,36,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Zivko", time: new Date(2018,4,31,18,53,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"JulianRicucci", time: new Date(2018,4,31,20,26,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"aejetetjnehtetntnt", time: new Date(2018,4,31,20,57,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Eugenia_Cardona", time: new Date(2018,4,31,21,5,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Carmilla", time: new Date(2018,4,31,21,48,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"D", time: new Date(2018,4,31,22,26,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Rowland", time: new Date(2018,4,31,23,46,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Emerald_Dillard", time: new Date(2018,5,1,0,10,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Felix_Devito", time: new Date(2018,5,1,0,37,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"AK_DU", time: new Date(2018,5,1,1,40,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Potogo", time: new Date(2018,5,1,1,49,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Jessie", time: new Date(2018,5,1,6,17,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Devora_Antos", time: new Date(2018,5,1,6,32,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"archie_rounds", time: new Date(2018,5,1,6,34,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Gilbert_Knowling", time: new Date(2018,5,1,8,32,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Vernon_Tarquinio", time: new Date(2018,5,1,9,46,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Bubbabase", time: new Date(2018,5,1,10,31,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Russell_Kalama", time: new Date(2018,5,1,10,40,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"lynnpyun", time: new Date(2018,5,1,11,45,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Misty_Hickey", time: new Date(2018,5,1,12,3,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Baal", time: new Date(2018,5,1,14,48,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
<!-- End Here -->
  return rawArray;
}
