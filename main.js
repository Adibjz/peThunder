$(document).ready(function() {
    $("#petForm").submit(function(event) {
      event.preventDefault();
      var formData = new FormData(this);
      var petData = {};
      formData.forEach(function(value, key) {
        petData[key] = value;
      });
      var displayInfo = $("#displayInfo");
      displayInfo.empty(); // Clear previous content
      $.each(petData, function(key, value) {
        if (key === "picture") {
          displayInfo.append("<p><strong>" + key + ":</strong> <a href='" + value + "' target='_blank'><img src='" + value + "' alt='Pet Image' style='max-width: 300px;'></a></p>");
        } else {
          displayInfo.append("<p><strong>" + key + ":</strong> " + value + "</p>");
        }
      });
      $("input[type='text'], input[type='tel']").val("");
    });
  });