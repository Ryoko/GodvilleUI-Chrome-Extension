var sects = ['heal', 'pray', 'sacrifice', 'exp', 'gold', 'hit', 'do_task', 'cancel_task', 'die', 'town', 'heil'];
var def;

function setForm(){
    for (var i = 0; i < sects.length; i++){
        var t = sects[i];
        var $el = $('span#l_'+t);
        $el.click(function(){setText(t)})
    }
    var $bt1 = $('form#words');
    var $bt2 = $('form#main_set');
    $bt1.submit(function(){ save_options(1); });
    $bt2.submit(function(){ save_options(2); });
}

function save_options(form) {

    for (var i = 0; i < sects.length; i++){
        var txt = getText(sects[i]).split("\n");
        localStorage[sects[i]] = txt.join("||");
    }


  // Update status to let user know options were saved.
/*  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);*/
}

function setText(element_name){
    var $elem = $('textarea#ta_edit');
    var text = localStorage[element_name].split("||");
    if (!text || text.length == 0 || text[0] == "")
        text = def['phrases'][element_name];
    $elem.attr('rows', text.length);
    $elem.text(text.join("\n"));
    $('label#ta_name').text(element_name);
}

function getText(element_name){
    var $elem = $('textarea#' + element_name);
    return $elem.val();
}

// Restores select box state to saved value from localStorage.
function restore_options() {
    def = getWords();

    for (var i = 0; i < sects.length; i++){
        setText(sects[i]);
    }
//  var favorite = localStorage["favorite_color"];
}

$(function(){
    setForm();
    restore_options();
});