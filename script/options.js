var sects = ['heal', 'pray', 'sacrifice', 'exp', 'gold', 'hit', 'do_task', 'cancel_task', 'die', 'town', 'heil'];
var phrases = {heal : "Лечись", pray: "Молись", sacrifice : "Жертвуй", exp : "Опыт", gold : "Клад, золото", hit : "Бей",
                do_task : "Задание", cancel_task : "Отмени задание", die : "Умри", town : "Домой", heil : "Восклицания"};
var def;
var curr_sect;
var god_name;

function createSection(name, text, type){
    var $d = $('<div class="new_line"></div>');
    if (type == '') type = 'text';
    if (type != 'submit') {
        $d.append('<span class="l_capt">' + text + '</span>');
        $d.append($('<div class="field_content"></div>').append($('<input>').attr({id : name , name : name, type : type })));
    }else{
        $d.append($('<div id="options_'+name+'"></div>').append($('<input class="input_btn" type="submit">').attr({id : name , name : name, value : text })));
    }
    return $d;
}

function createWordForm(){
    return $('\
    <div id="godvilleUI_words" style="padding-top: 4em;">\
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
                <a id="l_heil">Восклицание</a>\
                <div id="opt_change_words">\
                    <div class="new_line">\
                        <label id="ta_name" class="l_capt"></label>\
                        <textarea id="ta_edit" name="heal" class="rounded_field"  rows="4" wrap="virtual;" style="width: 100%;"></textarea>\
                    </div>\
                </div>\
                <div class="new_line">\
                    <div id="heal_words">\
                        <input id = "submit2" class="input_btn" name="commit" type="submit" value="Сохранить">\
                        <input id = "cancel2" class="input_btn" name="cancel" type="button" value="Восстановить по умолчанию">\
                        <img align="middle" alt="Spinner" border="0" id="gui_word_progress"\
                             src="/images/spinner.gif"\
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
    var $opt = $('<div id="godvilleUI_options" style="padding-top: 4em;"></div>');
    var $opt_i = $('<div id="add_general"></div>');
    $opt_i.append(createSection('use_hero_name', 'Добавлять в глас имя героя', 'checkbox'));
    $opt_i.append(createSection('use_heil', 'Добавлять в глас восклицания', 'checkbox'));
    $opt_i.append(createSection('use_short', 'Короткие фразы для гласов', 'checkbox'));
    $opt_i.append(createSection('GodvilleUI_general', 'Применить', 'submit'));
    $opt_i.append('<img align="middle" alt="Spinner" border="0" id="gui_options_progress"\
                             src="/images/spinner.gif"\
                             style="vertical-align:bottom; display: none;">')
    $leg = $('<legend>GodvilleUI настройки</legend>');
    $opt.append($leg);
    $leg.wrap('<form id="add_options"><fieldset></fieldset></form>').after($opt_i);
    $('div#change_password_form').after(createWordForm()).after($opt);

    god_name = $('div#opt_change_profile div:first div:first').text();
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
    var $bt2 = $('form#add_options').submit(function(){ save_options(2); return false;});
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
    if (form == 1){
        $('img#gui_word_progress').show();
        var text = $('textarea#ta_edit').val();
        if (text == "") return;
        var t_list = text.split("\n"); var t_out = [];
        for (var i = 0; i < t_list.length; i++){
            if (t_list[i] != '') t_out.push(t_list[i]);
        }
        localStorage["GM_" + god_name + ":phrases_" + curr_sect] = t_out.join("||");
        $('img#gui_word_progress').fadeOut("slow");
        setText(curr_sect);
    }else{
        $('img#gui_options_progress').show();
        var hero_name_chk = $('input#use_hero_name').val() == 'on';
        var use_heil_chk = $('input#use_heil').val() == 'on';
        var use_short_chk = $('input#use_short').val() == 'on';
        localStorage["GM_" + god_name + ":useHeroName"] = hero_name_chk;
        localStorage["GM_" + god_name + ":useHeil"] = use_heil_chk;
        localStorage["GM_" + god_name + ":useShortPhrases"] = use_short_chk;
        $('img#gui_options_progress').fadeOut('slow');
    }
}

function setText(element_name){
    curr_sect = element_name;
    $('form#words input[type="submit"]').removeAttr('disabled');
    var $e = $('form#words fieldset a');
    $e.css({'text-decoration' : 'underline', 'color' : '#199BDC'});
    $e = $('form#words fieldset a#l_'+element_name)
    $e.css({'text-decoration' : 'none', 'color' : '#DA251D'});
    var $elem = $('textarea#ta_edit');
    var text_list = localStorage["GM_" + god_name + ":phrases_" + element_name];
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
    if (localStorage["GM_" + god_name + ":useHeroName"] == 'true'){
        $('input#use_hero_name').attr('checked', 'checked');
    }
    if (localStorage["GM_" + god_name + ":useHeil"] == 'true'){
       $('input#use_heil').attr('checked', 'checked');
    }
    if (localStorage["GM_" + god_name + ":useShortPhrases"] == 'true'){
       $('input#use_short').attr('checked', 'checked');
    }
}

setForm();
restore_options();
