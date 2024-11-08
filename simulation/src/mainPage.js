ArrayJson=[];
MaterialMasterJson={};
ArrayJson2=[];
MaterialMasterJson2={};
var configType="";
var	sensorSelect;
var configConnectionSelect ;
var voltageSelect ;
var materialSelect ;
var config12;
var connectionCount=0;
var connetionStatusFlag=0;
	
var cntSubmitConfig=0;
var cntCalMain1ArrayJson=[];
var cntCalMain1MasterJson={};


function mainPage(){
	$("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     
      $("#centerText1").html('DIAGRAM ');
      $("#centerText2").html('CONFIGURATION');
      var htm;
      if(connectionCount==0){
		 htm = '<img src="images/proximitySensor.png" class="img-fluid" >'
	     $("#canvas-div").html(htm);
	  }else{
		htm = '<img src="images/sensor_created_img.png" class="img-fluid" >'
      $("#canvas-div").html(htm);
	}
     
      
      var selection  ='<div class="row"><div class="col-sm-6" id="materialType"  hidden>'
                  +'<label class="labelstyle"> Material type: </label>'   
                  +'</div>'
                  +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="material"  style="height:auto;" hidden>'      
	   +'<option value="0">--- Select the Material --- </option>'
	   	+'<option value=" 1 " name="Plastic" >Plastic</option>'
	   +'<option value=" 2 " name="Box" >Box</option>'
	   +'<option value=" 3 " name="Glass" >Glass</option>'
	   +'<option value=" 4 " name="Cloth">Cloth</option>'
	   +'<option value=" 5" name="Metal">Metal</option>'
	   +'<option value=" 6 " name="Wood">Wood</option>'
	   +'<option value=" 7 " name="CeramicPot">Ceramic Pot</option>'
	   +'</select>'         
       +'</div>' 
       +'</div>'  
       +'<br>'
       +'<div class="row">'
	   
	   
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Sensor Type: </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="sensorType" " style="height:auto;"disabled>'
	   +'<option value="0">--- Select Sensor Type --- </option>'
	   +'<option value="1" name="Inductive">Inductive Proximity sensor</option>'
	   +'<option value="2" name="Capacitive">Capacitive Proximity sensor</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>'    
//	   +'<div class="row">'
//	   
//	   
//	   +'<div class="col-sm-6">'
//	   +'<label class="labelstyle"> Configuration Type: </label>'
//	   +'</div>'
//	   +'<div class="col-sm-6">'
//	   +'<select  class="form-control selectConf" id="configConnection" " style="height:auto;" disabled>'
//	   +'<option value="000">--- Select Configuration --- </option>'
//	   +'<option value="1" >PNP</option>'
//	   +'<option value="2">NPN</option>'
//	   +'</select>'
//	   +'</div>'
//	   +'</div>'
//	   +'<br>' 
//	    
	    
	   +'<div class="row" >'
	    +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Voltage Rate (V):  </label>'
	   +'</div>'
	   +'<div class="col-sm-6" >'
	   +'<select  class="form-control selectConf" id="voltage" style="height:auto;" disabled>'
	   +'<option value="000">--- Select Voltage Rate --- </option>'
	   +'<option value="10" >10</option>'
	   +'<option value="15">15</option>'
	   +'<option value="20">20</option>'
	   +'<option value="25">25</option>'
	   +'<option value="30">30</option>'
	   +'</select>'
	   +'</div>'
	   +'<br>' 
	   +'<br>' 
	    +'<br>'  
       +'<div class="col-sm-12" id="buttonDiv">'
	   +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="submitconfig" data-toggle="modal" data-target="#selectCheck" disabled><b>  CHECK CONFIGURATION </b></button>' 
	    +'</div>'
	  
//	   +'<div class="col-sm-4">'
//	   +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="nextLevelForAnimation" data-toggle="modal" data-target="#selectCheck" disabled><b>  ANIMATION  </b></button>'
//	    +'</div>'
//	   +'<div class="col-sm-4">'
//	   +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="submitAnimationConfig" data-toggle="modal" data-target="#selectCheck" disabled><b>  CHECK CONFIGURATION </b></button>' 
//	   +'</div>'
	    
	        
	     + ' <!-- Modal -->'
				+ '<div class="modal fade" id="selectCheck" role="dialog">'
				+ ' <div class="modal-dialog modal-md">'
				+ '    <div class="modal-content">'
				+ '     <div class="modal-header">'
				
				+ '       <h4 class="modal-title">Message box</h4>'
				+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
				+ '     </div>'
				+ '     <div class="modal-body">'
				+ '       <p id="modelMsg"></p>'
				+ '     </div>'
				+ '     <div class="modal-footer">'
				+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
				+ '     </div>'
				+ '   </div>'
				+ ' </div>'
				+ '</div>'
				+'</div>'
				+ '</div>'
				+ ' </div>'  
		$("#main-div-conf").html(selection);	

      var flag = false;
  
 $("#submitconfig").click(function(){
		
	if(flag == true){
		cntSubmitConfig++;
//		console.log("click event");
	materialSelect = $("#material").val();
	sensorSelect = $("#sensorType").val();
	configType=$('#configConnection').attr('name');
	configConnectionSelect = $("#configConnection").val();
	voltageSelect= $("#voltage").val();
//	   if(materialSelect==0){
//		$("#errorPanel").prop("hidden",false);
//		$("#modelMsg").html("<b class='boldTextRed'>Select material </b>");
//
//	}else 
if(sensorSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg").html("<b class='boldTextRed'>Select Sensor Type </b>");

	}else if(configConnectionSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg").html("<b class='boldTextRed'>Select Configuration</b>");

	}else if(voltageSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg").html("<b class='boldTextRed'>Select Voltage</b>");

	}else{
		$("#errorPanel").prop("hidden",true);

		$("#modelMsg").html("<b class='boldTextGreen'>Configured Successfully</b>");		
		$("#checkConfg").prop('hidden',true);
		$("#material").prop('disabled',true);
		$("#sensorType").prop('disabled',true);
		$("#configConnection").prop('disabled',true);
		$("#voltage").prop('disabled',true);	
			
		$("#nextLevelForAnimation").prop('disabled',true);
		$("#submitconfig").prop('disabled',true);
		
       mimic(materialSelect,sensorSelect,configConnectionSelect,voltageSelect);
//     	$("#buttonDiv").html('<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="connectionStatus" data-toggle="modal" data-target="#selectCheck" disabled><b> CHECK CONNECTION STATUS </b></button>');
//  
	$("#buttonDiv").html('<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="nextLevel" data-toggle="modal" data-target="#selectCheck" hidden ><b>GO TO APPLICATION LEVEL </b></button>');
//button for table
	
	}	
	
$("#connectionStatus").click(function(){
	$("#connectionStatus").prop('hidden',true);
	$("#nextLevel").prop('hidden',false);
	//$("#submitAnimationConfig").prop('disabled',false);
});

	//submitconfig
$("#nextLevel").click(function(){	
	$("#material").prop('hidden',false);
	$("#materialType").prop('hidden',false);
	      
	$("#centerText1").html('PROXIMITY SENSOR WORKING');
	 var htm = '<img src="images/inductiveProxyWorking.gif" class="img-fluid" >'
      $("#canvas-div").html(htm);
	
	sensorSelect = $("#sensorType").val();
	configConnectionSelect = $("#configConnection").val();
	voltageSelect = $("#voltage").val();
	materialSelect = $("#material").val();		
//		console.log("materialSelect"+materialSelect);
//		console.log("sensorSelect"+sensorSelect);
//		console.log("configConnectionSelect"+configConnectionSelect);
//		console.log("voltageSelect"+voltageSelect);
		$("#material").prop('disabled',false);
		$("#sensorType").prop('disabled',false);
		$('#material  option[value="0"]').prop("selected", true);
		$('#sensorType  option[value="0"]').prop("selected", true);
	
		//animation(materialSelect,sensorSelect,configConnectionSelect,voltageSelect);
		$("#buttonDiv").html('<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="submitAnimationConfig" data-toggle="modal" data-target="#selectCheck" disabled><b> SUBMIT </b></button>');




$("#submitAnimationConfig ").click(function(){
	cntSubmitConfig++;
//	$("#submitAnimationConfig").prop('disabled',flase);		   
	sensorSelect = $("#sensorType").val();
	configConnectionSelect = $("#configConnection").val();
	voltageSelect = $("#voltage").val();
	materialSelect = $("#material").val();
//	console.log("materialSelectA"+materialSelect);
//	console.log("sensorSelectA"+sensorSelect);
//	console.log("configConnectionSelectA"+configConnectionSelect);
//	console.log("voltageSelectSA"+voltageSelect);
	animation(materialSelect,sensorSelect,configConnectionSelect,voltageSelect);
		config12 =$("#configConnection").children(":selected").attr("name");
		$("#configConnection").children(":selected").css("background-color","#f7dddd");
		$('#material').children(":selected").css("background-color","#f7dddd");
		
		if((materialSelect == 1 ||materialSelect == 2 ||materialSelect == 3 ||materialSelect == 4 ||materialSelect == 6 ||materialSelect == 7) && sensorSelect == 1) {
			flag = false;
			$("#modelMsg").html("<b class='boldTextRed'>Wrong Sensor Selected</b>");
		}else{
			flag = true;
			$("#submitAnimationConfig").prop('disabled',true);
				if(connectionCount==0){
					addToMasterJSON();
				}else{
					addToMasterJSONforA2();
				}
			$("#sensorType").val("0");
			$("#material").val("0");
		}
		
//		config12 =$("#configConnection").children(":selected").attr("name");
//	console.log("gfh" +config12);
//	$("#configConnection").children(":selected").css("background-color","#f7dddd");
//	$("#configConnection option[name="+config12+"]").attr("disabled",true);
//	$('#material').children(":selected").css("background-color","#f7dddd");
});

	});
	
	}else{
		$("#modelMsg").html("<b class='boldTextRed'>Please change the sensor type</b>");
//		alert("Please change the sensor type");
	}
	});
	
$("#material").change(function(){
	$("#sensorType").val("0");
})	
	
$("#sensorType").change(function(){
//		console.log("Change SensorType");
		sensorSelect = $("#sensorType").val();
		materialSelect = $("#material").val();
		
		if((materialSelect == 1 ||materialSelect == 2 ||materialSelect == 3 ||materialSelect == 4 ||materialSelect == 6 ||materialSelect == 7) && sensorSelect == 1){
			flag = false;			
			alert("Wrong Sensor Selected");
		}else{
			flag = true;
			$("#submitAnimationConfig").prop('disabled',false);
		}
		
//		if(materialSelect==5 && sensorSelect==2) {
//			flag = false;
//		alert("Wrong Sensor Selected");	
////				$("#submitAnimationConfig").prop('disabled',false);	
//		}else{
//			flag = true;
//			//alert("Correct Sensor selected");
//			$("#submitAnimationConfig").prop('disabled',false);
//		}
	});
	
$("#configConnection").change(function() {
		$("#configConnection").prop('disabled',true);
		$("#sensorType,#voltage,#material,#submitconfig").prop('disabled',false);
});
	             

}


function addToCntCalMain1MasterJson(){
 			var cntCalMain1tempJson={};
				cntCalMain1tempJson.cntSubmitConfig= cntSubmitConfig;
//				cntCalMain1tempJson.cntCalculateMainPage=cntCalculateMainPage;
//			let lastEntry1 = cntCalMain1ArrayJson[cntCalMain1ArrayJson.length - 1] || {cntCalculateMainPage: 0 };
//			cntCalMain1tempJson.cntCalculateMainPage = lastEntry1.cntCalculateMainPage + cntCalculateMainPage; // Add the new count			  
//            cntCalMain1tempJson.cntSubmitConfig = lastEntry1.cntSubmitConfig + cntSubmitConfig; // Add the new count
   			cntCalMain1ArrayJson.push(cntCalMain1tempJson);
			counterMasterJson.cntCalMain1MasterJson = cntCalMain1ArrayJson;
}


function addToMasterJSON(){
	
	sensorSelect1 =$("#sensorType").children(":selected").attr("name");
	materialSelect1 =$("#material").children(":selected").attr("name");
	$("#material option[name="+materialSelect1+"]").attr("disabled",true);
	voltageSelect1 =$("#voltage").children(":selected").attr("value");
	tempJson={};
			tempJson.sensorSelect = sensorSelect1;
			tempJson.materialSelect = materialSelect1;
			tempJson.voltage = voltageSelect1;
			tempJson.configType = config12;
						
			ArrayJson.push(tempJson);
			MaterialMasterJson.demo = ArrayJson;
//			console.log(MaterialMasterJson);
			tableCreate(MaterialMasterJson);

}
  
function addToMasterJSONforA2(){
	
	sensorSelect1 =$("#sensorType").children(":selected").attr("name");
	
	
		
	materialSelect1 =$("#material").children(":selected").attr("name");
	 $("#material option[name="+materialSelect1+"]").attr("disabled",true);
	voltageSelect1 =$("#voltage").children(":selected").attr("value");
 	tempJson2={};
						tempJson2.sensorSelect = sensorSelect1;
						tempJson2.materialSelect = materialSelect1;
						tempJson2.voltage = voltageSelect1;
						tempJson2.configType = config12;
						
						
						ArrayJson2.push(tempJson2);
						MaterialMasterJson2.demo = ArrayJson2;
//						console.log(MaterialMasterJson2);
						tableCreate(MaterialMasterJson2);

}
