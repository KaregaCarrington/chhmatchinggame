// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery-ui
//= require jquery_ujs
//= require turbolinks
//= require_tree .


var score = 0;
var brandsArray = [ "Bizzle.jpg",
                    "Lavoisier.jpg",
                    "Zaydok.jpg",
                    "Rigz.jpg"
                    ]

var rappersArray = ["Lavoisier", "Rigz", "Zaydok", "Bizzle"]

function shuffle(array) {
  return array.sort(function(){
    return .5 - Math.random()
  });
}

$(document).ready(function(){


  shuffle(brandsArray);
  $.each(brandsArray, function (index, value) {

    var brandName = value.slice(0,-4)

    $("<div><img src=" + value + " /></div>")
    .appendTo("#brands")
    .draggable( {revert:true, scope:brandName} );
  })


  shuffle(rappersArray);
  $.each(rappersArray, function (index, value) {
    $("<div>" + value + " </div>")
    
    .appendTo("#rappers")
    .droppable({scope:value,

      drop:function(event, ui){
        $(ui.draggable).append($(this).text());
        score++;
        $(this).hide();

        if (score == rappersArray.length) {
          $("<div><p>Congrats!! Do You Want To Play again?</p></div>").dialog({
            modal:true,
            buttons:[{text:"Yes",
                      click:function(){
                        window.location.reload();
                      }},

                      {text:"No",
                      click:function(){
                        $(this).dialog("close");
                      }}]
          });
        }
      }});
  });


  $()



});
