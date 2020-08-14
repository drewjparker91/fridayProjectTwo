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
        $("#language").text("Ruby!");
      } else if (favHoliday === "thanksgiving") {
        $("#language").text("Python!");
      } else if (favHoliday === "halloween") {
        $("#language").text("C#");
      }
    } else if (favSport === "fBall") {
      if (favHoliday === "christmas") {
        $("#language").text("Ruby");
      } else if (favHoliday === "thanksgiving") {
        $("#language").text("Python");
      } else  if (favHoliday === "halloween") {
        $("#language").text("C#");
      }
    } else if (favSport === "soccer") {
      if (favHoliday === 'christmas') {
        $("#language").text("Ruby");
      } else if (favHoliday === 'thanksgiving') {
        $("#language").text("Python");
      } else  if (favHoliday === "halloween") {
        $("#language").text("C#");
      }
    }
  } else if (businessSize === "medBus") {
    if (favSport === "bBall") {
      if (favHoliday === "christmas") {
        $("#language").text("Ruby");
      } else if (favHoliday === "thanksgiving") {
        $("#language").text("Python");
      } else if (favHoliday === "halloween") {
        $("#language").text("C#");
      }
    } else if (favSport === "fBall") {
      if (favHoliday === "christmas") {
        $("#language").text("Holly Flax");
      } else if (favHoliday === "thanksgiving") {
        $("#language").text("Nellie Bertram");
      } else if (favHoliday === "halloween") {
        $("#language").text("Jan Levinson");
      }
    } else if (favSport === "soccer") {
      if (favHoliday === "christmas") {
        $("#language").text("Ruby");
      } else if (favHoliday === "thanksgiving") {
        $("#language").text("Python");
      } else if (favHoliday === "halloween") {
        $("#language").text("C#");
      }
    }
  } else if (businessSize === "bigBus") {
    $("#language").text("C++")
  }
  




  $("#result").show();
  event.preventDefault();
  });
});