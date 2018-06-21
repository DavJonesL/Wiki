function buildPage(){
  document.getElementById("lastUpdateP").innerHTML = "<b>Last Update</b> 21/06/2018";
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
    rawArray.push({name:"CorrieEvans", time: new Date(2018,5,21,0,14,0,0).getTime() - getUTC(new Date()), location:"Unknown",  city: "Hiding"});
		rawArray.push({name:"Kingsley", time: new Date(2018,5,21,3,56,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
    rawArray.push({name:"Mottern", time: new Date(2018,5,21,4,10,0,0).getTime() - getUTC(new Date()), location:"Unknown",  city: "Hiding"});
		rawArray.push({name:"Giovanni_Moretti", time: new Date(2018,5,21,4,24,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"mileslake", time: new Date(2018,5,21,6,13,0,0).getTime() - getUTC(new Date()), location:"Unknown",  city: "Hiding"});
		rawArray.push({name:"KitKat", time: new Date(2018,5,21,7,50,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"MisterFluffy", time: new Date(2018,5,21,8,19,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Shawn_stadler", time: new Date(2018,5,21,8,24,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Jeffrey_Belmonte", time: new Date(2018,5,21,8,56,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Jun", time: new Date(2018,5,21,9,9,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Saeedov", time: new Date(2018,5,21,9,18,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"PrinceWacht", time: new Date(2018,5,21,9,38,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Digger666", time: new Date(2018,5,21,9,54,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"ArnoldRester", time: new Date(2018,5,21,10,1,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"NeryBain", time: new Date(2018,5,21,10,25,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Karyn", time: new Date(2018,5,21,10,31,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
    rawArray.push({name:"Gaviria", time: new Date(2018,5,21,11,12,0,0).getTime() - getUTC(new Date()), location:"Unknown",  city: "Hiding"});
		rawArray.push({name:"Yong", time: new Date(2018,5,21,11,19,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"ScottTu", time: new Date(2018,5,21,11,57,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"FedericoSmith", time: new Date(2018,5,21,12,14,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Lillybell", time: new Date(2018,5,21,12,28,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Bostick", time: new Date(2018,5,21,12,29,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"RalphSchmidt", time: new Date(2018,5,21,13,24,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"ChristianSparacino", time: new Date(2018,5,21,13,35,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Kristanfabiano", time: new Date(2018,5,21,14,11,0,0).getTime() - getUTC(new Date()), location:"Unknown",  city: "Hiding"});
		rawArray.push({name:"GlennFalt", time: new Date(2018,5,21,15,1,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Brucegarner", time: new Date(2018,5,21,15,49,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Cardi_B", time: new Date(2018,5,21,16,34,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Penz", time: new Date(2018,5,21,16,35,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Francis_Housner", time: new Date(2018,5,21,16,36,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Len_Mulkey", time: new Date(2018,5,21,16,59,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Tuyet_Carnell", time: new Date(2018,5,21,17,29,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"NexusIsSuperHorny", time: new Date(2018,5,21,17,52,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"acklen", time: new Date(2018,5,21,18,11,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
    rawArray.push({name:"Wesley_Getchell", time: new Date(2018,5,21,18,42,0,0).getTime() - getUTC(new Date()), location:"Unknown",  city: "Hiding"});
		rawArray.push({name:"PamelaDandridge", time: new Date(2018,5,21,19,2,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Silver", time: new Date(2018,5,21,19,19,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Vern_Bond", time: new Date(2018,5,21,19,21,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"MarcDrenth", time: new Date(2018,5,21,19,33,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Rocray", time: new Date(2018,5,21,20,7,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"sooner", time: new Date(2018,5,21,20,11,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"leeanna_grimes", time: new Date(2018,5,21,20,12,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"FaustinoCathcart", time: new Date(2018,5,21,20,58,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"HaroldSmoak", time: new Date(2018,5,21,21,4,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Gorell", time: new Date(2018,5,21,21,9,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Marquis_Mulch", time: new Date(2018,5,21,21,11,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"mccoy", time: new Date(2018,5,21,21,23,0,0).getTime() - getUTC(new Date()), location:"Unknown",  city: "Hiding"});
		rawArray.push({name:"Shunfine", time: new Date(2018,5,21,21,51,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Opatz", time: new Date(2018,5,21,22,11,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Todd_childs", time: new Date(2018,5,21,23,12,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Kyouma", time: new Date(2018,5,21,23,14,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Hunter", time: new Date(2018,5,21,23,14,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"John_Vanlith", time: new Date(2018,5,22,1,40,0,0).getTime() - getUTC(new Date()), location:"Unknown",  city: "Hiding"});
		rawArray.push({name:"StaciManza", time: new Date(2018,5,22,2,23,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Terri_Toro", time: new Date(2018,5,22,2,41,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"CharlieGotti", time: new Date(2018,5,22,3,3,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"wasson", time: new Date(2018,5,22,3,5,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"othawruck", time: new Date(2018,5,22,3,27,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"brewbaker", time: new Date(2018,5,22,3,56,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Weniger", time: new Date(2018,5,22,4,14,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
    rawArray.push({name:"sotto", time: new Date(2018,5,22,4,37,0,0).getTime() - getUTC(new Date()), location:"Unknown",  city: "Hiding"});
		rawArray.push({name:"Osh", time: new Date(2018,5,22,5,33,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"JacobLelonek", time: new Date(2018,5,22,6,7,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Cavaliero", time: new Date(2018,5,22,6,18,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Alsayf", time: new Date(2018,5,22,7,51,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Sidney_Gagliardo", time: new Date(2018,5,22,8,39,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Hyman_Corlett", time: new Date(2018,5,22,8,39,0,0).getTime() - getUTC(new Date()), location:"Unknown",  city: "Hiding"});
		rawArray.push({name:"Spacey", time: new Date(2018,5,22,8,55,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Vizcarra", time: new Date(2018,5,22,8,58,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Bruce_Shields_", time: new Date(2018,5,22,9,2,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Stevepaulson", time: new Date(2018,5,22,9,17,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Mafia_Assassin", time: new Date(2018,5,22,10,21,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"DorisNickson", time: new Date(2018,5,22,10,31,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"GregoryThibodeau", time: new Date(2018,5,22,10,32,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"TroyLyalls", time: new Date(2018,5,22,10,40,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"micheal_spooner", time: new Date(2018,5,22,10,46,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Shanice_Fulson-", time: new Date(2018,5,22,11,24,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Whatever", time: new Date(2018,5,22,11,39,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
    rawArray.push({name:"Alma_murchison", time: new Date(2018,5,22,12,47,0,0).getTime() - getUTC(new Date()), location:"Unknown",  city: "Hiding"});
		rawArray.push({name:"Hoffis", time: new Date(2018,5,22,14,3,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Seth_smith", time: new Date(2018,5,22,14,29,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"OutLawNoble", time: new Date(2018,5,22,14,40,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"BrandyNielson", time: new Date(2018,5,22,14,40,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Rickybollman", time: new Date(2018,5,22,14,51,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Arthur", time: new Date(2018,5,22,14,51,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"TerryTrezise", time: new Date(2018,5,22,14,51,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"LouisMetevia", time: new Date(2018,5,22,14,57,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Andrew_hatfield", time: new Date(2018,5,22,15,0,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Kamaunu", time: new Date(2018,5,22,15,3,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"rogeliosanfratello", time: new Date(2018,5,22,15,7,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Joan_Bork", time: new Date(2018,5,22,15,46,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Keithley", time: new Date(2018,5,22,16,6,0,0).getTime() - getUTC(new Date()), location:"Unknown",  city: "Hiding"});
		rawArray.push({name:"CliffordSidhom", time: new Date(2018,5,22,17,2,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Evelyn_McNiel", time: new Date(2018,5,22,17,3,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Yvonealvey", time: new Date(2018,5,22,17,55,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Marquitta_Boozer", time: new Date(2018,5,22,18,12,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"FranciscoDuy", time: new Date(2018,5,22,18,21,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"FlorenceWildt", time: new Date(2018,5,22,18,50,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Merissa_Murano", time: new Date(2018,5,22,19,9,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"curtis_schaper", time: new Date(2018,5,22,19,15,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"gunk", time: new Date(2018,5,22,19,24,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
    rawArray.push({name:"Dreckman", time: new Date(2018,5,22,19,29,0,0).getTime() - getUTC(new Date()), location:"Unknown",  city: "Hiding"});
		rawArray.push({name:"ChristianDvorak", time: new Date(2018,5,22,20,45,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Rose_Ket", time: new Date(2018,5,22,20,47,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"dwayne_sprinkles", time: new Date(2018,5,22,21,0,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"SharonFrazier", time: new Date(2018,5,22,22,14,0,0).getTime() - getUTC(new Date()), location:"Unknown",  city: "Hiding"});
		rawArray.push({name:"Miss_Laker", time: new Date(2018,5,22,22,23,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"mmvenom", time: new Date(2018,5,22,23,17,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Frank_Baldenucci", time: new Date(2018,5,23,0,14,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Jack_Wingeier", time: new Date(2018,5,23,0,28,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Goodreau", time: new Date(2018,5,23,1,1,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"kuhta", time: new Date(2018,5,23,1,48,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Dysfunctional", time: new Date(2018,5,23,1,58,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Manson", time: new Date(2018,5,23,2,8,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"HarryHuerta", time: new Date(2018,5,23,2,35,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Hhdbdcx", time: new Date(2018,5,23,2,55,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
    rawArray.push({name:"jackeline_lopez", time: new Date(2018,5,23,2,59,0,0).getTime() - getUTC(new Date()), location:"Unknown",  city: "Hiding"});
		rawArray.push({name:"Rufus_Gonnerman", time: new Date(2018,5,23,3,9,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"miguel_oesterling", time: new Date(2018,5,23,3,21,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"McElhannon", time: new Date(2018,5,23,3,30,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"RickyKnight", time: new Date(2018,5,23,3,33,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"DeniseCameron", time: new Date(2018,5,23,3,37,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"edgardohenshall", time: new Date(2018,5,23,3,42,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Sharp", time: new Date(2018,5,23,3,42,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Hallihan", time: new Date(2018,5,23,3,43,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Seth_Hill", time: new Date(2018,5,23,3,43,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"VivienneChristner", time: new Date(2018,5,23,3,44,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"bernard_duffy-", time: new Date(2018,5,23,3,54,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"kimahri", time: new Date(2018,5,23,4,3,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Hardisty", time: new Date(2018,5,23,4,6,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"janetirelan", time: new Date(2018,5,23,4,24,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Lester_Garfinkel", time: new Date(2018,5,23,4,30,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"redline", time: new Date(2018,5,23,4,51,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Michele", time: new Date(2018,5,23,5,35,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Manuel_Hackett", time: new Date(2018,5,23,5,58,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Balatan", time: new Date(2018,5,23,5,59,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Jamar_Hagin", time: new Date(2018,5,23,6,17,0,0).getTime() - getUTC(new Date()), location:"Unknown",  city: "Hiding"});
		rawArray.push({name:"Dolcetto", time: new Date(2018,5,23,7,34,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Beerly", time: new Date(2018,5,23,7,41,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Borgers", time: new Date(2018,5,23,7,55,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Calderon", time: new Date(2018,5,23,8,38,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
    rawArray.push({name:"Luis_Kata", time: new Date(2018,5,23,9,50,0,0).getTime() - getUTC(new Date()), location:"Unknown",  city: "Hiding"});
		rawArray.push({name:"BigBaby", time: new Date(2018,5,23,10,13,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"oflmao", time: new Date(2018,5,23,10,13,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Ruby_Perez", time: new Date(2018,5,23,10,17,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Whoever", time: new Date(2018,5,23,10,37,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"JefferyMcCully", time: new Date(2018,5,23,10,57,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"DarinLemmon", time: new Date(2018,5,23,11,45,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Lawrence_Bennett", time: new Date(2018,5,23,11,54,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"vilkama", time: new Date(2018,5,23,12,14,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Jimmyalleman", time: new Date(2018,5,23,12,28,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
    rawArray.push({name:"HaroldTijerina", time: new Date(2018,5,23,13,46,0,0).getTime() - getUTC(new Date()), location:"Unknown",  city: "Hiding"});
		rawArray.push({name:"Fawbush", time: new Date(2018,5,23,13,53,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"fabionuno", time: new Date(2018,5,23,14,41,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"ChristyMcVoy_", time: new Date(2018,5,23,16,23,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"GLEE", time: new Date(2018,5,23,16,52,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Everhart", time: new Date(2018,5,23,17,21,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Joshua_Farfaglia", time: new Date(2018,5,23,17,36,0,0).getTime() - getUTC(new Date()), location:"Unknown",  city: "Hiding"});
		rawArray.push({name:"MistiBeltran", time: new Date(2018,5,23,17,52,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Rudolph_Asher", time: new Date(2018,5,23,18,12,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"TyrellPatel", time: new Date(2018,5,23,18,42,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Reons", time: new Date(2018,5,23,18,43,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"omer", time: new Date(2018,5,23,19,33,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Jack_Napier", time: new Date(2018,5,23,20,42,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
    rawArray.push({name:"Joseph_Ward", time: new Date(2018,5,23,21,53,0,0).getTime() - getUTC(new Date()), location:"Unknown",  city: "Hiding"});
		rawArray.push({name:"Alethea", time: new Date(2018,5,23,22,8,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"JosiahQuintal", time: new Date(2018,5,23,22,38,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"JudithChavous", time: new Date(2018,5,23,22,39,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Jadus", time: new Date(2018,5,23,22,43,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Quincy_Lantey", time: new Date(2018,5,23,23,0,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"ReubenBiorkman", time: new Date(2018,5,23,23,8,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"alyse_krueger", time: new Date(2018,5,24,0,44,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Haddad", time: new Date(2018,5,24,2,2,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"ArnoldoSmith", time: new Date(2018,5,24,2,31,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Herbster", time: new Date(2018,5,24,3,2,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"bansmer", time: new Date(2018,5,24,3,26,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"cellar", time: new Date(2018,5,24,3,59,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Florim", time: new Date(2018,5,24,5,12,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Glennfarris", time: new Date(2018,5,24,6,32,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"BIGG", time: new Date(2018,5,24,6,46,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Villarruel", time: new Date(2018,5,24,6,47,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"FrankFrankC", time: new Date(2018,5,24,6,58,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"MargarettaHelmick", time: new Date(2018,5,24,7,2,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Jesse_Bettencourt", time: new Date(2018,5,24,7,3,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Otis_Beisser", time: new Date(2018,5,24,7,50,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"LoganBurd", time: new Date(2018,5,24,8,8,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"RayGaddis", time: new Date(2018,5,24,8,9,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Elisha_Pywell", time: new Date(2018,5,24,8,41,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Corenecarr", time: new Date(2018,5,24,8,50,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Carlos_Folgar", time: new Date(2018,5,24,8,50,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"James_Rodamis", time: new Date(2018,5,24,8,50,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"redington", time: new Date(2018,5,24,8,50,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Ueyis", time: new Date(2018,5,24,9,51,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Colin_McCune", time: new Date(2018,5,24,10,8,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"RunUp", time: new Date(2018,5,24,10,13,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Randy_Gionson", time: new Date(2018,5,24,10,44,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Kevin_burwell", time: new Date(2018,5,24,10,48,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"LoisMcDonald", time: new Date(2018,5,24,10,48,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Joseph_Smith", time: new Date(2018,5,24,10,49,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"williamrude", time: new Date(2018,5,24,10,49,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"ElbertPetri", time: new Date(2018,5,24,10,49,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"BrianTorres", time: new Date(2018,5,24,11,5,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Casie_Solomon", time: new Date(2018,5,24,11,9,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Ledbetter", time: new Date(2018,5,24,11,21,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Beers", time: new Date(2018,5,24,12,47,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"BrantAdkisson", time: new Date(2018,5,24,13,2,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Carlo_Agresta", time: new Date(2018,5,24,13,24,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"MarkStegner", time: new Date(2018,5,24,13,28,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Josue_Gourley-", time: new Date(2018,5,24,13,40,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Sana", time: new Date(2018,5,24,13,41,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Pellerin", time: new Date(2018,5,24,14,29,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Frank_Larkins", time: new Date(2018,5,24,15,25,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"ConnorFarrington", time: new Date(2018,5,24,16,54,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Javier_Sinitiere", time: new Date(2018,5,24,17,7,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"mattiegeorgiades", time: new Date(2018,5,24,17,10,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"brittneymoustafa", time: new Date(2018,5,24,17,26,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Yarnell", time: new Date(2018,5,24,18,31,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"MikeBurton", time: new Date(2018,5,24,18,36,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Paul_Patzner", time: new Date(2018,5,24,18,48,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"takisha_haan", time: new Date(2018,5,24,19,56,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"gueretta", time: new Date(2018,5,24,20,25,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"DaNNy", time: new Date(2018,5,24,20,44,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"jammer", time: new Date(2018,5,24,21,10,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Jerrold_Camilli", time: new Date(2018,5,24,21,22,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"MarioMoore", time: new Date(2018,5,24,22,3,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Montez", time: new Date(2018,5,24,22,11,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"brosey", time: new Date(2018,5,24,22,52,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Nellie_Preslipsky", time: new Date(2018,5,24,23,9,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"deberry", time: new Date(2018,5,24,23,33,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"THC", time: new Date(2018,5,24,23,41,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Meschino", time: new Date(2018,5,25,0,43,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"ArgonG", time: new Date(2018,5,25,1,27,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"faubion", time: new Date(2018,5,25,2,38,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"CraigTllo", time: new Date(2018,5,25,2,51,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Gil", time: new Date(2018,5,25,2,54,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"brugger", time: new Date(2018,5,25,3,23,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Al_Ligambi", time: new Date(2018,5,25,4,1,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Gary_Hemphill", time: new Date(2018,5,25,4,37,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"jonathanpenunuri_", time: new Date(2018,5,25,5,5,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"sciacca", time: new Date(2018,5,25,5,30,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Essie-McCroy", time: new Date(2018,5,25,5,35,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Zoobski", time: new Date(2018,5,25,6,16,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"NeilCordova", time: new Date(2018,5,25,6,27,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"FernandoKelch", time: new Date(2018,5,25,6,51,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"ShellaGruda-", time: new Date(2018,5,25,7,32,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Malika_Campisi", time: new Date(2018,5,25,7,34,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Bustos", time: new Date(2018,5,25,8,17,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Buterbaugh", time: new Date(2018,5,25,10,37,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Lastinger", time: new Date(2018,5,25,10,38,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"StuartNugent", time: new Date(2018,5,25,10,38,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Nicola", time: new Date(2018,5,25,10,54,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"marchelle_jolley", time: new Date(2018,5,25,11,10,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"mcelmarry", time: new Date(2018,5,25,12,7,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Crush", time: new Date(2018,5,25,13,24,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Brittni-McAnally", time: new Date(2018,5,25,13,30,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"RamonGuillaume", time: new Date(2018,5,25,14,4,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"LeDydy", time: new Date(2018,5,25,17,29,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Gonzalo_Maddox", time: new Date(2018,5,25,17,47,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Shirley_Porst", time: new Date(2018,5,25,18,10,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"lecain", time: new Date(2018,5,25,19,16,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Breanne_Townsend", time: new Date(2018,5,25,21,31,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"pizarro", time: new Date(2018,5,25,22,16,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Leslie_Pulliam", time: new Date(2018,5,25,22,28,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Kyle_Lear", time: new Date(2018,5,25,23,51,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Vernon_Stewart", time: new Date(2018,5,26,0,38,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"SterlingArcher", time: new Date(2018,5,26,1,48,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"AgnesSheridan", time: new Date(2018,5,26,2,7,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Blah", time: new Date(2018,5,26,2,33,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"SpLeen", time: new Date(2018,5,26,4,21,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Montoku", time: new Date(2018,5,26,4,55,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"JavierFrost", time: new Date(2018,5,26,4,59,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"MikeKashuba", time: new Date(2018,5,26,5,45,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"McNeely", time: new Date(2018,5,26,5,46,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Jonathantanzosch", time: new Date(2018,5,26,6,25,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"BuenaCall", time: new Date(2018,5,26,6,51,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Johnna_Bain", time: new Date(2018,5,26,8,23,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Robin_Shands", time: new Date(2018,5,26,9,8,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"LisaLovelock", time: new Date(2018,5,26,9,10,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"AliWalsh", time: new Date(2018,5,26,10,5,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Agathably", time: new Date(2018,5,26,10,48,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Shelby_bredow", time: new Date(2018,5,26,11,21,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Carlow", time: new Date(2018,5,26,12,48,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Jessie_Braue", time: new Date(2018,5,26,12,55,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"VilmaGooding", time: new Date(2018,5,26,13,36,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"LeeThompkins", time: new Date(2018,5,26,13,45,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"PlaceOfTruth", time: new Date(2018,5,26,13,57,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Sauce_Walka", time: new Date(2018,5,26,14,56,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Donaldcrittenden", time: new Date(2018,5,26,15,14,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Kenneth_Jernigan", time: new Date(2018,5,26,16,29,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Lyman_sampsell", time: new Date(2018,5,26,16,46,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Rallu", time: new Date(2018,5,26,17,22,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Mladeen", time: new Date(2018,5,26,17,22,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"KenMcCuin", time: new Date(2018,5,26,17,41,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Hitman22", time: new Date(2018,5,26,18,57,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"ThePenguin", time: new Date(2018,5,26,19,29,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"DarkSt1", time: new Date(2018,5,26,20,25,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Leonard-Dickson", time: new Date(2018,5,26,20,44,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"EugeneSzerlong", time: new Date(2018,5,26,20,45,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"WilmerLouis", time: new Date(2018,5,26,20,54,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Forums2", time: new Date(2018,5,26,22,19,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"James_bentley", time: new Date(2018,5,26,22,47,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Mary_Pettit", time: new Date(2018,5,26,23,50,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Desmond_jenkins", time: new Date(2018,5,27,0,18,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Gabe", time: new Date(2018,5,27,0,55,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"strobridge", time: new Date(2018,5,27,0,56,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Jestes", time: new Date(2018,5,27,0,57,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Buzick", time: new Date(2018,5,27,0,57,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Michalke", time: new Date(2018,5,27,0,57,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"terrancesperry", time: new Date(2018,5,27,3,8,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Whatvz", time: new Date(2018,5,27,3,27,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"JoniOliver", time: new Date(2018,5,27,4,53,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Terry_Bablak", time: new Date(2018,5,27,5,10,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Nicholas_Devore", time: new Date(2018,5,27,5,56,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Youngstallion", time: new Date(2018,5,27,5,56,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Josef_Mintos", time: new Date(2018,5,27,6,15,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"JenniferMassett", time: new Date(2018,5,27,6,16,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"JohnnyBarzini", time: new Date(2018,5,27,6,16,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"alishia", time: new Date(2018,5,27,6,44,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"DenverEstrello", time: new Date(2018,5,27,8,3,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"DeAndre", time: new Date(2018,5,27,8,27,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Pamela_Brenner", time: new Date(2018,5,27,8,27,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Albertodunnington", time: new Date(2018,5,27,11,6,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Gerdel", time: new Date(2018,5,27,11,56,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Phaedrus", time: new Date(2018,5,27,14,13,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Robert_Foster", time: new Date(2018,5,27,14,18,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Forrest", time: new Date(2018,5,27,14,41,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Perk", time: new Date(2018,5,27,15,39,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Beauty", time: new Date(2018,5,27,15,41,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Agostinelli", time: new Date(2018,5,27,16,49,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Daze", time: new Date(2018,5,27,17,14,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"kushd", time: new Date(2018,5,27,17,26,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Kurtis", time: new Date(2018,5,27,20,4,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"lashanda", time: new Date(2018,5,27,22,45,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
<!-- End Here -->
  return rawArray;
}
