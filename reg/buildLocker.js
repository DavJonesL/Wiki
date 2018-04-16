function buildPage(){
  document.getElementById("lastUpdateP").innerHTML = "<b>Last Update</b> 02/04/2018";
  loopUpdate();
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
  for (i = 0; i < rawArray.length; i++) {
    if (passedCity == "All Cities" || rawArray[i].city == passedCity) {
      if (rawArray[i].time > -16200000 && rawArray[i].time < 86400000) {
        addRow(rawArray[i].name, rawArray[i].time, rawArray[i].location);
        statCount++;
      }
    }
    if (i == rawArray.length - 1) {
      document.getElementById("showingP").innerHTML = statCount + " character(s) in <b>" + document.getElementById("cityInput").value + ".</b>";
    }
  }
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
      return "Ready";
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
  var newArray = [];
  <!-- Start Here -->
  newArray.push({name:"Jennine", time: new Date(2018,3,16,5,5,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
  newArray.push({name:"Roy_Suddoth", time: new Date(2018,3,16,5,10,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
  newArray.push({name:"EricAnderson", time: new Date(2018,3,16,5,37,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
  newArray.push({name:"Goksel", time: new Date(2018,3,16,5,56,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
  newArray.push({name:"Yelena_Chi", time: new Date(2018,3,16,6,22,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
  newArray.push({name:"Chebahtah", time: new Date(2018,3,16,6,32,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
  newArray.push({name:"Benjamin_terry", time: new Date(2018,3,16,6,35,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
  newArray.push({name:"Giovanny", time: new Date(2018,3,16,7,39,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
  newArray.push({name:"Richard_Yalon", time: new Date(2018,3,16,7,51,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
  newArray.push({name:"HowardViles", time: new Date(2018,3,16,7,51,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
  newArray.push({name:"laurettepelletier", time: new Date(2018,3,16,7,52,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
  newArray.push({name:"Ralph_Auclair", time: new Date(2018,3,16,7,57,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"Daisy_Larzelere", time: new Date(2018,3,16,7,59,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
  newArray.push({name:"Deana_Milani", time: new Date(2018,3,16,8,19,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
  newArray.push({name:"Lauracobb", time: new Date(2018,3,16,8,32,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
  newArray.push({name:"Slingerland", time: new Date(2018,3,16,8,41,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
  newArray.push({name:"Robbinschmidt", time: new Date(2018,3,16,9,39,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
  newArray.push({name:"Carlstrom", time: new Date(2018,3,16,9,44,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
  newArray.push({name:"Esperanza_Salvini", time: new Date(2018,3,16,11,0,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
  newArray.push({name:"Pilgreen", time: new Date(2018,3,16,11,8,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
  newArray.push({name:"LewisRiley", time: new Date(2018,3,16,11,25,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"FranklinSedtal", time: new Date(2018,3,16,11,35,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
  newArray.push({name:"RaymondStecklein", time: new Date(2018,3,16,11,57,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
  newArray.push({name:"ChristineWilliams", time: new Date(2018,3,16,12,8,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
  newArray.push({name:"Armandcole", time: new Date(2018,3,16,12,15,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
  newArray.push({name:"Carro", time: new Date(2018,3,16,12,38,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
  newArray.push({name:"norikoperkins", time: new Date(2018,3,16,13,21,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
  newArray.push({name:"Verssae", time: new Date(2018,3,16,13,42,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
  newArray.push({name:"Shawnda_Ralls", time: new Date(2018,3,16,14,4,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
  newArray.push({name:"oscar_romero", time: new Date(2018,3,16,14,25,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
  newArray.push({name:"Jaye", time: new Date(2018,3,16,14,38,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
  newArray.push({name:"Beville", time: new Date(2018,3,16,14,57,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"CathernMorris", time: new Date(2018,3,16,15,37,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
  newArray.push({name:"Jeremy_Cardello", time: new Date(2018,3,16,15,47,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
  newArray.push({name:"JimmyFitzgerald", time: new Date(2018,3,16,16,38,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
  newArray.push({name:"smily", time: new Date(2018,3,16,16,38,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
  newArray.push({name:"Cliff_Lopez", time: new Date(2018,3,16,17,2,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
  newArray.push({name:"Cherish6969", time: new Date(2018,3,16,17,9,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
  newArray.push({name:"Eloy_Warmath", time: new Date(2018,3,16,17,10,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
  newArray.push({name:"Brown", time: new Date(2018,3,16,17,18,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"Ellis_Watson", time: new Date(2018,3,16,18,1,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
  newArray.push({name:"maehuckaby", time: new Date(2018,3,16,18,34,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"Quinn", time: new Date(2018,3,16,18,35,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"StaceyHale", time: new Date(2018,3,16,18,35,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"louise1718", time: new Date(2018,3,16,19,8,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
  newArray.push({name:"Alexander_Cleek", time: new Date(2018,3,16,19,13,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
  newArray.push({name:"Tabor", time: new Date(2018,3,16,19,18,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
  newArray.push({name:"SylvesterPickett", time: new Date(2018,3,16,19,25,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
  newArray.push({name:"Paula_Nagase", time: new Date(2018,3,16,19,46,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
  newArray.push({name:"FredAlfrey", time: new Date(2018,3,16,19,48,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"AntoinePurinton", time: new Date(2018,3,16,20,5,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
  newArray.push({name:"Neil_Rhodes", time: new Date(2018,3,16,20,8,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
  newArray.push({name:"JerrySavoy", time: new Date(2018,3,16,20,15,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
  newArray.push({name:"Rafael_Hafer", time: new Date(2018,3,16,21,25,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
  newArray.push({name:"Arthur_Spaugh", time: new Date(2018,3,16,22,32,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
  newArray.push({name:"Sullenger", time: new Date(2018,3,16,23,7,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
  newArray.push({name:"Steven_Bullion", time: new Date(2018,3,16,23,33,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
  newArray.push({name:"The_Woman", time: new Date(2018,3,16,23,47,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
  newArray.push({name:"Aizlynn", time: new Date(2018,3,16,23,50,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"Andre_Cohn", time: new Date(2018,3,3,0,4,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
  newArray.push({name:"thaddeus_roberts", time: new Date(2018,3,3,0,8,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
  newArray.push({name:"Harry-Fucillo-", time: new Date(2018,3,3,0,21,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
  newArray.push({name:"Prunier", time: new Date(2018,3,3,0,42,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
  newArray.push({name:"NanetteProvince", time: new Date(2018,3,3,0,51,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
  newArray.push({name:"selfpaidinc", time: new Date(2018,3,3,0,54,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"Marlana_Fathree", time: new Date(2018,3,3,0,55,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
  newArray.push({name:"Husson", time: new Date(2018,3,3,1,17,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
  newArray.push({name:"Gaby2k", time: new Date(2018,3,3,2,26,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
  newArray.push({name:"Ptaszynski", time: new Date(2018,3,3,3,26,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
  newArray.push({name:"Janice_avila", time: new Date(2018,3,3,3,26,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
  newArray.push({name:"jacks", time: new Date(2018,3,3,3,26,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"FernandoPomeroy", time: new Date(2018,3,3,3,38,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
  newArray.push({name:"Donald_Taylor", time: new Date(2018,3,3,3,45,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
  newArray.push({name:"John_Zukerman", time: new Date(2018,3,3,4,8,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
  newArray.push({name:"Edward_Ortiz_", time: new Date(2018,3,3,4,12,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
  newArray.push({name:"Xavier", time: new Date(2018,3,3,4,46,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"Godders", time: new Date(2018,3,3,6,21,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
  newArray.push({name:"roccograddy", time: new Date(2018,3,3,6,33,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
  newArray.push({name:"Plaas", time: new Date(2018,3,3,6,46,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
  newArray.push({name:"Mewborn", time: new Date(2018,3,3,6,48,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
  newArray.push({name:"webbink_murray", time: new Date(2018,3,3,7,8,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
  newArray.push({name:"Perico", time: new Date(2018,3,3,7,50,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"Kyle_seiber", time: new Date(2018,3,3,8,33,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
  newArray.push({name:"Okamoto", time: new Date(2018,3,3,8,34,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
  newArray.push({name:"Clyde_Corneau", time: new Date(2018,3,3,9,15,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"LeonardEhnis", time: new Date(2018,3,3,9,36,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
  newArray.push({name:"StevenSummers", time: new Date(2018,3,3,10,9,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
  newArray.push({name:"gotthardt", time: new Date(2018,3,3,10,42,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
  newArray.push({name:"PoMDizzl3", time: new Date(2018,3,3,10,55,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
  newArray.push({name:"Cantlow", time: new Date(2018,3,3,11,26,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
  newArray.push({name:"William_Lundstrom", time: new Date(2018,3,3,11,39,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
  newArray.push({name:"Jaganshi", time: new Date(2018,3,3,11,52,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
  newArray.push({name:"HandsomeBanana", time: new Date(2018,3,3,12,41,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
  newArray.push({name:"DrZ", time: new Date(2018,3,3,14,35,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"Pioneer", time: new Date(2018,3,3,15,3,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"Shady_Sam", time: new Date(2018,3,3,15,4,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
  newArray.push({name:"jaqua", time: new Date(2018,3,3,15,9,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
  newArray.push({name:"davidmarkell", time: new Date(2018,3,3,16,19,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
  newArray.push({name:"JamieZeigler", time: new Date(2018,3,3,16,19,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
  newArray.push({name:"Cervantes", time: new Date(2018,3,3,17,5,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
  newArray.push({name:"Rias", time: new Date(2018,3,3,17,9,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
  newArray.push({name:"allmighty", time: new Date(2018,3,3,17,17,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
  newArray.push({name:"ArmandKarn", time: new Date(2018,3,3,17,41,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
  newArray.push({name:"Humberto_Ikemoto", time: new Date(2018,3,3,18,29,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"cushman", time: new Date(2018,3,3,19,16,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
  newArray.push({name:"MohammadGormont", time: new Date(2018,3,3,19,54,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
  newArray.push({name:"Eli_Bish", time: new Date(2018,3,3,20,45,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"Car", time: new Date(2018,3,3,20,47,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"JudyWilcox", time: new Date(2018,3,3,21,45,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
  newArray.push({name:"The_DarK_WolF", time: new Date(2018,3,3,22,24,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
  newArray.push({name:"JeremyApolo", time: new Date(2018,3,3,22,50,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
  newArray.push({name:"awilda", time: new Date(2018,3,3,23,17,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"Telecky", time: new Date(2018,3,3,23,18,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"JoelRay", time: new Date(2018,3,3,23,49,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
  newArray.push({name:"Bryan_Krabill", time: new Date(2018,3,3,23,53,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
  newArray.push({name:"Asberry", time: new Date(2018,3,4,0,41,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
  newArray.push({name:"Anthony_Szocki", time: new Date(2018,3,4,0,55,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
  newArray.push({name:"Dusko", time: new Date(2018,3,4,2,9,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
  newArray.push({name:"_maxmontuori", time: new Date(2018,3,4,2,30,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
  newArray.push({name:"Killswitch", time: new Date(2018,3,4,3,14,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
  newArray.push({name:"Ela_Payne", time: new Date(2018,3,4,3,54,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"Lykos", time: new Date(2018,3,4,3,56,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
  newArray.push({name:"JuanSerfling", time: new Date(2018,3,4,4,18,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
  newArray.push({name:"Pat_Anes", time: new Date(2018,3,4,4,43,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
  newArray.push({name:"Bones10134", time: new Date(2018,3,4,4,58,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"zina_cantabrana", time: new Date(2018,3,4,6,12,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
  newArray.push({name:"Dean_Vaughan", time: new Date(2018,3,4,6,13,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
  newArray.push({name:"Showtime", time: new Date(2018,3,4,7,29,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
  newArray.push({name:"GeraldKantor", time: new Date(2018,3,4,9,2,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
  newArray.push({name:"PeggyTimmel", time: new Date(2018,3,4,9,13,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
  newArray.push({name:"KeithGuarino", time: new Date(2018,3,4,10,15,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
  newArray.push({name:"Vincent_Wilson", time: new Date(2018,3,4,11,23,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
  newArray.push({name:"BlackStain", time: new Date(2018,3,4,11,44,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
  newArray.push({name:"NenaMikulski", time: new Date(2018,3,4,12,8,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
  newArray.push({name:"meyerman", time: new Date(2018,3,4,12,21,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
  newArray.push({name:"Kim_Hagger", time: new Date(2018,3,4,12,52,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"WesleySparks", time: new Date(2018,3,4,15,33,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"Winona", time: new Date(2018,3,4,16,3,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
  newArray.push({name:"Blade", time: new Date(2018,3,4,16,11,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
  newArray.push({name:"KevinJanocha", time: new Date(2018,3,4,19,59,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
  newArray.push({name:"BarrettWember", time: new Date(2018,3,4,20,2,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
  newArray.push({name:"4SrT1984", time: new Date(2018,3,4,20,10,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"NoeStrimel", time: new Date(2018,3,4,20,41,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
  newArray.push({name:"Vanda_Scott", time: new Date(2018,3,4,20,50,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
  newArray.push({name:"Banko", time: new Date(2018,3,4,20,50,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
  newArray.push({name:"_Stephen_Morgan", time: new Date(2018,3,4,21,3,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
  newArray.push({name:"Victor_Lott", time: new Date(2018,3,4,21,18,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"Lawrence-Zorens", time: new Date(2018,3,4,21,19,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
  newArray.push({name:"Beth_Mathias", time: new Date(2018,3,4,21,36,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
  newArray.push({name:"Menson", time: new Date(2018,3,4,21,37,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
  newArray.push({name:"AnnettaStofko", time: new Date(2018,3,4,21,40,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"Gail_Forkan", time: new Date(2018,3,4,21,45,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
  newArray.push({name:"Almario", time: new Date(2018,3,4,22,6,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
  newArray.push({name:"Jesse", time: new Date(2018,3,4,22,12,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
  newArray.push({name:"DuaneWhyte", time: new Date(2018,3,4,22,55,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
  newArray.push({name:"Ballinger", time: new Date(2018,3,4,22,59,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
  newArray.push({name:"Cecil_Mouser", time: new Date(2018,3,5,0,41,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"Orduna", time: new Date(2018,3,5,1,11,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
  newArray.push({name:"rogalski", time: new Date(2018,3,5,1,41,0,0).getTime() - getUTC(new Date()), location:"Brooklyn",  city: "NY"});
  newArray.push({name:"Vern_Miles", time: new Date(2018,3,5,2,15,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
  newArray.push({name:"Fernando_Siewers", time: new Date(2018,3,5,2,34,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
  newArray.push({name:"Scott_Niese", time: new Date(2018,3,5,2,51,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"Aloe", time: new Date(2018,3,5,2,54,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
  newArray.push({name:"Alda", time: new Date(2018,3,5,3,29,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
  newArray.push({name:"Duaneblair", time: new Date(2018,3,5,4,17,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"EricRobertson", time: new Date(2018,3,5,4,18,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
  newArray.push({name:"Hitt_rodney", time: new Date(2018,3,5,5,32,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
  newArray.push({name:"curtiscanady", time: new Date(2018,3,5,6,14,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
  newArray.push({name:"Arthur_mantz", time: new Date(2018,3,5,6,24,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
  newArray.push({name:"JimmyHoke", time: new Date(2018,3,5,6,48,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
  newArray.push({name:"Setclock", time: new Date(2018,3,5,6,56,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"JosefaHaynes", time: new Date(2018,3,5,7,17,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
  newArray.push({name:"ChristopherMazzone", time: new Date(2018,3,5,7,18,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
  newArray.push({name:"GeorgeShipps", time: new Date(2018,3,5,7,34,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
  newArray.push({name:"Douglas_Kummer", time: new Date(2018,3,5,7,35,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
  newArray.push({name:"Spidey_Guy", time: new Date(2018,3,5,7,55,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
  newArray.push({name:"Philip_Westra", time: new Date(2018,3,5,8,15,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
  newArray.push({name:"RandallHyde", time: new Date(2018,3,5,8,22,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
  newArray.push({name:"KoryFerg", time: new Date(2018,3,5,8,34,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"Swan", time: new Date(2018,3,5,8,48,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
  newArray.push({name:"Marilynmcdonald", time: new Date(2018,3,5,8,56,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
  newArray.push({name:"Bradley_Young", time: new Date(2018,3,5,9,32,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
  newArray.push({name:"ChasityHessee", time: new Date(2018,3,5,10,57,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
  newArray.push({name:"Clyde_Lipkin", time: new Date(2018,3,5,11,2,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
  newArray.push({name:"Floyd_Vannorman", time: new Date(2018,3,5,11,56,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
  newArray.push({name:"Peggy_John", time: new Date(2018,3,5,12,17,0,0).getTime() - getUTC(new Date()), location:"Manhattan",  city: "NY"});
  newArray.push({name:"ClarettaDraffen-", time: new Date(2018,3,5,12,31,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
  newArray.push({name:"johnny_polselli", time: new Date(2018,3,5,12,44,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
  newArray.push({name:"Jean_sipes", time: new Date(2018,3,5,12,53,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
  newArray.push({name:"Frida6", time: new Date(2018,3,5,12,59,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"SophiaSantana", time: new Date(2018,3,5,13,24,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
  newArray.push({name:"Teresa_Childress", time: new Date(2018,3,5,13,32,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
  newArray.push({name:"KingRups", time: new Date(2018,3,5,13,34,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"Maurice_James", time: new Date(2018,3,5,13,45,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"Shane_Nevens", time: new Date(2018,3,5,14,20,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
  newArray.push({name:"JamesLucas", time: new Date(2018,3,5,15,55,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
  newArray.push({name:"DanielEntsminger", time: new Date(2018,3,5,16,6,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
  newArray.push({name:"Puleio", time: new Date(2018,3,5,17,31,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"Jeremy_James", time: new Date(2018,3,5,17,52,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
  newArray.push({name:"Iesha_Rousseau", time: new Date(2018,3,5,18,26,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
  newArray.push({name:"MatthewEvans", time: new Date(2018,3,5,18,27,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
  newArray.push({name:"KellyFlanigan", time: new Date(2018,3,5,18,46,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
  newArray.push({name:"PurpleHaze", time: new Date(2018,3,5,19,57,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
  newArray.push({name:"Edgar_Fitzgibbon", time: new Date(2018,3,5,21,44,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
  newArray.push({name:"Lucks", time: new Date(2018,3,5,21,53,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"Shope", time: new Date(2018,3,5,22,27,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
  newArray.push({name:"Viva_Krucke", time: new Date(2018,3,5,22,53,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
  newArray.push({name:"Albert_Barth", time: new Date(2018,3,5,23,12,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
  newArray.push({name:"Hash", time: new Date(2018,3,5,23,42,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
  newArray.push({name:"Kym_Banks", time: new Date(2018,3,5,23,45,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
  newArray.push({name:"Klaus", time: new Date(2018,3,6,0,34,0,0).getTime() - getUTC(new Date()), location:"Old City District",  city: "PH"});
  newArray.push({name:"BernardAstley", time: new Date(2018,3,6,0,48,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
  newArray.push({name:"Noe_Rios", time: new Date(2018,3,6,0,59,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"lotus", time: new Date(2018,3,6,1,37,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
  newArray.push({name:"BruceMassucci", time: new Date(2018,3,6,2,23,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
  newArray.push({name:"Mark_Swensen", time: new Date(2018,3,6,2,50,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
  newArray.push({name:"Karlantao", time: new Date(2018,3,6,3,13,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"Momsen", time: new Date(2018,3,6,3,31,0,0).getTime() - getUTC(new Date()), location:"Corktown",  city: "DT"});
  newArray.push({name:"Escobarrr", time: new Date(2018,3,6,5,33,0,0).getTime() - getUTC(new Date()), location:"The Loop",  city: "CH"});
  newArray.push({name:"SteveBrown", time: new Date(2018,3,6,5,48,0,0).getTime() - getUTC(new Date()), location:"Bella Vista",  city: "PH"});
  newArray.push({name:"Kevin_hermanowicz", time: new Date(2018,3,6,6,28,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"Robert_Craw", time: new Date(2018,3,6,6,38,0,0).getTime() - getUTC(new Date()), location:"Downtown",  city: "DT"});
  newArray.push({name:"glenn_bau", time: new Date(2018,3,6,6,51,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
  newArray.push({name:"Lonnie_Gall", time: new Date(2018,3,6,7,41,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
  newArray.push({name:"TheBean", time: new Date(2018,3,6,7,46,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"ruben_harrold", time: new Date(2018,3,6,9,31,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
  newArray.push({name:"Rosamaria_Duran", time: new Date(2018,3,6,10,37,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
  newArray.push({name:"seanmcclean", time: new Date(2018,3,6,11,42,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
  newArray.push({name:"LOONEYT00NS", time: new Date(2018,3,6,11,45,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
  newArray.push({name:"Hurons", time: new Date(2018,3,6,12,35,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"NancyAsaro", time: new Date(2018,3,6,13,39,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
  newArray.push({name:"Cathryn_Wehmeyer", time: new Date(2018,3,6,13,47,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"Dewayne_Reinholt", time: new Date(2018,3,6,14,28,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
  newArray.push({name:"DonnieJohn", time: new Date(2018,3,6,14,40,0,0).getTime() - getUTC(new Date()), location:"South Side",  city: "CH"});
  newArray.push({name:"DennisGregg", time: new Date(2018,3,6,17,8,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
  newArray.push({name:"RonnieDaniels", time: new Date(2018,3,6,17,9,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
  newArray.push({name:"MyrtleHanify", time: new Date(2018,3,6,17,9,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
  newArray.push({name:"Bo_maarx", time: new Date(2018,3,6,17,9,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
  newArray.push({name:"Efiyahu", time: new Date(2018,3,6,18,9,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"ophelia", time: new Date(2018,3,6,18,44,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
  newArray.push({name:"PinkCyanide", time: new Date(2018,3,6,19,23,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
  newArray.push({name:"masom", time: new Date(2018,3,6,19,40,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
  newArray.push({name:"Carrico", time: new Date(2018,3,6,19,44,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
  newArray.push({name:"MrHans", time: new Date(2018,3,6,22,50,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"Bernice_Boggess", time: new Date(2018,3,6,22,57,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"Linney", time: new Date(2018,3,6,23,8,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"BradleyLampert", time: new Date(2018,3,6,23,28,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
  newArray.push({name:"enkindle-test11", time: new Date(2018,3,7,0,23,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"enkindle-test13", time: new Date(2018,3,7,0,52,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"enkindle-test18", time: new Date(2018,3,7,1,2,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"enkindle-test19", time: new Date(2018,3,7,1,4,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"xKona", time: new Date(2018,3,7,1,33,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
  newArray.push({name:"Andreasen", time: new Date(2018,3,7,1,48,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"Brent_Treible", time: new Date(2018,3,7,5,9,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
  newArray.push({name:"ShaunaBranyon", time: new Date(2018,3,7,5,49,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"Weatherby", time: new Date(2018,3,7,7,53,0,0).getTime() - getUTC(new Date()), location:"Downtown LA",  city: "LA"});
  newArray.push({name:"Vinita", time: new Date(2018,3,7,8,42,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
  newArray.push({name:"Toby_raatz", time: new Date(2018,3,7,9,14,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"JuanitaScheidegger", time: new Date(2018,3,7,13,16,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"David_Repke", time: new Date(2018,3,7,14,59,0,0).getTime() - getUTC(new Date()), location:"Pasadena",  city: "LA"});
  newArray.push({name:"myrta_gordon", time: new Date(2018,3,7,17,14,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"Stacy", time: new Date(2018,3,7,18,18,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"Eric_Klein", time: new Date(2018,3,7,18,18,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
  newArray.push({name:"Richard_Nichelson", time: new Date(2018,3,7,18,18,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"Brandstetter", time: new Date(2018,3,7,18,18,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"Filter", time: new Date(2018,3,7,18,24,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"Hsgsv", time: new Date(2018,3,7,18,34,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"Escalante", time: new Date(2018,3,7,18,42,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
  newArray.push({name:"Dreamchaser", time: new Date(2018,3,7,19,56,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"JuleneJacquez", time: new Date(2018,3,7,22,21,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
  newArray.push({name:"Deandre_Jones", time: new Date(2018,3,8,0,33,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"Deborah_Lutrell", time: new Date(2018,3,8,2,31,0,0).getTime() - getUTC(new Date()), location:"Ballard",  city: "SEA"});
  newArray.push({name:"Zia_Isabella", time: new Date(2018,3,8,5,5,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"Monry", time: new Date(2018,3,8,6,9,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"TitusLabenis", time: new Date(2018,3,8,6,10,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"zhu", time: new Date(2018,3,8,6,28,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"Dannelly", time: new Date(2018,3,8,10,32,0,0).getTime() - getUTC(new Date()), location:"Pioneer Square",  city: "SEA"});
  newArray.push({name:"aaronyoung", time: new Date(2018,3,8,12,6,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
  newArray.push({name:"Bierod", time: new Date(2018,3,8,14,37,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"Shari", time: new Date(2018,3,8,17,3,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"Troy_Glauner", time: new Date(2018,3,8,19,49,0,0).getTime() - getUTC(new Date()), location:"Summerlin",  city: "LV"});
  newArray.push({name:"Cristian", time: new Date(2018,3,8,22,24,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"JeffieBaraw", time: new Date(2018,3,8,23,19,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
  newArray.push({name:"GeorgeJeffrey", time: new Date(2018,3,9,1,15,0,0).getTime() - getUTC(new Date()), location:"The Strip",  city: "LV"});
<!-- End Here -->
  return newArray;
}
