$(document).ready(function() {
  $("form#yourInfo").submit(function(event) {
  const businessSize = $("select#businessSize").val();
  const favSport = $("select#favSport").val();
  const favHoliday = $("select#favHoliday").val();
  const prefMovie = $("select#prefMovie").val();
  const favPie = $("select#favPie").val();

  if (businessSize === "smallBus") {
    if (favSport === "bBall" ) {
      if (favHoliday === "christmas") {
        $("#language").text("Ruby");
      } else if (favHoliday === "thanksgiving") {
        $("#language").text("Python");
      } else if (favHoliday === "halloween") {
        $("#language").text("C#");
      }
    } else if (favSport === "fBall") {
      if (favHoliday === "christmas") {
        $("#language").text("C#");
      } else if (favHoliday === "thanksgiving") {
        $("#language").text("Python");
      } else  if (favHoliday === "halloween") {
        $("#language").text("Ruby");
      }
    } else if (favSport === "soccer") {
      if (favHoliday === 'christmas') {
        $("#language").text("Ruby");
      } else if (favHoliday === 'thanksgiving') {
        $("#language").text("C#");
      } else  if (favHoliday === "halloween") {
        $("#language").text("Python");
      }
    }
  } else if (businessSize === "medBus") {
    if (favSport === "bBall") {
      if (favHoliday === "christmas") {
        $("#language").text("Python");
      } else if (favHoliday === "thanksgiving") {
        $("#language").text("Ruby");
      } else if (favHoliday === "halloween") {
        $("#language").text("C#");
      }
    } else if (favSport === "fBall") {
      if (favHoliday === "christmas") {
        $("#language").text("Python");
      } else if (favHoliday === "thanksgiving") {
        $("#language").text("C#");
      } else if (favHoliday === "halloween") {
        $("#language").text("Ruby");
      }
    } else if (favSport === "soccer") {
      if (favHoliday === "christmas") {
        $("#language").text("Ruby");
      } else if (favHoliday === "thanksgiving") {
        $("#language").text("C#");
      } else if (favHoliday === "halloween") {
        $("#language").text("Python");
      }
    }
  } else if (businessSize === "bigBus") {
    $("#language").text("C++")
  }
  
  




  $("#resultHidden").toggle("slow");
  $("#resultShowing").toggle("slow");


  event.preventDefault();
  });
});