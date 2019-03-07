
var giphyKey = "kv6Mw2Ll9SuxeytS70UyQpHGIsKzvZot";
var topics = ["Speed Racer", "The Flintstones", "The Jetsons", "Rocky and Bullwinkle"];
var gifData = [];
// Functions to be called after (document).ready.
function displayButtons () {
  $("#buttons").text("");
  for (var i = 0; i < topics.length; i++) {
    $("#buttons").append('<div class="container"><label><input type="button" class="btn btn-light" name="topics" value="' + topics[i] + '" onclick="clicked(' + i + ');" /> ' + '</label></div>');
  }
};
function displayGif(num) {
  for(var i = 0; i< 3; i++) {
    if(i != num) {
      var gifStillUrl = gifData[i].images.fixed_height_still.url;
      $("#imgGraph"+i).attr("src", gifStillUrl);
    }
  }
  var fullGif = gifData[num].images.fixed_height.url;
  $("#imgGraph"+num).attr("src", fullGif);
}
function clicked(id) {
  var searchToon = topics[id];
  var searchToonTrimmed = searchToon.trim().replace(/ /g, "+");
  var url_base = "https://api.giphy.com/v1/gifs/search?q=" + searchToonTrimmed + "+Cartoon&api_key=" + giphyKey + "&limit=3"
  $.ajax({
    url: url_base,
    method: "GET"
  }).then(function(response) {
    gifData = response.data;
    for(var i=0;i<3;i++) {
      var gifStillUrl = gifData[i].images.fixed_height_still.url;
      $("#imgGraph"+i).attr("src", gifStillUrl);
    }
  });
};
$(document).ready(function () {
  $("#submit").on("click", function() {
    var inputValue = $("#userInput").val();
    topics.push(inputValue);
    displayButtons ();
  });
  displayButtons ();
});

