function buildPage(){
  document.getElementById("lastUpdateP").innerHTML = "<b>Last Update</b> 04/07/2019";
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
		rawArray.push({name:"gregorich", time: new Date(2019,6,3,18,13,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Billie_Balbuena", time: new Date(2019,6,3,18,30,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Lucius6", time: new Date(2019,6,3,19,45,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Domen", time: new Date(2019,6,3,19,57,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Elda_Dawood", time: new Date(2019,6,3,20,56,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"berneice", time: new Date(2019,6,3,21,0,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"joshuapressnell", time: new Date(2019,6,3,21,6,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Abbot", time: new Date(2019,6,3,21,52,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"HILoveMe", time: new Date(2019,6,3,21,57,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Zeiro", time: new Date(2019,6,3,21,58,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"walberg", time: new Date(2019,6,3,22,8,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Divina_Dodson", time: new Date(2019,6,3,22,9,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Dolcetto", time: new Date(2019,6,3,22,9,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Shela", time: new Date(2019,6,3,22,9,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Robles", time: new Date(2019,6,3,22,10,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Ron_Child", time: new Date(2019,6,3,22,19,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"darronhernandez", time: new Date(2019,6,3,22,32,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Juan_Buckmaster", time: new Date(2019,6,3,23,9,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Coyier", time: new Date(2019,6,3,23,21,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Tish", time: new Date(2019,6,4,0,10,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Fawn-Romano", time: new Date(2019,6,4,0,15,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"yu", time: new Date(2019,6,4,0,24,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"ruesink", time: new Date(2019,6,4,1,28,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"hessje", time: new Date(2019,6,4,1,46,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Lintz", time: new Date(2019,6,4,1,51,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"goss", time: new Date(2019,6,4,2,3,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"Bunten_Doris", time: new Date(2019,6,4,2,18,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Borunda", time: new Date(2019,6,4,2,46,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Maples", time: new Date(2019,6,4,2,50,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"james_lyman", time: new Date(2019,6,4,2,51,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"RickyKauffeld", time: new Date(2019,6,4,2,52,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"frankypipes", time: new Date(2019,6,4,3,9,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"LelandBurrell", time: new Date(2019,6,4,3,13,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"EvanHokes", time: new Date(2019,6,4,3,15,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"samuel_siedlecki", time: new Date(2019,6,4,3,25,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Tyrone_Byrd", time: new Date(2019,6,4,4,26,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"Yost", time: new Date(2019,6,4,5,4,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Maranda", time: new Date(2019,6,4,6,11,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Don_Douillet", time: new Date(2019,6,4,9,29,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"lovett", time: new Date(2019,6,4,10,59,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"teofila_page", time: new Date(2019,6,4,11,0,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Dettra", time: new Date(2019,6,4,11,17,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Vanetta_Milazzo", time: new Date(2019,6,4,11,18,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"Ardis", time: new Date(2019,6,4,11,39,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"emilio", time: new Date(2019,6,4,11,42,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Banales", time: new Date(2019,6,4,12,7,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"AimeeShiver", time: new Date(2019,6,4,12,33,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"farnsworth", time: new Date(2019,6,4,12,45,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"George_Krein", time: new Date(2019,6,4,13,48,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Beurskens", time: new Date(2019,6,4,15,11,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"JeremyStoudymire", time: new Date(2019,6,4,15,23,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Superandrw", time: new Date(2019,6,4,15,38,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"emmons", time: new Date(2019,6,4,15,49,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Boggie", time: new Date(2019,6,4,15,55,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Olney", time: new Date(2019,6,4,16,52,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"boba", time: new Date(2019,6,4,17,19,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Adolfo", time: new Date(2019,6,4,17,19,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"Phillip_Krivanec", time: new Date(2019,6,4,17,52,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Cara_Smith", time: new Date(2019,6,4,18,17,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Normand_padillo", time: new Date(2019,6,4,18,22,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Leviton", time: new Date(2019,6,4,18,34,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Norway", time: new Date(2019,6,4,19,9,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"jhjhjhjh", time: new Date(2019,6,4,19,57,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Thiazole", time: new Date(2019,6,4,20,2,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"JoseDiaz", time: new Date(2019,6,4,20,45,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"daughetee", time: new Date(2019,6,4,20,47,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"DouglasBushovisky", time: new Date(2019,6,4,21,18,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Krank", time: new Date(2019,6,4,21,41,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Russell_Vanwinkle", time: new Date(2019,6,4,22,12,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"LarryChagoya", time: new Date(2019,6,4,22,18,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"KathyrnCiccarelli", time: new Date(2019,6,4,22,28,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Lance_Dumler", time: new Date(2019,6,4,22,46,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Coppage", time: new Date(2019,6,4,23,9,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Cbaz94", time: new Date(2019,6,4,23,55,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Randallshuptrine", time: new Date(2019,6,5,0,29,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"FranciscoGallahan", time: new Date(2019,6,5,1,19,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Tamika_Brosch", time: new Date(2019,6,5,3,2,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Grant_Searcy", time: new Date(2019,6,5,5,35,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Phyllis", time: new Date(2019,6,5,5,55,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"HarveyStackhouse", time: new Date(2019,6,5,6,1,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Poe", time: new Date(2019,6,5,6,7,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"William_Brannon", time: new Date(2019,6,5,7,12,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Isabeaux_Duquette", time: new Date(2019,6,5,7,33,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Law", time: new Date(2019,6,5,8,1,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Lilia_Corrente", time: new Date(2019,6,5,8,4,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"cedars", time: new Date(2019,6,5,8,4,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"RichardLandreneau", time: new Date(2019,6,5,8,4,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Gerald_Ranah", time: new Date(2019,6,5,8,4,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"GailEckerson", time: new Date(2019,6,5,8,30,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"KennethHeverly", time: new Date(2019,6,5,9,41,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"FinalePrince", time: new Date(2019,6,5,10,0,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"StaceyMorse", time: new Date(2019,6,5,10,12,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Visourus", time: new Date(2019,6,5,10,22,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"damian_batra", time: new Date(2019,6,5,10,30,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"jewelkrummel", time: new Date(2019,6,5,11,11,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Willie_Corral", time: new Date(2019,6,5,11,15,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Andre_Selman", time: new Date(2019,6,5,13,1,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"test123", time: new Date(2019,6,5,13,26,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"JoseHarrison", time: new Date(2019,6,5,13,31,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Ammie", time: new Date(2019,6,5,13,39,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Jeffery_Obrien", time: new Date(2019,6,5,13,56,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"certosimo", time: new Date(2019,6,5,14,1,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Pov", time: new Date(2019,6,5,14,12,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Laface", time: new Date(2019,6,5,14,43,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"JimmieKeller", time: new Date(2019,6,5,14,46,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Alton", time: new Date(2019,6,5,14,49,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Sandra_drake", time: new Date(2019,6,5,14,59,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Leland_langholz", time: new Date(2019,6,5,16,7,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"AlexSantheson", time: new Date(2019,6,5,16,12,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"TashaByrd", time: new Date(2019,6,5,16,27,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"DavidReed", time: new Date(2019,6,5,18,22,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Everette", time: new Date(2019,6,5,18,47,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"mauricio", time: new Date(2019,6,5,18,54,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"mafian_soldier", time: new Date(2019,6,5,19,18,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Kenny_Schmitz", time: new Date(2019,6,5,19,37,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"lawlstamp", time: new Date(2019,6,5,20,16,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Paul_wiggett", time: new Date(2019,6,5,20,29,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"DanialMelodia", time: new Date(2019,6,5,20,40,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Lisowski", time: new Date(2019,6,5,21,17,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Elmer_Terry", time: new Date(2019,6,5,21,40,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"DanielMentnech", time: new Date(2019,6,5,22,6,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"KennethAmis", time: new Date(2019,6,5,22,21,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"JoelLindbo", time: new Date(2019,6,5,22,41,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Turcott", time: new Date(2019,6,5,23,10,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"HenryAttridge", time: new Date(2019,6,6,2,5,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Everett_Clark", time: new Date(2019,6,6,3,18,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"RafaelHandwerker", time: new Date(2019,6,6,3,53,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Elva", time: new Date(2019,6,6,4,30,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"raisagrosvenor", time: new Date(2019,6,6,4,30,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"ShaniquaArtis", time: new Date(2019,6,6,4,30,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"danrodeiguez", time: new Date(2019,6,6,4,44,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"van_richards", time: new Date(2019,6,6,4,55,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Mark_Davis", time: new Date(2019,6,6,6,7,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"BillGrabner", time: new Date(2019,6,6,6,39,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"YvetteHanks", time: new Date(2019,6,6,8,5,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"jello", time: new Date(2019,6,6,8,5,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Dellamore", time: new Date(2019,6,6,8,7,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Xalen", time: new Date(2019,6,6,8,11,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Kenneth_Norris", time: new Date(2019,6,6,8,30,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Shella_Nutley", time: new Date(2019,6,6,8,37,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Veney", time: new Date(2019,6,6,9,5,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"MenOFMayhem", time: new Date(2019,6,6,9,12,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Noah_Taylor", time: new Date(2019,6,6,10,33,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Floyd_lenoir", time: new Date(2019,6,6,11,27,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"lewisguillot", time: new Date(2019,6,6,11,28,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Rivkameszaros", time: new Date(2019,6,6,11,30,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Mega", time: new Date(2019,6,6,12,0,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"TheNexiz", time: new Date(2019,6,6,12,7,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Andrea_Soesbe", time: new Date(2019,6,6,14,7,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Meri", time: new Date(2019,6,6,15,3,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"TerenceLovell", time: new Date(2019,6,6,15,53,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Big-Al", time: new Date(2019,6,6,16,57,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"muhn", time: new Date(2019,6,6,17,0,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Richard_Minihan", time: new Date(2019,6,6,17,0,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Harold_Parnell", time: new Date(2019,6,6,17,19,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Alfred_Freel", time: new Date(2019,6,6,18,42,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"BariVaughan", time: new Date(2019,6,6,19,32,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"Jamesrosul", time: new Date(2019,6,6,19,35,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Elias_Coler", time: new Date(2019,6,6,20,36,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Firebird", time: new Date(2019,6,6,20,41,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Doreen", time: new Date(2019,6,6,21,8,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"Marion_McDaniel", time: new Date(2019,6,6,21,48,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Lakeisha", time: new Date(2019,6,6,21,48,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"oliver_perrien", time: new Date(2019,6,6,21,49,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Dexter_guest", time: new Date(2019,6,6,21,49,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"siddon", time: new Date(2019,6,6,22,13,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Jorge_Colvin", time: new Date(2019,6,6,22,16,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"JayLavergne", time: new Date(2019,6,6,22,39,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"mckay", time: new Date(2019,6,6,22,44,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Angelita", time: new Date(2019,6,6,23,55,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Brian_Borowicz", time: new Date(2019,6,7,0,11,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Raymond_Bradley", time: new Date(2019,6,7,1,5,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"stockett", time: new Date(2019,6,7,1,31,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"MarceloWaiau", time: new Date(2019,6,7,1,44,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Victor_Voran", time: new Date(2019,6,7,1,46,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"JuanPhillips", time: new Date(2019,6,7,3,12,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Soose", time: new Date(2019,6,7,3,12,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Harry_Taylor", time: new Date(2019,6,7,3,19,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Kevinburlson", time: new Date(2019,6,7,3,31,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"agnus", time: new Date(2019,6,7,5,34,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Keithy", time: new Date(2019,6,7,6,20,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Mecham", time: new Date(2019,6,7,6,59,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Brent_Meahl", time: new Date(2019,6,7,9,21,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"StephenBagwell", time: new Date(2019,6,7,9,47,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"A8tB", time: new Date(2019,6,7,9,51,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Daniel_Engelstad", time: new Date(2019,6,7,11,41,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"ArthurDagdag", time: new Date(2019,6,7,12,22,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Leona_dolinger", time: new Date(2019,6,7,13,41,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"audette", time: new Date(2019,6,7,15,47,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Macro", time: new Date(2019,6,7,16,27,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Pollard", time: new Date(2019,6,7,17,29,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"EugenaHodge", time: new Date(2019,6,7,18,34,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Louetta", time: new Date(2019,6,7,19,30,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Arlean_Gibson", time: new Date(2019,6,7,20,8,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Desired", time: new Date(2019,6,7,20,37,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Yadira_Hoeppner", time: new Date(2019,6,7,22,27,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"EliFresh", time: new Date(2019,6,8,2,54,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Stoll", time: new Date(2019,6,8,3,26,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Yetsko", time: new Date(2019,6,8,3,38,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Th3_Punish3r", time: new Date(2019,6,8,4,16,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Who_Let_The_Dogs_Out", time: new Date(2019,6,8,5,0,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"HugoChristel", time: new Date(2019,6,8,5,22,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Coello", time: new Date(2019,6,8,6,33,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Oldman1", time: new Date(2019,6,8,6,39,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"SpikeeeeeeeeeeeeeeeS", time: new Date(2019,6,8,7,9,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Supply", time: new Date(2019,6,8,7,41,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Kaycee", time: new Date(2019,6,8,8,26,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Tired_and_Desired", time: new Date(2019,6,8,8,50,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Patricia", time: new Date(2019,6,8,9,38,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"LavernSchwarz", time: new Date(2019,6,8,9,50,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"MarlinLuptak", time: new Date(2019,6,8,10,17,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"uyvyuvl", time: new Date(2019,6,8,10,57,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Charlie", time: new Date(2019,6,8,11,15,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Silquero", time: new Date(2019,6,8,11,16,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Man", time: new Date(2019,6,8,12,42,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Laramore", time: new Date(2019,6,8,13,10,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Joseph_Mihalkovic", time: new Date(2019,6,8,14,25,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"matthewprice", time: new Date(2019,6,8,16,44,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"JohnPatton", time: new Date(2019,6,8,16,47,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"thibodeaux", time: new Date(2019,6,8,17,33,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"AsuncionSanders", time: new Date(2019,6,8,17,46,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Alexander_Chainey-", time: new Date(2019,6,8,19,22,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"SamuelGarbe", time: new Date(2019,6,8,19,52,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Demetria_Pong", time: new Date(2019,6,8,20,3,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Lawrence_mikami", time: new Date(2019,6,8,20,58,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Burian", time: new Date(2019,6,8,21,52,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Goblin", time: new Date(2019,6,8,23,33,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"adam_kelly", time: new Date(2019,6,9,1,31,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Go", time: new Date(2019,6,9,1,52,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"MarcoWaddel", time: new Date(2019,6,9,3,28,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Angel_Brock", time: new Date(2019,6,9,4,39,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Steiskal", time: new Date(2019,6,9,4,54,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Castleman", time: new Date(2019,6,9,6,4,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Clarence_Schmitt", time: new Date(2019,6,9,8,57,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"BrunoAnchors", time: new Date(2019,6,9,9,56,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Shearer", time: new Date(2019,6,9,10,37,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"JoshyMichael", time: new Date(2019,6,9,12,2,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"McCleansBookies", time: new Date(2019,6,9,12,23,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"FranciscoKeesling", time: new Date(2019,6,9,13,18,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Coco", time: new Date(2019,6,9,16,48,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"luchini", time: new Date(2019,6,9,18,9,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Ryan_Rowell", time: new Date(2019,6,9,19,42,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Judy_coe", time: new Date(2019,6,9,20,11,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"SomethingSomething", time: new Date(2019,6,9,21,17,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"CoreyHilyer", time: new Date(2019,6,9,21,52,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"TalithaLynch", time: new Date(2019,6,9,23,45,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Jeff_McAffee", time: new Date(2019,6,10,0,34,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Rachel_salisbury", time: new Date(2019,6,10,2,44,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"clementina_krusen", time: new Date(2019,6,10,3,30,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Hoyt_McGrath", time: new Date(2019,6,10,3,47,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
<!-- End Here -->
  return rawArray;
}
