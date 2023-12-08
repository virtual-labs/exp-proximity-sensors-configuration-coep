//var masterJson = {};
//var JsonArr = [];
//var t="";
//var min="";
//var max="";
//var supplierConstaint="";
//var maxInput="";
//var maxOutput="";
//var noBlades="";
//var  fluidType="";
//var  materialType="" ;
//var BladeShape="";
//var pipeSize="";
//var time1="";
var weight="";
 var meter="";
var cylinderPiston="";
data = {};
dataJson = {};
var htm='<div class="row" >'
		+'<div class="col-sm-6">'
	   +'<label for="weight">Select Pipe Size (mm) </label>'
	   +'</div>'
		   
	   +'<div class="col-sm-6" >'
	   +'<select  class="selectConf"  id="pipeSize" >'
	   +'<option value="0">--- Select Pipe Size --- </option>'
	   +'<option value="15">15</option>'
	   +'<option value="25">25</option>'
	   +'<option value="40">40</option>'
	   +'<option value="50">50</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	  +'<br>'
	   
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label for="meter">Select Fluid Type (Service) </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control form-control-lg bg-info selectStyle"  id="fluidType">'
	   +'<option value="0">--- Select meter --- </option>'
	   +'<option value="1" >Water  </option>'
	   +'<option value="2">Air</option>'
	  
	  
	   +'</select>'
	   +'</div>'
	   +'</div>'
	    +'<br>'
	   
	   +'<div class="row"  >'
	   +'<div class="col-sm-6">'
		 +'<label for="floatMaterial">Select Float Material</label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control form-control-lg bg-info selectStyle"  id="floatMaterial">'
	   +'<option value="0">--- Select Float Material --- </option>'
	   +'<option value="1" >Steel </option>'
	   +'<option value="2">Teflon</option>'
//	   +'<option value="3">7 MM</option>'
	   +'</select>'
	   +'<br>'
	   +'<span id="validMaterialMsg" class="validMaterialMsgStyle" hidden><span>'
	   +'</div>'
	   
	   +'</div>'
	    
	   +'<br>'
	   +'<div class="row"  >'
	   +'<div class="col-sm-6">'
	      +'<button type="button" class="btn btn-success btnStyle" id="checkConfg">CHECK CONFIGURATION </button>'
	   +'</div>'
	    +'<div class="col-sm-6">'
	     +'<button type="button" class="btn btn-success btnStyle" id="nextSubmit">NEXT LEVEL </button>'
	   +'</div>'
	   +'</div>'
  $("#main-div-conf").html(htm);
	   
	  $("#floatMaterial").change(function(){
		
		 fluidType=$("#fluidType").val();
		 floatMaterial=$("#floatMaterial").val();
		 console.log(" fluidType "+fluidType);
		  console.log(" floatMaterial "+floatMaterial);
		   $("#validMaterialMsg").prop("hidden",false);
		 if((fluidType==1 && floatMaterial==1) ||(fluidType==2 && floatMaterial==2) )
		 {
			 
			  $("#validMaterialMsg").html("Correct Selection ");
			  $(".validMaterialMsgStyle").css("color","green");
			  
		 }
		 else
		 {
			  $("#validMaterialMsg").html("Wrong Selection ");
			  $(".validMaterialMsgStyle").css("color","red");
		 }
	 
	  });
	 
	  
	   $("#checkConfg").click(function(){
		   alert("Configration done");
		   pipeSize=$("#pipeSize").val();
		   fluidType=$("#fluidType").val();
		   floatMaterial=$("#floatMaterial").val();
				dataJson = {};
				dataJson.pipe = pipeSize ;
				dataJson.fluid = fluidType;
				dataJson.material = floatMaterial;
		   console.log("main pipeSize    "+pipeSize);
		   console.log("main fluidType    "+fluidType);
		   console.log("floatMaterial    "+floatMaterial);
		   data.configure = dataJson;

				console.log(data);
//		  $("#main-div-conf").html("");
//		  $("#canvas-div").html("");
//		    mimic(pipeSize,fluidType,floatMaterial);
	   });
	   
	     $("#nextSubmit").click(function(){
//		   alert("ghh");
			 
		 
		  $("#main-div-conf").html("");
		  $("#main-div-conf").html('<img src="images/proximitySensor.png"  width="90%" height="80%">');
		
		  $("#main-div-conf").html("");
		  $("#canvas-div").html("");
//		  showQuestions();
		  
		   
	   });