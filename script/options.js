var sects = ['heal', 'pray', 'sacrifice', 'exp', 'gold', 'hit', 'do_task', 'cancel_task', 'die', 'town', 'heil'];
var def;
var curr_sect;

function setForm(){
    $('div.field_content:has(input[type="checkbox"])').css('width', '19');
    for (var i = 0; i < sects.length; i++){
        var t = sects[i];
        var $el = $('a#l_'+t).attr('href', '#');
        addOnClick($el, t);
    }
    var $bt1 = $('form#words').submit(function(){ save_options(1); return false;});
    $('form#words input[type="submit"]').attr('disabled', 'disabled');
    var $bt2 = $('form#main_set').submit(function(){ save_options(2); return false;});
    var $bt3 = $('form#words input[type="button"]').click(function(){ reset_options(1); return false;});
//    var $bt4 = $('form#main_set').click(function(){ reset_options(2); });
}

function addOnClick($el, text){
    $el.click(function(e){
        setText(text);
        return false;
    });
}
function reset_options(form) {
    var $elem = $('textarea#ta_edit');
    var text = def['phrases'][curr_sect];
    $elem.attr('rows', text.length);
    $elem.text(text.join("\n"));
}

function save_options(form) {
    var text = $('textarea#ta_edit').val();
    if (text == "") return;
    var t_list = text.split("\n");
    localStorage[curr_sect] = t_list.join("||");

  // Update status to let user know options were saved.
/*  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);*/
}

function setText(element_name){
    curr_sect = element_name;
    $('form#words input[type="submit"]').removeAttr('disabled');
    var $e = $('form#words fieldset a');
    $e.css({'text-decoration' : 'underline', 'color' : '#199BDC'});
    $e = $('form#words fieldset a#l_'+element_name)
    $e.css({'text-decoration' : 'none', 'color' : '#DA251D'});
    var $elem = $('textarea#ta_edit');
    var text_list = localStorage[element_name];
    var text = (text_list && text_list != "") ? text_list.split("||") : def['phrases'][element_name];
    $elem.attr('rows', text.length);
    $elem.text(text.join("\n"));
//    $('label#ta_name').text(element_name);
}

function getText(element_name){
    var $elem = $('textarea#' + element_name);
    return $elem.val();
}

// Restores select box state to saved value from localStorage.
function restore_options() {
    def = getWords();

//    for (var i = 0; i < sects.length; i++){
//        setText(sects[i]);
//    }
//  var favorite = localStorage["favorite_color"];
}

$(function(){
    setForm();
    restore_options();
});