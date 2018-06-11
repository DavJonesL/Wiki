function buildPage(){
  document.getElementById("lastUpdateP").innerHTML = "<b>Last Update</b> 11/06/2018";
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
		rawArray.push({name:"masterer", time: new Date(2018,5,11,2,47,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Guluere", time: new Date(2018,5,11,3,13,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Cyree", time: new Date(2018,5,11,3,16,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Iva_Richardson", time: new Date(2018,5,11,3,19,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Lawrence_Morones", time: new Date(2018,5,11,4,6,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"JackChase", time: new Date(2018,5,11,5,21,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Dallas", time: new Date(2018,5,11,5,51,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Jeremycarne", time: new Date(2018,5,11,6,0,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"venable", time: new Date(2018,5,11,6,2,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Kettle1", time: new Date(2018,5,11,6,22,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Zenaida_Poirot", time: new Date(2018,5,11,7,6,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"David_Knopp", time: new Date(2018,5,11,7,7,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Omoyosi", time: new Date(2018,5,11,7,7,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"AnthonyJozwiak", time: new Date(2018,5,11,7,14,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Bobby_Scott", time: new Date(2018,5,11,7,29,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"JoeLoung", time: new Date(2018,5,11,7,56,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"MatthewDonovan", time: new Date(2018,5,11,8,18,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"MarciJimerez", time: new Date(2018,5,11,8,33,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Cobra", time: new Date(2018,5,11,8,36,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Rodolfo_Appling_", time: new Date(2018,5,11,9,1,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"h1de", time: new Date(2018,5,11,9,25,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Chase_Skovira", time: new Date(2018,5,11,10,24,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Pilo", time: new Date(2018,5,11,10,26,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"ShenLiem", time: new Date(2018,5,11,10,35,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"EndlessTorment", time: new Date(2018,5,11,11,6,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Stephen_Iamiceli", time: new Date(2018,5,11,11,52,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"kimberlypohorilla", time: new Date(2018,5,11,11,53,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Raymond_Bowman", time: new Date(2018,5,11,12,2,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Fielder", time: new Date(2018,5,11,12,38,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"JerryLefevre", time: new Date(2018,5,11,12,56,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Herman_Novo", time: new Date(2018,5,11,13,10,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"CarlosJervis", time: new Date(2018,5,11,13,27,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Dominski", time: new Date(2018,5,11,13,31,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Distaffen", time: new Date(2018,5,11,13,50,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Reggie_Kray", time: new Date(2018,5,11,14,4,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Skony", time: new Date(2018,5,11,16,40,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Gggggg", time: new Date(2018,5,11,18,22,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Victorcostello", time: new Date(2018,5,11,19,49,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Reese_Jimmy", time: new Date(2018,5,11,20,49,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"FrankSoltis", time: new Date(2018,5,11,20,49,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Joe_Belmont", time: new Date(2018,5,11,21,8,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"samantharobotham", time: new Date(2018,5,11,23,38,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Nery_godlewski", time: new Date(2018,5,12,0,30,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Vaggy", time: new Date(2018,5,12,1,21,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Dagmar_Schorn", time: new Date(2018,5,12,2,41,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Lucy_Latulipe", time: new Date(2018,5,12,3,21,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Sileo", time: new Date(2018,5,12,3,21,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"TanikaJohnson", time: new Date(2018,5,12,3,21,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Gary_Garcia", time: new Date(2018,5,12,3,59,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Pankey", time: new Date(2018,5,12,4,27,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"George_Piselli", time: new Date(2018,5,12,4,47,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"OrvalSpanicek", time: new Date(2018,5,12,5,30,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Boughman", time: new Date(2018,5,12,5,50,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Philip_Johnson", time: new Date(2018,5,12,6,48,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Judy_Kastning", time: new Date(2018,5,12,7,3,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Tanner_ahlemeyer", time: new Date(2018,5,12,7,27,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"William_bumbray", time: new Date(2018,5,12,7,40,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Ester_Perry", time: new Date(2018,5,12,8,17,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"NathanielMilliken", time: new Date(2018,5,12,8,48,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Bucknell", time: new Date(2018,5,12,9,2,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"XV", time: new Date(2018,5,12,9,5,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Syble_Kerchal", time: new Date(2018,5,12,9,25,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"kasi_rolseth", time: new Date(2018,5,12,9,51,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"jamesmaglaya", time: new Date(2018,5,12,10,15,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"LeslieKnope", time: new Date(2018,5,12,10,36,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"RandomName", time: new Date(2018,5,12,11,51,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"dr4ke", time: new Date(2018,5,12,11,51,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Anne_Rathbone", time: new Date(2018,5,12,11,53,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Mahapatra", time: new Date(2018,5,12,11,59,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Vernon", time: new Date(2018,5,12,12,1,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"You", time: new Date(2018,5,12,12,10,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Estep", time: new Date(2018,5,12,12,13,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Luke_folger", time: new Date(2018,5,12,12,20,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Caprice", time: new Date(2018,5,12,12,37,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Stacytownsend", time: new Date(2018,5,12,12,48,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"CaptainCola", time: new Date(2018,5,12,13,2,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"SalvadorMcMilliam", time: new Date(2018,5,12,13,39,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Dora_Twisdale", time: new Date(2018,5,12,14,2,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Iyer", time: new Date(2018,5,12,14,8,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"rmno", time: new Date(2018,5,12,14,35,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"LynwoodSharber", time: new Date(2018,5,12,14,49,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Haru", time: new Date(2018,5,12,14,51,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"JohnGotti", time: new Date(2018,5,12,16,26,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Angie_Ellenwood", time: new Date(2018,5,12,18,47,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Garrett", time: new Date(2018,5,12,19,24,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Mickie", time: new Date(2018,5,12,19,52,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"CarlosMarcello", time: new Date(2018,5,12,19,52,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Squibly", time: new Date(2018,5,12,20,13,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Daniel_Verret", time: new Date(2018,5,12,20,25,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"CoraIglesias", time: new Date(2018,5,12,21,25,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Earl_Christian", time: new Date(2018,5,12,21,27,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Madaras", time: new Date(2018,5,12,21,32,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Jeffrey_Hopkins", time: new Date(2018,5,12,22,29,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Salvador_king", time: new Date(2018,5,12,22,35,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"EddiePetteway", time: new Date(2018,5,12,22,41,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Josh", time: new Date(2018,5,12,23,5,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"MattWarrilow", time: new Date(2018,5,12,23,6,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Fenrich", time: new Date(2018,5,12,23,24,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Stan_Marsh", time: new Date(2018,5,12,23,52,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Robinson", time: new Date(2018,5,13,0,11,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Dwight_Beverley", time: new Date(2018,5,13,0,27,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"charleswilliamsen", time: new Date(2018,5,13,0,42,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Michael_Greer", time: new Date(2018,5,13,1,37,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"StephenYamaoka", time: new Date(2018,5,13,1,51,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Samule", time: new Date(2018,5,13,2,39,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Rekcah", time: new Date(2018,5,13,2,45,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Nickolaz", time: new Date(2018,5,13,2,58,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"WilliamJenrette", time: new Date(2018,5,13,3,23,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"ernest_cook", time: new Date(2018,5,13,3,47,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"EllisPazan", time: new Date(2018,5,13,4,32,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"wendy_gawrys", time: new Date(2018,5,13,4,42,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"RosePayne", time: new Date(2018,5,13,4,50,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Hickinbotham", time: new Date(2018,5,13,5,3,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"LordNorros", time: new Date(2018,5,13,5,46,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Jack_Ash", time: new Date(2018,5,13,7,29,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Steven_Baldanucci", time: new Date(2018,5,13,7,48,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Samuel_McHugh-", time: new Date(2018,5,13,7,50,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Danielgermani", time: new Date(2018,5,13,7,54,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Jason_krajnovich", time: new Date(2018,5,13,8,13,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"MaryPratten", time: new Date(2018,5,13,8,48,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"JamieSchiveley", time: new Date(2018,5,13,10,25,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Polo", time: new Date(2018,5,13,10,30,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Emeldadhar", time: new Date(2018,5,13,12,33,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"brong", time: new Date(2018,5,13,13,7,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Plaerb", time: new Date(2018,5,13,14,18,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Rediske", time: new Date(2018,5,13,16,4,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"TerryCleaver", time: new Date(2018,5,13,16,6,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"ManuelDowding", time: new Date(2018,5,13,16,40,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"JeffreyBenedek", time: new Date(2018,5,13,17,21,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Tyler_Betties", time: new Date(2018,5,13,17,22,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Cory_reese", time: new Date(2018,5,13,17,49,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Art_Harriett", time: new Date(2018,5,13,19,23,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"DonaldSee", time: new Date(2018,5,13,20,21,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Marcmartin", time: new Date(2018,5,13,21,15,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"JereGacad", time: new Date(2018,5,13,21,47,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Delre", time: new Date(2018,5,13,21,54,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"ChristopherPeeples", time: new Date(2018,5,13,22,11,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Felix_brunson", time: new Date(2018,5,13,23,35,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"MarcusLafontain", time: new Date(2018,5,13,23,52,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Fatty_Wiggles", time: new Date(2018,5,14,1,16,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Lough", time: new Date(2018,5,14,1,28,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"buttimer", time: new Date(2018,5,14,2,22,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"krekman", time: new Date(2018,5,14,4,26,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Satoe", time: new Date(2018,5,14,4,36,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Raul_Boom", time: new Date(2018,5,14,4,54,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Joshua_Freeman", time: new Date(2018,5,14,4,58,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Pdkkx", time: new Date(2018,5,14,6,52,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Brett_Harrison", time: new Date(2018,5,14,7,32,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Pyros", time: new Date(2018,5,14,7,39,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Admn", time: new Date(2018,5,14,7,47,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Dagnone", time: new Date(2018,5,14,7,59,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"StanHotaling", time: new Date(2018,5,14,8,12,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Starling", time: new Date(2018,5,14,9,23,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Smeersel", time: new Date(2018,5,14,9,53,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"bebras", time: new Date(2018,5,14,10,50,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"NorrinRadd", time: new Date(2018,5,14,11,13,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Michael_Ciciora", time: new Date(2018,5,14,11,35,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Chad_Kusuma", time: new Date(2018,5,14,11,58,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Dreadlost", time: new Date(2018,5,14,12,50,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"annett_griggers", time: new Date(2018,5,14,14,20,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"ToddPosadas", time: new Date(2018,5,14,14,43,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Victor_Killebrew", time: new Date(2018,5,14,16,3,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Orso", time: new Date(2018,5,14,16,48,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"MrAwesome", time: new Date(2018,5,14,17,8,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"StevenEspinoza", time: new Date(2018,5,14,17,11,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Finklestein", time: new Date(2018,5,14,17,34,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"JuliannaMacarthur", time: new Date(2018,5,14,17,53,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"DorisFlorian", time: new Date(2018,5,14,17,56,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Renee_Purdin", time: new Date(2018,5,14,18,11,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Daniel", time: new Date(2018,5,14,18,22,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Hotter", time: new Date(2018,5,14,18,41,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
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
		rawArray.push({name:"DallasLebouf", time: new Date(2018,5,15,6,18,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Crow", time: new Date(2018,5,15,6,25,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
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
		rawArray.push({name:"Montana", time: new Date(2018,5,16,1,41,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"TomFoolery", time: new Date(2018,5,16,2,0,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Katherine_Leyland", time: new Date(2018,5,16,3,19,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"VictorHolland", time: new Date(2018,5,16,3,31,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Shelba_Doyle", time: new Date(2018,5,16,3,31,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"ChrissyResureccion", time: new Date(2018,5,16,3,31,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"TomKangas", time: new Date(2018,5,16,3,31,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"RodriguezNoel", time: new Date(2018,5,16,4,32,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"polhemus", time: new Date(2018,5,16,4,38,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Min_Hanson", time: new Date(2018,5,16,5,0,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Gabriel_McOmber", time: new Date(2018,5,16,5,22,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Alberto_suleiman", time: new Date(2018,5,16,5,33,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"alfred_slattery", time: new Date(2018,5,16,5,50,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"handshaw", time: new Date(2018,5,16,6,17,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Bobby-Clams", time: new Date(2018,5,16,7,4,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Langreck", time: new Date(2018,5,16,7,27,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Kaid", time: new Date(2018,5,16,8,10,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
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
		rawArray.push({name:"AgustinWilliston", time: new Date(2018,5,16,13,14,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Kam", time: new Date(2018,5,16,13,31,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"eXop", time: new Date(2018,5,16,14,6,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Radioactive", time: new Date(2018,5,16,14,16,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"hellra1ser", time: new Date(2018,5,16,14,50,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"CalvinArlen", time: new Date(2018,5,16,15,2,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"brondax", time: new Date(2018,5,16,15,18,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"JoeMausey", time: new Date(2018,5,16,16,8,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"BlakeGrinvalsky_", time: new Date(2018,5,16,16,12,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Elisabeth", time: new Date(2018,5,16,16,19,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Milton_Limbach", time: new Date(2018,5,16,17,47,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Wayne_Petty", time: new Date(2018,5,16,17,58,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"shdwstalker", time: new Date(2018,5,16,18,8,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Krypto", time: new Date(2018,5,16,19,8,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"BarneyStallings", time: new Date(2018,5,16,21,46,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Eartha_Chambers", time: new Date(2018,5,16,22,13,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Ozai", time: new Date(2018,5,16,23,3,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Lucky_Lafitte", time: new Date(2018,5,16,23,7,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Roy_Little", time: new Date(2018,5,17,0,13,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"EuraBures", time: new Date(2018,5,17,0,23,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"JericaLanasa", time: new Date(2018,5,17,0,36,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Heribertosypniewski", time: new Date(2018,5,17,1,14,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"JoeBrinegar", time: new Date(2018,5,17,2,2,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"emmanuelvorel", time: new Date(2018,5,17,2,18,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"EricGrogan", time: new Date(2018,5,17,2,19,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"KimberlyGulati", time: new Date(2018,5,17,2,28,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"FrancisIacobucci", time: new Date(2018,5,17,2,30,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Youngquist", time: new Date(2018,5,17,4,2,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Lape", time: new Date(2018,5,17,4,28,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"vegetabile", time: new Date(2018,5,17,5,9,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Ashley", time: new Date(2018,5,17,5,25,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"ChristianaDotts", time: new Date(2018,5,17,5,32,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Agamenom", time: new Date(2018,5,17,5,38,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"RosaScoma", time: new Date(2018,5,17,5,42,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Joan", time: new Date(2018,5,17,6,0,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Manie_Drone", time: new Date(2018,5,17,6,0,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Bazile", time: new Date(2018,5,17,6,34,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Sally-Ercek", time: new Date(2018,5,17,7,15,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Steven_asa", time: new Date(2018,5,17,7,35,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"kemble", time: new Date(2018,5,17,8,37,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"Louie_Lips_Roselli", time: new Date(2018,5,17,8,43,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"BrunoStock", time: new Date(2018,5,17,8,50,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"EldonCarmon", time: new Date(2018,5,17,9,3,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
		rawArray.push({name:"Kenneth_Louis", time: new Date(2018,5,17,9,25,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Precythe", time: new Date(2018,5,17,9,29,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Beougher", time: new Date(2018,5,17,10,41,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Kristel", time: new Date(2018,5,17,10,43,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"MarkBerry", time: new Date(2018,5,17,11,28,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Capo", time: new Date(2018,5,17,11,30,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Patricia_Cross", time: new Date(2018,5,17,12,29,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Madeleine", time: new Date(2018,5,17,12,30,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"hypperlegend", time: new Date(2018,5,17,12,42,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
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
		rawArray.push({name:"Ferguson", time: new Date(2018,5,17,18,6,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Davignon", time: new Date(2018,5,17,19,2,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"BrittRieffenberger", time: new Date(2018,5,17,19,27,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"MrSpikeS", time: new Date(2018,5,17,19,49,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"DonaldRushing", time: new Date(2018,5,17,20,17,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
		rawArray.push({name:"JamesAnderson", time: new Date(2018,5,17,22,19,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
<!-- End Here -->
  return rawArray;
}
