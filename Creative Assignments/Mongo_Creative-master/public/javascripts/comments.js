String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

$(document).ready(function(){
  $("#postComment").click(function(){
      var myobj = {Name:$("#name").val(),Comment:$("#comment").val()};
      jobj = JSON.stringify(myobj);
      $("#json").text(jobj);
      var url = "comment";
    $.ajax({
    url:url,
    type: "POST",
    data: jobj,
    contentType: "application/json; charset=utf-8",
    success: function(data,textStatus) {
        $("#done").html(textStatus);
    }
    })
  });
  
     $("#getComments").click(function() {
         var query = $("#searchName").val();
         var url = "comment?q=" + query;
    $.getJSON(url, function(data) {
      console.log(data);
      var everything = "<ul>";
      for(var comment in data) {
        com = data[comment];
        var URLForString = com.Comment.splice(25, 0, "embed/");
        console.log("SearchForMe: " + URLForString)
        everything += "<li> Level of Beauty: " + com.Name + " -- Art Piece: " + '<img style="   border-style: groove; border-width: 15px; border-color: brown;" src="' + com.Comment + '"/>' + "</li>";
        // everything += "<li> Level of Humor: " + com.Name + '<a href="' + com.Comment + '">  See video ' + comment + ' here</a>';
        // everything += "<li> Level of Humor: " + com.Name + com.Comment + '</li>';
        // '<a href="' + com.Comment + '">  See video ' + comment + ' here</a>';
      }
      everything += "</ul>";
      $("#comments").html(everything);
    })
  })
  
  $("#deleteComments").click(function(){
      var url = "comment";
      $.ajax({
        url:url,
        type: "DELETE",
        contentType: "application/json; charset=utf-8",
        success: function(data,textStatus) {
            $("#done").html(textStatus);
    }
    })
  });
  
});



