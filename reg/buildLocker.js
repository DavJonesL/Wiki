function buildPage(){
  document.getElementById("lastUpdateP").innerHTML = "<b>Last Update</b> 31/07/2019";
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
		rawArray.push({name:"Chuck_holt", time: new Date(2019,6,31,6,3,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Gonzalotunis", time: new Date(2019,6,31,6,8,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Charlie_muncy", time: new Date(2019,6,31,6,14,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"mirna", time: new Date(2019,6,31,7,40,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Sabeiha", time: new Date(2019,6,31,8,31,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"SharonHagen", time: new Date(2019,6,31,8,35,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Jessie_Huscher", time: new Date(2019,6,31,9,42,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"Don", time: new Date(2019,6,31,9,49,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Darrin_Redfearn", time: new Date(2019,6,31,10,11,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Timothy_Pace", time: new Date(2019,6,31,12,25,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"Bell", time: new Date(2019,6,31,12,51,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"MichaelJackson", time: new Date(2019,6,31,14,21,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Edward_Brimage", time: new Date(2019,6,31,14,31,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"Roger_Ulwelling", time: new Date(2019,6,31,16,20,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Earnest", time: new Date(2019,6,31,16,30,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Jessie_McLaughlin", time: new Date(2019,6,31,17,24,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"getman", time: new Date(2019,6,31,17,24,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"regenia_luckman", time: new Date(2019,6,31,18,17,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"yoko", time: new Date(2019,6,31,18,22,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Nipps", time: new Date(2019,6,31,18,25,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"nodoaz", time: new Date(2019,6,31,19,36,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Paterno", time: new Date(2019,6,31,20,22,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Albertha_Debow", time: new Date(2019,6,31,20,31,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"ZettaHavens", time: new Date(2019,6,31,23,42,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Esther_Goldrich", time: new Date(2019,6,31,23,42,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Jerry_Miller", time: new Date(2019,7,1,0,49,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"ChrisTalon", time: new Date(2019,7,1,1,7,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Rorygravito", time: new Date(2019,7,1,3,26,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Kugler", time: new Date(2019,7,1,3,34,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Longbrake", time: new Date(2019,7,1,3,52,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Transistor", time: new Date(2019,7,1,4,39,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Dillard", time: new Date(2019,7,1,4,58,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"SandyBorodec", time: new Date(2019,7,1,5,10,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Lucian", time: new Date(2019,7,1,6,48,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"George_Tang", time: new Date(2019,7,1,7,18,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"DemoGoCrazi", time: new Date(2019,7,1,7,42,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Castilla", time: new Date(2019,7,1,9,21,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"MichaelWachs", time: new Date(2019,7,1,10,27,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Way", time: new Date(2019,7,1,11,2,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"peter_aharoni", time: new Date(2019,7,1,12,24,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Seara", time: new Date(2019,7,1,13,39,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Micki", time: new Date(2019,7,1,14,34,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Genich", time: new Date(2019,7,1,14,49,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"DawnaPhipps", time: new Date(2019,7,1,14,59,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Devonheard", time: new Date(2019,7,1,17,51,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Battmaz", time: new Date(2019,7,1,18,38,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Decato", time: new Date(2019,7,1,18,56,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"QPEX", time: new Date(2019,7,1,19,7,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"seanmoya", time: new Date(2019,7,1,20,2,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"ScottMilks", time: new Date(2019,7,1,21,9,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"vanda_ortez", time: new Date(2019,7,1,22,41,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"PhilipWosher", time: new Date(2019,7,1,22,48,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"JonaEscamilla", time: new Date(2019,7,1,23,0,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"LizbethBorich", time: new Date(2019,7,1,23,46,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"Daemon", time: new Date(2019,7,1,23,52,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"NiNe", time: new Date(2019,7,2,0,5,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Marguerita", time: new Date(2019,7,2,0,15,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Gayler", time: new Date(2019,7,2,0,58,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Emile_Stempert", time: new Date(2019,7,2,3,7,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"knake", time: new Date(2019,7,2,3,36,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Melda_Plum", time: new Date(2019,7,2,3,44,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"HenryRicker", time: new Date(2019,7,2,5,32,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Szypowski", time: new Date(2019,7,2,6,2,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"catherine_scott", time: new Date(2019,7,2,7,41,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Jon-Gagne", time: new Date(2019,7,2,7,50,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Desire", time: new Date(2019,7,2,8,22,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Leslie_Duong", time: new Date(2019,7,2,8,48,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Tim-Rix", time: new Date(2019,7,2,8,52,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Notaro", time: new Date(2019,7,2,9,46,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"WalterSolivan", time: new Date(2019,7,2,10,33,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Sandy_pagley", time: new Date(2019,7,2,12,0,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"RegenaHorvers", time: new Date(2019,7,2,12,48,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Rodney_Ramos", time: new Date(2019,7,2,12,52,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Lynnglordano", time: new Date(2019,7,2,13,5,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"TomLangston", time: new Date(2019,7,2,13,15,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Irvingmcerlean", time: new Date(2019,7,2,13,54,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Urzua", time: new Date(2019,7,2,15,12,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"El_Gucci", time: new Date(2019,7,2,15,33,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Shaku", time: new Date(2019,7,2,15,48,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"CarolynApple", time: new Date(2019,7,2,15,51,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Dyan", time: new Date(2019,7,2,15,51,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"BrigetteRitchotte", time: new Date(2019,7,2,15,52,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Segreto", time: new Date(2019,7,2,16,47,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Albert_Moret", time: new Date(2019,7,2,16,54,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Seth_madewell", time: new Date(2019,7,2,16,54,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"RandellMcGlockton", time: new Date(2019,7,2,18,41,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"YukoTsu", time: new Date(2019,7,2,19,40,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Robin_sandefer", time: new Date(2019,7,2,21,18,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"JamesAmbrister", time: new Date(2019,7,2,21,57,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Jeffrey_Grise", time: new Date(2019,7,2,22,26,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Matt_Wohlers", time: new Date(2019,7,2,22,51,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"HerculesHUN", time: new Date(2019,7,3,0,0,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"_Robinson", time: new Date(2019,7,3,1,34,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"TressieMaggi", time: new Date(2019,7,3,1,53,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"horace_handeland", time: new Date(2019,7,3,2,3,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"PedroPatchin", time: new Date(2019,7,3,2,11,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Siderman", time: new Date(2019,7,3,4,27,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"Krethsin", time: new Date(2019,7,3,4,46,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"EddieScherer", time: new Date(2019,7,3,4,54,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Mikellake", time: new Date(2019,7,3,7,14,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"georgewillingham", time: new Date(2019,7,3,8,37,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"SheronPayan", time: new Date(2019,7,3,8,54,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Kelly_Mirman", time: new Date(2019,7,3,9,30,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"HeribertoChastant", time: new Date(2019,7,3,10,41,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"CharlieReome", time: new Date(2019,7,3,11,41,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"JetFuelFeelz", time: new Date(2019,7,3,11,44,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"metallo", time: new Date(2019,7,3,12,28,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"HenryHollmann", time: new Date(2019,7,3,12,28,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Jerrybeckett", time: new Date(2019,7,3,13,0,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"anika", time: new Date(2019,7,3,14,37,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Elijah_Sos", time: new Date(2019,7,3,14,58,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"BruceWikholm", time: new Date(2019,7,3,15,17,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Delmy_Sconyers", time: new Date(2019,7,3,16,52,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"StanleyGayne", time: new Date(2019,7,3,17,39,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"DiegoRincon", time: new Date(2019,7,3,17,44,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"clifford_coghill", time: new Date(2019,7,3,18,27,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"WalterKim", time: new Date(2019,7,3,18,30,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"carlos_guzzi-", time: new Date(2019,7,3,18,38,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Shavonne", time: new Date(2019,7,3,20,21,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"CharlesSchultz", time: new Date(2019,7,3,20,49,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Kennerson", time: new Date(2019,7,3,21,1,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Mueller", time: new Date(2019,7,3,21,8,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"Timothy_Brickley", time: new Date(2019,7,3,21,18,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Wyatt_Farer", time: new Date(2019,7,3,21,48,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Gayle_Small", time: new Date(2019,7,3,21,49,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"ToiFerreira", time: new Date(2019,7,3,22,5,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"BryanH", time: new Date(2019,7,3,22,43,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Malorie_Towse", time: new Date(2019,7,3,23,51,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Coppinger", time: new Date(2019,7,4,0,29,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Hubert_Martin", time: new Date(2019,7,4,1,14,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Joshua_Diegel", time: new Date(2019,7,4,1,22,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"FedericoBellingtier", time: new Date(2019,7,4,3,3,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"agney", time: new Date(2019,7,4,3,38,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Ernestine_Navarro", time: new Date(2019,7,4,4,31,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"MafiaReborn", time: new Date(2019,7,4,4,57,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"TotalRage", time: new Date(2019,7,4,5,31,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"PeterAydin", time: new Date(2019,7,4,5,36,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"Sang_Gentry", time: new Date(2019,7,4,5,41,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Eytchison", time: new Date(2019,7,4,6,27,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Laurarehman", time: new Date(2019,7,4,6,42,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Lop", time: new Date(2019,7,4,7,18,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Synthia", time: new Date(2019,7,4,7,25,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"wsw", time: new Date(2019,7,4,7,38,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"DanielZucco", time: new Date(2019,7,4,8,11,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Kathleen_Myers", time: new Date(2019,7,4,8,20,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"AmermanHoward", time: new Date(2019,7,4,8,20,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Debartolo", time: new Date(2019,7,4,13,13,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Nick_fullilove", time: new Date(2019,7,4,13,51,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"HueyGonzalez", time: new Date(2019,7,4,13,58,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Milton_Palmore", time: new Date(2019,7,4,15,38,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Britany_Woods", time: new Date(2019,7,4,17,34,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"dammann", time: new Date(2019,7,4,18,2,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"DonaldTyler", time: new Date(2019,7,4,18,44,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Stoffel", time: new Date(2019,7,4,19,10,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"DeanBedeker", time: new Date(2019,7,4,19,25,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Championed", time: new Date(2019,7,4,20,0,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"AdrianTabler", time: new Date(2019,7,4,21,0,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"ClayGravett", time: new Date(2019,7,4,21,9,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"loop", time: new Date(2019,7,4,21,37,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"MarlonRich", time: new Date(2019,7,4,22,18,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Karencrager", time: new Date(2019,7,4,22,26,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"WillowMessner", time: new Date(2019,7,4,22,47,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Normand_Hopple", time: new Date(2019,7,4,23,14,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Vena_Geren", time: new Date(2019,7,5,15,4,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"larry_burg", time: new Date(2019,7,5,17,31,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"cthegood", time: new Date(2019,7,5,19,19,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Filippides", time: new Date(2019,7,5,20,44,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"raminez", time: new Date(2019,7,5,23,23,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Gregory_Oakes", time: new Date(2019,7,6,1,1,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Albert_Alexander", time: new Date(2019,7,6,1,33,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Roy_William", time: new Date(2019,7,6,5,31,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"OnePunchMan", time: new Date(2019,7,6,7,34,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"victor_zamacona", time: new Date(2019,7,6,11,25,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"RodneyInge", time: new Date(2019,7,6,14,27,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Nuccio", time: new Date(2019,7,6,16,11,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"DonaldKarwowski", time: new Date(2019,7,6,17,6,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
<!-- End Here -->
  return rawArray;
}
