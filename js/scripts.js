$(document).ready(function() {
  $("form#yourInfo").submit(function(event) {
  const businessSize = $("select#businessSize").val();
  const favSport = $("select#favSport").val();
  const favHoliday = $("select#favHoliday").val();
  const prefMovie = $("select#prefMovie").val();
  const favPie = $("select#favPie").val();

  if (businessSize === "smallBus") {
    if (favSport === "bball" ) {
      if (favHoliday === "christmas") {
        $("#language").text("Ruby!");
      } else if (favHoliday === "thanksgiving") {
        $("#language").text("Python!");
      } else if (favHoliday === "halloween") {
        $("#language").text("C#");
      }
    } else if (favSport === "fball") {
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
  } else if (paper === 'wrapP') {
    if (candy === 'female') {
      $("#celebrity").text("");
    }
  } else {
    $("#celebrity").text("Stanley Hudson")
  }

  $("#result").show();
  event.preventDefault();
});
});