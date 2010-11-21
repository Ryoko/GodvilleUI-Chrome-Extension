﻿function getWords(){
   return {
	// Этот параметр показывает текущую версию файла
	// Меняется только при _структурных_ изменениях.
	// Например: добавление, удаление, переименование секций.
	// Добавление фраз -- НЕ структурное изменение
	"version" : 2,

	// Фразы
	"phrases" : {
		// Ключевые корни: лечис, зелёнка
		"heal" : [
			"Лечись прям сейчас!", "Лечись зелёнкой!", "Жуй лечебные корешки!", "Выдели время на лечение!",
			"Намажь раны зелёнкой!", "Вылечись до 100%", "Позови медбрата, тебе нужно лечение!",
            "Зови врачей, у них есть зелёнка!", "Ищи лечебные корешки!", "Пей зелёнку!", "Лечись корешками!",
            "Зелёнку пей, на голову лей!", "Выдави из корешков зелёнку!", "Наложи бинты с зелёнкой!", "Капай зелёнку в нос!",
			"Зелёнка и бинты -- товарищи твои.", "Лечи раны зелеными корешками!", "Головка вава, пей зеленку!"
		],

		// Ключевые корни: молись,
		"pray" : [
			"Молись!", "Помолись!", "Молись, преклони колени!", "Нужна молитва.",
			"Нужна прана, молись!", "Кто не молится — тот не ест.", "Помолился - весь день свободен!", "Поклоняйся, если хочешь быть здоров!",
            "Молитвы исцеляют душу!"
		],

		// Ключевые корни: жертва
		"sacrifice" : [
			"Мне нужна жертва!", "Жертвуй!", "Пожертвуй кого-нибудь или что-нибудь!",
			"Жертву давай!", "Жертвуй монстра!", "Пожертвуй ненужное!", "Пожертвуй хоть что-нибудь!"
		],

		// Ключевые корни: опыт
		"exp" : [
			"Набирайся опыта!",  "Учись!", "Набирайся знаний.", "Нужен опыт!", "Давай, ищи опыт.",
		],

		// Ключевые корни: золото клад
		"gold" : [
			"Копай клад.", "Ищи клад.", "Бери лопату и копай.", "Нужен клад.", "Ищи клад, копай лопатой!",
            "Копай золото вот тут, под деревом!", "Выкопай клад!", "Нужно золото, копай!", "Лопату в руки и копать!",
            "Ищи золотую руду!", "Копай метро!"
		],

		// Работает: бей, ударь, ударов
		// Не работает: бить, удар
		"hit" : [
			"Бей противника два раза!", "Ударь два раза.", "Ударь без очереди!", "Бей с оттягом!",
			"Ударь от всей души!", "Бей не жалей!", "Ударь противника прямо в глаз!",
			"Бей по слабым местам!", "Не жалей ударов!", "Избей противника до беспамятства!", "Не жди очереди, бей!"
		],

		"do_task" : [
			"Выполняй задание!", "Делай квест!", "Делай задание.", "Выполни квест",
			"Квест в первую очередь"
		],

		"cancel_task" : [
			"Отмени задание!", "Останови квест"
		],

		"die" : [
			"умри",
		],

		"town" : [
			"Возвращайся в город!", "Иди обратно в город.", "Иди назад.", "Обратно в город!"
		],

		// Начало для фраз-вопросиков
		"inspect_prefix" : [
			"исследуй", "осмотри", "рассмотри"
		],
        	// префиксы во имя
        	"heil" : [
            		"во имя всевышней", "ради великой меня", "ибо эбо"
        	]

	},

	"items" : {

		// Лечащие вещи. На них не будет вопросиков
		// Источник: http://wiki.godville.net/index.php/Лечебные_трофеи
		//           + немного своих, которые увидел по ходу игры
		"heal" : [
			"крем после битья", "мензурку с раствором йода", "набор юного хирурга",
			"пузырёк с надписью «Выпей меня»", "пузырёк с надписью «Съешь меня»",
			"пузырёк витамина С++", "таблеточное месиво", "трофейный стимпак",
			"флакон антисептика", "флягу с лечащим пойлом", "фляжку живой воды",
			"эссенцию здоровья",
			// Не было на wiki:
			"пузырёк витамина С++", "канистру амброзии", "горшочек с йодом",
			"плитку прессованной зелёнки", "озеленитель полоски здоровья",
			"капельницу со святой водой", "эликсир здоровья с мякотью",
			"капли датского короля"
		],
		"full head" : [
			"оттопыриватель чакр", "мешочек энергии дзынь", "сглаживатель биополя"
		],
		"transformer" : [
			"философский камень", "алхимический превращатель", "трансмутирующая установка"
		],
		"good box" : [
			"подарок судьбы", "коробок с ленточкой"
		],
		"black box" : [
			"ящик пандоры", "чёрный ящик", "коробок с вопросиком"
		]
	},

	"log" : {
		// Стандартное начало боя с сильным монстром
		// Источник: http://godville.net/forums/show_topic/792
		"strong_enemy_intro" : [
			"направляется ко мне, засучивая рукава и приговаривая",
			"вдруг шлёпнулся на задницу, свалившись с ближайшего дерева",
			"был сброшен прямо передо мной откуда-то сверху. Это что за новости?",
			"действительно интересную вещь. Дело в том, что… Чёрт!",
			"Согласно Энциклобогии, хозяин этой тени",
			"еле тебя нашёл… Отведай же силушки богатырской!",
			"Наконец-то я тебя встретила. Лови мстю за прошлый раз",
			"вдруг выскочил из леса с криком",
			"Однако мой меткий пинок в лоб отбил у него желание разглагольствовать.",
			"грызёт землю и пускает пену изо рта. Пойду поздороваюсь.",
			"Чесать мои пятки титановой щёткой! Это ж",
			"Ты не доживёшь до завтрашнего дня.",
			"плюхнулся в сугроб, встал и притворился снеговиком. Меня не проведёшь, дьявольское отродье!",
			"помоги скукожить этого гада!",
			"идёт ко мне, широко улыбаясь и приговаривая:",
			"что ему очень нравится мой девиз, и он намерен присвоить его себе. К оружию!",
			"Из-под куста высунулся",
			"Стала было зевать, смотрю",
			"Говорят, эти твари суровы в обороне.",
			"грозно сверкает глазами и несётся прямо ко мне!",
			"Особо опасный",
			"Разрази меня кроты!",
			"Подбираюсь ползком.",
		],
	}

};
};