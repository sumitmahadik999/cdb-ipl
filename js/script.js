var data = [
 {
   "FIELD1": "Abhishek",
   "FIELD2": "Royal Challengers Bangalore",
   "FIELD3": -200,
   "FIELD4": 110075,
   "FIELD5": 200
 },
 {
   "FIELD1": "Akhilesh",
   "FIELD2": "Chennai Super Kings",
   "FIELD3": 200,
   "FIELD4": 110787,
   "FIELD5": 200
 },
 {
   "FIELD1": "Arjun",
   "FIELD2": "Royal Challengers Bangalore",
   "FIELD3": -100,
   "FIELD4": 197132,
   "FIELD5": 100
 },
 {
   "FIELD1": "Crisden",
   "FIELD2": "Royal Challengers Bangalore",
   "FIELD3": -200,
   "FIELD4": 222640,
   "FIELD5": 200
 },
 {
   "FIELD1": "Jenil",
   "FIELD2": "",
   "FIELD3": 0,
   "FIELD4": 238093,
   "FIELD5": 0
 },
 {
   "FIELD1": "Ishwari",
   "FIELD2": "Royal Challengers Bangalore",
   "FIELD3": -200,
   "FIELD4": 259228,
   "FIELD5": 200
 },
 {
   "FIELD1": "Ketki",
   "FIELD2": "",
   "FIELD3": 0,
   "FIELD4": 284520,
   "FIELD5": 0
 },
 {
   "FIELD1": "Ketanm",
   "FIELD2": "Chennai Super Kings",
   "FIELD3": 200,
   "FIELD4": 292183,
   "FIELD5": 200
 },
 {
   "FIELD1": "Kishan",
   "FIELD2": "Royal Challengers Bangalore",
   "FIELD3": -100,
   "FIELD4": 322971,
   "FIELD5": 100
 },
 {
   "FIELD1": "Mangesh",
   "FIELD2": "Chennai Super Kings",
   "FIELD3": 200,
   "FIELD4": 385093,
   "FIELD5": 200
 },
 {
   "FIELD1": "Manish",
   "FIELD2": "",
   "FIELD3": 0,
   "FIELD4": 402101,
   "FIELD5": 0
 },
 {
   "FIELD1": "Mayur",
   "FIELD2": "Chennai Super Kings",
   "FIELD3": 200,
   "FIELD4": 410800,
   "FIELD5": 200
 },
 {
   "FIELD1": "Mehak",
   "FIELD2": "Royal Challengers Bangalore",
   "FIELD3": -200,
   "FIELD4": 495124,
   "FIELD5": 200
 },
 {
   "FIELD1": "Nandkishore",
   "FIELD2": "Chennai Super Kings",
   "FIELD3": 200,
   "FIELD4": 497660,
   "FIELD5": 200
 },
 {
   "FIELD1": "Ninisha",
   "FIELD2": "Royal Challengers Bangalore",
   "FIELD3": -200,
   "FIELD4": 503405,
   "FIELD5": 200
 },
 {
   "FIELD1": "Nitish",
   "FIELD2": "",
   "FIELD3": 0,
   "FIELD4": 528290,
   "FIELD5": 0
 },
 {
   "FIELD1": "Omkar",
   "FIELD2": "Royal Challengers Bangalore",
   "FIELD3": -200,
   "FIELD4": 550654,
   "FIELD5": 200
 },
 {
   "FIELD1": "PRITI",
   "FIELD2": "Chennai Super Kings",
   "FIELD3": 200,
   "FIELD4": 559344,
   "FIELD5": 200
 },
 {
   "FIELD1": "Rahul",
   "FIELD2": "Royal Challengers Bangalore",
   "FIELD3": -200,
   "FIELD4": 572526,
   "FIELD5": 200
 },
 {
   "FIELD1": "Rajesh",
   "FIELD2": "",
   "FIELD3": 0,
   "FIELD4": 585136,
   "FIELD5": 0
 },
 {
   "FIELD1": "Ramesh",
   "FIELD2": "Chennai Super Kings",
   "FIELD3": 200,
   "FIELD4": 592348,
   "FIELD5": 200
 },
 {
   "FIELD1": "Reema",
   "FIELD2": "Royal Challengers Bangalore",
   "FIELD3": -200,
   "FIELD4": 637997,
   "FIELD5": 200
 },
 {
   "FIELD1": "Reshal",
   "FIELD2": "",
   "FIELD3": 0,
   "FIELD4": 652961,
   "FIELD5": 0
 },
 {
   "FIELD1": "Roshan",
   "FIELD2": "Chennai Super Kings",
   "FIELD3": 200,
   "FIELD4": 682556,
   "FIELD5": 200
 },
 {
   "FIELD1": "Rutuja",
   "FIELD2": "Chennai Super Kings",
   "FIELD3": 200,
   "FIELD4": 691050,
   "FIELD5": 200
 },
 {
   "FIELD1": "Sagar",
   "FIELD2": "Royal Challengers Bangalore",
   "FIELD3": -200,
   "FIELD4": 719508,
   "FIELD5": 200
 },
 {
   "FIELD1": "Srikrishna",
   "FIELD2": "",
   "FIELD3": 0,
   "FIELD4": 769561,
   "FIELD5": 0
 },
 {
   "FIELD1": "Sujit",
   "FIELD2": "",
   "FIELD3": 0,
   "FIELD4": 801894,
   "FIELD5": 0
 },
 {
   "FIELD1": "Sumit",
   "FIELD2": "Royal Challengers Bangalore",
   "FIELD3": -200,
   "FIELD4": 866466,
   "FIELD5": 200
 },
 {
   "FIELD1": "Sushil",
   "FIELD2": "Chennai Super Kings",
   "FIELD3": 200,
   "FIELD4": 947086,
   "FIELD5": 200
 },
 {
   "FIELD1": "zabeen",
   "FIELD2": "",
   "FIELD3": 0,
   "FIELD4": 962536,
   "FIELD5": 0
 }
];
function createRowMarkup(data,team1,team2,team1class,team2class) {
   var markup = "";
   var team1 = team1;
   var team2 = team2;
   var team1Class = team1class;
   var team2Class= team2class;
   for(i=0; i<data.length; i++) {
            var tossWinClass = "";
      if(data[i].FIELD2 != "") {
         if(data[i].FIELD2 == team1) {
            var playerName = data[i].FIELD1.toLowerCase();
            if(data[i].FIELD7 != 0 && data[i].FIELD7 != undefined) {
               tossWinClass = "tossWinner";
            }
            markup += '<td class="prediction_col '+playerName+'"><div class="fixture__teams"><div class="fixture__team"><span class="googly '+team1Class +' '+  tossWinClass+'">'+parseInt(data[i].FIELD5)+'</span><div class="u-show-tablet u-hide-phablet fixture__logo tLogo40x t-'+team1Class+' '+team1Class+'"></div><div class="u-hide-tablet fixture__logo tLogo58x '+team1Class+'"></div></div></div></td>';
         } else {
            var playerName = data[i].FIELD1.toLowerCase();
            if(data[i].FIELD7 != 0 && data[i].FIELD7 != undefined) {
               tossWinClass = "tossWinner";
            }
            markup += '<td class="prediction_col '+playerName+'"><div class="fixture__teams"><div class="fixture__team"><span class="googly '+team2Class +' '+ tossWinClass +'">'+parseInt(data[i].FIELD5)+'</span><div class="u-show-tablet u-hide-phablet fixture__logo tLogo40x t-'+team2Class+' '+team2Class+'"></div><div class="u-hide-tablet fixture__logo tLogo58x '+team2Class+'"></div></div></div></td>';
         }

      } else {
         var playerName = data[i].FIELD1.toLowerCase();
         markup += '<td class="prediction_col '+playerName+'">NA</td>';
      }
   }
   console.log(markup)
}

function createRowMarkup1(data,team1,team2,team3,team4,team1class,team2class,team3class,team4class) {
   var markup = "";
   var team1 = team1;
   var team2 = team2;
   var team3 = team3;
   var team4 = team4;
   var team1Class = team1class;
   var team2Class= team2class;
   var team3Class = team3class;
   var team4Class= team4class;
   for(i=0; i<data.length; i++) {
      if(data[i].FIELD1 != "") {
         if(data[i].FIELD1 == team1) {
            var playerName = data[i].FIELD0.toLowerCase();
            markup += '<td class="prediction_col '+playerName+'"><div class="fixture__teams"><div class="fixture__team"><span class="googly">'+data[i].FIELD4+'</span><div class="u-show-tablet fixture__logo tLogo30x '+team1Class+'"></div><div class="u-hide-tablet fixture__logo tLogo50x '+team1Class+'"></div><p class="fixture__team-name">'+team1+'</p></div></div></td>';
         } else if(data[i].FIELD1 == team2) {
            var playerName = data[i].FIELD0.toLowerCase();
            markup += '<td class="prediction_col '+playerName+'"><div class="fixture__teams"><div class="fixture__team"><span class="googly">'+data[i].FIELD4+'</span><div class="u-show-tablet fixture__logo tLogo30x '+team2Class+'"></div><div class="u-hide-tablet fixture__logo tLogo50x '+team2Class+'"></div><p class="fixture__team-name">'+team2+'</p></div></div></td>';
         } else if(data[i].FIELD1 == team3) {
            var playerName = data[i].FIELD0.toLowerCase();
            markup += '<td class="prediction_col '+playerName+'"><div class="fixture__teams"><div class="fixture__team"><span class="googly">'+data[i].FIELD4+'</span><div class="u-show-tablet fixture__logo tLogo30x '+team3Class+'"></div><div class="u-hide-tablet fixture__logo tLogo50x '+team3Class+'"></div><p class="fixture__team-name">'+team3+'</p></div></div></td>';
         } else if(data[i].FIELD1 == team4) {
            var playerName = data[i].FIELD0.toLowerCase();
            markup += '<td class="prediction_col '+playerName+'"><div class="fixture__teams"><div class="fixture__team"><span class="googly">'+data[i].FIELD4+'</span><div class="u-show-tablet fixture__logo tLogo30x '+team4Class+'"></div><div class="u-hide-tablet fixture__logo tLogo50x '+team4Class+'"></div><p class="fixture__team-name">'+team4+'</p></div></div></td>';
         }

      } else {
         var playerName = data[i].FIELD0.toLowerCase();
         markup += '<td class="prediction_col '+playerName+'">NA</td>';
      }
   }
   console.log(markup)
}

//createRowMarkup(data,"Gujrat Lions","Kolkata Knight Riders", "GL", "KKR")
 // createRowMarkup(data,"Kings XI Punjab","Rising Pune Supergiant", "KXIP", "RPS")
// createRowMarkup(data,"Royal Challengers Banglore","Delhi Daredevils", "RCB", "DD")
// createRowMarkup(data,"Sunrisers Hyderabad","Gujrat Lions", "SRH", "GL")
 createRowMarkup(data,"Chennai Super Kings","Royal Challengers Bangalore", "CSK", "RCB")
 //createRowMarkup1(data,"Mumbai Indians","Kolkata Knight Riders", "Rising Pune Supergaint", "Sunrisers Hyderabad","MI", "KKR", "RPS", "SRH")