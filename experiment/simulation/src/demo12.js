console.log(counterMasterJson);
function config1(){

var weight="";
 var meter="";
var cylinderPiston="";
var correct_cnt = 0;
var wrong_cnt = 0;
var htm= '<div class="row rowStyle">'
	   +'<div class="col-sm-6">'
	   +'<label for="material">Select Material Type</label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control form-control-lg selectbg selectStyle"  id="materialtype">'
	   +'<option value=" 0 ">--- Select Material Type --- </option>'
	   +'<option value=" 1 " >Metal</option>'
	   +'<option value=" 2 ">Plastic</option>'
	   +'<option value=" 3 ">Glass</option>'
	   +'<option value=" 4 ">Paper</option>'
	   +'<option value=" 5 ">Wood</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   
	   
	   +'<div class="row rowStyle"  >'
	   +'<div class="col-sm-6">'
	   +'<label for="Sensor">Select Sensor Type</label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control form-control-lg selectbg selectStyle"  id="Sensortype">'
	   +'<option value="00">--- Select Sensor Type --- </option>'
	   +'<option value="11" >Inductive Proximity sensor</option>'
	   +'<option value="22">Capacitive Proximity sensor</option>'	   
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   
	   
	   +'<div class="row rowStyle"  >'
	   +'<div class="col-sm-6">'
	   +'<label for="configutationBJT">Select Configuration</label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control form-control-lg selectbg selectStyle"  id="bjt">'
	   +'<option value="000">--- Select Configuration --- </option>'
	   +'<option value="111" >PNP </option>'
	   +'<option value="222">NPN</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   
	   
	   +'<div class="row rowStyle"  >'
	   +'<div class="col-sm-6">'
	   +'<label for="Voltage">Select Voltage</label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control form-control-lg selectbg selectStyle"  id="volt">'
	   +'<option value="000">--- Select Voltage --- </option>'
	   +'<option value="10" >10.8 </option>'
	   +'<option value="15">15</option>'
	   +'<option value="20">20</option>'
	   +'<option value="25">25</option>'
	   +'<option value="30">30</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   
	   $("#main-div-conf").html(htm);
	
		  
		   
	
	   }