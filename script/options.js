var sects = ['heal', 'pray', 'sacrifice', 'exp', 'gold', 'hit', 'do_task', 'cancel_task', 'die', 'town', 'heil'];
var phrases = {heal : "Лечись", pray: "Молись", sacrifice : "Жертвуй", exp : "Опыт", gold : "Клад, золото", hit : "Бей",
                do_task : "Задание", cancel_task : "Отмени задание", die : "Умри", town : "Домой", heil : "Восклицания"};
var def;
var curr_sect;

function createSection(name, text, type){
    var $out;
    if (type == '') type = 'text';
    if (type != 'submit'){
        $out = $('<span class="l_capt">' + text + '</span>');
        $out = $out.after($('<input>').attr({id : name , name : name, type : type }).wrap('<div class="field_content"></div>'));
    }else{
        $out = $('<input class="input_btn" type="submit">').attr({id : name , name : name, value : text }).wrap('<div id="options_'+name+'"></div>');
    }
    return $out.wrap('<div class="new_line"></div>');
}

function createWordForm(){
    return $('\
    <div id="godvilleUI_words">\
        <form id="words">\
            <fieldset>\
                <legend>Гласы</legend>\
                <a id="l_heal">Лечись</a>\
                <a id="l_pray">Молись</a>\
                <a id="l_sacrifice">Жертвуй</a>\
                <a id="l_exp">Опыт</a>\
                <a id="l_gold">Клад</a>\
                <a id="l_hit">Бей</a>\
                <a id="l_do_task">Задание</a>\
                <a id="l_cancel_task">Отменить задание</a>\
                <a id="l_die">Умри</a>\
                <a id="l_town">В город</a>\
                <div id="opt_change_words">\
                    <div class="new_line">\
                        <label id="ta_name" class="l_capt"></label>\
                        <textarea id="ta_edit" name="heal" class="rounded_field"  rows="4" wrap="virtual;"></textarea>\
                    </div>\
                </div>\
                <div class="new_line">\
                    <div id="heal_words">\
                        <input id = "submit2" class="input_btn" name="commit" type="submit" value="Сохранить">\
                        <input id = "cancel2" class="input_btn" name="cancel" type="button" value="Восстановить по умолчанию">\
                        <img align="middle" alt="Spinner" border="0" id="chword_msg"\
                             src="/images/spinner.gif?1277083719"\
                             style="vertical-align:bottom; display: none;">\
                    </div>\
                </div>\
            </fieldset>\
        </form>\
    </div>\
    ');
    }

function setForm(){
//    var $op_global = $('<div id="change_password_form" style="padding-top: 4em;"></div>')
    var $opt = createSection('use_hero_name', 'Добавлять в глас имя героя', 'checkbox');
    $opt = $opt.after(createSection('use_heil', 'Добавлять в глас восклицания', 'checkbox'));
    $opt = $opt.after(createSection('GodvilleUI_general', 'Применить', 'submit'));
    $opt = $opt.wrap('<div id="add_general"></div>');
    $opt = $opt.before('<legend>GodvilleUI настройки</legend>');
    $opt = $opt.wrap('<div id="godvilleUI_options"><form><fieldset></fieldset></form></div>');
    $('div#change_password_form').after($opt).after(createWordForm());
/*
<form action="/user/update_password" method="post" onsubmit="Element.show('chpwd_msg'); new Ajax.Request('/user/update_password', {asynchronous:true, evalScripts:true, onComplete:function(request){Element.hide('chpwd_msg')}, onSuccess:function(request){$('ch_pwd_form').down('form').reset();}, parameters:Form.serialize(this)}); return false;">
  <fieldset>
    <legend>Смена пароля</legend>
    <div id="pwd_change_profile">
      <div class="new_line">
        <span class="l_capt">Старый пароль</span>
        <div class="field_content"><input id="old_password" name="old_password" type="password"></div>
      </div>
      <div class="new_line">
        <span class="l_capt">Новый пароль</span>
        <div class="field_content"><input id="new_password" name="new_password" type="password"></div>
      </div>
      <div class="new_line">
        <span class="l_capt">Повтор нового пароля</span>
        <div class="field_content"><input id="new_password_c" name="new_password_c" type="password"></div>
      </div>
    </div>
    <div class="new_line">
      <div id="general_change">
        <input class="input_btn" name="commit" type="submit" value="Применить">
        <img align="middle" alt="Spinner" border="0" id="chpwd_msg" src="/images/spinner.gif?1277083719" style="vertical-align:bottom; display: none;">
      </div>
    </div>
  </fieldset>
</form>
	    </div>
	    */
//    $('div.field_content:has(input[type="checkbox"])').css('width', '19');
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