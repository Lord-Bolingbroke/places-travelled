// User interface logic
var travelLog = new TravelLog();

$(document).ready(function() {
  $("#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("#name").val();
    var inputtedLocation = $("#location").val();
    var inputtedLandmarks = $("#landmarks").val();
    var inputtedDate = $("#date").val();
    var inputtedNotes = $("#notes").val();

    var newPlace = new Places(inputtedName, inputtedLocation, inputtedLandmarks, inputtedDate, inputtedNotes);

    travelLog.addPlace(newPlace);
    $(".output").show();
    $(".output").prepend("<li>" + newPlace.name  + "<button class='btn remove' type='button' name='button'>" + "Remove" + "</button>" + "</li>");

    $("li").click(function(){
      $(this).remove();
    });
  });
});

//Business logic
function TravelLog() {
  this.places = [];
  this.currentId = 0;
}

TravelLog.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places.push(place);
}

TravelLog.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function Places(name, location, landmarks, date, notes) {
  this.name = name,
  this.location = location,
  this.landmarks = landmarks,
  this.date = date,
  this.notes = notes
}

TravelLog.prototype.findPlace = function(id) {
  for (var i=0; i < this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id === id) {
        return this.places[i];
      }
    }
  };
  return false;
}

TravelLog.prototype.deletePlace = function(id) {
  for (var i = 0; i < this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id === id) {
        // delete this.places[i].id;
        delete this.places[i];
        return true;
      }
    }
  };
  return false;
}
