CHAP1 = [
	label, "prelude",

	scene, {src:"black"},
	
	box, {pos:"center", back:"none"},
	text, {align:"center", value:"The loot group\npresents", effect:"fade", duration:3},
	box, {show:false},
	
	animation, [ "test",
		2, "dissolve",
		1, "translate 0 -100",
		0.5, "scale 1.25",
		0.5, "translate 0 50",
	],
	overlay, {src:"advmedia/title.png", effect:"test"},
	
	/*preload, ["demo/vina01.png", "demo/vina02.png", "demo/town03.mp3", "demo/town03.ogg", "demo/theend.mp4", "demo/theend.ogv"],*/
	label, "start",
	cform, [ "top_menu", true,
		button, {name:"New Game", x:360, y:300, base:"demo/button_base.png", hover:"demo/button_hover.png", click:"demo/button_click.png", link:[jump, "intro"], tip:"Start a new game"	},
		button, {name:"Continue", x:360, y:350, base:"demo/button_base.png", hover:"demo/button_hover.png", click:"demo/button_click.png", link:[jump, "restore"], tip:"Continue previous game" },
		button, {name:"Options", x:360, y:400, base:"demo/button_base.png", hover:"demo/button_hover.png", click:"demo/button_click.png", link:[jump, "demo_forms#config"], tip:"Set game options" },
	],
	jump, "start",
	
	label, "restore",
	cform, "close",
	checkpoint, "load",
	
	label, "intro",
	cform, "close",
	set, {a:[1,2,3],b:"hello world",$c:1, d:true, e:"random 0 100"},
	set, {b:null},

	overlay, {show:false, effect:"dissolve"},
	set, {_skip_text:false},	/* reserved variable for skipping read text */
	cform, [ "hud", false, 
		button, {name:"toggle_skip", x:675, y:351, base:"demo/skip_base.png", hover:"demo/skip_hover.png", click:"demo/skip_click.png", link:[set, {_skip_text:"!"}], showText:false, tip:"Toggle skip read text"},
		button, {name:"snap", x:675, y:393, base:"demo/snap_base.png", hover:"demo/snap_hover.png", click:"demo/snap_click.png", link:[jump, "demo_forms#screenshot"], showText:false, tip:"Take screenshot"},
		button, {name:"opt", x:675, y:435, base:"demo/opt_base.png", hover:"demo/opt_hover.png", click:"demo/opt_click.png", link:[jump, "demo_forms#config"], showText:false, tip:"Game options"},
		marquee, {name:"timer", x:630, y:10, w:80, h:20},
	],
	box, {pos:"full", back:"image"},
	text, {align:"left", value:"Once upon a time, in a small town known simply to the rest of the world \
as the Town, there lived a young girl known simply to the rest of the townsfolk as ..."},
	text, {append:true, value:"Well, it would be darn too obvious if we call her the Girl, wouldn't it?"},
	text, "Actually, her name is Vina* and she was just like most people. \n (*Editor's note: for VIsual Novel Assistant)",

	box, {pos:"bottom", back:"dim", show:false},
	audio, {bgm:"demo/town03"},
	scene, {src:"demo/bgtown01.jpg", effect:"dissolve nowait"},
	actor, {id:"Vina", sprite:["v-town", "demo/vina01.png"], avatar:["base","demo/vina_avatar.png"], effect:"dissolve"},
	text, "She looks pleasant but neither pretty nor ugly.",
	set, {Vina_level:"+2"},
	text, "She's got freckles and as clumsy as a toddler.",
	text, "She loves singing but her voice isn't that great.",
	text, "In other words, she's just an ordinary girl.",
	text, "And that had been her biggest problem.",
	text, {append:false, value:"She was, after all, the daughter of two extraordinary people."},
	
	"Vina", {effect:"scale 0.9 nowait"},
	checkpoint, "save",
	scene, {src:"demo/bgtown01.jpg", effect:"dissolve", objects:["demo/mom01.png", 45, 90]},
	text, "Vina's mother was the most beautiful maiden during her day. She had suitors from all seven Lands \
who showered her with the finest treasures. It was said that had she accepted the gifts, she'd have enough \
riches to feed the whole town for a hundred years.",
	scene, {src:"demo/bgtown01.jpg", effect:"dissolve", objects:["demo/mom01.png", 45, 90, "demo/dad01.png", 510, 90]},
	text, "Her father was a local hero, having saved the town a number of times from bandits. But it's his \
singing with a lute in his hands that maidens found irresistible. Many a woman fell faint at his feet just listening \
to his voice.",
	text, "When she was born, the town rejoiced greatly, having awaited the birth of the town's most special child \
in a long while.",
	text, {append:true, value:"Yet as she grew up, so did the town's dismay grew."},

	box, {show:false},
	scene, {src:"demo/bgtown01.jpg", effect:"dissolve nowait"},
	"Vina", {effect:"scale 1.0 nowait"},
	text, "For she appeared to be just an ordinary child.",
	text, "Cruel tongues started wagging, saying their family was cursed. Or that she really wasn't her parent's \
daughter. Only because she was ordinary.", 
	text, "And this has caused her great sadness.",
	
	box, {show:false},
	
	"Vina", {show:false, effect:"dissolve nowait"},
	scene, {src:"demo/bgforest01.jpg", effect:"fade"},
	audio, {bgs:"demo/rain01"},
	audio, {se:"demo/thunder01", delay:2},
	atmosphere, {rain:200, direction:75},
	text, "So one rainy evening, unable to bear it any longer, Vina left the Town.",
	checkpoint, "save",
	"Vina", {sprite:["v-forest", "demo/vina03.png"]},
	text, "With the night Moon as her guide, she went deep into the Forest, and never looked back.",
	box, {pos:"center", back:"none", show:false},
	atmosphere, {rain:"stop"},
	overlay, {src:"black", effect:"dissolve"},
	audio, {bgm:"town03", action:"stop"},
	audio, {se:"thunder01", action:"remove"},
	audio, {bgs:"rain01", action:"remove"},

	scene, {src:"demo/bgcity01.jpg"},
	"Vina", {sprite:["v-city", "demo/vina02.png"]},
	"Vina", {remove:"v-forest"},
	text, {append:false, value:"Six months later..."},
	box, {pos:"bottom", back:"dim", show:false},
	overlay, {show:false, effect:"fade"},
	audio, {bgs:"demo/streets01"},
	audio, {se:"demo/streets02", delay:7},
	text, "That's when I finally caught up with her in the City. (Editor's note: Aren't we using too much generic names \
here like Town, Forest, Moon, City?)",
	text, "Or rather, that's when she found me.",
	text, {append:true, value:"For I must have been looking the other way that I almost failed to see a car coming."},
	text, "Luckily, that caught her attention.",
	"Vina", {balloon:"Hey, I know you, don't I?"},
	text, "I told her that she does. And that I came on behalf of her mother, who has been worried sick since she disappeared.",
	"Vina", {balloon:"You didn't come all the way here just to tell me that, did you? Have you come to take me back?"},
	checkpoint, "save",
	menu, ["What should I tell her?",
		   "A. Yes, your parents want you back.", "label_yes",
		   "B. No, I just came to talk.", "label_no" ],

	label, "label_yes",
	"Vina", {balloon:"I miss them, but there's no way I'm coming back."},
	"Vina", {balloon:"Please tell them that I'm fine, but I just can't go back.", append:true},
	box, {show:false},
	"Vina", {show:false},
	audio, {se:"demo/streets03"},
	text, {append:false, value:"With that, she ran away from me. And though I tried to follow her, I quickly lost her \
in the crowd."},
	overlay, {src:"black", effect:"fade nowait"},
	audio, {bgs:"streets01", action:"stop"},
	text, "I looked for her over the next couple of months with no success. It seemed like it needs more than \
just words to heal a broken soul.",
	text, ".: Bad Ending :.",
	box, {show: false},
	jump, "end",
	
	label, "label_no",
	"Vina", "I believe you, but we can't talk here.",
	"Vina", {say:"Follow me, I live just around the corner from here.", append:true},
	box, {show:false},
	audio, {bgs:"streets01", action:"stop"},
	audio, {se:"streets02", action:"remove"},
	scene, {src:"demo/bgroom01.jpg", effect:"dissolve"},
	"Vina", {say:"Welcome to my room! It isn't much but the people letting me stay here have been really \
nice to me. Sure, I had to pay for rent, but I found a good job at a diner.", append:false},
	"Vina", "Oh, and I'm studying now. Would you believe that there's so many things to learn? \
I never thought there would be back when I was at the Town.",
	text, "I told her that I was glad she's doing very well.",
	audio, {bgm:"demo/slow01"},
	"Vina", "And how was... the Town?",
	text, "I told her everything that's happened since she left.",
	"Vina", "And... uhmm...",
	text, "Sensing she wanted to know about her parents, I told her they were fine, and that they understood, \
and are hopeful that one day, they'll see her again.",
	"Vina", "That's good to hear... So why are you here anyway? And how did you find me?",
	text, "I said that finding her was the easy part. Promising to her mother that I'll keep an eye on her, \
the way I always had, even if that meant leaving the Town forever, that was the hard part.",
	"Vina", "So you're going to be my bodyguard? I'm a big girl now, I can take care of myself.",
	text, "I said I knew that, but I can't forgive myself if something happened to her. I wouldn't be able to \
face her mother if I didn't look after her as I promised.",
	"Vina", "Alright fine. You can do your guard duty, but only when I say so. I need my \
privacy, you know... Wait, where will you stay? I don't know if you can stay here.",
	text, "I told her I can sleep in the streets, the way I've been doing these past months searching for her.",
	"Vina", "Oh no, I won't let you do that. Besides, you're the only piece \
of Town I have with me... I'll talk to my landlady, maybe she'll allow you to stay here.",
	text, "I told her I can sleep on the floor. And that I wouldn't be any trouble, she wouldn't even know I was \
there. I even promised I wouldn't peek when she's taking a bath.",
	"Vina", "Haha! You're funny. Come here! Since you and I are going to be together from now on, \
I might as well get to know you better.",
	"Vina", {sprite:["v-cat", "demo/vina04.png"]},
	text, "And that's how I came to be with Vina. And yes, that's me, the feline. I was her mother's familiar, \
now I'm hers. If you're wondering, yes, she can talk to animals. Talk about being ordinary, huh?",

	box, {pos:"center", back:"none", show:false},
	"Vina", {show:false, effect:"dissolve nowait"},
	overlay, {src:"black", effect:"dissolve"},

	box, {pos:"full", align:"center"},
	text, {value:"Story and Art\nlo'ner\nwith screen captures from various games\n\n\n \
Sounds\nRPGMakerXP RTP\nand various sources\n\n\n \
Scripting\nlo'ner\nwith additional reference scripts from\nPere Monfort Pamies (CanvasText)\n \
J. David Eisenberg (JS-Vine)\n\n\n \
Upcoming on VN-Canvas:\nMore features (e.g. themes)\nMore elements (e.g forms)\nMore effects and animations\n\n\n \
(Editor's note: Finally, a scrolling credit! Now that's what i'm talkin' about!)\n\n\n \
VN-Canvas Demo (c) 2012", 
	effect:"scroll"},
	
	box, {pos:"bottom", back:"dim", align:"left", show:false},
	overlay, {show:false, effect:"fade"},
	text, "Deep down, I'm hoping that one day, Vina will decide to return home. Nevertheless, Vina and I had \
some pretty amazing adventures together, which I might tell you someday.",
	text, "That is, if you can understand a cat.",
	text, ".: Good Ending :.",
	audio, {bgm:"slow01", action:"stop"},
	box, {show: false},
	overlay, {src:"black", effect:"fade"},

	label, "end",
	video, {src:"demo/theend"},
	cform, "close",
	set, {c:"+1", a:4},
	jump, "demo_chapter"
];

demo_forms = [
	label, "demo_forms",
	
	label, "config",
	form, [ "Options",
		fieldset, "left_controls",
		slider, {name:"Audio volume", min:0, max:1, step:0.05, bind:"volumeAudio", tip:"Adjust volume for music and sounds."},
		slider, {name:"Video volume", min:0, max:1, step:0.05, bind:"volumeVideo", tip:"Adjust volume for videos."},
		select, {name:"Theme", options:"themeList", bind:"activeTheme", tip:"Select theme"},
		fieldset, "right_controls",
		checkbox, {name:"Show avatar", bind:"actorShowAvatar", tip:"Show actor avatar on dialog box."},
		checkbox, {name:"Perspective", bind:"actorPerspective", tip:"Emulate depth effect on mouse move."},
		checkbox, {name:"Allow preload", bind:"gameAllowPreload", tip:"Allow background preloading of images."},
		checkbox, {name:"Allow macro", bind:"gameAllowMacro", tip:"Allow custom javascript to execute."},
		checkbox, {name:"Mature filter", bind:"gameMatureFilter", tip:"Filter mature content"},
		fieldset, "bottom_controls",
		submit, {name:"OK"},	
	],
	jump, "return",
	
	label, "screenshot",
	cform, "hide",
	screen, {snap:"png"},
	cform, "show",
	jump, "return",
];

// Sample actor stats 
Stats.level = {
	_value: [0, 10],
	_update: function (actor, stat) {
		/* message("level up"); */
	}
};
Stats.female = {
	_value: [true, false],
};
Stats.relationship = {
	_value: ["hate", "normal", "trust", "love"],
};