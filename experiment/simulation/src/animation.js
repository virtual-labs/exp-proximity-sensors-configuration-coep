var cntConnectionArrayJson=[];
var cntConnectionMasterJson={};
var animConfig=0;

function animation(materialSelect,sensorSelect,configConnectionSelect,voltageSelect)
{
	$("#canvas-div").html('');	
    $("#centerText1").html('ANIMATION');
    $("#centerText2").html('CONFIGURATION');
    $("#submitAnimationConfig").html("SUBMIT");	
    $("#centerText2").html("CONFIGURATION");
	
$('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w =900;
	var h = 600;

	var width = $(window).width();

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}
	
//var paper = new Raphael(document.getElementById('canvas'),1000,700);
var x=210;
var y=20;
var angle=360;
target=parseInt(materialSelect);
//console.log("target = "+target);
sensor=parseInt(sensorSelect);
//console.log("sensor = "+sensor);

config_selection=1;
configConnectionSelect=parseInt(configConnectionSelect);
//console.log("Config Connection Select Animation = "+configConnectionSelect);
volt=parseInt(voltageSelect);
//console.log("volt = "+volt);

//var sensor=1;
//var target=5;
//var senceDistance=paper.image("images/led.png",x+99,y+202, 15, 10);
//var l=paper.path("M"+(x+70)+" "+(y+200.5)+" l 40 4 l 0 6 l -40 4 ").attr({'stroke':'red'});
//var AnimationPNP=paper.image("images/PNP_Animation_final.png",x-350,y+85, 300,350);
var led,ledBlink;
var outputLed_OFF,outputLed_ON;
var b,p,g,c,m,w,pot;
//	$("#submitAnimationConfig").prop('hidden',false);
	$("#submitAnimationConfig").prop('disabled',false);
//		$("#errorPanel").prop("hidden",true);
//		$("#checkConfg").prop('hidden',true);
		$("#material").prop('disabled',false);
		$("#sensorType").prop('disabled',false);
		$("#configConnection").prop('disabled',true);
		$("#voltage").prop('disabled',true);		
		$("#submitconfig").prop('disabled',true);
		$("#nextLevelForAnimation").prop('hidden',false);
//$("#submitAnimationConfig").click(function() {		
//		animation(materialSelect,sensorSelect,configConnectionSelect,voltageSelect);	
//		console.log("Material Type= "+target);
//		console.log("sensor = "+sensor);
//		console.log("config_selection = "+config_selection);
//		console.log("volt = "+volt);
//	});

if(target==1){
	animConfig++;
	b=paper.image("images/btl.png",x+90,y-65, 600, 600);
}else if(target==2){	
	animConfig++;
	p=paper.image("images/paperbox.png",x+315,y+70, 300, 310);
}else if(target==3){
	animConfig++;	
	g= paper.image("images/glass.png",x+205,y+50, 360, 350);
}else if(target==4){
	animConfig++;	
	c=paper.image("images/cloth.png",x+285,y+50, 330, 330);
}else if(target==5){
	animConfig++;
	m=paper.image("images/metal_img.png",x+185,y+30, 400, 400);
}else if(target==6){
	animConfig++;
	w=paper.image("images/wood.png",x+305,y+100, 200, 300);
}else if(target==7){
	animConfig++;
	pot=paper.image("images/caramicPreview.png",x+270,y+50, 300, 350);
}else{
//	setTimeout(function(){ 
//		alert("Select any object"); 
//		},1000);
}

if(sensor==1){
	//inductive
//ledBlink=paper.image("images/ledBlink.png",x+45,y+214, 13, 13).transform( 'r10');
//var plus_sign= paper.text((x-190), (y+175),'+').attr({'stroke-width':10,'font-size':28});
//var plus_connecton=paper.path("M "+(x+25)+" "+(y+230)+ "l -70 -40  l -150 0").attr({'stroke-width':3,'stroke':'#80604d '});
	if(configConnectionSelect==1){
		var sensor1=paper.image("images/Inductive_psensor.png",x+20,y+190, 250, 97);

		ledBlink=paper.image("images/ledBlink.png",x+45,y+214, 13, 13).transform( 'r10');
		outputLed_ON=paper.image("images/led_ON_final.png",x-158,y+201.5, 30, 30);
		var plus_sign= paper.text((x-190), (y+175),'+').attr({'stroke-width':10,'font-size':28});
		var plus_connecton=paper.path("M "+(x+25)+" "+(y+230)+ "l -70 -40  l -150 0").attr({'stroke-width':3,'stroke':'#80604d '});
		var load_opened=paper.path("M "+(x+25)+" "+(y+231)+ "l -185 0  l 0 57").attr({'stroke-width':3,'stroke':'#000'});
		var load_closed=paper.path("M "+(x+25)+" "+(y+235)+ "l -105 0  l 0 53").attr({'stroke-width':3,'stroke':'#808080'});
		var outputText=paper.text((x-70), (y+218),'(Control output)').attr({'font-size':17});
		var minus_sign= paper.text((x-196), (y+295),'-').attr({'stroke-width':15,'font-size':34});
		var minus_connecton=paper.path("M "+(x+22)+" "+(y+237)+ "l -70 50 l -150 0 ").attr({'stroke-width':3,'stroke':'#00A1C9'});
		
		
	}else{
	 	var plus_sign= paper.text((x-180), (y+183),'+').attr({'stroke-width':10,'font-size':28});
		var plus_connecton=paper.path("M "+(x+20)+" "+(y+237)+ "l -70 -45 l -140 0").attr({'stroke-width':3,'stroke':'#80604d '});
		var load_opened=paper.path("M "+(x+25)+" "+(y+237)+ "l -105 0  l 0 -45").attr({'stroke-width':3,'stroke':'#808080'});
		var load_closed=paper.path("M "+(x+25)+" "+(y+240)+ "l -165 0  l 0 -48").attr({'stroke-width':3,'stroke':'#000'});
		var outputText=paper.text((x-100), (y+250),'(Control output)').attr({'font-size':17});
		
		var minus_sign= paper.text((x-180), (y+290),'-').attr({'stroke-width':15,'font-size':34});
		var minus_connecton=paper.path("M "+(x+22)+" "+(y+240)+ "l -70 45 l -140 0 ").attr({'stroke-width':3,'stroke':'#00A1C9'});
//		console.log("configConnectionSelect......sensor1.......else");
		var sensor1=paper.image("images/Inductive_psensor.png",x+18,y+201, 250, 75).transform( 'r-2');
		ledBlink=paper.image("images/ledBlink.png",x+45,y+225, 9, 7).transform( 'r10');
		outputLed_ON=paper.image("images/led_ON_final.png",x-138,y+210.5, 30, 30);
	}
		
}else{
//capacitive
var sensor2=paper.image(" images/sensor.png",x+20,y+198.5, 230, 75).transform( 'r-0.5');	
		if(configConnectionSelect==1){
			ledBlink=paper.image("images/ledBlink.png",x+65,y+217.5, 9, 7).transform( 'r10');
	 	 	outputLed_ON=paper.image("images/led_ON_final.png",x-155,y+207, 30, 30);
			var plus_sign= paper.text((x-180), (y+185),'+').attr({'stroke-width':10,'font-size':28});
			var plus_connecton=paper.path("M "+(x+25)+" "+(y+237)+ "l -70 -45 l -140 0").attr({'stroke-width':3,'stroke':'#80604d '});
			var load_opened=paper.path("M "+(x+30)+" "+(y+236.5)+ "l -197 0  l 0 52").attr({'stroke-width':3,'stroke':'#000'});
			var load_closed=paper.path("M "+(x+30)+" "+(y+240)+ "l -145 0  l 0 49").attr({'stroke-width':3,'stroke':'#808080'});
			var outputText=paper.text((x-67), (y+225),'(Control output)').attr({'font-size':17});
			var minus_sign= paper.text((x-180), (y+300),'-').attr({'stroke-width':15,'font-size':34});
			var minus_connecton=paper.path("M "+(x+22)+" "+(y+243)+ "l -70 45 l -140 0 ").attr({'stroke-width':3,'stroke':'#00A1C9'});
			
				
		}else{
			ledBlink=paper.image("images/ledBlink.png",x+65,y+217.5, 9, 7).transform( 'r10');
			outputLed_ON=paper.image("images/led_ON_final.png",x-135,y+210, 30, 30);	
			var plus_sign= paper.text((x-170), (y+185),'+').attr({'stroke-width':10,'font-size':28});
			var plus_connecton=paper.path("M "+(x+25)+" "+(y+237)+ "l -70 -40  l -130 0").attr({'stroke-width':3,'stroke':'#80604d '});
			var load_opened=paper.path("M "+(x+30)+" "+(y+240)+ "l -170 0  l 0 -42").attr({'stroke-width':3,'stroke':'#000'});
			var load_closed=paper.path("M "+(x+30)+" "+(y+236.5)+ "l -105 0  l 0 -40").attr({'stroke-width':3,'stroke':'#808080'});
			var outputText=paper.text((x-82), (y+250),'(Control output)').attr({'font-size':17});
			var minus_sign= paper.text((x-170), (y+300),'-').attr({'stroke-width':15,'font-size':34});
			var minus_connecton=paper.path("M "+(x+22)+" "+(y+243)+ "l -70 50 l -130 0 ").attr({'stroke-width':3,'stroke':'#00A1C9'});
			

		}

}


var sence_waves=paper.image("images/wave1.png",x+235,y+190, 90,90);
keepRotating = Raphael.animation({'transform': 'r'+(angle)+ ', '+(x+282)+', '+(y+234)+' '}, 6000 ).repeat( 'Infinity' );	
			    sence_waves.animate(keepRotating);


var max=paper.image("images/max.png",x+300,y+422, 250, 95);
var min=paper.image("images/min.png",x+60,y+422, 250, 88);

max.click(function(){
if(target==1){
	b.animate({transform: ['t',80,0]}, 1000); 	
}else if(target==2){
	p.animate({transform: ['t',80,0]}, 1000);
}else if(target==3){
	g.animate({transform: ['t',80,0]}, 1000);
}else if(target==4){
	c.animate({transform: ['t',80,0]}, 1000);
}else if(target==5){
	m.animate({transform: ['t',80,0]},1000);
}else if(target==6){
	w.animate({transform: ['t',80,0]}, 1000);
}else if(target==7){
	pot.animate({transform: ['t',80,0]}, 1000);
}else{
	setTimeout(function(){ 
		alert("Select any object"); 
		},1000);
}
if(configConnectionSelect==1){		
		if(sensor==1){
			led=paper.image("images/whiteLED.png",x+46,y+213, 10, 13).transform( 'r-90');
			outputLed_OFF=paper.image("images/whiteLED.png",x-155,y+202.5, 25.5, 30);
			ledBlink.remove();
			outputLed_ON.remove();
		}else{
			//led=paper.image("images/whiteLED.png",x+116,y+240, 11, 14.5).transform( 'r-90');
			outputLed_OFF=paper.image("images/whiteLED.png",x-152,y+208, 26, 30);
//			outputLed_OFF=paper.image("images/whiteLED.png",x-155,y+207, 27, 31);
			ledBlink.remove();
			outputLed_ON.remove();
		}	

}else{
		if(sensor==1){
	
		 	led=paper.image("images/whiteLED.png",x+47,y+223.5, 6, 7).transform( 'r-90');
			outputLed_OFF=paper.image("images/whiteLED.png",x-135,y+212.5, 25, 29);
			ledBlink.remove();
			outputLed_ON.remove();
			
		}else{
			ledBlink.remove();
			outputLed_ON.remove();
			//led=paper.image("images/whiteLED.png",x+116,y+240, 11, 14.5).transform( 'r-90');
			outputLed_OFF=paper.image("images/whiteLED.png",x-133,y+211, 25, 31);
			
		}
}
})

min.click(function(){

if(target==1){
	b.animate({transform: ['t',-3,0]}, 1000,); 	
}else if(target==2){
	p.animate({transform: ['t',-3,0]}, 1000,);
}else if(target==3){
	g.animate({transform: ['t',-1,0]}, 1000,);
}else if(target==4){
	c.animate({transform: ['t',-3,0]}, 1000,);
}else if(target==5){
	m.animate({transform: ['t',-3,0]}, 1000,);
}else if(target==6){
	w.animate({transform: ['t',-3,0]}, 1000,);
}else if(target==7){
	pot.animate({transform: ['t',-3,0]}, 1000,);
}else{
	setTimeout(function(){ 
		alert("Select any object"); 
		},1000);
}	


if(configConnectionSelect==1){		
		if(sensor==1){
			led=paper.image("images/ledBlink.png",x+45,y+214, 13, 13).transform( 'r10');
			outputLed_ON=paper.image("images/led_ON_final.png",x-158,y+201.5, 30, 30);
			ledBlink.remove();
			outputLed_OFF.remove();
		}else{
			ledBlink=paper.image("images/ledBlink.png",x+65,y+217.5, 9, 7).transform( 'r10');
	 	 	outputLed_ON=paper.image("images/led_ON_final.png",x-155,y+207, 30, 30);
//			led=paper.image("images/whiteLED.png",x+116,y+240, 11, 14.5).transform( 'r-90');
//			outputLed_OFF=paper.image("images/whiteLED.png",x-167,y+207, 27, 31);			
			outputLed_OFF.remove();
		}	

}else{
		if(sensor==1){
			ledBlink=paper.image("images/ledBlink.png",x+45,y+225, 9, 7).transform( 'r10');
		outputLed_ON=paper.image("images/led_ON_final.png",x-138,y+210.5, 30, 30);
		//	led=paper.image("images/ledBlink.png",x+45,y+214, 13, 13).transform( 'r10');
//		 	led=paper.image("images/whiteLED.png",x+46,y+213.5, 11.5, 11.5).transform( 'r-90');
		 	//outputLed_ON=paper.image("images/led_ON_final.png",x-138,y+206, 30, 30);
//			outputLed_OFF=paper.image("images/whiteLED.png",x-136,y+207, 27, 30);
			led.remove();
			outputLed_OFF.remove();
		}else{
			outputLed_OFF.remove();
			ledBlink=paper.image("images/ledBlink.png",x+65,y+217.5, 9, 7).transform( 'r10');
			outputLed_ON=paper.image("images/led_ON_final.png",x-135,y+210, 30, 30);
			
		}
}
})

//if(sensor==1){
//		outputLed_OFF.remove();
//	led.remove();
//	ledBlink=paper.image("images/.png",x+45,y+214, 13, 13).transform( 'r10');
//	outputLed_ON=paper.image("images/led_ON_final.png",x-138,y+206, 30, 30);
//
//}else{
//	
////	outputLed_ON=paper.image("images/led_ON_final.png",x-135,y+210, 30, 30);
//	
//}	
//
////nextLevelForAnimation
//})

}