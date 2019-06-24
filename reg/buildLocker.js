function buildPage(){
  document.getElementById("lastUpdateP").innerHTML = "<b>Last Update</b> 24/06/2019";
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
		rawArray.push({name:"Waled_Ertugrul", time: new Date(2019,5,23,18,24,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"atherium", time: new Date(2019,5,23,18,55,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Donovan", time: new Date(2019,5,23,19,14,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"RandyLongin", time: new Date(2019,5,23,19,46,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"ChristianBacker", time: new Date(2019,5,23,20,2,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Teresia_Durgan", time: new Date(2019,5,23,20,57,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Jess_moderski", time: new Date(2019,5,23,21,29,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Elenora", time: new Date(2019,5,23,21,49,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Morganson", time: new Date(2019,5,23,22,29,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"_Cassandra_Onishea", time: new Date(2019,5,23,23,42,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"christia", time: new Date(2019,5,23,23,45,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"Winnifred_Koser", time: new Date(2019,5,23,23,57,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Carlos_Jones", time: new Date(2019,5,24,0,11,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"WilliamGornikiewicz", time: new Date(2019,5,24,1,55,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"LarryHager", time: new Date(2019,5,24,2,5,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"GangsterMan", time: new Date(2019,5,24,3,23,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"patrickkillinger", time: new Date(2019,5,24,3,36,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"gillem", time: new Date(2019,5,24,3,36,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Bernice_Forbach", time: new Date(2019,5,24,3,36,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"dennisspeights", time: new Date(2019,5,24,3,37,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Terry_walker", time: new Date(2019,5,24,4,15,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"NeomiArtis", time: new Date(2019,5,24,4,59,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Gregory_Morgan", time: new Date(2019,5,24,6,1,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"LloydCharo", time: new Date(2019,5,24,6,18,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"cherylbiondi-", time: new Date(2019,5,24,6,52,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"DanMesser", time: new Date(2019,5,24,7,13,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"BurtWilliam_", time: new Date(2019,5,24,7,25,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"DavidOwens", time: new Date(2019,5,24,7,39,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"JaneWoods", time: new Date(2019,5,24,8,3,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Ramirez", time: new Date(2019,5,24,8,11,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Kalimba", time: new Date(2019,5,24,9,25,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"TonyPendleton", time: new Date(2019,5,24,9,27,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Marvin_Wade", time: new Date(2019,5,24,10,43,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Brandon_Kerzer", time: new Date(2019,5,24,10,47,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Warrantedstar", time: new Date(2019,5,24,11,56,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"DonaldLuter", time: new Date(2019,5,24,12,3,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Edwin_Mires", time: new Date(2019,5,24,12,36,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Wendell_Morales", time: new Date(2019,5,24,13,28,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"MichealBaumgartel", time: new Date(2019,5,24,14,6,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"JamesStephano", time: new Date(2019,5,24,14,47,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Bihgy", time: new Date(2019,5,24,14,50,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Johnmoe", time: new Date(2019,5,24,15,8,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"GeorgeBona", time: new Date(2019,5,24,15,33,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"LynnetteLaning", time: new Date(2019,5,24,15,45,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Edward_McLauren", time: new Date(2019,5,24,16,28,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"ClaudetteStrawder", time: new Date(2019,5,24,16,54,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Justine_Ackerley", time: new Date(2019,5,24,17,20,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"RonaldDreesman", time: new Date(2019,5,24,17,39,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"JuanitaOrloski", time: new Date(2019,5,24,18,39,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"KatelinMegginson", time: new Date(2019,5,24,19,0,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Lvcifer", time: new Date(2019,5,24,19,3,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Winter0391", time: new Date(2019,5,24,19,18,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"TheGodlyJet", time: new Date(2019,5,24,19,20,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"raulmolpus", time: new Date(2019,5,24,19,24,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"blackmer", time: new Date(2019,5,24,19,37,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"Urbano", time: new Date(2019,5,24,19,49,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"AlexDowdell", time: new Date(2019,5,24,19,57,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"roderick_hilferty", time: new Date(2019,5,24,20,16,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"ShirleyMontemarano", time: new Date(2019,5,24,20,20,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Malcolmbanks", time: new Date(2019,5,24,20,26,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Elwanda_Tran", time: new Date(2019,5,24,20,31,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"IllI", time: new Date(2019,5,24,20,42,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Raymond_Pauley", time: new Date(2019,5,24,20,44,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"WalterTaylor", time: new Date(2019,5,24,20,54,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"ebony_orabone", time: new Date(2019,5,24,20,59,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"AndresReusswig", time: new Date(2019,5,24,22,56,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"ValentineCrawford", time: new Date(2019,5,24,23,38,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"elton_dominque", time: new Date(2019,5,24,23,43,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Duminka1q", time: new Date(2019,5,25,0,20,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"NasirJones", time: new Date(2019,5,25,1,39,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Floyd_Tuer", time: new Date(2019,5,25,1,52,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Castronova", time: new Date(2019,5,25,1,58,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Jean_Oakden", time: new Date(2019,5,25,3,10,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"RogerHages", time: new Date(2019,5,25,3,36,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"AmyGonzales", time: new Date(2019,5,25,4,10,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"JaceCorso", time: new Date(2019,5,25,4,21,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"James_Rayner", time: new Date(2019,5,25,4,23,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"Brian_Orr", time: new Date(2019,5,25,4,56,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"vidmao", time: new Date(2019,5,25,5,19,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Tracycarino", time: new Date(2019,5,25,5,31,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Clarity", time: new Date(2019,5,25,6,6,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Zagroba", time: new Date(2019,5,25,6,38,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"AnnabellMcDonald", time: new Date(2019,5,25,6,41,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Zemo", time: new Date(2019,5,25,6,54,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"LuCiF3R", time: new Date(2019,5,25,7,13,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Castillo", time: new Date(2019,5,25,9,34,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Brougham", time: new Date(2019,5,25,10,5,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"YoulandaGlasscock", time: new Date(2019,5,25,10,19,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"CliffordBredemeier", time: new Date(2019,5,25,10,28,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Bunny_Abner", time: new Date(2019,5,25,10,54,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"swineford", time: new Date(2019,5,25,11,3,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"SteveFriedlander", time: new Date(2019,5,25,11,33,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Sheen", time: new Date(2019,5,25,11,56,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"gertes", time: new Date(2019,5,25,12,7,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"boitel", time: new Date(2019,5,25,12,48,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"Dustin", time: new Date(2019,5,25,13,14,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Philip_Lucherini", time: new Date(2019,5,25,13,19,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Jill_Desotel", time: new Date(2019,5,25,13,34,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Claude_abbadessa", time: new Date(2019,5,25,13,36,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"asdfasdf", time: new Date(2019,5,25,13,39,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"John_Valle", time: new Date(2019,5,25,14,37,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Cassidy", time: new Date(2019,5,25,14,52,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"DT:LunaEclipse", time: new Date(2019,5,25,14,56,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Kaitlyn", time: new Date(2019,5,25,16,45,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Tasy", time: new Date(2019,5,25,16,56,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"AMG", time: new Date(2019,5,25,16,56,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Bradley_Kavadias", time: new Date(2019,5,25,16,59,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Snip3r", time: new Date(2019,5,25,16,59,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"OrlandoEwing", time: new Date(2019,5,25,19,7,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"JongLott", time: new Date(2019,5,25,19,30,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Juanita_Indovina-", time: new Date(2019,5,25,19,31,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Ralph_Garcia", time: new Date(2019,5,25,19,46,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"JasperVicencio", time: new Date(2019,5,25,19,55,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"MichaelHeimlich", time: new Date(2019,5,25,20,17,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Marlene_wisenor", time: new Date(2019,5,25,20,18,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Alex_Virant", time: new Date(2019,5,25,21,25,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Hanson_Rita", time: new Date(2019,5,25,21,30,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Oscar_Chenet", time: new Date(2019,5,25,21,30,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Brenneis", time: new Date(2019,5,25,21,30,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"JeromeNugent", time: new Date(2019,5,25,22,46,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Castisos", time: new Date(2019,5,25,23,5,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Barbara_Snipes", time: new Date(2019,5,25,23,5,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"CharlesettaHagerman", time: new Date(2019,5,26,0,13,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Davda", time: new Date(2019,5,26,0,37,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"RodneySwisher", time: new Date(2019,5,26,1,41,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Carina_Aldrige", time: new Date(2019,5,26,1,48,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"EarlGalofaro", time: new Date(2019,5,26,3,4,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"TerryReid", time: new Date(2019,5,26,3,12,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Spike", time: new Date(2019,5,26,4,19,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Ahmad", time: new Date(2019,5,26,4,53,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"taylorbehr", time: new Date(2019,5,26,5,32,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Dantish", time: new Date(2019,5,26,5,37,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"LA:Dantish", time: new Date(2019,5,26,5,37,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Daryl_Fila", time: new Date(2019,5,26,5,37,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Sheryl", time: new Date(2019,5,26,5,54,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Swink", time: new Date(2019,5,26,6,36,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"North", time: new Date(2019,5,26,7,11,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"SidneyLierz", time: new Date(2019,5,26,7,29,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"Warren_Nakaoka", time: new Date(2019,5,26,7,38,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Ashly", time: new Date(2019,5,26,8,25,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"KxngMxdas", time: new Date(2019,5,26,8,26,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"TheronCopeland", time: new Date(2019,5,26,8,26,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Jerry_alva", time: new Date(2019,5,26,8,27,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"Hanna_Munoz", time: new Date(2019,5,26,8,49,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Marco_Foster", time: new Date(2019,5,26,9,14,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"BrunoRiggle", time: new Date(2019,5,26,9,36,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"JonathonSilletto", time: new Date(2019,5,26,10,17,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"GregoryZupan", time: new Date(2019,5,26,11,2,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Maureen_Franco", time: new Date(2019,5,26,11,24,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Tamera", time: new Date(2019,5,26,11,48,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Scottie_Stelting", time: new Date(2019,5,26,12,3,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"bedoya", time: new Date(2019,5,26,12,4,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"ruthe_fitzgerrel", time: new Date(2019,5,26,12,4,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"PinkieTroy", time: new Date(2019,5,26,12,4,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Luigistrickland", time: new Date(2019,5,26,12,52,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Jezzasprasa", time: new Date(2019,5,26,14,21,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"MarioDelbo", time: new Date(2019,5,26,14,22,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"AlKarpis", time: new Date(2019,5,26,14,22,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Clairehirleman", time: new Date(2019,5,26,14,48,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Jaime_Theodore", time: new Date(2019,5,26,15,18,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"news2", time: new Date(2019,5,26,15,27,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Gilma_Koeller", time: new Date(2019,5,26,15,38,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Philomena_Prowell", time: new Date(2019,5,26,16,2,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Manuel_Espinoza", time: new Date(2019,5,26,16,6,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Beverly_Caban", time: new Date(2019,5,26,16,6,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Roxann_Dilello", time: new Date(2019,5,26,16,21,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"RagingFlippy", time: new Date(2019,5,26,17,54,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"nattress", time: new Date(2019,5,26,18,5,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"PhillipDeGrasso", time: new Date(2019,5,26,18,8,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Cherie_Stgermain", time: new Date(2019,5,26,18,13,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"Mondeo", time: new Date(2019,5,26,18,19,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Rabenhorst", time: new Date(2019,5,26,18,31,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"EdwinBoykin", time: new Date(2019,5,26,18,44,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Anselm", time: new Date(2019,5,26,19,26,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"AllysonMiles", time: new Date(2019,5,26,20,24,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Nellie_Wloch", time: new Date(2019,5,26,21,7,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"TimBurick", time: new Date(2019,5,26,21,10,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Pariston", time: new Date(2019,5,26,21,26,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Randall_Barillari", time: new Date(2019,5,26,21,37,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Jewel_Stogden", time: new Date(2019,5,26,21,54,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"kenyettaorduna", time: new Date(2019,5,26,22,54,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"hodge", time: new Date(2019,5,26,22,57,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"JohnShaw", time: new Date(2019,5,26,23,21,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"utter", time: new Date(2019,5,26,23,52,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Zamoutie", time: new Date(2019,5,26,23,58,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Thomas_Stavros", time: new Date(2019,5,27,0,1,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Donald_Tamburo", time: new Date(2019,5,27,0,10,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"El_Matador", time: new Date(2019,5,27,0,59,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"DaveLacroix", time: new Date(2019,5,27,1,13,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Joe_Zuckerberg", time: new Date(2019,5,27,2,21,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"gertrude_privado", time: new Date(2019,5,27,2,22,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Leonardo_Hubbs", time: new Date(2019,5,27,2,54,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Adrianmcjunkins", time: new Date(2019,5,27,3,10,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"FiveFinger", time: new Date(2019,5,27,4,49,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Julie_Mackenzie", time: new Date(2019,5,27,5,10,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"Tamara", time: new Date(2019,5,27,5,47,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"FernandoRodriguez", time: new Date(2019,5,27,5,58,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"RosendoMachlin", time: new Date(2019,5,27,7,7,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Joelanderson", time: new Date(2019,5,27,7,35,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Vinup", time: new Date(2019,5,27,7,37,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"EssieHerrmann", time: new Date(2019,5,27,8,28,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"Proxima", time: new Date(2019,5,27,9,14,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Theodore-Conklin", time: new Date(2019,5,27,9,19,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"_Repko", time: new Date(2019,5,27,9,33,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Grahamgodwin", time: new Date(2019,5,27,9,46,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Gerri", time: new Date(2019,5,27,10,8,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"LillieRobbins", time: new Date(2019,5,27,10,54,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"ArnoldPaviolitis", time: new Date(2019,5,27,12,1,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Mullendore", time: new Date(2019,5,27,12,21,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Phillip", time: new Date(2019,5,27,12,23,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Jeffery_Shoulders", time: new Date(2019,5,27,12,33,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Charles_Horvitz", time: new Date(2019,5,27,12,37,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"entler", time: new Date(2019,5,27,12,48,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Wittenburg", time: new Date(2019,5,27,13,5,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Elenora_kennedy", time: new Date(2019,5,27,13,8,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Elysiium", time: new Date(2019,5,27,13,43,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Janine_Pesick", time: new Date(2019,5,27,15,4,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Xpero", time: new Date(2019,5,27,15,53,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"OlajideOlatunji", time: new Date(2019,5,27,15,56,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Dale_Trinkle", time: new Date(2019,5,27,16,39,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Dorotha_Vondra", time: new Date(2019,5,27,16,39,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"CarmonSeaford", time: new Date(2019,5,27,17,24,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Lucifer_MorningStar", time: new Date(2019,5,27,18,35,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Krissy", time: new Date(2019,5,27,18,57,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"Gianna_Pullings", time: new Date(2019,5,27,19,10,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"Fred_reddrick", time: new Date(2019,5,27,20,3,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Damian", time: new Date(2019,5,27,21,11,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"GuadalupeCunningham", time: new Date(2019,5,27,21,31,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"LittleS", time: new Date(2019,5,27,21,58,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Pennello", time: new Date(2019,5,27,22,19,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Charles_Berkshire", time: new Date(2019,5,27,23,34,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"CarrollCarrillo", time: new Date(2019,5,27,23,43,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"Brandon_Galanga", time: new Date(2019,5,28,0,15,0,0).getTime() - getUTC(new Date()), location:"Bricktown",  city: "DT"});
		rawArray.push({name:"Aquilar", time: new Date(2019,5,28,0,47,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Willhite", time: new Date(2019,5,28,1,5,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"JeroldHaskett", time: new Date(2019,5,28,1,58,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Gilvin", time: new Date(2019,5,28,2,26,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
		rawArray.push({name:"McClellan", time: new Date(2019,5,28,2,44,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Frank_Deputy", time: new Date(2019,5,28,2,45,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Lieng", time: new Date(2019,5,28,2,57,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Micheal_Therien", time: new Date(2019,5,28,4,0,0,0).getTime() - getUTC(new Date()), location:"South Philly",  city: "PH"});
		rawArray.push({name:"Alisa_Bouchard", time: new Date(2019,5,28,5,52,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Lanita_Faust", time: new Date(2019,5,28,6,8,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Drevs", time: new Date(2019,5,28,7,21,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Bernhard", time: new Date(2019,5,28,7,22,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Emile_Roscow", time: new Date(2019,5,28,7,23,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
		rawArray.push({name:"Arnold_Glynn", time: new Date(2019,5,28,7,31,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"LudivinaLeverentz", time: new Date(2019,5,28,8,2,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"dunn", time: new Date(2019,5,28,8,4,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
		rawArray.push({name:"Panduro", time: new Date(2019,5,28,8,8,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
		rawArray.push({name:"Jaimie", time: new Date(2019,5,28,8,29,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Greenaka", time: new Date(2019,5,28,9,28,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"Claude_Blayney", time: new Date(2019,5,28,12,23,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
		rawArray.push({name:"kennethharris", time: new Date(2019,5,28,12,55,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Jane-buggs", time: new Date(2019,5,28,12,57,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Ricardo_Houpt", time: new Date(2019,5,28,14,33,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"AgnesClemons", time: new Date(2019,5,28,14,48,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Mulholland", time: new Date(2019,5,28,14,59,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"Charita_McGwin", time: new Date(2019,5,28,15,19,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Sherman_Vancura", time: new Date(2019,5,28,15,21,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Drema", time: new Date(2019,5,28,15,36,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Antoniou", time: new Date(2019,5,28,16,52,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Edwin_Beauchamp", time: new Date(2019,5,28,17,2,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"AlanaBell", time: new Date(2019,5,28,17,9,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"AlSchuttler", time: new Date(2019,5,28,18,4,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Nicole_Beasley", time: new Date(2019,5,28,19,5,0,0).getTime() - getUTC(new Date()), location:"12th Street",  city: "DT"});
		rawArray.push({name:"jeffreyhurst", time: new Date(2019,5,28,20,13,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"Lydia_McMeans", time: new Date(2019,5,28,21,3,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Bradley_Villella", time: new Date(2019,5,28,21,8,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Chana_Teska", time: new Date(2019,5,28,23,25,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
		rawArray.push({name:"Alex_jolly", time: new Date(2019,5,29,0,23,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Enomoto_Russell", time: new Date(2019,5,29,0,46,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
		rawArray.push({name:"Vanderpool", time: new Date(2019,5,29,0,57,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"WilliamLafranca", time: new Date(2019,5,29,1,41,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"carterrojek", time: new Date(2019,5,29,3,39,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"ShaeMiao", time: new Date(2019,5,29,4,4,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"Jeremy_sat", time: new Date(2019,5,29,4,37,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Leonardlair", time: new Date(2019,5,29,7,1,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"MagdalenLawrence", time: new Date(2019,5,29,7,8,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"ColeLand", time: new Date(2019,5,29,8,34,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
		rawArray.push({name:"Steve_girardin", time: new Date(2019,5,29,10,38,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"westmorland", time: new Date(2019,5,29,11,9,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"TerenceOhman", time: new Date(2019,5,29,11,46,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"TiffanyMadden", time: new Date(2019,5,29,11,59,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Happy", time: new Date(2019,5,29,12,1,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Vanhamlin", time: new Date(2019,5,29,12,14,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"stanley_matter", time: new Date(2019,5,29,12,58,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"TammySkehan", time: new Date(2019,5,29,13,15,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"JewelBaker", time: new Date(2019,5,29,14,23,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"ClydeMuskelly", time: new Date(2019,5,29,15,44,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
		rawArray.push({name:"JefferyFranklin", time: new Date(2019,5,29,16,31,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"Royse", time: new Date(2019,5,29,16,48,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"Kathy_Franqui", time: new Date(2019,5,29,18,6,0,0).getTime() - getUTC(new Date()), location:"Hollywood",  city: "LA"});
		rawArray.push({name:"Cally", time: new Date(2019,5,29,18,25,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"Detales", time: new Date(2019,5,29,18,58,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "LA"});
		rawArray.push({name:"chasebouza", time: new Date(2019,5,29,20,31,0,0).getTime() - getUTC(new Date()), location:"Waterfront",  city: "SEA"});
		rawArray.push({name:"JimmyReade", time: new Date(2019,5,29,21,33,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"cimiteriox", time: new Date(2019,5,29,22,4,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Matthew_Baily", time: new Date(2019,5,29,23,42,0,0).getTime() - getUTC(new Date()), location:"Paradise",  city: "LV"});
		rawArray.push({name:"Sienna", time: new Date(2019,5,30,4,26,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
		rawArray.push({name:"Austin_minier_", time: new Date(2019,5,30,5,21,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
		rawArray.push({name:"Bruce_Kirk", time: new Date(2019,5,30,8,42,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
		rawArray.push({name:"Menard", time: new Date(2019,5,30,10,45,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
<!-- End Here -->
  return rawArray;
}
