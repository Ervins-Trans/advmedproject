///////////////////////////////////////////////////////////////////////////////
//  This is the DEMO for RPG Mod Pack of VN-CANVAS                           //
//  This works in conjunction with vncanvas-rpgmod-x.x. All class structures //
//  are defined and must be consistent with those in the core script.        //
//                                                                           //
//  While the base rpg core script tries to be as user-interface agnostic as //
//  possible, an rpg needs to have user interaction in the form of forms or  //
//  dialog boxes (as compared to a pure VN with only click-select actions).  //
//  Hence, these forms will be added here for the purposes of the demo. As   //
//  usual, it is recommended that these forms be in a separate file just to  //
//  be organized. :)                                                         //
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
//  !! RPG Story script here !!                                              //
///////////////////////////////////////////////////////////////////////////////
demo_rpg = [
	label, "demo_rpg",
	macro, "rpg_init",
	
	box, {pos:"center", back:"none"},
	//text, {align:"center", value:"VN-CANVAS RPG Mod Demo", effect:"fade", duration:3},
	box, {show:false, back:"dim"},

	cform, [ "HUD", false, 
		cfelement, {type:"alertBox", name:"aBox", x:180, y:10, w:360, h:40},
		button, {name:"stats", x:675, y:10, base:"demo/skip_base.png", hover:"demo/skip_hover.png", click:"demo/skip_click.png", link:[jump, "demo_rpg_statform#show_stats"], showText:false, tip:"Show stats"},
	],
	
	scene, {src:"demo/bgtown01.jpg", effect:"dissolve nowait"},
	actor, {id:"Hero", sprite:["hero", "demo/dad01.png"], avatar:["base", "demo/dad_avatar.png"], effect:"dissolve", z_order:5},
	actor, {id:"Heroine", sprite:["heroine", "demo/mom01.png"], avatar:["base", "demo/mom_avatar.png"], effect:"dissolve"},
	text, {align:"center", value:"This is the RPG mod pack for vn-canvas."},
	label, "label_no",
	text, {align:"left", value:"For starters, let's check the character stats window using the top-right button"},
	menu, ["Did you check the character stats window?",
		   "A. Yes, let's continue.", "label_yes",
		   "B. Not yet.", "label_no" ],
	label, "label_yes",
	menu, ["Good, now let's try adding 100 experience to:",
		   "A. Hero", {Hero_exp:"+100"},
		   "B. Heroine", {Heroine_exp:"+100"}],
	text, "Now check the actor stats window again.",
	menu, ["Wanna try that again?",
		   "A. Yes", "label_yes",
		   "B. No", "label_done"],
	label, "label_done",
	text, "Thank you for trying out the demo.",
	text, "Be sure to check out demo-rpg.js to see how this is done.",
	text, "More to come: items, equipment, skills, quests, and of course, battle.",
];


///////////////////////////////////////////////////////////////////////////////
//  !! RPG Forms here !!                                                     //
///////////////////////////////////////////////////////////////////////////////
//  This is the form that displays the actor stats. It uses buttons and a custom
//  cform element to display actor avatars on a panel.
demo_rpg_statform = [
	label, "demo_rpg_statform",
	
	label, "show_stats",
	set, {_rpg_actor_select:0},
	cform, "hide",			// hide show_stats button
	box, {show:false},		// hide box if shown
	overlay, {src:"rgba(0,0,0,0.75)", effect:"dissolve"},
	label, "show_stats_window",
	cform, ["stats_window", true,
		button, {name:"Actor Stats", x:80, y:20, w:120, h:40, base:"transparent", align:"left"},
		cfelement, {type:"actorPanel", name:"Panel", x:20, y:0},
		button, {name:"Name", x:80, y:60, w:360, h:40, base:"transparent", align:"left"},
		button, {name:"Class", x:80, y:80, w:360, h:40, base:"transparent", align:"left"},
		button, {name:"Level", x:80, y:100, w:360, h:40, base:"transparent", align:"left"},
		button, {name:"Experience", x:80, y:120, w:360, h:40, base:"transparent", align:"left"},
		button, {name:"HP", x:80, y:160, w:360, h:40, base:"transparent", align:"left"},
		button, {name:"SP", x:80, y:180, w:360, h:40, base:"transparent", align:"left"},
		button, {name:"ATK", x:80, y:200, w:360, h:40, base:"transparent", align:"left"},
		button, {name:"DEF", x:80, y:220, w:360, h:40, base:"transparent", align:"left"},
		button, {name:"AGI", x:80, y:240, w:360, h:40, base:"transparent", align:"left"},
		button, {name:"Physical", x:80, y:280, w:360, h:40, base:"transparent", align:"left"},
		button, {name:"Magical", x:80, y:300, w:360, h:40, base:"transparent", align:"left"},
		button, {name:"Elemental", x:80, y:320, w:360, h:40, base:"transparent", align:"left"},
		
		button, {name:"Equipment", x:360, y:20, w:90, h:40, base:"transparent", align:"left",
				 hover:"red", click:"orange", link:[jump, "$show_equipment"]},
		button, {name:"Weapon", x:360, y:60, w:360, h:40, base:"transparent", align:"left"},
		button, {name:"Shield", x:360, y:80, w:360, h:40, base:"transparent", align:"left"},
		button, {name:"Head", x:360, y:100, w:360, h:40, base:"transparent", align:"left"},
		button, {name:"Body", x:360, y:120, w:360, h:40, base:"transparent", align:"left"},
		button, {name:"Accessory", x:360, y:140, w:360, h:40, base:"transparent", align:"left"},

		button, {name:"next", x:675, y:435, link:[jump, "$hide_stats"], showText:false, tip:"Continue",
				 base:"demo/next_base.png", hover:"demo/next_hover.png", click:"demo/next_click.png"},
	],
	jump, "$show_stats_window",
	
	label, "show_equipment",
	cform, "hide",
	label, "show_equipment_window",
	cform, ["equipment_window", true,
		button, {name:"Actor Equipment", x:80, y:20, w:140, h:40, base:"transparent", align:"left"},
		button, {name:"Weapon", x:80, y:60, w:360, h:40, base:"transparent", align:"left"},
		button, {name:"Shield", x:80, y:100, w:360, h:40, base:"transparent", align:"left"},
		button, {name:"Head", x:80, y:140, w:360, h:40, base:"transparent", align:"left"},
		button, {name:"Body", x:80, y:180, w:360, h:40, base:"transparent", align:"left"},
		button, {name:"Accessory", x:80, y:220, w:360, h:40, base:"transparent", align:"left"},
		
		button, {name:"next", x:675, y:435, link:[jump, "$hide_equipment"], showText:false, tip:"Back",
				 base:"demo/next_base.png", hover:"demo/next_hover.png", click:"demo/next_click.png"},
	],
	jump, "$show_equipment_window",
	label, "hide_equipment",
	cform, "close",			// hide equipment window
	cform, "show",			// show back show_stats window
	
	label, "hide_stats",
	cform, "close",
	overlay, {show:false},
	cform, "show",			// show back show_stats button
	jump, "return",
];

//  This is the alert box, which displays messages at the top of the screen
//  for 3 seconds. This was instantiated on the HUD.
CformElements.alertBox = {
  _init: function(obj, param) {
	var rect = new Rect(param.x, param.y, param.w, param.h);
	var sprites = ["transparent", "rgba(0,0,0,0.75)"];	// hidden, shown
	obj.Create(param.name, rect, sprites);
	obj.showText = false;
	//if (param.align) obj.align = param.align;
  },
  _update: function(obj, elapsed) {
	if ((!obj.aTimerOn) && (obj.showText)) {
		obj.aTimer = setTimeout(function() {
			obj.redraw = true;
			obj.text = "";
			obj.showText = false;
			if (obj.visible) obj.aTimerOn = false;
		}, 3000);	// show dialog for 3 sec
		obj.aTimerOn = true;
	}  
  },
  _draw: function(obj) {
	obj.DrawImageOrFill(obj.showText?obj.sprites[1]:obj.sprites[0]);
  },
};

//  This is the custom actor panel display. It dynamically adds clickable
//  buttons according to active actors, and updates the stats display
//  depending on which actor was selected.
CformElements.actorPanel = {
  _init: function(obj, param) {
	var frames = ["demo/rpgback.png"];
	var activeList = RPG.methods.getActive();
	for (var i in activeList)
		frames.push(activeList[i].avatars[0].src)
	// add active actors to frames
	obj.Create(param.name, 
			   {x:param.x, y:param.y, w:param.w, h:param.h},
			   frames);
	obj.showText = false;
	obj.inputFocus = true;
	obj.selected = -1;
	
	// dynamically add actor links
	for (var i in activeList) {
		var bt = new ActiveImage();
		var param = {name:activeList[i].id, 
					 x:20, y:60+32*i, w:40, h:40,
					 showText:false, base:"transparent",
					 link:[set, {_rpg_actor_select:i}]};
		CformElements['button']['_init'](bt, param);
		Stage.layers[4].push(bt);
		Stage.layers[4][Stage.layers[4].length-1].group = "stats_window";
		bt = null;
	}		
  },
  _update: function(obj, elapsed) {
    // Update stats display depending on actor thumbnail selected
	var current_actor = Helper.getValue("_rpg_actor_select");
	if (obj.selected != current_actor) {
		// update displayed stats one at a time
		var actor = RPG.methods.getActorFromIndex(current_actor);
		this._displayAttr("Name", actor.id);
		this._displayAttr("Class", actor.stats.class.name);
		this._displayAttr("Level", actor.stats.level);
		this._displayAttr("Experience", actor.stats.exp+" / "+actor.stats.class.cls_exp);
		this._displayAttr("HP", actor.stats.battle.cls_hp+" / "+actor.stats.class.cls_hp);
		this._displayAttr("SP", actor.stats.battle.cls_sp+" / "+actor.stats.class.cls_sp);
		this._displayAttr("ATK", actor.stats.battle.cls_atk+" / "+actor.stats.class.cls_atk);
		this._displayAttr("DEF", actor.stats.battle.cls_def+" / "+actor.stats.class.cls_def);
		this._displayAttr("AGI", actor.stats.battle.cls_agi+" / "+actor.stats.class.cls_agi);
		this._displayAttr("Physical", this._classifyAttr(actor.stats.battle.res_phy));
		this._displayAttr("Magical", this._classifyAttr(actor.stats.battle.res_magic));
		this._displayAttr("Elemental", this._classifyAttr(actor.stats.battle.res_elem));
		
		this._displayAttr("Weapon", RPG.Equipment[actor.stats.eqp[0]].name);
		this._displayAttr("Shield", RPG.Equipment[actor.stats.eqp[1]].name);
		this._displayAttr("Head", RPG.Equipment[actor.stats.eqp[2]].name);
		this._displayAttr("Body", RPG.Equipment[actor.stats.eqp[3]].name);
		this._displayAttr("Accessory", RPG.Equipment[actor.stats.eqp[4]].name);

		obj.selected = current_actor;
		this.redraw = true;
	}
  },
  // two custom functions for attribute display
  _displayAttr: function(ctrl, attr) { 
	for (var i in Stage.layers[4]) {
		if ((Stage.layers[4][i].group == "stats_window") && (Stage.layers[4][i].id==ctrl)) {
			Stage.layers[4][i].text = ctrl+" : "+attr;
			Stage.layers[4][i].redraw = true;
			break;
		}
	}
  },
  _classifyAttr: function(attr) {
	if (attr > 75) return "Extreme";	// Immune
	if (attr > 50) return "Strong";		// Resist
	if (attr > 25) return "Normal";		// Normal
	return "Weak";						// Weak
  },
  _draw: function(obj) {
    // Place draw code here
	for (var i in obj.sprites) {
		if (i==0)
			obj.DrawImageOrFill(obj.sprites[i]);
		else {
			var ht = obj.sprites[i].height * (obj.rect.w-4)/obj.sprites[i].width;
			obj.context.drawImage(obj.sprites[i], 4, 20+i*(ht+2), obj.rect.w-8, ht);
			if (Helper.getValue("_rpg_actor_select") != i-1) {
				// create a dim box over unselected image
				obj.context.save();
				obj.context.globalAlpha = 0.5;
				obj.context.fillStyle = "black";
				obj.context.fillRect(4, 20+i*(ht+2), obj.rect.w-8, ht);
				obj.context.restore();
			}
		}
	}
  },
};

// This is the custom equipment panel. It shows the equipment for current actor,
// and allows selection of available/usable equipment. This is tied to current
// inventory, which is composed of items and equipment
CformElements.equipmentPanel = {
  _init: function(obj, param) {
  },
  _update: function(obj, elapsed) {
  },
  _draw: function(obj) {
  },
};

///////////////////////////////////////////////////////////////////////////////
//  !! Optional macro/callbacks !!                                           //
///////////////////////////////////////////////////////////////////////////////
RPG.callback = {
	// callback functions are called by rpg core script, usually game dependent,
	// so that's why it's here. However, these are completely optional and if
	// it doesn't exist, will not be called
	showMsg: function(msg) {
		// find alert box
		for (var i in Stage.layers[4]) {
			if ((Stage.layers[4][i].group == "HUD") && (Stage.layers[4][i].id=="aBox")) {
				Stage.layers[4][i].text = msg;
				Stage.layers[4][i].showText = true;
				Stage.layers[4][i].redraw = true;
				break;
			}
		}
	},
};

function rpg_init() {
	// didn't want to create a new config file, so just modified it here
	Helper.setValue("actorPerspective", false);
	Config.activeTheme.formFontStyle = "bold 16px M1m #C0C0C0";
	Helper.configUpdate("activeTheme");
	// as a cheat to preload fontface, an invisible <div> was added in demo-rpg.html
}
