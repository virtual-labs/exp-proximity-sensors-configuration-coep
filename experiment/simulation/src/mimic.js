

function mimic(materialSelect,sensorSelect,configConnectionSelect,voltageSelect){
//	$("#main-div-conf").html('');	
    $("#canvas-div").html('');	
    $("#centerText1").html('MIMIC');
    $("#centerText2").html('CONFIGURATION');

$('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w =660;
	var h = 550;

	var width = $(window).width();

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	} else {
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}
	
	
	
	
//paper = new Raphael(document.getElementById('canvas'), 900, 900);
var x1=50;
var y1=50;
var target=parseInt(materialSelect);
var sensor=parseInt(sensorSelect);
var config_selection=parseInt(configConnectionSelect);
var volt=parseInt(voltageSelect);

var circle_top, circle1_middle, circle1_bottom;
var minus,plus,voltage,load,ground;
var ground_circle,plus_circle,minus_circle,load_circle;
var con1,con2,con2;
var t1,t2,t3;
var small_c1;
var bulbOFF, bulbON;
var connection_successful=0;
var workArr=[];
var workcounter=0;
var statusflag;
var status_img=paper.image("images/status.png",x1+200,y1-30,200, 35);
//var sensor1=paper.image("images/sensor.png",x1+20,y1+180, 290, 97);
if(config_selection==1){
	pnp_connection();
	pnp_working();
		
}else{
	npn_connection();  
	npn_working();
}


//connetion Status
status_img.click(function(){
		if(statusflag==1){
			$("#nextLevel").prop('hidden',false);
			bulbBlinking();
			
		}else{
			setTimeout(function(){ 
			alert("Connect All Terminals"); 
			},500);
		}
	
	});




function pnp_connection(){
	 //statusflag=1;
	workcounter=workcounter+1;
var line1=paper.path("M "+(x1+90)+" "+(y1+110)+ "l 40  0 l 0 180 l -40 0 l 0 -180 ");
var circuit_lable=paper.text((x1+110),(y1+195),'Main Circuit').attr({'stroke-width':10,'font-size':25}).transform( 'r-90');

var border=paper.path("M "+(x1+50)+" "+(y1+10)+ "l 250  0 l 0 380 l -250 0 l 0 -380 ");

var t=paper.path("M "+(x1+130)+" "+(y1+160)+ "l 40 0 l 0 -20 l 0 40 l 0 -20 l -40 0");

var circuit_top=paper.path("M "+(x1+110)+" "+(y1+110)+ "l 0 -60 l 190 0" );
var circuit_bottom=paper.path("M "+(x1+110)+" "+(y1+290)+ "l 0 60 l 190 0" );
var triangle=paper.path("M "+(x1+220)+" "+(y1+350)+ "l 0 -10 l 0 20 l 0 -10 l -15 10 l 0 -20 l 15 10"  ).attr({'fill':'#000'});
//top line with arrow
var l1=paper.path("M "+(x1+200)+" "+(y1+50)+ "l 0 56 l -20 30 l 3 3 l -12 5  l 6 -11 l 3 3 l 20 -30 l 0 -56 ").attr({'fill':'#000'});
var l2=paper.path("M "+(x1+170)+" "+(y1+170)+ "l 30 20 l 0 10 l 150 0");

load=paper.text(x1+400,y1+180,"(Control output)").attr({'stroke-width':10,'font-size':15});;
bulbOFF=paper.image("images/whiteLED.png",x1+315,y1+170.5, 27, 31);
//paper.image("images/bulbOFF.png",x1+300,y1+153,60, 50);
//paper.rect((x1+380),(y1+250), 50 ,30);
//var load_lable=paper.text((x1+405),(y1+265),'Load').attr({'stroke-width':8,'font-size':18});
//var load_connection=paper.path("M "+(x1+300)+" "+(y1+200)+ "l 105 0 l 0 50  M "+(x1+405)+" "+(y1+280)+ " l 0 110 ");

ground= paper.image("images/ground.png",x1+380,y1+386,50, 21);
ground_circle=paper.circle(x1+405, y1+382, 5).attr({'fill':' #FF0000'});
var ground_text= paper.text((x1+405),(y1+420),'Ground').attr({'stroke-width':10,'font-size':15});

//paper.path("M "+(x1+385)+" "+(y1+390)+ "l 40 0   M "+(x1+390)+" "+(y1+400)+ " l 30 0   M "+(x1+395)+" "+(y1+410)+ " l 20 0").attr({'stroke-width':5});

voltage= paper.image("images/voltage.png",x1+475,y1+194,50, 10);
var voltage_text= paper.text((x1+555),(y1+200),' '+volt+' V').attr({'stroke-width':10,'font-size':20});

//var voltage_text= paper.text((x1+585),(y1+200),' '+volt+'V').attr({'stroke-width':10,'font-size':15});
//
//paper.path("M "+(x1+497)+" "+(y1+195)+ "l 24 0 l -42 0  l 24 0").attr({'stroke-width':5});
var plus_sign= paper.text((x1+520), (y1+183),'+').attr({'stroke-width':10,'font-size':28});
plus_circle=paper.circle(x1+500, y1+190, 5).attr({'fill':' #FF0000'});
//var plus_connecton=paper.path("M "+(x1+300)+" "+(y1+50)+ "l 200 0 l 0 145 l ");

// minus= paper.path("M "+(x1+500)+" "+(y1+204.5)+ "l 12 0 l -24 0  l 12 0").attr({'stroke-width':5});
var minus_sign= paper.text((x1+520), (y1+208),'-').attr({'stroke-width':10,'font-size':40});
minus_circle=paper.circle(x1+500, y1+208, 5).attr({'fill':' #FF0000'});
//var minus_connecton=paper.path("M "+(x1+300)+" "+(y1+350)+ "l 200 0 l 0 -148 l ");

var small_c1= paper.circle(x1+200, y1+50, 3).attr({'fill':'#000'});
var small_c2= paper.circle(x1+405, y1+350, 3).attr({'fill':'#000'});

t1=paper.text((x1+338), (y1+62),'Terminal 1').attr({'font-size':15});
t2=paper.text((x1+338), (y1+212),'Terminal 2').attr({'font-size':15});
t3=paper.text((x1+338), (y1+362),'Terminal 3').attr({'font-size':15});

circle_top=paper.circle(x1+300, y1+50, 5).attr({'fill':' #FF0000'});
circle1_middle=paper.circle(x1+300, y1+200, 5).attr({'fill':' #FF0000'});
circle1_bottom=paper.circle(x1+300, y1+350, 5).attr({'fill':' #FF0000'});

}

function pnp_working(){
	 //statusflag=1;
	workcounter=workcounter+1;
	circle_top.click(function(){
		circle_top=1;
		con1=1;
//		console.log("con1 = "+con1);
		connection_successful=connection_successful+1;
//		console.log("circle_top connection_successful = "+connection_successful);
//		if(connection_successful>=6){
//		console.log("connection_successful if condition = "+connection_successful);
//		console.log("connection Done");
//		setTimeout(function(){ 
//		alert("Now Click on Check Connection Status Button "); 
//		},3000);
//		}
	});
			
	circle1_bottom.click(function(){
		circle1_top=2;
		circle1_bottom=1;
		con3=1;
//		console.log("con3 = "+con3);
//		console.log("circle1_bottom = "+circle1_bottom);
		if(con1==1){
			setTimeout(function(){ 
			alert("wrong Connection"); 
			},500);
		}
		connection_successful=connection_successful+1;
//		console.log("circle_bottom connection_successful = "+connection_successful);
//		if(connection_successful>=6){
//		console.log("connection_successful if condition = "+connection_successful);
//		console.log("connection Done");
//		setTimeout(function(){ 
//		alert("Now Click on Check Connection Status Button "); 
//		},3000);
//	}
	});
			
	circle1_middle.click(function(){
		circle1_middle=1;
		con2=1;
//		console.log("con2 = "+con2);
		if(con1==1){
			setTimeout(function(){ 
			alert("wrong Connection"); 
			},500);
		}	
		connection_successful=connection_successful+1;
//		console.log(" circle_middle connection_successful = "+connection_successful);
//		if(connection_successful>=6){
//		console.log("connection_successful if condition = "+connection_successful);
//		console.log("connection Done");
//		setTimeout(function(){ 
//		alert("Now Click on Check Connection Status Button "); 
//		},3000);
//		}
	});
			
	plus_circle.click(function(){
			//plus connection	
		var plus_connection_arr=[];
		if(circle_top==1){
				if(con1==1){
					plus_connection_arr[0]=paper.path("M "+(x1+300)+" "+(y1+50)+ "l 0 0").attr({'stroke-width':3});			
					plus_connection_arr[0].animate({path :"M "+(x1+300)+" "+(y1+50)+ "l 200 0"},1000, function(){
					plus_connection_arr[1]=paper.path("M "+(x1+500)+" "+(y1+50)+ "l 0 0").attr({'stroke-width':3});		 
					plus_connection_arr[1].animate({path :"M "+(x1+500)+" "+(y1+50)+ "l 0 145"},1000, function(){
					con1++; 
					circle_top++; 
					circle_top1=paper.circle(x1+300, y1+50, 5).attr({'fill':'#fff'});
					plus_circle=paper.circle(x1+500, y1+190, 5).attr({'fill':'#fff'});
					connection_successful=connection_successful+1;
//					console.log("plus connection circle_middle connection_successful = "+connection_successful);
					setTimeout(function(){ 
					//alert("successfully connected"); 
					},800);
					PNPConnetionStatusClick();
					});
					});
					//var plus_connecton=paper.path("M "+(x1+300)+" "+(y1+50)+ "l 200 0 l 0 145  ").attr({'stroke-width':3});
					//console.log("conection 1 is successful"+con1);
					//circle_top.attr({'fill':'#fff'});
				}else{
					setTimeout(function(){ 
					alert("click on circle "); 
					},1000);
				}			
									//else if(circle_top>1 || circle1_bottom==1){
									////minus connection
									//console.log("circle1_bottom = "+circle1_bottom);
									//	if(con3==1){
									//		minus_connection_arr[0]=paper.path("M "+(x1+300)+" "+(y1+350)+ "l 0 0").attr({'stroke-width':3});			
									//		minus_connection_arr[0].animate({path :"M "+(x1+300)+" "+(y1+350)+ "l 200 0"},1000, function(){
									//		minus_connection_arr[1]=paper.path("M "+(x1+500)+" "+(y1+350)+ "l 0 0").attr({'stroke-width':3});		 
									//		minus_connection_arr[1].animate({path :"M "+(x1+500)+" "+(y1+350)+ "l 0 -148 "},1000, function(){ 
									//			con3++;
									//		});
									//		});
									//		circle1_bottom=paper.circle(x1+300, y1+350, 5).attr({'fill':'#fff'});
									//		setTimeout(function(){ 
									//		alert("successfully connected"); 
									//		},3000);	
									//	}else{
									//		setTimeout(function(){ 
									//		alert("wrong connection"); 
									//		},1000);}						
									//var minus_connecton=paper.path("M "+(x1+300)+" "+(y1+350)+ "l 200 0 l 0 -148  ")										
		}else{
			setTimeout(function(){ 
			alert("wrong connection"); 
			},1000);
		}	
			
		if(circle1_bottom==1){
			setTimeout(function(){ 
			alert("wrong Connection"); 
			},500);
		}
		
//	if(connection_successful>=6){
//		console.log("connection_successful if condition = "+connection_successful);
//		console.log("connection Done");
//		setTimeout(function(){ 
//		alert("Now Click on Check Connection Status Button "); 
//		},5000);
//	}
			
	});
	
	ground_circle.click(function(){
				var load_connection_arr=[];
				if(con2==1){
					load_connection_arr[0]=paper.path("M "+(x1+300)+" "+(y1+200)+ "l 0 0").attr({'stroke-width':3});			
					load_connection_arr[0].animate({path :"M "+(x1+300)+" "+(y1+200)+ "l 105 0"},1000, function(){
					
					load_connection_arr[2]=paper.path("M "+(x1+405)+" "+(y1+200)+ " l 0 0 ").attr({'stroke-width':3});		 
					load_connection_arr[2].animate({path :"M "+(x1+405)+" "+(y1+200)+ " l 0 180 "},1000, function(){ 	
						
//					load_connection_arr[2]=paper.path("M "+(x1+405)+" "+(y1+280)+ " l 0 0 ").attr({'stroke-width':3});		 
//					load_connection_arr[2].animate({path :"M "+(x1+405)+" "+(y1+280)+ " l 0 110 "},1000, function(){ 
					
					circle1_middle=paper.circle(x1+300, y1+200, 5).attr({'fill':'#fff'});
					ground_circle=paper.circle(x1+405, y1+382, 5).attr({'fill':'#fff'});
					connection_successful=connection_successful+1;
//					console.log(" ground connection_successful = "+connection_successful);
					setTimeout(function(){ 
					//alert("successfully connected"); 					
					},1000);
					PNPConnetionStatusClick();
//					});
					});
					});
				}else{
						setTimeout(function(){ 
						alert("wrong Connection"); 
						},500);
				}
			if(circle1_bottom==1  ){
//				console.log("circle1_bottom = "+circle1_bottom);
				setTimeout(function(){ 
						alert("wrong Connection"); 
						},500);
			}
		
//		if(connection_successful>=6){
//	console.log("connection_successful if condition = "+connection_successful);
//	console.log("connection Done");
//	setTimeout(function(){ 
//	alert("Now Click on Check Connection Status Button "); 
//	},5000);
//}

	});
			
	minus_circle.click(function(){
				var minus_connection_arr=[];
				if(circle1_bottom==1){
					//minus connection
//					console.log("circle1_bottom = "+circle1_bottom);
						if(con3==1){
							minus_connection_arr[0]=paper.path("M "+(x1+300)+" "+(y1+350)+ "l 0 0").attr({'stroke-width':3});			
							minus_connection_arr[0].animate({path :"M "+(x1+300)+" "+(y1+350)+ "l 200 0"},1000, function(){
							minus_connection_arr[1]=paper.path("M "+(x1+500)+" "+(y1+350)+ "l 0 0").attr({'stroke-width':3});		 
							minus_connection_arr[1].animate({path :"M "+(x1+500)+" "+(y1+350)+ "l 0 -148 "},1000, function(){ 
								con3++;
								circle1_bottom=paper.circle(x1+300, y1+350, 5).attr({'fill':'#fff'});
							minus_circle=paper.circle(x1+500, y1+208, 5).attr({'fill':'#fff'});
							connection_successful=connection_successful+1;
//							console.log(" minus connection connection_successful = "+connection_successful);
							setTimeout(function(){ 
							//alert("successfully connected"); 
							},1000);
							PNPConnetionStatusClick();
							});
							});
							
						}else{
							setTimeout(function(){ 
							alert("wrong connection"); 
							},1000);
						}
				}else{
					setTimeout(function(){ 
					alert("wrong connection"); 
					},1000);
				}
				
		
	});
	
}

//NPN Connection
function npn_connection(){
	workcounter=workcounter+1;
	var line1=paper.path("M "+(x1+90)+" "+(y1+110)+ "l 40  0 l 0 180 l -40 0 l 0 -180 ");
var circuit_lable=paper.text((x1+110),(y1+195),'Main Circuit').attr({'stroke-width':10,'font-size':25}).transform( 'r-90');

var border=paper.path("M "+(x1+50)+" "+(y1+10)+ "l 250  0 l 0 380 l -250 0 l 0 -380 ");

var t=paper.path("M "+(x1+130)+" "+(y1+241)+ "l 40 0 l 0 -20 l 0 40 l 0 -20 l -40 0");

var circuit_top=paper.path("M "+(x1+110)+" "+(y1+110)+ "l 0 -60 l 190 0" );
var circuit_bottom=paper.path("M "+(x1+110)+" "+(y1+290)+ "l 0 60 l 190 0" );
var triangle=paper.path("M "+(x1+200)+" "+(y1+50)+ "l 0 -10 l 0 20 l 0 -10 l 15 10  l 0 -20 l -15 10"  ).attr({'fill':'#000'});

//top line with arrow
var l1=paper.path("M "+(x1+200)+" "+(y1+350)+ "l 0 -81 l -2 -8 l -6 7  l 8 0 l -8 0 l 3 -4  l -25 -15 l 25 15 l -3 4 l 7.9 0 z ").attr({'fill':'#000'});
var l2=paper.path("M "+(x1+170)+" "+(y1+230)+ "l 30 -20 l 0 -10 l 150 0");

bulbOFF=paper.image("images/whiteLED.png",x1+315,y1+170.5, 27, 31);
// bulbOFF=paper.image("images/bulbOFF.png",x1+300,y1+153,60, 50);
// bulbON=paper.image("images/bulbON.png",x1+306,y1+152,45, 48.5);

load=paper.text(x1+350,y1+160,"(Control output)").attr({'stroke-width':10,'font-size':12});
load_circle=paper.circle(x1+405, y1+51, 5).attr({'fill':' #FF0000'});

ground= paper.image("images/ground.png",x1+380,y1+386,50, 21);

var ground_text= paper.text((x1+405),(y1+420),'Ground').attr({'stroke-width':10,'font-size':15});
ground_circle=paper.circle(x1+405, y1+382, 5).attr({'fill':' #FF0000'});

voltage= paper.image("images/voltage.png",x1+475,y1+194,50, 10);
var voltage_text= paper.text((x1+555),(y1+200),' '+volt+' V').attr({'stroke-width':10,'font-size':20});
//var voltage_text= paper.text((x1+565),(y1+200),'Voltage').attr({'stroke-width':10,'font-size':15});

var plus_sign= paper.text((x1+520), (y1+183),'+').attr({'stroke-width':10,'font-size':28});
plus_circle=paper.circle(x1+500, y1+190, 5).attr({'fill':' #FF0000'});

var minus_sign= paper.text((x1+520), (y1+208),'-').attr({'stroke-width':10,'font-size':40});
minus_circle=paper.circle(x1+500, y1+208, 5).attr({'fill':' #FF0000'});

small_c1= paper.circle(x1+405, y1+350, 5).attr({'fill':'#FF0000'});
var small_c2= paper.circle(x1+200, y1+350, 3).attr({'fill':'#000'});

t1=paper.text((x1+338), (y1+62),'Terminal 1').attr({'font-size':15});
t2=paper.text((x1+338), (y1+212),'Terminal 2').attr({'font-size':15});
t3=paper.text((x1+338), (y1+362),'Terminal 3').attr({'font-size':15});


circle_top=paper.circle(x1+300, y1+50, 5).attr({'fill':' #FF0000'});
circle1_middle=paper.circle(x1+300, y1+200, 5).attr({'fill':' #FF0000'});
circle1_bottom=paper.circle(x1+300, y1+350, 5).attr({'fill':' #FF0000'});
}	
	
	
function npn_working(){
		status=status+1;
		workcounter=workcounter+1;
	circle_top.click(function(){
			circle_top=1;
			con1=1;
//			console.log("con1 = "+con1);
			connection_successful=connection_successful+1;
//			console.log("circle_top connection_successful = "+connection_successful);
//		if(connection_successful>=8){
//		console.log("connection Done");
//		setTimeout(function(){ 
//		alert("Now Click on Check Connection Status Button "); 
//		},3000);
//		}else{
////		setTimeout(function(){ 
////		alert("Connect All Terminals"); 
////		},1000);
//		}
	
	});
		
	circle1_bottom.click(function(){
			circle1_top=2;
			circle1_bottom=1;
			con3=1;
//			console.log("con3 = "+con3);
//			console.log("circle1_bottom = "+circle1_bottom);
			if(con1==1){
				setTimeout(function(){ 
				alert("wrong Connection"); 
				},500);
			}
				connection_successful=connection_successful+1;
//			console.log("circle_bottom connection_successful = "+connection_successful);
//		if(connection_successful>=8){
//		console.log("connection Done");
//		setTimeout(function(){ 
//		alert("Now Click on Check Connection Status Button "); 
//		},3000);
//		}else{
////		setTimeout(function(){ 
////		alert("Connect All Terminals"); 
////		},1000);
//		}
	
	});
		
	circle1_middle.click(function(){
			circle1_middle=1;
			con2=1;
//			console.log("con2 = "+con2);
				if(con1==1){
					setTimeout(function(){ 
					alert("wrong Connection"); 
					},500);
				}
				connection_successful=connection_successful+1;
//			console.log("circle_middle connection_successful = "+connection_successful);
//		if(connection_successful>=8){
//		console.log("connection Done");
//		setTimeout(function(){ 
//		alert("Now Click on Check Connection Status Button "); 
//		},3000);
//		}else{
////		setTimeout(function(){ 
////		alert("Connect All Terminals"); 
////		},1000);
//		}	
	});
		
	plus_circle.click(function(){
		//plus connection	
			var plus_connection_arr=[];
			if(circle_top==1){
				if(con1==1){
					plus_connection_arr[0]=paper.path("M "+(x1+300)+" "+(y1+50)+ "l 0 0").attr({'stroke-width':3});			
					plus_connection_arr[0].animate({path :"M "+(x1+300)+" "+(y1+50)+ "l 200 0"},1000, function(){
					plus_connection_arr[1]=paper.path("M "+(x1+500)+" "+(y1+50)+ "l 0 0").attr({'stroke-width':3});		 
					plus_connection_arr[1].animate({path :"M "+(x1+500)+" "+(y1+50)+ "l 0 145"},1000, function(){
					con1++; 
					circle_top++; 
					circle_top1=paper.circle(x1+300, y1+50, 5).attr({'fill':'#fff'});
					plus_circle=paper.circle(x1+500, y1+190, 5).attr({'fill':'#fff'});
					load_circle.toFront();
					connection_successful=connection_successful+1;			
//					console.log("plus_connection connection_successful = "+connection_successful);
					setTimeout(function(){ 
					//alert("successfully connected"); 
					},800);
					NPNConnetionStatusClick();
					});
					});
//					console.log("conection 1 is successful"+con1);																	
					}else{
						setTimeout(function(){ 
						alert("click on Terminal1 "); 
						},1000);
					}									
			}else{
				setTimeout(function(){ 
				alert("wrong connection"); 
				},1000);
		}	
		
		if(circle1_bottom==1){
			setTimeout(function(){ 
					alert("wrong Connection"); 
					},500);
		}
		
//		if(connection_successful>=8){
//		console.log("connection Done");
//		setTimeout(function(){ 
//		alert("Now Click on Check Connection Status Button "); 
//		},5000);
//		}else{
////		setTimeout(function(){ 
////		alert("Connect All Terminals"); 
////		},1000);
//		}
	});
		
		
	load_circle.click(function(){
			var load_connection_arr=[];
			if(con2==1){
				load_connection_arr[0]=paper.path("M "+(x1+300)+" "+(y1+200)+ "l 0 0").attr({'stroke-width':3});			
				load_connection_arr[0].animate({path :"M "+(x1+300)+" "+(y1+200)+ "l 105 0"},1000, function(){
				
				load_connection_arr[2]=paper.path("M "+(x1+405)+" "+(y1+200)+ " l 0 0 ").attr({'stroke-width':3});		 
				load_connection_arr[2].animate({path :"M "+(x1+405)+" "+(y1+200)+ " l 0 -148 "},1000, function(){ 	
					
	//			load_connection_arr[2]=paper.path("M "+(x1+405)+" "+(y1+200)+ " l 0 0 ").attr({'stroke-width':3});		 
	//			load_connection_arr[2].animate({path :"M "+(x1+405)+" "+(y1+200)+ " l 0 -50 "},1000, function(){ 
				
				circle1_middle=paper.circle(x1+300, y1+200, 5).attr({'fill':'#fff'});
				load_circle=paper.circle(x1+405, y1+51, 5).attr({'fill':'#fff'});
					connection_successful=connection_successful+1;			
//		console.log("load circle connection_successful = "+connection_successful);
				setTimeout(function(){ 
				//alert("successfully connected"); 
				},1000);
				NPNConnetionStatusClick();
	//			});
				});
				});
			}else{
					setTimeout(function(){ 
					alert("wrong Connection"); 
					},500);
			}
		if(circle1_bottom==1  ){
//			console.log("circle1_bottom = "+circle1_bottom);
			setTimeout(function(){ 
					alert("wrong Connection"); 
					},500);
		}		
	
//		if(connection_successful>=8){
//		console.log("connection Done");
//		setTimeout(function(){ 
//		alert("Now Click on Check Connection Status Button "); 
//		},3000);
//		}else{
////		setTimeout(function(){ 
////		alert("Connect All Terminals"); 
////		},1000);
//		}
	});
		
	minus_circle.click(function(){			
			var minus_connection_arr=[];
			if(circle1_bottom==1){
				//minus connection
//				console.log("circle1_bottom = "+circle1_bottom);
					if(con3==1){
						minus_connection_arr[0]=paper.path("M "+(x1+300)+" "+(y1+350)+ "l 0 0").attr({'stroke-width':3});			
						minus_connection_arr[0].animate({path :"M "+(x1+300)+" "+(y1+350)+ "l 200 0"},1000, function(){
						minus_connection_arr[1]=paper.path("M "+(x1+500)+" "+(y1+350)+ "l 0 0").attr({'stroke-width':3});		 
						minus_connection_arr[1].animate({path :"M "+(x1+500)+" "+(y1+350)+ "l 0 -148 "},1000, function(){ 
							con3++;
							circle1_bottom=paper.circle(x1+300, y1+350, 5).attr({'fill':'#fff'});
						minus_circle=paper.circle(x1+500, y1+208, 5).attr({'fill':'#fff'});
						small_c1.toFront();
						connection_successful=connection_successful+1;			
//			console.log("Minus_circle  connection_successful = "+connection_successful);
						setTimeout(function(){ 
						//alert("successfully connected "); 
						},800);
						NPNConnetionStatusClick();
						});
						});
						
					}else{
						setTimeout(function(){ 
						alert("wrong connection"); 
						},1000);
					}
			}else{
				setTimeout(function(){ 
				alert("wrong connection"); 
				},1000);
			}
			
//		if(connection_successful>=8){
//		console.log("connection Done");
//		setTimeout(function(){ 
//		alert("Now Click on Check Connection Status Button "); 
//		},3000);
//		}else{
////		setTimeout(function(){ 
////		alert("Connect All Terminals"); 
////		},1000);
//		}
	});
		
	ground_circle.click(function(){
			
			ground_circle=1;
			circle1_bottom=2;
//			console.log("con2 = "+con2);
//			console.log("	circle1_bottom = "+	circle1_bottom);
				if(con1==1){
					setTimeout(function(){ 
					alert("wrong Connection"); 
					},500);
				}
				connection_successful=connection_successful+1;			
//				console.log("ground_circle connection_successful = "+connection_successful);
//		if(connection_successful>=8){
//		console.log("connection Done");
//		setTimeout(function(){ 
//		alert("Now Click on Check Connection Status Button "); 
//		},3000);
//		}else{
////		setTimeout(function(){ 
////		alert("Connect All Terminals"); 
////		},3000);
//		}
	});
		
	small_c1.click(function(){
		
//		console.log("Hello small_c1");
		var ground_connection_arr=[];
		if(circle1_bottom==2){
			ground_connection_arr[0]=paper.path("M "+(x1+405)+" "+(y1+378)+ "l 0 0").attr({'stroke-width':3});			
			ground_connection_arr[0].animate({path :"M "+(x1+405)+" "+(y1+378)+ "l 0 -30"},1000, function(){
			ground_circle=paper.circle(x1+405, y1+382, 5).attr({'fill':' #fff'});
			small_c1= paper.circle(x1+405, y1+350, 5).attr({'fill':'#000'});
			circle1_bottom=circle1_bottom+1;
			connection_successful=connection_successful+1;			
//			console.log("small_c1  connection_successful = "+connection_successful);
				setTimeout(function(){ 
				//alert("successfully connected"); 
				},500);
				NPNConnetionStatusClick();
			});
		}else{
				setTimeout(function(){ 
				alert("wrong Connection"); 
				},500);
		}
			
//		if(connection_successful>=8){
//		console.log("connection Done");
//		setTimeout(function(){ 
//		alert("Now Click on Check Connection Status Button "); 
//		},3000);
//		}else{
////		setTimeout(function(){ 
////		alert("Connect All Terminals"); 
////		},3000);
//		}
	});
	
	
	


	
}	

function PNPConnetionStatusClick(){
	
//	console.log("PNPConnetionStatusClick()");
	if(connection_successful>=6){
		statusflag=1;
//	console.log("connection_successful if condition = "+connection_successful);
//	console.log("connection Done");
	setTimeout(function(){ 
	alert("Now Click on Check Connection Status Button "); 
	},1000);
}else{
//	setTimeout(function(){ 
//	alert("Connect All Terminals"); 
//	},5000);
}
}

function NPNConnetionStatusClick(){
//	console.log("NPNConnetionStatusClick()");
	if(connection_successful>=8){
		statusflag=1;
//	console.log("connection_successful if condition = "+connection_successful);
//	console.log("connection Done");
	setTimeout(function(){ 
	alert("Now Click on Check Connection Status Button "); 
	},1000);
}else{
//	setTimeout(function(){ 
//	alert("Connect All Terminals"); 
//	},5000);
}
}
	
function bulbBlinking(){
statusflag=1;
	bulbOFF.remove();
	bulbON=paper.image("images/led_ON_final.png",x1+315,y1+170.5, 30, 30);
	//paper.image("images/bulbON.png",x1+306,y1+152,45, 48.5);	
	setTimeout(function(){ 
//	alert("Connections Successfully done. Please Click in Animation Button "); 
	},1000);
		$("#submitAnimationConfig").prop('disabled',false);
		
//	sensorSelect = $("#sensorType").val();
//	configConnectionSelect = $("#configConnection").val();
//	 voltageSelect = $("#distance").val();
//	materialSelect = $("#material").val();
//	animation(materialSelect,sensorSelect,configConnectionSelect,voltageSelect);
//	$("centerText1").html("Animation");
//	console.log("materialSelect"+materialSelect);
//		console.log("sensorSelect"+sensorSelect);
//		console.log("configConnectionSelect"+configConnectionSelect);
//		console.log("voltageSelect"+voltageSelect);
//	

}
}


