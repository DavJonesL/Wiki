function buildPage(){
  document.getElementById("lastUpdateP").innerHTML = "<b>Last Update</b> 15/06/2018";
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
		rawArray.push({name:"Cheryl_Pulido", time: new Date(2018,5,14,19,21,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Merlin_Lopez", time: new Date(2018,5,14,19,40,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Peter_Nolte", time: new Date(2018,5,14,20,25,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"SocorroYurko", time: new Date(2018,5,14,20,25,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Heidler", time: new Date(2018,5,14,20,26,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Laurence_Holt", time: new Date(2018,5,14,21,12,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Jim_Ginsburg", time: new Date(2018,5,14,21,26,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Twyla_Torres", time: new Date(2018,5,14,22,7,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"EleanorPires", time: new Date(2018,5,14,22,12,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Jim", time: new Date(2018,5,14,22,13,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Angel_Jahaly", time: new Date(2018,5,14,22,13,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"mickieg1994", time: new Date(2018,5,14,23,13,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"John_gokey", time: new Date(2018,5,14,23,53,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Eques", time: new Date(2018,5,15,0,8,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"LeoWalsh", time: new Date(2018,5,15,0,37,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"eric_fleming", time: new Date(2018,5,15,0,38,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Dwaynedivin", time: new Date(2018,5,15,0,42,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"TimmyCoup", time: new Date(2018,5,15,1,48,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Reade", time: new Date(2018,5,15,2,4,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Eff_Hoff", time: new Date(2018,5,15,2,33,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Mr_Hoffman", time: new Date(2018,5,15,2,40,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Patrick_Rolson", time: new Date(2018,5,15,2,47,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Hafeman", time: new Date(2018,5,15,2,54,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"CripGod", time: new Date(2018,5,15,2,56,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Thinkidink", time: new Date(2018,5,15,3,45,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Zachary", time: new Date(2018,5,15,3,59,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"FuryWick", time: new Date(2018,5,15,4,8,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Walker", time: new Date(2018,5,15,4,22,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"JaxTeller", time: new Date(2018,5,15,6,11,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"DallasLebouf", time: new Date(2018,5,15,6,18,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Crow", time: new Date(2018,5,15,6,25,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Billybob", time: new Date(2018,5,15,7,21,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Darlene_whetstine", time: new Date(2018,5,15,7,37,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Dennis_Costain", time: new Date(2018,5,15,7,50,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Pamula_Yamin", time: new Date(2018,5,15,7,52,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"John_Matthews", time: new Date(2018,5,15,7,57,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Flamand", time: new Date(2018,5,15,8,12,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"justlooking7", time: new Date(2018,5,15,8,38,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Transistor", time: new Date(2018,5,15,9,27,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"SungKant", time: new Date(2018,5,15,10,42,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Thomas_Aharoni", time: new Date(2018,5,15,11,5,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"ArchieVachon", time: new Date(2018,5,15,11,57,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"fredmallen", time: new Date(2018,5,15,12,7,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Christen", time: new Date(2018,5,15,12,18,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Hert", time: new Date(2018,5,15,12,40,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Andes", time: new Date(2018,5,15,13,34,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"DevonLeak", time: new Date(2018,5,15,13,49,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Donald_girton", time: new Date(2018,5,15,15,41,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Jasonhylton", time: new Date(2018,5,15,16,48,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Anon", time: new Date(2018,5,15,17,1,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Joel_Wagner", time: new Date(2018,5,15,17,20,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Roman_Gage", time: new Date(2018,5,15,19,37,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"PrestonLewandowski", time: new Date(2018,5,15,19,53,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Nicky_Brasseur", time: new Date(2018,5,15,20,7,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Devingraham", time: new Date(2018,5,15,20,9,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"JonnyBeRed", time: new Date(2018,5,15,20,27,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"TurikoBR", time: new Date(2018,5,15,21,27,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"spurr", time: new Date(2018,5,15,22,17,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"RexOlinger", time: new Date(2018,5,15,23,4,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Ripster", time: new Date(2018,5,15,23,48,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"ArmyKilla_44", time: new Date(2018,5,16,0,1,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"TomasMachowski", time: new Date(2018,5,16,0,31,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Damien", time: new Date(2018,5,16,1,10,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"kurtmerrifield", time: new Date(2018,5,16,1,28,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Montana", time: new Date(2018,5,16,1,41,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"TomFoolery", time: new Date(2018,5,16,2,0,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Katherine_Leyland", time: new Date(2018,5,16,3,19,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"VictorHolland", time: new Date(2018,5,16,3,31,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"TomKangas", time: new Date(2018,5,16,3,31,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"ChrissyResureccion", time: new Date(2018,5,16,3,31,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Shelba_Doyle", time: new Date(2018,5,16,3,31,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"RodriguezNoel", time: new Date(2018,5,16,4,32,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"polhemus", time: new Date(2018,5,16,4,38,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Min_Hanson", time: new Date(2018,5,16,5,0,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Gabriel_McOmber", time: new Date(2018,5,16,5,22,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Alberto_suleiman", time: new Date(2018,5,16,5,33,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"alfred_slattery", time: new Date(2018,5,16,5,50,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"handshaw", time: new Date(2018,5,16,6,17,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Bobby-Clams", time: new Date(2018,5,16,7,4,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"corwinte", time: new Date(2018,5,16,7,22,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Langreck", time: new Date(2018,5,16,7,27,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Kaid", time: new Date(2018,5,16,8,10,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"TiaraRullman", time: new Date(2018,5,16,8,26,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"ruble", time: new Date(2018,5,16,8,50,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"TroyRegos", time: new Date(2018,5,16,8,57,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Johnny_McCandless", time: new Date(2018,5,16,9,12,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Riddell", time: new Date(2018,5,16,9,25,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Frances_Barchus", time: new Date(2018,5,16,9,48,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Neil_Danforth", time: new Date(2018,5,16,10,33,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Geraldroach", time: new Date(2018,5,16,10,40,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"JoiAdams", time: new Date(2018,5,16,10,52,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Oma", time: new Date(2018,5,16,11,27,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"NicholasKurtti", time: new Date(2018,5,16,11,34,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"GaynelleDeimund", time: new Date(2018,5,16,12,0,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"ElfredaSalinas", time: new Date(2018,5,16,12,32,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"AgustinWilliston", time: new Date(2018,5,16,13,14,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Kam", time: new Date(2018,5,16,13,31,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"eXop", time: new Date(2018,5,16,14,6,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Radioactive", time: new Date(2018,5,16,14,16,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"hellra1ser", time: new Date(2018,5,16,14,50,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"CalvinArlen", time: new Date(2018,5,16,15,2,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"brondax", time: new Date(2018,5,16,15,18,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"JoeMausey", time: new Date(2018,5,16,16,8,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"BlakeGrinvalsky_", time: new Date(2018,5,16,16,12,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Elisabeth", time: new Date(2018,5,16,16,19,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Milton_Limbach", time: new Date(2018,5,16,17,47,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Wayne_Petty", time: new Date(2018,5,16,17,58,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"shdwstalker", time: new Date(2018,5,16,18,8,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"JustVisiting", time: new Date(2018,5,16,18,27,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Krypto", time: new Date(2018,5,16,19,8,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"BarneyStallings", time: new Date(2018,5,16,21,46,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Eartha_Chambers", time: new Date(2018,5,16,22,13,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Ron_Hoyman", time: new Date(2018,5,16,22,22,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Ozai", time: new Date(2018,5,16,23,3,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Lucky_Lafitte", time: new Date(2018,5,16,23,7,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Roy_Little", time: new Date(2018,5,17,0,13,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"EuraBures", time: new Date(2018,5,17,0,23,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"JericaLanasa", time: new Date(2018,5,17,0,36,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Alphonsobellantone", time: new Date(2018,5,17,0,55,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Heribertosypniewski", time: new Date(2018,5,17,1,14,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"JoeBrinegar", time: new Date(2018,5,17,2,2,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"emmanuelvorel", time: new Date(2018,5,17,2,18,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"EricGrogan", time: new Date(2018,5,17,2,19,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"KimberlyGulati", time: new Date(2018,5,17,2,28,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"FrancisIacobucci", time: new Date(2018,5,17,2,30,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Brittaney", time: new Date(2018,5,17,2,49,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Mario_Maffeo", time: new Date(2018,5,17,3,40,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Youngquist", time: new Date(2018,5,17,4,2,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Lape", time: new Date(2018,5,17,4,28,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"vegetabile", time: new Date(2018,5,17,5,9,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Ashley", time: new Date(2018,5,17,5,25,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"ChristianaDotts", time: new Date(2018,5,17,5,32,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Agamenom", time: new Date(2018,5,17,5,38,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"RosaScoma", time: new Date(2018,5,17,5,42,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Joan", time: new Date(2018,5,17,6,0,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Manie_Drone", time: new Date(2018,5,17,6,0,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Lesesne", time: new Date(2018,5,17,6,0,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Bazile", time: new Date(2018,5,17,6,34,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Sally-Ercek", time: new Date(2018,5,17,7,15,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Steven_asa", time: new Date(2018,5,17,7,35,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"kerry_richardson", time: new Date(2018,5,17,8,2,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"kemble", time: new Date(2018,5,17,8,37,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Louie_Lips_Roselli", time: new Date(2018,5,17,8,43,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"BrunoStock", time: new Date(2018,5,17,8,50,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"EldonCarmon", time: new Date(2018,5,17,9,3,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Kenneth_Louis", time: new Date(2018,5,17,9,25,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Precythe", time: new Date(2018,5,17,9,29,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"EddieCajune", time: new Date(2018,5,17,9,39,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Beougher", time: new Date(2018,5,17,10,41,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Kristel", time: new Date(2018,5,17,10,43,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"ashe_black", time: new Date(2018,5,17,11,3,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"JoseLovett", time: new Date(2018,5,17,11,6,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"MarkBerry", time: new Date(2018,5,17,11,28,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Capo", time: new Date(2018,5,17,11,30,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Donanzone", time: new Date(2018,5,17,11,53,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"willis_boamah", time: new Date(2018,5,17,12,21,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Patricia_Cross", time: new Date(2018,5,17,12,29,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Madeleine", time: new Date(2018,5,17,12,30,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"hypperlegend", time: new Date(2018,5,17,12,42,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Graciela_Hansell", time: new Date(2018,5,17,12,53,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Ohora", time: new Date(2018,5,17,13,9,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"solders", time: new Date(2018,5,17,13,16,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"SeanDavies", time: new Date(2018,5,17,13,18,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Calista", time: new Date(2018,5,17,13,18,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Phylis_Keys", time: new Date(2018,5,17,13,18,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"sanner", time: new Date(2018,5,17,13,18,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"KarlFrew", time: new Date(2018,5,17,13,19,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Nortanoa", time: new Date(2018,5,17,14,37,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"yessenia", time: new Date(2018,5,17,15,19,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Lesley_Wish", time: new Date(2018,5,17,15,20,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"StrangerBoy", time: new Date(2018,5,17,15,51,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Zeusj", time: new Date(2018,5,17,16,21,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Sayax", time: new Date(2018,5,17,16,50,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"JeremyNunnally", time: new Date(2018,5,17,16,57,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Lou_Isaac", time: new Date(2018,5,17,16,57,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Philip_Schnell", time: new Date(2018,5,17,16,57,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Ferguson", time: new Date(2018,5,17,18,6,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Difusco", time: new Date(2018,5,17,18,19,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Davignon", time: new Date(2018,5,17,19,2,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"rachi", time: new Date(2018,5,17,19,12,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"BrittRieffenberger", time: new Date(2018,5,17,19,27,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"yulanda_borriello", time: new Date(2018,5,17,19,32,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"MrSpikeS", time: new Date(2018,5,17,19,49,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"DonaldRushing", time: new Date(2018,5,17,20,17,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Dhaliwal", time: new Date(2018,5,17,20,42,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"JamesAnderson", time: new Date(2018,5,17,22,19,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"RonaldPisano", time: new Date(2018,5,17,22,22,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Paulie_Romana", time: new Date(2018,5,17,22,44,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"JimmyHall", time: new Date(2018,5,17,22,44,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"AmandaEstes", time: new Date(2018,5,18,0,31,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Dragonfire", time: new Date(2018,5,18,0,47,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Russell-Sterns", time: new Date(2018,5,18,1,57,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Lucas_Choate", time: new Date(2018,5,18,1,58,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"GonzaloHyman", time: new Date(2018,5,18,2,6,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"DamonReagan", time: new Date(2018,5,18,2,6,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"muterspaw", time: new Date(2018,5,18,2,7,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"EdgarIncera", time: new Date(2018,5,18,2,7,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"yeeeeboy", time: new Date(2018,5,18,2,15,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Carrie_Moore", time: new Date(2018,5,18,2,16,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Raymond_Lukehart", time: new Date(2018,5,18,2,17,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"spriggan_d", time: new Date(2018,5,18,2,22,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Graveling", time: new Date(2018,5,18,2,33,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"althea", time: new Date(2018,5,18,2,49,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Hyon", time: new Date(2018,5,18,3,13,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"WilsonIvy", time: new Date(2018,5,18,3,38,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"IsaacChavez", time: new Date(2018,5,18,4,10,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"RayeBarber", time: new Date(2018,5,18,4,18,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Linda_Zale", time: new Date(2018,5,18,4,22,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"YvetteNicholson", time: new Date(2018,5,18,5,31,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Guidi", time: new Date(2018,5,18,5,38,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Dorine_Doyal", time: new Date(2018,5,18,6,22,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"AprilSprague", time: new Date(2018,5,18,6,29,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Carnegi", time: new Date(2018,5,18,6,41,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"EllsworthCorredor", time: new Date(2018,5,18,7,8,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"DeweyHinson", time: new Date(2018,5,18,7,13,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Redboy", time: new Date(2018,5,18,7,15,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Yael_Wood", time: new Date(2018,5,18,8,1,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"RaulLazzell", time: new Date(2018,5,18,8,48,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Neville_Burger", time: new Date(2018,5,18,9,9,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Stephany", time: new Date(2018,5,18,9,16,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"anitavannatten", time: new Date(2018,5,18,9,28,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Tapley", time: new Date(2018,5,18,10,0,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"buntain", time: new Date(2018,5,18,10,1,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"OsvaldoBumbalo", time: new Date(2018,5,18,10,1,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"penney_loewe", time: new Date(2018,5,18,10,39,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Roscoe", time: new Date(2018,5,18,11,35,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"LatoyiaWitte", time: new Date(2018,5,18,13,15,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"william_zabenko", time: new Date(2018,5,18,13,20,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"JulieMarsh", time: new Date(2018,5,18,13,48,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"JeanetteDow", time: new Date(2018,5,18,14,31,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Willie_Agar", time: new Date(2018,5,18,14,40,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Master", time: new Date(2018,5,18,15,7,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Memmer", time: new Date(2018,5,18,15,56,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Tim_Toal_", time: new Date(2018,5,18,16,26,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"ArthurGoldklang", time: new Date(2018,5,18,16,45,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Billyholdiness", time: new Date(2018,5,18,17,20,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"CurtisMorrow", time: new Date(2018,5,18,17,49,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Keva", time: new Date(2018,5,18,18,45,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"bobby_eade", time: new Date(2018,5,18,18,47,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Pete_keene", time: new Date(2018,5,18,18,55,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"haynes", time: new Date(2018,5,18,19,52,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"ElsieDziegielewski", time: new Date(2018,5,18,20,7,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Anaral", time: new Date(2018,5,18,20,15,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"CeceliaFenstermacher", time: new Date(2018,5,18,20,55,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"temple", time: new Date(2018,5,18,21,6,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Rosemary_Decarlo", time: new Date(2018,5,18,21,15,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Prentice", time: new Date(2018,5,18,21,34,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"fdghg", time: new Date(2018,5,18,21,36,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"sadboybinford", time: new Date(2018,5,18,21,54,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Attilas", time: new Date(2018,5,18,22,22,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Jeffrey_Gaines", time: new Date(2018,5,18,23,8,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"GlenPratt", time: new Date(2018,5,18,23,33,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"JesseCreagh", time: new Date(2018,5,19,0,44,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"BlakeThomen", time: new Date(2018,5,19,1,6,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Ronald_Baughn", time: new Date(2018,5,19,1,56,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"GenericBread", time: new Date(2018,5,19,4,48,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Alexxozza", time: new Date(2018,5,19,5,27,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"RaymondStumpff", time: new Date(2018,5,19,5,41,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"delbert_arthur", time: new Date(2018,5,19,6,51,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"AlphonsoSmall", time: new Date(2018,5,19,7,8,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Bruce_Keyworth", time: new Date(2018,5,19,7,10,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"rolandosxx", time: new Date(2018,5,19,8,3,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Rybij", time: new Date(2018,5,19,8,12,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Willie_Butler", time: new Date(2018,5,19,8,54,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"SamuelDoede", time: new Date(2018,5,19,9,19,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"DougyFresh", time: new Date(2018,5,19,10,0,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Bonnieschoenecker", time: new Date(2018,5,19,10,20,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Leak", time: new Date(2018,5,19,10,43,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"MargueriteMiskinis", time: new Date(2018,5,19,10,50,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Jorge_Garcia-", time: new Date(2018,5,19,10,50,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"garland_blomgren", time: new Date(2018,5,19,10,50,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"RoyceTang", time: new Date(2018,5,19,11,6,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"wendell_anawaty", time: new Date(2018,5,19,12,36,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"KoreyInlow", time: new Date(2018,5,19,13,2,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Jaggers", time: new Date(2018,5,19,13,35,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Debera_Maholmes", time: new Date(2018,5,19,13,53,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Hopperz", time: new Date(2018,5,19,14,12,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Yippee", time: new Date(2018,5,19,15,13,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"JaySherrod", time: new Date(2018,5,19,15,25,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Fonz", time: new Date(2018,5,19,15,31,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"bryanlevander", time: new Date(2018,5,19,15,32,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"LeoLindenberger", time: new Date(2018,5,19,16,17,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Due", time: new Date(2018,5,19,17,9,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Sheldon_Ode", time: new Date(2018,5,19,17,32,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Ummah", time: new Date(2018,5,19,17,59,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Jack_wurzbacher", time: new Date(2018,5,19,18,1,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Ellis_Mawson", time: new Date(2018,5,19,18,15,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"SammyDeliso", time: new Date(2018,5,19,18,23,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Jonizzel", time: new Date(2018,5,19,22,13,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"CarribeanRum", time: new Date(2018,5,19,22,49,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"RoleModel", time: new Date(2018,5,19,23,32,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Witch", time: new Date(2018,5,19,23,56,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Virgil_Wightman", time: new Date(2018,5,20,0,33,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Sk47", time: new Date(2018,5,20,0,53,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Joey_Corozzo", time: new Date(2018,5,20,0,55,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Stebbins", time: new Date(2018,5,20,1,41,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"CharlesMaury", time: new Date(2018,5,20,2,20,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"MichalColey", time: new Date(2018,5,20,3,38,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Norahutchins", time: new Date(2018,5,20,4,17,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"_RickeyGrossman", time: new Date(2018,5,20,4,36,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Diona", time: new Date(2018,5,20,5,4,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Bruce_Deaguiar", time: new Date(2018,5,20,5,16,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"crazyfrog", time: new Date(2018,5,20,6,24,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Yup", time: new Date(2018,5,20,6,40,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Leather", time: new Date(2018,5,20,7,23,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Meeh", time: new Date(2018,5,20,7,32,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Lovely", time: new Date(2018,5,20,8,0,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"DigDoy", time: new Date(2018,5,20,8,8,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"RinTohsaka", time: new Date(2018,5,20,8,47,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Rewind", time: new Date(2018,5,20,8,55,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Myst", time: new Date(2018,5,20,14,29,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Meazell", time: new Date(2018,5,20,14,41,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Arrygon", time: new Date(2018,5,20,19,24,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"EddieKatz", time: new Date(2018,5,20,22,1,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"mileslake", time: new Date(2018,5,21,6,13,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Jun", time: new Date(2018,5,21,9,9,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"PrinceWacht", time: new Date(2018,5,21,9,38,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Karyn", time: new Date(2018,5,21,10,31,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Kristanfabiano", time: new Date(2018,5,21,14,11,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"acklen", time: new Date(2018,5,21,18,11,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Silver", time: new Date(2018,5,21,19,19,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Vern_Bond", time: new Date(2018,5,21,19,21,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
<!-- End Here -->
  return rawArray;
}
