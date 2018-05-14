function buildPage(){
  document.getElementById("lastUpdateP").innerHTML = "<b>Last Update</b> 14/05/2018";
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
		rawArray.push({name:"Thomas_Fenech", time: new Date(2018,4,14,9,40,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Chong_Loendorf", time: new Date(2018,4,14,10,52,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Alfredo_Mytych", time: new Date(2018,4,14,11,12,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Antonio_Soto", time: new Date(2018,4,14,11,46,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"JeffreyRobinson", time: new Date(2018,4,14,11,56,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"sumner", time: new Date(2018,4,14,12,6,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Daniel_Deroven", time: new Date(2018,4,14,12,30,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Cherelle", time: new Date(2018,4,14,12,38,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Randy_Abram", time: new Date(2018,4,14,13,35,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Tomas_Cates", time: new Date(2018,4,14,13,37,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Batsy", time: new Date(2018,4,14,14,2,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"flennoy", time: new Date(2018,4,14,14,15,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"CecilTenneson", time: new Date(2018,4,14,14,43,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"JuliettePedroni", time: new Date(2018,4,14,14,51,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"HowardMartinez", time: new Date(2018,4,14,15,12,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"philiplainson", time: new Date(2018,4,14,16,40,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"AntonetteBuissereth", time: new Date(2018,4,14,16,50,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Billy_McFadden", time: new Date(2018,4,14,17,34,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Frank_", time: new Date(2018,4,14,17,56,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Ashleigh_Linnecke", time: new Date(2018,4,14,18,37,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"rodrigo_sirpilla", time: new Date(2018,4,14,19,37,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"vivian_lillig", time: new Date(2018,4,14,20,0,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"SkinnyMcGill", time: new Date(2018,4,14,20,53,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Dan", time: new Date(2018,4,14,21,23,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"eddievanbenthuyse", time: new Date(2018,4,14,21,53,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Vitar", time: new Date(2018,4,14,21,54,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Linnan", time: new Date(2018,4,14,21,58,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"DrPepper", time: new Date(2018,4,14,22,0,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"DemarcusBacker", time: new Date(2018,4,14,22,9,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"JoshuaGreggs", time: new Date(2018,4,14,22,42,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Bloom", time: new Date(2018,4,14,23,19,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"ragsdale", time: new Date(2018,4,14,23,27,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Elsa_Randazzo", time: new Date(2018,4,14,23,28,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"RichardOchotorena", time: new Date(2018,4,15,0,4,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Maxwell_Vanscoy", time: new Date(2018,4,15,0,53,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"JohnGordon", time: new Date(2018,4,15,1,33,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Fludd", time: new Date(2018,4,15,1,53,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"DionJuhl", time: new Date(2018,4,15,2,16,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Kevin_Cox", time: new Date(2018,4,15,2,21,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Howardplouffe", time: new Date(2018,4,15,3,3,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"OdisDurtsche", time: new Date(2018,4,15,3,24,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Gemyni", time: new Date(2018,4,15,3,40,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Velniar", time: new Date(2018,4,15,3,49,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Lee_scripture", time: new Date(2018,4,15,3,55,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"DoubleAgentChap", time: new Date(2018,4,15,4,11,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"LanceCollins", time: new Date(2018,4,15,4,56,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Synthia", time: new Date(2018,4,15,5,25,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Marquis_Edland", time: new Date(2018,4,15,6,47,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"marcano", time: new Date(2018,4,15,6,58,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Slice", time: new Date(2018,4,15,7,2,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"C-nut", time: new Date(2018,4,15,7,3,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Marshal", time: new Date(2018,4,15,7,23,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Shannon", time: new Date(2018,4,15,8,22,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"MaeSerrell", time: new Date(2018,4,15,9,2,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"RaymondWynne", time: new Date(2018,4,15,9,3,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"FrankAspegren", time: new Date(2018,4,15,10,3,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Daines", time: new Date(2018,4,15,10,44,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"HerschelSarff", time: new Date(2018,4,15,11,42,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"donald_naso", time: new Date(2018,4,15,12,4,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Yee", time: new Date(2018,4,15,12,4,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Glenn_Carr", time: new Date(2018,4,15,12,42,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Bettina", time: new Date(2018,4,15,13,9,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"DungBerryhill", time: new Date(2018,4,15,13,17,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"ChadPeggs", time: new Date(2018,4,15,14,35,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Clarence_Derby", time: new Date(2018,4,15,14,46,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Tree", time: new Date(2018,4,15,15,29,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Dexter_Williams", time: new Date(2018,4,15,15,31,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"lorettaballenger", time: new Date(2018,4,15,15,53,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"SeanPetrucci", time: new Date(2018,4,15,16,10,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Barry_Boursaw", time: new Date(2018,4,15,16,20,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Locke", time: new Date(2018,4,15,16,22,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"MarkRodriques", time: new Date(2018,4,15,16,29,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"SimonSanchez", time: new Date(2018,4,15,17,7,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"LuannSherburne", time: new Date(2018,4,15,17,27,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"SeymourButz", time: new Date(2018,4,15,18,28,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"h1016962", time: new Date(2018,4,15,18,55,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"JimmyRusso", time: new Date(2018,4,15,20,13,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"tysonkennady", time: new Date(2018,4,15,21,2,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Mike_Glenson", time: new Date(2018,4,15,21,15,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"subera", time: new Date(2018,4,15,22,30,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"MirianAyers", time: new Date(2018,4,15,23,1,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"eddie_nightengale", time: new Date(2018,4,15,23,29,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"TammieBrown", time: new Date(2018,4,15,23,41,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Ruben", time: new Date(2018,4,15,23,56,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Mr_Codewell", time: new Date(2018,4,16,1,2,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"JordanLillig", time: new Date(2018,4,16,1,16,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Stuart_gray", time: new Date(2018,4,16,1,57,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Drax", time: new Date(2018,4,16,2,1,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"CroKic", time: new Date(2018,4,16,2,19,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Amillio_Barsotti", time: new Date(2018,4,16,2,55,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Steve_Kummer", time: new Date(2018,4,16,3,34,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Swiggett", time: new Date(2018,4,16,3,42,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"ChandaPanas", time: new Date(2018,4,16,3,42,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Grivna", time: new Date(2018,4,16,3,43,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Slimw0lfy", time: new Date(2018,4,16,4,34,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Maheras", time: new Date(2018,4,16,4,56,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Curtis_Brockman", time: new Date(2018,4,16,5,38,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Wreckitralph", time: new Date(2018,4,16,6,26,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Steven_Barnett", time: new Date(2018,4,16,6,46,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Anubiss", time: new Date(2018,4,16,7,3,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"AnthonyHorstman", time: new Date(2018,4,16,7,6,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Aj075", time: new Date(2018,4,16,7,41,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Kathryn", time: new Date(2018,4,16,8,0,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Kyuss", time: new Date(2018,4,16,8,38,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Lofink", time: new Date(2018,4,16,9,28,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Buxbaum", time: new Date(2018,4,16,10,34,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Cerbera", time: new Date(2018,4,16,10,34,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"JenaeBonnett", time: new Date(2018,4,16,11,34,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Delana_Lively", time: new Date(2018,4,16,12,40,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Cody_sankovich", time: new Date(2018,4,16,13,17,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Ziebert", time: new Date(2018,4,16,13,48,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Andrea_Desbiens", time: new Date(2018,4,16,15,7,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"sandy_logsdon", time: new Date(2018,4,16,15,8,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"safford", time: new Date(2018,4,16,15,22,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"RomanGage", time: new Date(2018,4,16,15,30,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"DNAshooter", time: new Date(2018,4,16,16,23,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"man", time: new Date(2018,4,16,16,26,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"standford", time: new Date(2018,4,16,16,40,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Juan_Starr", time: new Date(2018,4,16,16,59,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Boogie", time: new Date(2018,4,16,17,0,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Essick", time: new Date(2018,4,16,17,13,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Nathaniel", time: new Date(2018,4,16,17,44,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Tsutsumi", time: new Date(2018,4,16,17,47,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"SteveMcqueen", time: new Date(2018,4,16,17,52,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Sylvia_Sanghez", time: new Date(2018,4,16,19,13,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Mahomly", time: new Date(2018,4,16,19,52,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Enzo", time: new Date(2018,4,16,20,17,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Jeffery_Martinez", time: new Date(2018,4,16,21,31,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Dean_Stupar", time: new Date(2018,4,16,21,33,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Broodychristopher", time: new Date(2018,4,16,23,11,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Arkan67", time: new Date(2018,4,16,23,12,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"linwood", time: new Date(2018,4,16,23,53,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"BruceAlbury", time: new Date(2018,4,16,23,53,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"penni_masone_", time: new Date(2018,4,16,23,54,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Thomas_Angelo", time: new Date(2018,4,17,0,1,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"ted_girone", time: new Date(2018,4,17,0,3,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"trey_williams", time: new Date(2018,4,17,0,3,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Hunziker", time: new Date(2018,4,17,0,19,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Norma_Krum", time: new Date(2018,4,17,0,30,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Sholar", time: new Date(2018,4,17,1,6,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Chin-Skates", time: new Date(2018,4,17,1,12,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"BrigidaMatherne", time: new Date(2018,4,17,1,55,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Ar3s", time: new Date(2018,4,17,2,13,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Lamar_Rooke", time: new Date(2018,4,17,2,24,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Verla_Montross", time: new Date(2018,4,17,2,28,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Irish", time: new Date(2018,4,17,3,18,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"CorneliusBehney", time: new Date(2018,4,17,3,57,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Davin", time: new Date(2018,4,17,4,9,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Kenneth_Penley", time: new Date(2018,4,17,4,9,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"MatthewThiboutot", time: new Date(2018,4,17,4,9,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Johnnie_Morgan", time: new Date(2018,4,17,4,34,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"George_Elter", time: new Date(2018,4,17,4,44,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"capps", time: new Date(2018,4,17,5,50,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"ranson", time: new Date(2018,4,17,6,24,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"nicole_misch", time: new Date(2018,4,17,7,34,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Reul", time: new Date(2018,4,17,7,36,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"DouglasBleck", time: new Date(2018,4,17,7,45,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Zerger", time: new Date(2018,4,17,8,14,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"wmmacchio", time: new Date(2018,4,17,8,52,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"SirWolfy", time: new Date(2018,4,17,8,59,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Sirwolfyjunior", time: new Date(2018,4,17,9,2,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"LottieKelley", time: new Date(2018,4,17,10,0,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Dustin_Kiener", time: new Date(2018,4,17,10,21,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Henry_Bechtol", time: new Date(2018,4,17,11,29,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"RankDirty", time: new Date(2018,4,17,12,9,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Murch_Jason", time: new Date(2018,4,17,12,23,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"AntonioGalusha", time: new Date(2018,4,17,12,42,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"JoshuaBayly", time: new Date(2018,4,17,13,30,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Alyson_Marero", time: new Date(2018,4,17,13,58,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"HankCoughran", time: new Date(2018,4,17,14,51,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Batosai", time: new Date(2018,4,17,15,18,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Estelle_Naso", time: new Date(2018,4,17,15,19,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"JudyHarris", time: new Date(2018,4,17,15,21,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"CathyWinters", time: new Date(2018,4,17,15,49,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"FrankieCali", time: new Date(2018,4,17,15,57,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"DewayneAinsworth", time: new Date(2018,4,17,15,59,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Vlad2020", time: new Date(2018,4,17,16,0,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"F4F", time: new Date(2018,4,17,16,42,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Gene_Musielak", time: new Date(2018,4,17,16,51,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Sarah_Bethany", time: new Date(2018,4,17,16,54,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"GeraldParisien", time: new Date(2018,4,17,17,20,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Hovantzi", time: new Date(2018,4,17,17,42,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Elizbeth_Buswell", time: new Date(2018,4,17,18,16,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"AliciaLeto", time: new Date(2018,4,17,18,35,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Kurt_Allanson", time: new Date(2018,4,17,18,41,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Lessard", time: new Date(2018,4,17,20,7,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Yzhsy", time: new Date(2018,4,17,20,11,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Emilie_Smith", time: new Date(2018,4,17,21,3,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"GrannyVix", time: new Date(2018,4,17,21,4,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Alan_McAnally", time: new Date(2018,4,17,21,34,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Chad", time: new Date(2018,4,17,23,10,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Party-Poison", time: new Date(2018,4,17,23,40,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"FearlessBoss", time: new Date(2018,4,17,23,56,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"chusaengsri4", time: new Date(2018,4,18,0,6,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Francis_Jensen", time: new Date(2018,4,18,1,24,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"BenitoPlotnik", time: new Date(2018,4,18,1,32,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"JeffreyLara", time: new Date(2018,4,18,1,32,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"edie", time: new Date(2018,4,18,1,33,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Merlin_Carr", time: new Date(2018,4,18,1,33,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"SamuelRoden", time: new Date(2018,4,18,2,19,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Amoura", time: new Date(2018,4,18,4,5,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"JordonRios", time: new Date(2018,4,18,5,19,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"JasonBlad", time: new Date(2018,4,18,6,17,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"babinski", time: new Date(2018,4,18,6,39,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"ladonna", time: new Date(2018,4,18,6,44,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Jacob_Thomassen", time: new Date(2018,4,18,6,56,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Jose_Jefferis", time: new Date(2018,4,18,10,23,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"myrtleletsche", time: new Date(2018,4,18,12,22,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Hugh_Petersen", time: new Date(2018,4,18,12,45,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"ick", time: new Date(2018,4,18,14,13,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Lesley-Dennis", time: new Date(2018,4,18,15,57,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"_vincentnoble", time: new Date(2018,4,18,16,37,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Teri_Anzomi", time: new Date(2018,4,18,17,20,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Only_Meeeeee", time: new Date(2018,4,18,18,22,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"april_knapp", time: new Date(2018,4,18,18,48,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Jeanniebonfiglio", time: new Date(2018,4,18,18,56,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Evans", time: new Date(2018,4,18,19,16,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"coulrophobia", time: new Date(2018,4,18,19,27,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"AdinaRenouf", time: new Date(2018,4,18,20,6,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"huner", time: new Date(2018,4,18,20,15,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"DonaldRogers", time: new Date(2018,4,18,20,21,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"JoeBarbaro", time: new Date(2018,4,18,20,23,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Richelle", time: new Date(2018,4,18,20,34,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"FrankStarner", time: new Date(2018,4,18,20,55,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"BryanLeapheart", time: new Date(2018,4,18,21,15,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"RogerBatten", time: new Date(2018,4,18,22,12,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Bill_Wacyk", time: new Date(2018,4,18,22,57,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"AnnaKemery", time: new Date(2018,4,18,23,7,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Rancid", time: new Date(2018,4,18,23,37,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Jonathan_Hoppe", time: new Date(2018,4,18,23,47,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Paul_Sousa", time: new Date(2018,4,18,23,48,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Dillan_Oleary", time: new Date(2018,4,18,23,54,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Lester_Edgar", time: new Date(2018,4,19,0,3,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Emeryeagen", time: new Date(2018,4,19,0,30,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Wallace_Novad", time: new Date(2018,4,19,0,30,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Zitzelberger", time: new Date(2018,4,19,1,18,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Calixtro", time: new Date(2018,4,19,1,40,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Prae-", time: new Date(2018,4,19,1,49,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Carpen", time: new Date(2018,4,19,2,17,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"JosephAcevedo", time: new Date(2018,4,19,2,46,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Vinny", time: new Date(2018,4,19,5,5,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"_JohnElshere", time: new Date(2018,4,19,5,14,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"KristinaGershenson", time: new Date(2018,4,19,5,37,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Sandki", time: new Date(2018,4,19,5,50,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Elease", time: new Date(2018,4,19,6,26,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"EdwinThaxton", time: new Date(2018,4,19,6,45,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Chad_Browning", time: new Date(2018,4,19,8,17,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"alene_verville", time: new Date(2018,4,19,8,20,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"MissHogains", time: new Date(2018,4,19,9,21,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Mildred-Leslie", time: new Date(2018,4,19,11,0,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"hurm", time: new Date(2018,4,19,11,5,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Encarnacion", time: new Date(2018,4,19,11,45,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Timlin", time: new Date(2018,4,19,12,40,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Daniel_Rivera", time: new Date(2018,4,19,13,17,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Fever", time: new Date(2018,4,19,13,55,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"gerardodaniels", time: new Date(2018,4,19,14,52,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Louise_Spohn", time: new Date(2018,4,19,14,52,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"GearldineBacon", time: new Date(2018,4,19,14,53,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"HarryMarkman", time: new Date(2018,4,19,14,53,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"ClaudineJustiniano", time: new Date(2018,4,19,17,26,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"bamboozle", time: new Date(2018,4,19,19,8,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Angel_Porche", time: new Date(2018,4,19,19,19,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"noreenblend", time: new Date(2018,4,19,21,55,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Sherman_Atwater", time: new Date(2018,4,19,22,33,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Jimmy_Evans", time: new Date(2018,4,19,23,33,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Leroy_Lindberg", time: new Date(2018,4,19,23,52,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Vernia_Seilheimer", time: new Date(2018,4,20,0,22,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"andrew_carruth", time: new Date(2018,4,20,1,40,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Sarah_McDowell", time: new Date(2018,4,20,1,44,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"bigbuba", time: new Date(2018,4,20,2,34,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"LarryFondriest", time: new Date(2018,4,20,3,45,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"doreen", time: new Date(2018,4,20,4,2,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Kozel", time: new Date(2018,4,20,5,1,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"pzqt", time: new Date(2018,4,20,5,41,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"CarmelitaSparacino", time: new Date(2018,4,20,7,2,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Nicholls", time: new Date(2018,4,20,8,8,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Mitch045", time: new Date(2018,4,20,8,58,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Bridgett_Key", time: new Date(2018,4,20,8,59,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Edward_Ocampo", time: new Date(2018,4,20,10,27,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Patrol", time: new Date(2018,4,20,13,29,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Donvito69", time: new Date(2018,4,20,13,53,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Jere_Rehak", time: new Date(2018,4,20,13,59,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"jillian-rux", time: new Date(2018,4,20,15,34,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"adelaidevigier", time: new Date(2018,4,20,15,40,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Kreep", time: new Date(2018,4,20,17,20,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"CharlieGraham", time: new Date(2018,4,20,18,58,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Eugenekriger", time: new Date(2018,4,20,20,48,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"CliffordHayes", time: new Date(2018,4,21,0,31,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Erika_McClure", time: new Date(2018,4,21,3,6,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
<!-- End Here -->
  return rawArray;
}
