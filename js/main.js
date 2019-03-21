 $(document).ready(function() {
     setTableBody();
     $(window).resize(setTableBody);
     $(".table-body").scroll(function() {
         $(".table-header").offset({
             left: -1 * this.scrollLeft
         });
     });

     var headerHeight = $(".header img").css("height");
     $(".outer-container").css("margin-top", headerHeight)
     $(window).resize();

     $('#bodytable tbody tr:odd').addClass('odd');
     $('#bodytable tbody tr:even').addClass('even');
     $.getJSON('js/predictionData.json', function(data) {
         var data = data;
         for (i = 0; i < 31; i++) {
             var totalScore = 0;
             $.each(data, function(key) {
                if(data[key][i].FIELD7 != undefined ) {
                 totalScore += data[key][i].FIELD3 + data[key][i].FIELD7;
                } else {
                   totalScore += data[key][i].FIELD3; 
                }
             })
             $("#headertable thead td:eq(" + i + ")").find("span").text(totalScore)
         }
     });

     $(".button-container a").on("click", function(e) {
         if (!$(this).hasClass("active")) {
             e.preventDefault();
             $(".button-container a").removeClass("active");
             $(this).addClass("active");
             var self = $(this).attr("self");
             
             $(".main-container").fadeOut(function() {
                 $("#" + self).fadeIn();
             });
             if(self == "voteContainer") {
                $("meta[name='viewport']").attr("content", "width=device-width, initial-scale=1");
            } else { 
                if(self == "predictionContainer") {
                    setTableBody();
                     $(window).resize(setTableBody);
                     $(".table-body").scroll(function() {
                         $(".table-header").offset({
                             left: -1 * this.scrollLeft
                         });
                     });

                     var headerHeight = $(".header img").css("height");
                     $(".outer-container").css("margin-top", headerHeight)
                     $(window).resize();
                }
                $("meta[name='viewport']").attr("content", "");
            }
         }
     });
     var seasonData;
     $.getJSON('js/predictionData.json', function(data) {
         seasonData = data;
         var tableMarkup = "";
         var selectMarkup = "";
         for (i = 0; i < 31; i++) {
             var totalScore = 0;
             var playerName = seasonData["match1"][i].FIELD1;
             $.each(seasonData, function(key) {
                 if(data[key][i].FIELD7 != undefined ) {
                 totalScore += data[key][i].FIELD3 + data[key][i].FIELD7;
                } else {
                   totalScore += data[key][i].FIELD3; 
                }
             })
             var rank = i + 1;
             tableMarkup += "<tr><td>" + rank + "</td><td>" + playerName + "</td><td class='sort'>" + totalScore + "</td></tr>"
         }
         $.each(seasonData, function(key) {
             matchCode = key;
             var r = /\d+/;
             var str = matchCode;
             var x = $.trim(str.match(r).toString());
             var str_split = str.split(x);
             var arr = [];
             $.each(str_split, function(i, val) {
                 arr.push($.trim(val));
                 arr.push(x.toString());
             });
             arr.pop();
             var label = arr[0] + " " + arr[1];
             selectMarkup += "<option value='" + matchCode + "'>" + label + "</option>"
         })
         $("#matchSelect").append(selectMarkup)
         $("#leaderBoard tbody").html(tableMarkup)
         sortTable();
     });

     $("#matchSelect").on("change", function() {
         var selectedMatch = $(this).val();
         filterLeaderBoard(selectedMatch, seasonData);
     });

     function setTableBody() {
         $(".table-body").height($(".inner-container").height() - $(".table-header").height());
     }

     function filterLeaderBoard(selectedMatch, seasonData) {
         var matchCode = selectedMatch;
         var tableMarkup = "";
         for (i = 0; i < 31; i++) {
             var totalScore = 0;
             var playerName = seasonData["match1"][i].FIELD1;
             $.each(seasonData, function(key) {
                 totalScore += seasonData[key][i].FIELD3;
                 if (matchCode == key) {
                     return false;
                 }
             })
             var rank = i + 1;
             tableMarkup += "<tr><td>" + rank + "</td><td>" + playerName + "</td><td class='sort'>" + totalScore + "</td></tr>"
         }
         $("#leaderBoard tbody").html(tableMarkup)
         sortTable();
     }

     function sortTable() {
         var rows = $('#leaderBoard tbody  tr').get();

         rows.sort(function(a, b) {

             var A = parseInt($(a).children('td').eq(2).text());
             var B = parseInt($(b).children('td').eq(2).text());

             if (B < A) {
                 return -1;
             }

             if (B > A) {
                 return 1;
             }

             return 0;

         });

         $.each(rows, function(index, row) {
             var rank = index + 1;
             $(row).find('td').eq(0).text(rank);
             $('#leaderBoard').children('tbody').append(row);
         });
         $('#leaderBoard tbody tr:odd').addClass('odd');
         $('#leaderBoard tbody tr:even').addClass('even');
     }


 })