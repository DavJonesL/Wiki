function buildPage(){
  document.getElementById("lastUpdateP").innerHTML = "<b>Last Update</b> 18/07/2019";
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
		rawArray.push({name:"Jennifer_Kertz", time: new Date(2019,6,18,11,13,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Colin_Deans", time: new Date(2019,6,18,12,0,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Kolle", time: new Date(2019,6,18,12,57,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"JoaquinJones", time: new Date(2019,6,18,13,26,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Murasame", time: new Date(2019,6,18,14,37,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Mark_Lees", time: new Date(2019,6,18,15,0,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Stokeley", time: new Date(2019,6,18,15,0,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"tsmdirtydan", time: new Date(2019,6,18,15,12,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"mohammad-najdi", time: new Date(2019,6,18,16,43,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Wolpertedgardo", time: new Date(2019,6,18,18,11,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"deaths", time: new Date(2019,6,18,19,19,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"newfieiam", time: new Date(2019,6,18,19,23,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"ChadMcDugle", time: new Date(2019,6,18,19,27,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Amelia_Barnes", time: new Date(2019,6,18,19,44,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"DT>Amelia_Barnes", time: new Date(2019,6,18,19,44,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"MuiMusson", time: new Date(2019,6,18,19,46,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Sambrook", time: new Date(2019,6,18,20,21,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Masuary", time: new Date(2019,6,18,20,25,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Essadof", time: new Date(2019,6,18,20,54,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"Otterson", time: new Date(2019,6,18,21,56,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"wimpy", time: new Date(2019,6,18,22,39,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Caryl_Drzewiecki", time: new Date(2019,6,18,22,44,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Jesse_Oberst", time: new Date(2019,6,18,23,10,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Roderick_Johnson", time: new Date(2019,6,18,23,46,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Kaitlin_Yoshizumi", time: new Date(2019,6,18,23,47,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Cecil_cortner", time: new Date(2019,6,18,23,51,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Drinkley", time: new Date(2019,6,18,23,52,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"PeterFile", time: new Date(2019,6,19,0,13,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Grey2019", time: new Date(2019,6,19,0,18,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Antonio_Oleson", time: new Date(2019,6,19,1,5,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Moranville", time: new Date(2019,6,19,1,17,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Keith_Herklotz", time: new Date(2019,6,19,1,23,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"charlescasanova", time: new Date(2019,6,19,2,9,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Loresk", time: new Date(2019,6,19,2,15,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Pass", time: new Date(2019,6,19,3,12,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Carmen_Merksamer", time: new Date(2019,6,19,4,9,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"AveryMullaly", time: new Date(2019,6,19,4,31,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"Rabbit", time: new Date(2019,6,19,5,8,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"GeraldCordell", time: new Date(2019,6,19,5,44,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Lashley", time: new Date(2019,6,19,6,11,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Cherly_Ensell", time: new Date(2019,6,19,6,55,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Tanner_Kollmeyer", time: new Date(2019,6,19,8,31,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"JorgeEvins", time: new Date(2019,6,19,9,2,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Godnick", time: new Date(2019,6,19,10,45,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Kennethsahl", time: new Date(2019,6,19,10,52,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Hentai", time: new Date(2019,6,19,11,40,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Canes", time: new Date(2019,6,19,11,40,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"leverenz", time: new Date(2019,6,19,12,0,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Asylum", time: new Date(2019,6,19,12,1,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Eileen_Mink", time: new Date(2019,6,19,12,6,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Deakins", time: new Date(2019,6,19,12,16,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Sunderland", time: new Date(2019,6,19,12,31,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Andrew-Thackston", time: new Date(2019,6,19,12,46,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"PrinceReavon", time: new Date(2019,6,19,12,53,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"dale_betak", time: new Date(2019,6,19,13,38,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"RKS", time: new Date(2019,6,19,13,41,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Kleese", time: new Date(2019,6,19,13,55,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"JoshuaSauer", time: new Date(2019,6,19,14,42,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"RebeccaVerderber", time: new Date(2019,6,19,14,43,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Ted_Adelblue", time: new Date(2019,6,19,14,46,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"JeremyUptmor", time: new Date(2019,6,19,14,50,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Timothy_Weakley", time: new Date(2019,6,19,14,52,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"zelox", time: new Date(2019,6,19,14,54,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"DouglasKaopua", time: new Date(2019,6,19,15,26,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Marco_Kinn", time: new Date(2019,6,19,16,18,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Miguez", time: new Date(2019,6,19,16,40,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"bergmann", time: new Date(2019,6,19,18,21,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Sai", time: new Date(2019,6,19,18,37,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Poppln", time: new Date(2019,6,19,19,9,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Sylvester_Ziebold", time: new Date(2019,6,19,19,23,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Shara_Watson", time: new Date(2019,6,19,19,35,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Kurland", time: new Date(2019,6,19,20,26,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"GeraldLewandoski", time: new Date(2019,6,19,20,53,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Carmanmosley_", time: new Date(2019,6,19,22,12,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Scottie_Quamme", time: new Date(2019,6,19,22,41,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Brittney-Novak", time: new Date(2019,6,19,23,15,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"xanaxzombie", time: new Date(2019,6,19,23,52,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Susan_Bethea", time: new Date(2019,6,20,0,17,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Wygal", time: new Date(2019,6,20,0,35,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"MargaritaWolff", time: new Date(2019,6,20,0,53,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"WalterGauntner", time: new Date(2019,6,20,1,24,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Alline_hunter", time: new Date(2019,6,20,2,3,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"SusanaRickman", time: new Date(2019,6,20,2,6,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Bryan_Lasalle", time: new Date(2019,6,20,2,54,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Jerryhaner", time: new Date(2019,6,20,3,0,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"CaraLindskog", time: new Date(2019,6,20,3,2,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"RhondaBarbee", time: new Date(2019,6,20,3,7,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Del_Kreft", time: new Date(2019,6,20,3,29,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Alexander_Mizia", time: new Date(2019,6,20,3,50,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"jeanduffy", time: new Date(2019,6,20,3,54,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Hollie_brown", time: new Date(2019,6,20,4,13,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"trig", time: new Date(2019,6,20,4,14,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Sherman_betties", time: new Date(2019,6,20,4,19,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Dirk", time: new Date(2019,6,20,4,34,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"HumbertoEggleston", time: new Date(2019,6,20,5,49,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Chase_Liss", time: new Date(2019,6,20,6,19,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Willie_Odriscoll-", time: new Date(2019,6,20,8,58,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Steven_Sterling", time: new Date(2019,6,20,9,17,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"LennyHunley", time: new Date(2019,6,20,9,18,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"papa_paw", time: new Date(2019,6,20,9,51,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"HenryLehman", time: new Date(2019,6,20,10,57,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"PierrePounds", time: new Date(2019,6,20,12,20,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"JamesHeverly", time: new Date(2019,6,20,14,46,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Tim_Fedorczyk", time: new Date(2019,6,20,15,12,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"Donald_Almarez", time: new Date(2019,6,20,16,40,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"_Herbert-Meister", time: new Date(2019,6,20,17,29,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Jada", time: new Date(2019,6,20,19,12,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Carl_Jacobs", time: new Date(2019,6,20,19,14,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"garyholzworth", time: new Date(2019,6,20,19,15,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"DelfinaCourtney", time: new Date(2019,6,20,19,15,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Victor_Friend", time: new Date(2019,6,20,19,16,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Reponte", time: new Date(2019,6,20,20,25,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Angel", time: new Date(2019,6,20,20,27,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Carrell", time: new Date(2019,6,20,20,41,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"PimpcentVanGogh", time: new Date(2019,6,20,21,26,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"LisaSivils", time: new Date(2019,6,20,21,43,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"SabinaTessier", time: new Date(2019,6,20,22,1,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"MichaelWaters", time: new Date(2019,6,20,22,2,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"McDermott", time: new Date(2019,6,20,22,16,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Wanda_Reidhead", time: new Date(2019,6,20,22,22,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Ranee", time: new Date(2019,6,20,22,40,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Geissler", time: new Date(2019,6,20,23,14,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"Julia_Gainey", time: new Date(2019,6,20,23,18,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Kirsten", time: new Date(2019,6,20,23,34,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Tammi_Winiarski", time: new Date(2019,6,21,0,2,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"BillyYoshina", time: new Date(2019,6,21,0,7,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"JonellTreanor", time: new Date(2019,6,21,0,37,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"CarltonTuley", time: new Date(2019,6,21,2,28,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"TimothyMilderberger", time: new Date(2019,6,21,2,51,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"CaitlynDernier", time: new Date(2019,6,21,3,42,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"qadir", time: new Date(2019,6,21,3,52,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"LawrenceJanelle", time: new Date(2019,6,21,3,54,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"jerry_erspamer", time: new Date(2019,6,21,4,5,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"DelbertFlury-", time: new Date(2019,6,21,4,5,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Skulski", time: new Date(2019,6,21,4,22,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"DeshawnKennedy", time: new Date(2019,6,21,4,25,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"LindaKampe", time: new Date(2019,6,21,4,41,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"jimmyjohnson", time: new Date(2019,6,21,4,44,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"ReiS", time: new Date(2019,6,21,4,45,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Candie_Epp", time: new Date(2019,6,21,5,30,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"LinwoodBirchfield", time: new Date(2019,6,21,7,52,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Louis_Cannoli", time: new Date(2019,6,21,8,30,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"richard_centrone", time: new Date(2019,6,21,8,32,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Castial", time: new Date(2019,6,21,8,45,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Joshua", time: new Date(2019,6,21,9,26,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"TondaVargas", time: new Date(2019,6,21,10,59,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"Soo_grocott", time: new Date(2019,6,21,11,39,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Cecil_Rowe", time: new Date(2019,6,21,12,11,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Sarita_Haskell", time: new Date(2019,6,21,12,31,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Sugai", time: new Date(2019,6,21,13,53,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"GladysChareunrath", time: new Date(2019,6,21,14,49,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Stanley_Schmidt", time: new Date(2019,6,21,15,13,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"DeeBaby", time: new Date(2019,6,21,15,44,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"EusebioBenavides-", time: new Date(2019,6,21,16,32,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"erik-amaral", time: new Date(2019,6,21,18,28,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Dench", time: new Date(2019,6,21,19,38,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Ronald_Turnbow", time: new Date(2019,6,21,19,52,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"RolandWagar", time: new Date(2019,6,21,20,22,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"ore", time: new Date(2019,6,21,20,23,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"OscarBacorn", time: new Date(2019,6,21,20,51,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Shaun", time: new Date(2019,6,21,21,11,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Rodney_Koch", time: new Date(2019,6,21,21,26,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"yoshieschultz", time: new Date(2019,6,21,22,14,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"AlexSantoyo", time: new Date(2019,6,21,22,44,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"HelloAlone", time: new Date(2019,6,21,22,50,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Jennifer_Nocum", time: new Date(2019,6,21,23,38,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Jeffry_Eskew", time: new Date(2019,6,21,23,49,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Ridgle", time: new Date(2019,6,22,0,8,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Lappin", time: new Date(2019,6,22,0,18,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"AntonioBarrios", time: new Date(2019,6,22,0,24,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"Gladys", time: new Date(2019,6,22,0,55,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Gutkin", time: new Date(2019,6,22,1,5,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"GustavoBruggman", time: new Date(2019,6,22,1,27,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Brian_Mangone", time: new Date(2019,6,22,1,52,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Pinkers", time: new Date(2019,6,22,3,34,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Christina_byron", time: new Date(2019,6,22,5,37,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Kasey_McClure", time: new Date(2019,6,22,5,56,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"HubCitySpartan", time: new Date(2019,6,22,6,20,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Gregory_Riley", time: new Date(2019,6,22,7,1,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Dropping_Rocks", time: new Date(2019,6,22,7,22,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Laurie_Flores", time: new Date(2019,6,22,7,40,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"mantelis1223", time: new Date(2019,6,22,8,2,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"JohnnieBorrego", time: new Date(2019,6,22,8,6,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"maisha_sevaaetasi", time: new Date(2019,6,22,8,50,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Thedamccartney", time: new Date(2019,6,22,9,3,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Gen0cide", time: new Date(2019,6,22,9,22,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Eloisking", time: new Date(2019,6,22,9,50,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"DeMoN", time: new Date(2019,6,22,10,18,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"EzequielAvey", time: new Date(2019,6,22,10,48,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"KevinRoss", time: new Date(2019,6,22,10,57,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Wickham_Ben", time: new Date(2019,6,22,11,4,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Maudie_Imber", time: new Date(2019,6,22,11,5,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"Rebecka_Hopper", time: new Date(2019,6,22,12,17,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"Sandra_Wisse", time: new Date(2019,6,22,12,52,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Lloyd_Nickerson", time: new Date(2019,6,22,13,57,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Ricky_Hainsey", time: new Date(2019,6,22,14,10,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Tishie", time: new Date(2019,6,22,14,13,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Mandell", time: new Date(2019,6,22,14,53,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"GaryBaldy", time: new Date(2019,6,22,15,17,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"DonLegio", time: new Date(2019,6,22,15,24,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"_Kim_Spearman", time: new Date(2019,6,22,17,17,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"FrederickSchmidbauer", time: new Date(2019,6,22,18,52,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Phonomania", time: new Date(2019,6,22,19,37,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"silveira_", time: new Date(2019,6,22,19,53,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"NelsonMandela", time: new Date(2019,6,22,21,9,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"daniellvanblarcom", time: new Date(2019,6,22,21,10,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Mathai", time: new Date(2019,6,22,21,35,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Pandy", time: new Date(2019,6,22,21,43,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"breard", time: new Date(2019,6,22,21,47,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Larry_Brazen", time: new Date(2019,6,22,23,12,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"derpinaderpa", time: new Date(2019,6,22,23,44,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"GlennHaynes", time: new Date(2019,6,23,0,0,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"DeandrePizzo", time: new Date(2019,6,23,0,51,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Michael_Sullens", time: new Date(2019,6,23,0,56,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"WillisHuskins", time: new Date(2019,6,23,1,41,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"melatoninpoppin", time: new Date(2019,6,23,2,18,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"JamesPhillips", time: new Date(2019,6,23,3,10,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"PatrickGainey", time: new Date(2019,6,23,3,53,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"stiebel", time: new Date(2019,6,23,3,55,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"LawrenceBinney", time: new Date(2019,6,23,4,21,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Barrysnake", time: new Date(2019,6,23,4,34,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Jordan_Vardaro", time: new Date(2019,6,23,5,6,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Gucci", time: new Date(2019,6,23,5,23,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"McGriff", time: new Date(2019,6,23,6,54,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Buro", time: new Date(2019,6,23,7,7,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Gradygowans", time: new Date(2019,6,23,7,50,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Sundblad", time: new Date(2019,6,23,7,53,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"AnthonyEckel", time: new Date(2019,6,23,8,10,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"PhilMeUp", time: new Date(2019,6,23,8,13,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"leigh_chrisler", time: new Date(2019,6,23,8,56,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Pasquale_mcgee", time: new Date(2019,6,23,9,2,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"NicolasBurnham", time: new Date(2019,6,23,9,44,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Deborah_Werner", time: new Date(2019,6,23,10,32,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Kurtis_Carboni", time: new Date(2019,6,23,10,33,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"RaymondGoetz", time: new Date(2019,6,23,10,37,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Lonny", time: new Date(2019,6,23,10,52,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Conrad_Belts", time: new Date(2019,6,23,12,26,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"kent", time: new Date(2019,6,23,12,42,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Lemuel_adames", time: new Date(2019,6,23,13,28,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"BonnieStidd", time: new Date(2019,6,23,14,0,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"becky", time: new Date(2019,6,23,14,10,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Pauline_Smith", time: new Date(2019,6,23,14,17,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"RonaldLiggons", time: new Date(2019,6,23,14,17,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Wayne_Jelinek", time: new Date(2019,6,23,14,19,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"RickJames", time: new Date(2019,6,23,14,59,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Connie_Medina", time: new Date(2019,6,23,15,0,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"ReneeMistry", time: new Date(2019,6,23,16,16,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Greg_Baumkirchner", time: new Date(2019,6,23,17,8,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Dominique_Sheehan", time: new Date(2019,6,23,17,38,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Pilakowski", time: new Date(2019,6,23,18,8,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"dontekelly", time: new Date(2019,6,23,18,23,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Ronald_viramontas", time: new Date(2019,6,23,20,54,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"VincentSoucy", time: new Date(2019,6,23,21,28,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"kathyskattebo", time: new Date(2019,6,23,21,49,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Maurice_mccarthy", time: new Date(2019,6,23,21,50,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"LarryMarthe", time: new Date(2019,6,23,22,27,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Denalloyd", time: new Date(2019,6,23,22,33,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"corrales", time: new Date(2019,6,23,22,47,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Berglund", time: new Date(2019,6,23,23,6,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"WreckTangle", time: new Date(2019,6,23,23,20,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Tonycosden", time: new Date(2019,6,23,23,34,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"TereseHufford", time: new Date(2019,6,23,23,44,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"NeroJ", time: new Date(2019,6,24,0,29,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Luciadisanto", time: new Date(2019,6,24,0,42,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"spazzzz", time: new Date(2019,6,24,0,48,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"indigo", time: new Date(2019,6,24,1,12,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Avola", time: new Date(2019,6,24,2,3,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Squirrelnuts", time: new Date(2019,6,24,2,5,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"FrankCutchin-", time: new Date(2019,6,24,2,42,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Rocky_Dunbar", time: new Date(2019,6,24,2,44,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"BlakeAppelgren", time: new Date(2019,6,24,4,14,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Cowels", time: new Date(2019,6,24,5,52,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Kenneth_Schmidt", time: new Date(2019,6,24,6,21,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Aaron_monger", time: new Date(2019,6,24,7,19,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Sean_Numbers_", time: new Date(2019,6,24,8,19,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Lenore_Dias", time: new Date(2019,6,24,8,45,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"YBW_Staxx", time: new Date(2019,6,24,10,23,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Barbararay", time: new Date(2019,6,24,10,58,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"AprilKramer", time: new Date(2019,6,24,11,40,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Andra_Murphy", time: new Date(2019,6,24,11,45,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"FerminaCrissman", time: new Date(2019,6,24,14,25,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"kapselxd", time: new Date(2019,6,24,15,54,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Froncek", time: new Date(2019,6,24,16,6,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"BigDog19", time: new Date(2019,6,24,17,23,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Geoffreykuhar", time: new Date(2019,6,24,19,16,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"count_drugcula", time: new Date(2019,6,24,21,6,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"GervaccioCaldora", time: new Date(2019,6,24,22,0,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"cl0ver", time: new Date(2019,6,24,23,0,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Clarethadeily", time: new Date(2019,6,25,4,7,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Fettachini", time: new Date(2019,6,25,5,28,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
<!-- End Here -->
  return rawArray;
}
