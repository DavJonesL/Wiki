function buildPage(){
  document.getElementById("lastUpdateP").innerHTML = "<b>Last Update</b> 29/06/2019";
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
		rawArray.push({name:"TerenceOhman", time: new Date(2019,5,29,11,46,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"TiffanyMadden", time: new Date(2019,5,29,11,59,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Happy", time: new Date(2019,5,29,12,1,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Vanhamlin", time: new Date(2019,5,29,12,14,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"stanley_matter", time: new Date(2019,5,29,12,58,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"TammySkehan", time: new Date(2019,5,29,13,15,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"JewelBaker", time: new Date(2019,5,29,14,23,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"CheshireHatter", time: new Date(2019,5,29,15,42,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"ClydeMuskelly", time: new Date(2019,5,29,15,44,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"JefferyFranklin", time: new Date(2019,5,29,16,31,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Royse", time: new Date(2019,5,29,16,48,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"Kathy_Franqui", time: new Date(2019,5,29,18,6,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Cally", time: new Date(2019,5,29,18,25,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"Detales", time: new Date(2019,5,29,18,58,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Oyama", time: new Date(2019,5,29,20,25,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"chasebouza", time: new Date(2019,5,29,20,31,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"JimmyReade", time: new Date(2019,5,29,21,33,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Maria_Licciardi", time: new Date(2019,5,29,21,36,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"cimiteriox", time: new Date(2019,5,29,22,4,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Elisabeth_Herzog", time: new Date(2019,5,29,23,17,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Matthew_Baily", time: new Date(2019,5,29,23,42,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"RickeyRiofrio", time: new Date(2019,5,30,2,28,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Patel", time: new Date(2019,5,30,3,3,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Sienna", time: new Date(2019,5,30,4,26,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"_Kerry_Koelling", time: new Date(2019,5,30,5,19,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Austin_minier_", time: new Date(2019,5,30,5,21,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"ReavesMakeda", time: new Date(2019,5,30,5,43,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"DeliaMartin_", time: new Date(2019,5,30,6,45,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Bruce_Kirk", time: new Date(2019,5,30,8,42,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Serita_Tostado", time: new Date(2019,5,30,9,18,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Pollmann", time: new Date(2019,5,30,9,18,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Ricky_Garcia", time: new Date(2019,5,30,9,18,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Kekn9ne", time: new Date(2019,5,30,9,44,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Anthony_Amin", time: new Date(2019,5,30,10,10,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Menard", time: new Date(2019,5,30,10,45,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Donald_Holian", time: new Date(2019,5,30,11,6,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Carl_Lawbaugh", time: new Date(2019,5,30,11,39,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Sandki", time: new Date(2019,5,30,12,4,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Roger_Bartlome", time: new Date(2019,5,30,12,17,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"HildegardeCrenshaw", time: new Date(2019,5,30,12,24,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Gerald_Guel", time: new Date(2019,5,30,12,28,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"FrankMitchum", time: new Date(2019,5,30,13,22,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"santarpia", time: new Date(2019,5,30,13,35,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Todd_Dikens", time: new Date(2019,5,30,13,58,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Elba_Byler", time: new Date(2019,5,30,14,36,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"IExoGenesis", time: new Date(2019,5,30,15,13,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"haos", time: new Date(2019,5,30,15,18,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"RayAspley", time: new Date(2019,5,30,15,36,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Johngranata", time: new Date(2019,5,30,15,53,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Nelson_Fair", time: new Date(2019,5,30,16,10,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"jarrettvoss", time: new Date(2019,5,30,16,43,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Buganski", time: new Date(2019,5,30,17,9,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"JoshuaEgloff", time: new Date(2019,5,30,17,58,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Miyasato", time: new Date(2019,5,30,17,58,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"New", time: new Date(2019,5,30,17,58,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Denzer", time: new Date(2019,5,30,17,59,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Brian_Jubeh", time: new Date(2019,5,30,18,13,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"LA:Graphics", time: new Date(2019,5,30,18,29,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"cdogg18000", time: new Date(2019,5,30,18,41,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"bradleybailey", time: new Date(2019,5,30,19,7,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Paul_Marinella", time: new Date(2019,5,30,20,19,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"RaulDario", time: new Date(2019,5,30,20,32,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"HEAVENANDEARTH", time: new Date(2019,5,30,20,36,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"SanderGubii", time: new Date(2019,5,30,20,46,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Ohai", time: new Date(2019,5,30,20,49,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Stoklasa", time: new Date(2019,5,30,21,54,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"StopgapSam", time: new Date(2019,5,30,22,5,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"DeadyMcDeaderson", time: new Date(2019,5,30,22,42,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"oscareaton-", time: new Date(2019,5,30,23,12,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Gabe_Newell", time: new Date(2019,5,30,23,29,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"JuniorStahle", time: new Date(2019,6,1,1,15,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Sebastian_Michaelis", time: new Date(2019,6,1,1,37,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"SEA:Spit", time: new Date(2019,6,1,2,29,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"mccowin", time: new Date(2019,6,1,2,29,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Horacerattanasinh", time: new Date(2019,6,1,2,55,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"Noella_Malak", time: new Date(2019,6,1,2,59,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Kristina_Girsh", time: new Date(2019,6,1,4,3,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"sjitt", time: new Date(2019,6,1,4,26,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Alva_Simpson", time: new Date(2019,6,1,5,2,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"VeroniqueHoral", time: new Date(2019,6,1,5,3,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"DonLeon", time: new Date(2019,6,1,7,7,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Leigha_Lopez", time: new Date(2019,6,1,7,12,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Floyd_Nolan", time: new Date(2019,6,1,7,42,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Breuer", time: new Date(2019,6,1,8,26,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"Shawn_Keiper", time: new Date(2019,6,1,8,52,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Leslie_Bloes", time: new Date(2019,6,1,9,27,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Charles_Koch", time: new Date(2019,6,1,10,12,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"montecardosi", time: new Date(2019,6,1,10,38,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"oralebrormnd", time: new Date(2019,6,1,10,40,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Sinnox", time: new Date(2019,6,1,12,24,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"EdwardGuttirez", time: new Date(2019,6,1,12,33,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Seefried", time: new Date(2019,6,1,12,50,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Jed_Mirkovich", time: new Date(2019,6,1,13,48,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"GuadalupeGibson", time: new Date(2019,6,1,14,20,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"lzzoomm", time: new Date(2019,6,1,14,44,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Dennis_Ortega", time: new Date(2019,6,1,16,4,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"TommyeCarbonell", time: new Date(2019,6,1,16,25,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Nighthawk", time: new Date(2019,6,1,17,31,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"ronnygooch", time: new Date(2019,6,1,18,44,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"KevinStark", time: new Date(2019,6,1,19,10,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Doneanyway", time: new Date(2019,6,1,19,51,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"IreneMcGurn", time: new Date(2019,6,1,20,28,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"ShadowMoon", time: new Date(2019,6,1,20,33,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Casuse", time: new Date(2019,6,1,21,31,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Clyde_Hansen", time: new Date(2019,6,1,21,40,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"AngilaGray", time: new Date(2019,6,1,22,55,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"StainbrookVicky", time: new Date(2019,6,1,23,5,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Ralph_Shelton", time: new Date(2019,6,1,23,32,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"JamesHeffernan", time: new Date(2019,6,1,23,43,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"VincentVanderhoff", time: new Date(2019,6,2,0,22,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Nyx-", time: new Date(2019,6,2,2,16,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"lipsey", time: new Date(2019,6,2,2,35,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"ClairMcCrudden", time: new Date(2019,6,2,3,57,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Kuza", time: new Date(2019,6,2,4,34,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"KellyNeal", time: new Date(2019,6,2,7,45,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Wallace_Flaminio", time: new Date(2019,6,2,9,57,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"_Audria_Laramie", time: new Date(2019,6,2,11,37,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"SantoGlazier", time: new Date(2019,6,2,12,38,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Comoletti", time: new Date(2019,6,2,14,33,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Lillian_Castro", time: new Date(2019,6,2,15,59,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"BuddyRuiz", time: new Date(2019,6,2,16,17,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Trinklein", time: new Date(2019,6,2,16,34,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"DarkAngelMoon", time: new Date(2019,6,2,16,56,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Bonga", time: new Date(2019,6,2,17,46,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Nicolas", time: new Date(2019,6,2,18,10,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"FrankMichaelis", time: new Date(2019,6,2,18,29,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Ayman", time: new Date(2019,6,2,18,31,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"LionelFranco", time: new Date(2019,6,2,19,11,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Michael_Russell", time: new Date(2019,6,2,19,41,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Kingma", time: new Date(2019,6,2,22,11,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Bardwell", time: new Date(2019,6,2,22,14,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Leonardo_Otto", time: new Date(2019,6,2,23,22,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"briede", time: new Date(2019,6,2,23,25,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"JonathanMineconzo", time: new Date(2019,6,3,0,57,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Curt", time: new Date(2019,6,3,1,25,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"kevinwinfred", time: new Date(2019,6,3,1,42,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Lavin", time: new Date(2019,6,3,2,12,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"EarnestDier", time: new Date(2019,6,3,3,28,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"James_Benoit", time: new Date(2019,6,3,4,33,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"ScottKerley", time: new Date(2019,6,3,6,6,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"Shuma", time: new Date(2019,6,3,7,59,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Eartha_Lyons", time: new Date(2019,6,3,8,8,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Corey_Cadena", time: new Date(2019,6,3,8,12,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Mikaela", time: new Date(2019,6,3,10,2,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"peteneugebauer", time: new Date(2019,6,3,10,32,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"Vecchiarelli", time: new Date(2019,6,3,10,39,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Acfalle", time: new Date(2019,6,3,12,0,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"johanna_boden", time: new Date(2019,6,3,13,0,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Juliette_Driscoll", time: new Date(2019,6,3,13,35,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Edna-Scoma", time: new Date(2019,6,3,13,46,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"David_Bennin", time: new Date(2019,6,3,14,36,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"JoleenRetherford", time: new Date(2019,6,3,16,7,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"_jerrykarshner", time: new Date(2019,6,3,16,26,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Mal", time: new Date(2019,6,3,16,29,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Billie_Balbuena", time: new Date(2019,6,3,18,30,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Lucius6", time: new Date(2019,6,3,19,45,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Domen", time: new Date(2019,6,3,19,57,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"berneice", time: new Date(2019,6,3,21,0,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"HILoveMe", time: new Date(2019,6,3,21,57,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"walberg", time: new Date(2019,6,3,22,8,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Shela", time: new Date(2019,6,3,22,9,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Dolcetto", time: new Date(2019,6,3,22,9,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Divina_Dodson", time: new Date(2019,6,3,22,9,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Robles", time: new Date(2019,6,3,22,10,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Ron_Child", time: new Date(2019,6,3,22,19,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"darronhernandez", time: new Date(2019,6,3,22,32,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Coyier", time: new Date(2019,6,3,23,21,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Fawn-Romano", time: new Date(2019,6,4,0,15,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"yu", time: new Date(2019,6,4,0,24,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"ruesink", time: new Date(2019,6,4,1,28,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"hessje", time: new Date(2019,6,4,1,46,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"goss", time: new Date(2019,6,4,2,3,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"Bunten_Doris", time: new Date(2019,6,4,2,18,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Borunda", time: new Date(2019,6,4,2,46,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"LelandBurrell", time: new Date(2019,6,4,3,13,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"EvanHokes", time: new Date(2019,6,4,3,15,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Tyrone_Byrd", time: new Date(2019,6,4,4,26,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"Yost", time: new Date(2019,6,4,5,4,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Maranda", time: new Date(2019,6,4,6,11,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Don_Douillet", time: new Date(2019,6,4,9,29,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"lovett", time: new Date(2019,6,4,10,59,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Dettra", time: new Date(2019,6,4,11,17,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Vanetta_Milazzo", time: new Date(2019,6,4,11,18,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"Ardis", time: new Date(2019,6,4,11,39,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"emilio", time: new Date(2019,6,4,11,42,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Banales", time: new Date(2019,6,4,12,7,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"AimeeShiver", time: new Date(2019,6,4,12,33,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"George_Krein", time: new Date(2019,6,4,13,48,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Beurskens", time: new Date(2019,6,4,15,11,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"JeremyStoudymire", time: new Date(2019,6,4,15,23,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Superandrw", time: new Date(2019,6,4,15,38,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Boggie", time: new Date(2019,6,4,15,55,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Olney", time: new Date(2019,6,4,16,52,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Adolfo", time: new Date(2019,6,4,17,19,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"boba", time: new Date(2019,6,4,17,19,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Phillip_Krivanec", time: new Date(2019,6,4,17,52,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Normand_padillo", time: new Date(2019,6,4,18,22,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Leviton", time: new Date(2019,6,4,18,34,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Norway", time: new Date(2019,6,4,19,9,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"jhjhjhjh", time: new Date(2019,6,4,19,57,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Krank", time: new Date(2019,6,4,21,41,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"LarryChagoya", time: new Date(2019,6,4,22,18,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"KathyrnCiccarelli", time: new Date(2019,6,4,22,28,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Lance_Dumler", time: new Date(2019,6,4,22,46,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Coppage", time: new Date(2019,6,4,23,9,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Randallshuptrine", time: new Date(2019,6,5,0,29,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"FranciscoGallahan", time: new Date(2019,6,5,1,19,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Tamika_Brosch", time: new Date(2019,6,5,3,2,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Phyllis", time: new Date(2019,6,5,5,55,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"HarveyStackhouse", time: new Date(2019,6,5,6,1,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Poe", time: new Date(2019,6,5,6,7,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Isabeaux_Duquette", time: new Date(2019,6,5,7,33,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Law", time: new Date(2019,6,5,8,1,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"GailEckerson", time: new Date(2019,6,5,8,30,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"StaceyMorse", time: new Date(2019,6,5,10,12,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Visourus", time: new Date(2019,6,5,10,22,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"jewelkrummel", time: new Date(2019,6,5,11,11,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Willie_Corral", time: new Date(2019,6,5,11,15,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Andre_Selman", time: new Date(2019,6,5,13,1,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"test123", time: new Date(2019,6,5,13,26,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Ammie", time: new Date(2019,6,5,13,39,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Jeffery_Obrien", time: new Date(2019,6,5,13,56,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Laface", time: new Date(2019,6,5,14,43,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Leland_langholz", time: new Date(2019,6,5,16,7,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"AlexSantheson", time: new Date(2019,6,5,16,12,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"TashaByrd", time: new Date(2019,6,5,16,27,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"DavidReed", time: new Date(2019,6,5,18,22,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"mauricio", time: new Date(2019,6,5,18,54,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Kenny_Schmitz", time: new Date(2019,6,5,19,37,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"lawlstamp", time: new Date(2019,6,5,20,16,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Lisowski", time: new Date(2019,6,5,21,17,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Elmer_Terry", time: new Date(2019,6,5,21,40,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Turcott", time: new Date(2019,6,5,23,10,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Everett_Clark", time: new Date(2019,6,6,3,18,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"danrodeiguez", time: new Date(2019,6,6,4,44,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"BillGrabner", time: new Date(2019,6,6,6,39,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"jello", time: new Date(2019,6,6,8,5,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"YvetteHanks", time: new Date(2019,6,6,8,5,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Kenneth_Norris", time: new Date(2019,6,6,8,30,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Shella_Nutley", time: new Date(2019,6,6,8,37,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Floyd_lenoir", time: new Date(2019,6,6,11,27,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Rivkameszaros", time: new Date(2019,6,6,11,30,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
<!-- End Here -->
  return rawArray;
}
