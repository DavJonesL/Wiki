function buildPage(){
  document.getElementById("lastUpdateP").innerHTML = "<b>Last Update</b> 11/05/2018";
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
		rawArray.push({name:"Wojnowski", time: new Date(2018,4,10,19,17,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"StanleyTobin", time: new Date(2018,4,10,19,25,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Damion_Smith", time: new Date(2018,4,10,19,59,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Bryan_Traves", time: new Date(2018,4,10,20,23,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"bert_sthilaire", time: new Date(2018,4,10,20,25,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Willie_Spain", time: new Date(2018,4,10,20,42,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"zetta-mcgowan", time: new Date(2018,4,10,20,58,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"DancingPianos", time: new Date(2018,4,10,20,59,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Leo_Passman", time: new Date(2018,4,10,21,26,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Jadin", time: new Date(2018,4,10,22,2,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"AnneHerman", time: new Date(2018,4,10,22,8,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"carl_morton", time: new Date(2018,4,10,22,26,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"RyanT", time: new Date(2018,4,10,22,40,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"gordonkiley", time: new Date(2018,4,11,0,14,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"KlotzKlotz", time: new Date(2018,4,11,0,36,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Romos", time: new Date(2018,4,11,1,0,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"David_Cox", time: new Date(2018,4,11,1,10,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"CristalShumate", time: new Date(2018,4,11,1,44,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Dautremont", time: new Date(2018,4,11,2,1,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Zheng", time: new Date(2018,4,11,2,14,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"BrainSpena", time: new Date(2018,4,11,2,45,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Schmiel", time: new Date(2018,4,11,3,10,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"KillaJoe", time: new Date(2018,4,11,4,7,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"TedLee", time: new Date(2018,4,11,5,9,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Santor_Walter", time: new Date(2018,4,11,5,19,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Worrall", time: new Date(2018,4,11,5,29,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Brockington", time: new Date(2018,4,11,5,31,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"emanuel_smart", time: new Date(2018,4,11,5,32,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Calleca", time: new Date(2018,4,11,6,5,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"clapp", time: new Date(2018,4,11,8,50,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Sentry", time: new Date(2018,4,11,9,3,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"gardner", time: new Date(2018,4,11,9,27,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"VirgilBrawley", time: new Date(2018,4,11,9,28,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"BillRittie", time: new Date(2018,4,11,10,4,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"LewisTeet", time: new Date(2018,4,11,10,41,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"MistressDee", time: new Date(2018,4,11,11,21,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Dezmo", time: new Date(2018,4,11,11,53,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Leed", time: new Date(2018,4,11,12,31,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"William_Hammer", time: new Date(2018,4,11,12,39,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Stacey_Lundrigan", time: new Date(2018,4,11,12,40,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Keith_Eckblad", time: new Date(2018,4,11,12,43,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Leon_Lahaye", time: new Date(2018,4,11,12,43,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Halley", time: new Date(2018,4,11,12,43,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"clintano", time: new Date(2018,4,11,13,47,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"ElizabethPolvino", time: new Date(2018,4,11,13,48,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"mahr", time: new Date(2018,4,11,14,20,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"nameless", time: new Date(2018,4,11,14,36,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"T-Rex", time: new Date(2018,4,11,15,42,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"PhilipMarks", time: new Date(2018,4,11,17,2,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"SalvatoreRonquillo", time: new Date(2018,4,11,17,54,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"JimMiller", time: new Date(2018,4,11,18,2,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Orlando-Aurich", time: new Date(2018,4,11,18,35,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Stuart_Pfender", time: new Date(2018,4,11,18,50,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"lupeeldridge", time: new Date(2018,4,11,19,21,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Tyson", time: new Date(2018,4,11,19,21,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Floydshaw", time: new Date(2018,4,11,19,55,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"LawrenceCross_", time: new Date(2018,4,11,20,1,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Jayna", time: new Date(2018,4,11,20,7,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"JenniferBessey", time: new Date(2018,4,11,20,15,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Susan-hanson", time: new Date(2018,4,11,22,34,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"RandyMoneaux", time: new Date(2018,4,11,23,8,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"leda", time: new Date(2018,4,11,23,48,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"phpkiller", time: new Date(2018,4,11,23,53,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"TamalaBakko", time: new Date(2018,4,12,0,5,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Rodneywalljasper", time: new Date(2018,4,12,0,9,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Noreencinco", time: new Date(2018,4,12,0,22,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"DonBonz", time: new Date(2018,4,12,0,43,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"DannieVaughn", time: new Date(2018,4,12,1,17,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Muffster", time: new Date(2018,4,12,1,55,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"ffffff", time: new Date(2018,4,12,3,19,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Netter", time: new Date(2018,4,12,4,12,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Buchanan", time: new Date(2018,4,12,4,28,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Recinos", time: new Date(2018,4,12,4,36,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Keeler", time: new Date(2018,4,12,4,43,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"JosephinaBilbrew", time: new Date(2018,4,12,4,43,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"KerryKoma", time: new Date(2018,4,12,4,44,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"EvonneBurbach", time: new Date(2018,4,12,5,39,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"KeithHayes", time: new Date(2018,4,12,6,39,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Yukio", time: new Date(2018,4,12,6,48,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"PatrickMay", time: new Date(2018,4,12,7,16,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"adamluna", time: new Date(2018,4,12,7,29,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Doyal", time: new Date(2018,4,12,8,1,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Chilcote", time: new Date(2018,4,12,8,21,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Carla_Davidson", time: new Date(2018,4,12,8,22,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Elvira_roark", time: new Date(2018,4,12,9,25,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Miguel_Hamilton", time: new Date(2018,4,12,9,48,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"KaraNead", time: new Date(2018,4,12,9,52,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Brandon_carlos", time: new Date(2018,4,12,10,42,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Gabriel_Plohr", time: new Date(2018,4,12,10,56,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Cedric", time: new Date(2018,4,12,10,57,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"valentine", time: new Date(2018,4,12,11,17,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Herbert_Cooper", time: new Date(2018,4,12,11,37,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Robyn-Bruins", time: new Date(2018,4,12,12,2,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Thone", time: new Date(2018,4,12,12,20,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"SamanthaPrieto", time: new Date(2018,4,12,12,38,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"regan", time: new Date(2018,4,12,13,3,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Rochelle", time: new Date(2018,4,12,13,27,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Arthur", time: new Date(2018,4,12,13,43,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"TannaRittenour", time: new Date(2018,4,12,14,14,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Yer_Jones", time: new Date(2018,4,12,14,50,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"John_Dewitt", time: new Date(2018,4,12,14,50,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"JerryOsterlund", time: new Date(2018,4,12,14,50,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Antonetta_mensen", time: new Date(2018,4,12,14,51,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"ChrisKindrick", time: new Date(2018,4,12,15,27,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Patrick_Cooper", time: new Date(2018,4,12,16,47,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Annamae_Strong", time: new Date(2018,4,12,17,40,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Michalek", time: new Date(2018,4,12,17,46,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Erick", time: new Date(2018,4,12,18,0,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Florene_Hicks", time: new Date(2018,4,12,18,18,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"_Ralph_Lewis", time: new Date(2018,4,12,18,24,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Greg_Kanady", time: new Date(2018,4,12,18,53,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Bialy", time: new Date(2018,4,12,19,51,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"LatoyaFarfalla", time: new Date(2018,4,12,20,4,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Checka", time: new Date(2018,4,12,20,12,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"IU", time: new Date(2018,4,12,21,3,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Archilla", time: new Date(2018,4,12,21,50,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Thea_Mingle", time: new Date(2018,4,12,21,56,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Gunlove", time: new Date(2018,4,12,22,12,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"JosephMiraglia", time: new Date(2018,4,12,22,15,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Lowell_Magyar", time: new Date(2018,4,12,22,58,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"TommyMerlyn", time: new Date(2018,4,12,23,0,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Ora_Lachance", time: new Date(2018,4,12,23,44,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"DrewTerry", time: new Date(2018,4,12,23,48,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Stephen_Harmon", time: new Date(2018,4,13,1,37,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"AlanFriedstrom", time: new Date(2018,4,13,1,44,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"trenton_dierkes", time: new Date(2018,4,13,2,1,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"phycho315", time: new Date(2018,4,13,2,29,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"James_Walrath", time: new Date(2018,4,13,2,56,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Janette_grubbs", time: new Date(2018,4,13,3,21,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Amy_Gibson", time: new Date(2018,4,13,3,21,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Sonja_Nguyen", time: new Date(2018,4,13,3,21,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"ShannonBryant", time: new Date(2018,4,13,3,42,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"DeangeloBoyd", time: new Date(2018,4,13,4,16,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Rolle", time: new Date(2018,4,13,4,42,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"EazeyBlood", time: new Date(2018,4,13,6,37,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Seema", time: new Date(2018,4,13,7,55,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"_Leah_Growell", time: new Date(2018,4,13,8,15,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Dianemilloway", time: new Date(2018,4,13,9,7,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Diedre_Devens", time: new Date(2018,4,13,9,30,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"XvT", time: new Date(2018,4,13,9,47,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"MyungAmes", time: new Date(2018,4,13,9,54,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"CarrolLandquist", time: new Date(2018,4,13,10,3,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Prevet", time: new Date(2018,4,13,10,4,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"ReneHumbird", time: new Date(2018,4,13,10,4,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"NathanaelSigns", time: new Date(2018,4,13,10,4,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Carmen_Nagelhout", time: new Date(2018,4,13,11,1,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"levi_lashure", time: new Date(2018,4,13,11,4,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"PaulCollopy", time: new Date(2018,4,13,11,10,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Gerald_Gonzalez", time: new Date(2018,4,13,11,35,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Brochu", time: new Date(2018,4,13,11,51,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Jody_cocanougher", time: new Date(2018,4,13,13,49,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Nemesia", time: new Date(2018,4,13,14,15,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"F___", time: new Date(2018,4,13,15,27,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Lessie", time: new Date(2018,4,13,15,33,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"DerrickCridland", time: new Date(2018,4,13,15,50,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"porter", time: new Date(2018,4,13,15,52,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"rolando_goodard", time: new Date(2018,4,13,16,26,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Sancho", time: new Date(2018,4,13,16,30,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"BlehBluhBlah", time: new Date(2018,4,13,16,32,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"LeeKilarjian", time: new Date(2018,4,13,16,39,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Ariel_Johnson", time: new Date(2018,4,13,16,58,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"LaraeBranson", time: new Date(2018,4,13,17,2,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"AquillaChan", time: new Date(2018,4,13,17,21,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"chadsimpson", time: new Date(2018,4,13,17,46,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"EmilyNye", time: new Date(2018,4,13,18,22,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Enrique_Whitehorn-", time: new Date(2018,4,13,19,17,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Kayser", time: new Date(2018,4,13,19,27,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Lin_Rossmann", time: new Date(2018,4,13,20,5,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Paul_Alge", time: new Date(2018,4,13,20,51,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Vincent_Ontiveros", time: new Date(2018,4,13,21,6,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"DomitilaJackson", time: new Date(2018,4,13,22,43,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Whoopity-scoop", time: new Date(2018,4,13,23,18,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Figert", time: new Date(2018,4,14,0,8,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"JonReine", time: new Date(2018,4,14,0,18,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"SuperNatural", time: new Date(2018,4,14,0,55,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Jeffery_Bates", time: new Date(2018,4,14,1,0,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Hohenheim", time: new Date(2018,4,14,2,10,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"AmandaCrowly", time: new Date(2018,4,14,2,38,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Grave", time: new Date(2018,4,14,4,23,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"My_Brandt", time: new Date(2018,4,14,5,13,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Vittorio_Dalpini", time: new Date(2018,4,14,5,17,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Timothy_tucker", time: new Date(2018,4,14,6,5,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Johnny_Manzio", time: new Date(2018,4,14,6,37,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Phoenix_Sky", time: new Date(2018,4,14,6,39,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"johnny_huskey", time: new Date(2018,4,14,6,50,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Suess", time: new Date(2018,4,14,8,17,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
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
		rawArray.push({name:"SkinnyMcGill", time: new Date(2018,4,14,20,53,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Dan", time: new Date(2018,4,14,21,23,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"eddievanbenthuyse", time: new Date(2018,4,14,21,53,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Linnan", time: new Date(2018,4,14,21,58,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"DrPepper", time: new Date(2018,4,14,22,0,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"DemarcusBacker", time: new Date(2018,4,14,22,9,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"JoshuaGreggs", time: new Date(2018,4,14,22,42,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Elsa_Randazzo", time: new Date(2018,4,14,23,28,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"RichardOchotorena", time: new Date(2018,4,15,0,4,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Maxwell_Vanscoy", time: new Date(2018,4,15,0,53,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Fludd", time: new Date(2018,4,15,1,53,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Kevin_Cox", time: new Date(2018,4,15,2,21,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Howardplouffe", time: new Date(2018,4,15,3,3,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"OdisDurtsche", time: new Date(2018,4,15,3,24,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Gemyni", time: new Date(2018,4,15,3,40,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Velniar", time: new Date(2018,4,15,3,49,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Lee_scripture", time: new Date(2018,4,15,3,55,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Synthia", time: new Date(2018,4,15,5,25,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Marquis_Edland", time: new Date(2018,4,15,6,47,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"marcano", time: new Date(2018,4,15,6,58,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Slice", time: new Date(2018,4,15,7,2,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"MaeSerrell", time: new Date(2018,4,15,9,2,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"RaymondWynne", time: new Date(2018,4,15,9,3,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Daines", time: new Date(2018,4,15,10,44,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"HerschelSarff", time: new Date(2018,4,15,11,42,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"donald_naso", time: new Date(2018,4,15,12,4,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Glenn_Carr", time: new Date(2018,4,15,12,42,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Bettina", time: new Date(2018,4,15,13,9,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"DungBerryhill", time: new Date(2018,4,15,13,17,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"ChadPeggs", time: new Date(2018,4,15,14,35,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Clarence_Derby", time: new Date(2018,4,15,14,46,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Dexter_Williams", time: new Date(2018,4,15,15,31,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"SeanPetrucci", time: new Date(2018,4,15,16,10,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Barry_Boursaw", time: new Date(2018,4,15,16,20,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Locke", time: new Date(2018,4,15,16,22,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"SimonSanchez", time: new Date(2018,4,15,17,7,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"h1016962", time: new Date(2018,4,15,18,55,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Mike_Glenson", time: new Date(2018,4,15,21,15,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"MirianAyers", time: new Date(2018,4,15,23,1,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"eddie_nightengale", time: new Date(2018,4,15,23,29,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"TammieBrown", time: new Date(2018,4,15,23,41,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Mr_Codewell", time: new Date(2018,4,16,1,2,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"JordanLillig", time: new Date(2018,4,16,1,16,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Stuart_gray", time: new Date(2018,4,16,1,57,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Drax", time: new Date(2018,4,16,2,1,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Amillio_Barsotti", time: new Date(2018,4,16,2,55,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Steve_Kummer", time: new Date(2018,4,16,3,34,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"ChandaPanas", time: new Date(2018,4,16,3,42,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Swiggett", time: new Date(2018,4,16,3,42,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Grivna", time: new Date(2018,4,16,3,43,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Slimw0lfy", time: new Date(2018,4,16,4,34,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Maheras", time: new Date(2018,4,16,4,56,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Curtis_Brockman", time: new Date(2018,4,16,5,38,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Wreckitralph", time: new Date(2018,4,16,6,26,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Steven_Barnett", time: new Date(2018,4,16,6,46,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Anubiss", time: new Date(2018,4,16,7,3,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"AnthonyHorstman", time: new Date(2018,4,16,7,6,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Aj075", time: new Date(2018,4,16,7,41,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Kyuss", time: new Date(2018,4,16,8,38,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Lofink", time: new Date(2018,4,16,9,28,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Cerbera", time: new Date(2018,4,16,10,34,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Buxbaum", time: new Date(2018,4,16,10,34,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"JenaeBonnett", time: new Date(2018,4,16,11,34,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Cody_sankovich", time: new Date(2018,4,16,13,17,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Ziebert", time: new Date(2018,4,16,13,48,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Andrea_Desbiens", time: new Date(2018,4,16,15,7,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"sandy_logsdon", time: new Date(2018,4,16,15,8,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"safford", time: new Date(2018,4,16,15,22,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"DNAshooter", time: new Date(2018,4,16,16,23,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"man", time: new Date(2018,4,16,16,26,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"standford", time: new Date(2018,4,16,16,40,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Boogie", time: new Date(2018,4,16,17,0,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Essick", time: new Date(2018,4,16,17,13,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Tsutsumi", time: new Date(2018,4,16,17,47,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Sylvia_Sanghez", time: new Date(2018,4,16,19,13,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Mahomly", time: new Date(2018,4,16,19,52,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Enzo", time: new Date(2018,4,16,20,17,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Jeffery_Martinez", time: new Date(2018,4,16,21,31,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Dean_Stupar", time: new Date(2018,4,16,21,33,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Broodychristopher", time: new Date(2018,4,16,23,11,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Arkan67", time: new Date(2018,4,16,23,12,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"BruceAlbury", time: new Date(2018,4,16,23,53,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"linwood", time: new Date(2018,4,16,23,53,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"penni_masone_", time: new Date(2018,4,16,23,54,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Thomas_Angelo", time: new Date(2018,4,17,0,1,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"trey_williams", time: new Date(2018,4,17,0,3,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"ted_girone", time: new Date(2018,4,17,0,3,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Hunziker", time: new Date(2018,4,17,0,19,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Sholar", time: new Date(2018,4,17,1,6,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Chin-Skates", time: new Date(2018,4,17,1,12,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Ar3s", time: new Date(2018,4,17,2,13,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Lamar_Rooke", time: new Date(2018,4,17,2,24,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Verla_Montross", time: new Date(2018,4,17,2,28,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Irish", time: new Date(2018,4,17,3,18,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"CorneliusBehney", time: new Date(2018,4,17,3,57,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Davin", time: new Date(2018,4,17,4,9,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Kenneth_Penley", time: new Date(2018,4,17,4,9,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"MatthewThiboutot", time: new Date(2018,4,17,4,9,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Johnnie_Morgan", time: new Date(2018,4,17,4,34,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"capps", time: new Date(2018,4,17,5,50,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"ranson", time: new Date(2018,4,17,6,24,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Reul", time: new Date(2018,4,17,7,36,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"DouglasBleck", time: new Date(2018,4,17,7,45,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
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
		rawArray.push({name:"Batosai", time: new Date(2018,4,17,15,18,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Estelle_Naso", time: new Date(2018,4,17,15,19,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"JudyHarris", time: new Date(2018,4,17,15,21,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"CathyWinters", time: new Date(2018,4,17,15,49,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"DewayneAinsworth", time: new Date(2018,4,17,15,59,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Vlad2020", time: new Date(2018,4,17,16,0,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"F4F", time: new Date(2018,4,17,16,42,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Gene_Musielak", time: new Date(2018,4,17,16,51,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Sarah_Bethany", time: new Date(2018,4,17,16,54,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Hovantzi", time: new Date(2018,4,17,17,42,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Elizbeth_Buswell", time: new Date(2018,4,17,18,16,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Kurt_Allanson", time: new Date(2018,4,17,18,41,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Emilie_Smith", time: new Date(2018,4,17,21,3,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Party-Poison", time: new Date(2018,4,17,23,40,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"chusaengsri4", time: new Date(2018,4,18,0,6,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
<!-- End Here -->
  return rawArray;
}
