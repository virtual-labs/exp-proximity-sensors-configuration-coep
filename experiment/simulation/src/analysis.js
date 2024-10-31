


function resultAnalysis(counterMasterJson){
	    
		console.log("ResultPage Analysis.......");
				
$("#selectMethod").prop('hidden',true);

counterMasterJson = {
    "questionary": {
        "totalQues": 5,
       
    },
    "cntCalMain1MasterJson": {
        "cntSubmitConfig": cntSubmitConfig
        
    },
   "cntConnectionMasterJson": {
        "cntConnection1": cntConnection1,
        "cntConnection2": cntConnection2
    }
//    "setTimerMasterJson": {
//        "bKnowledgeTime": bKnowledgeTime,
//        "type1Config": type1Config,
//        "timeOfMimic": timeOfMimic,
//		"type1tableAndGraph": type1tableAndGraph,
//		"type2Config": type2Config,
//		"type2Mimic": type2Mimic,
//		"type2tableAndGraph": type2tableAndGraph
//    }
}	
	
//basic knowledge	
var correctVal = (6/answerTotCount).toFixed(2);
var quesPercent1 = (correctVal*100).toFixed(1);
var quesPercent = parseFloat(quesPercent1);
console.log(quesPercent);

//configuration
var correctValConfigType11 = (5/5).toFixed(2);
var configPercent1 = (correctValConfigType11*100).toFixed(1);
var configPercent = parseFloat(configPercent1);
console.log(configPercent);

//connection PNP
var correctValAllConnect = (14/(counterMasterJson.cntConnectionMasterJson.cntConnection1+counterMasterJson.cntConnectionMasterJson.cntConnection2)).toFixed(2);
var correctValAllConnect1 = (correctValAllConnect*100).toFixed(1);
var allConnectPercent = parseFloat(correctValAllConnect1);
console.log(connect1Percent); 

//connection PNP
var correctValpnpConnect = (6/counterMasterJson.cntConnectionMasterJson.cntConnection1).toFixed(2);
var correctValpnpConnect1 = (correctValpnpConnect*100).toFixed(1);
var connect1Percent = parseFloat(correctValpnpConnect1);
console.log(connect1Percent);

//connection NPN
var correctValnpnConnect = (8/counterMasterJson.cntConnectionMasterJson.cntConnection2).toFixed(2);
var correctValnpnConnect1 = (correctValnpnConnect*100).toFixed(1);
var connect2Percent = parseFloat(correctValnpnConnect1);
console.log(connect2Percent);



//Animation
var correctValCalculation = (5/5).toFixed(2);
var CalculationPercent1 = (correctValCalculation*100).toFixed(1);
var CalculationPercent = parseFloat(CalculationPercent1);
console.log(CalculationPercent);

//Observation
var correctValObsevation = (5/5).toFixed(2);
var observationPercent1 = (correctValObsevation*100).toFixed(1);
var observationPercent = parseFloat(observationPercent1);
console.log(observationPercent);

var htm=''
		
		+'<div class="container-fluid">'
		+'  <div class="row">'


		+'<div class="col-md-12">'
		+' <div class="panel remarkBground" >'
		+' <div class="panel-body remark" ><center>Experiment completed successfully!!</center></div>'
		+'</div>'
		+'</div>'
		
		+' </div>'
		
		//Close 1 Row
		+'<div class="container-fluid">'
		+'  <div class="row">'
		+'<div class="col-md-4">'
	
		 +'<br><table class="table table-bordered ">'
		   +'  <thead class="thead-dark">'
		   +'    <tr class="">'
		   +'     <th><center class="">PHASES OF PNP CONNECTION PROXIMITY SENSOR</center></th>'
		   +'     <th><center class="">STATUS</center></th>'
//		   +'	  <th><center class="">TIME</center></th>'
		   +'    </tr>'
		   +' </thead>'
		   +'  <tbody>'
		   +'   <tr>'
		   +'     <td class=""><center>Basic knowledge</center></td>'
		   if(quesPercent<60){
			htm+= '     <td class=""><center class="NotAttained"> Not Attained</center></td>'   
		   }else{
			htm += '     <td class=""><center class="attained"> Attained</center></td>' 
		   }
//		   +'     <td class=""><center class="attained"> Attained</center></td>'
//		   +'	  <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.bKnowledgeTime+'</center></td>'
		  htm +='  </tr>'
		   +'  <tr>'
		   +'     <td class=""><center>Configuration</center></td>'
		   if(configPercent>=60){
		   htm += '     <td class=""><center class="attained">Attained</center></td>'
		   }else{
			htm += '     <td class=""><center class="NotAttained"> Not Attained</center></td>'    
		   }
		//   +'	  <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.type1Config+'</center></td>'
		   htm +=' </tr>'
		   +'   <tr>'
		   +'     <td class=""><center>Connection</center></td>'
		   if(connect1Percent>=60){
		   htm += '     <td class=""><center class="attained">Attained</center></td>'
		   }else{
			htm+= '     <td class=""><center class="NotAttained"> Not Attained</center></td>'    
		   }
		   //+'     <td class=""><center class="attained">Attained</center></td>'
//		   +'	  <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.timeOfMimic+'</center></td>'		  
		   htm +='  </tr>'
		   +'  <tr>'
	       +'     <td class=""><center>Animation</center></td>'
	       if(CalculationPercent>=60){
			 htm +='     <td class=""><center class="attained">Attained</center></td>'  
		   }else{
			  htm+= '     <td class=""><center class="NotAttained"> Not Attained</center></td>'  
		   }
		   //+'     <td class=""><center class="attained">Attained</center></td>'
//		   +'	  <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.timeOfMimic+'</center></td>'
		   htm += ' </tr>'
		   +'   <tr>'
		   +'      <td class=""><center>Observation</center></td>'
		   +'     <td class=""><center class="attained">Attained</center></td>'
//		   +'	  <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.type1tableAndGraph+'</center></td>'		  
		   +'  </tr>'
		   //	
		   //	setTimerMasterJson.bKnowledgeTime = bKnowledgeTime;
		   //		tempJsonTimer.type1Config = type1Config;
		   //		tempJsonTimer.timeOfMimic = timeOfMimic;
		   //		tempJsonTimer.type1tableAndGraph= type1tableAndGraph;
		   //		tempJsonTimer.type2Config = type2Config;
		   //		tempJsonTimer.timeOfMimic2 = timeOfMimic2;
		   //		tempJsonTimer.type2tableAndGraph= type2tableAndGraph;
		   //	
		   +' </tbody>'
		  +' </table>'
		  
		+' </div>'
		+'<div class="col-md-4" id="graph-div" >'

		+' </div>'
		+'<div class="col-md-4">'
		+'<br><table class="table table-bordered ">'
		   +'  <thead class="thead-dark">'
		   +'    <tr class="">'
		   +'     <th><center class="">PHASES OF NPN CONNECTION PROXIMITY SENSOR</center></th>'
		   +'     <th><center class="">STATUS</center></th>'
//		   +'     <th><center class="">TIME</center></th>'
		   +'    </tr>'
		   +' </thead>'
		   +'  <tbody>'
		   +'   <tr>'
		   +'     <td class=""><center>Basic knowledge</center></td>'
		     if(quesPercent<60){
			htm+= '     <td class=""><center class="NotAttained"> Not Attained</center></td>'   
		   }else{
			htm += '     <td class=""><center class="attained"> Attained</center></td>' 
		   }
//		   +'     <td class=""><center class="attained"> Attained</center></td>'
//		   +'     <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.bKnowledgeTime+'</center></td>'
		  
		   htm += '  </tr>'
		   +'  <tr>'
		   +'     <td class=""><center>Configuration</center></td>'
		    if(configPercent>=60){
		   htm += '     <td class=""><center class="attained">Attained</center></td>'
		   }else{
			htm += '     <td class=""><center class="NotAttained">Not Attained</center></td>'    
		   }
		   //+'     <td class=""><center class="attained"> Attained</center></td>'
//		   +'     <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.type2Config+'</center></td>'
		   htm +=' </tr>'
		   +'   <tr>'
		   +'     <td class=""><center>Connection</center></td>'
		   if(connect2Percent>=60){
		   htm += '     <td class=""><center class="attained">Attained</center></td>'
		   }else{
			htm+= '     <td class=""><center class="NotAttained">Not Attained</center></td>'    
		   }
		   //+'     <td class=""><center class="attained"> Attained</center></td>'
//		   +'     <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.type2Mimic+'</center></td>'		  
		   htm +='  </tr>'
		   +'  <tr>'
		   +'     <td class=""><center>Animation</center></td>'
		   if(CalculationPercent>=60){
			 htm +='     <td class=""><center class="attained">Attained</center></td>'  
		   }else{
			  htm+='     <td class=""><center class="NotAttained">Not Attained</center></td>'  
		   }
		   //+'     <td class=""><center class="attained"> Attained</center></td>'
//		   +'     <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.type2Mimic+'</center></td>'
		   htm+=' </tr>'
		   +'   <tr>'
		   +'     <td class=""><center>Observation</center></td>'
		   +'     <td class=""><center class="attained">Attained</center></td>'
//		   +'     <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.type2tableAndGraph+'</center></td>'	  
		   +'  </tr>'
//			+'   <tr>'
//		  +'     <td class="info"><center>Fault detection</center></td>'
//		   +'     <td class="success"><center> Attained</center></td>'	  
//		   +'  </tr>'
		   +' </tbody>'
		  +' </table>'
		+' </div>'
		
		+' </div>'
		+' </div>'
		
		
		//Close 2 Row
		+' <div class="row">'
		+'<div class="col-md-12">'
		+'<div class="col-md-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody">'
		+'<center><span class="heading1"><b>Basic knowledge</b></span></center>'
		+'</div>'
		+'</div>'		
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Total Questions</span></center>'
		+' <div class="panel-body counterPanelGreen">'
		+'<center><span class="valueBox"><b>5</b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">1 </span>'
		+'</div>'
		+'<div class="col-md-6">'
		+'<div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Right Answer</span></center>'
		+'<div class="panel-body counterPanelRed">'
		+'<center><span class="valueBox"><b>'+answerTotCount+'</b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">4 </span>'
		+'</div>'
		+'</div>'

		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel">'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1"><b>PNP CONNECTION</b></span></center></div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Expected Attempt</span></center>'
		+' <div class="panel-body counterPanelGreen">'
		+'<center><span class="valueBox"><b>6</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Actual Attempt</span></center>'
		+' <div class="panel-body counterPanelRed">'
		+'<center><span class="valueBox"><b>'+counterMasterJson.cntConnectionMasterJson.cntConnection1 +'</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		+' </div>'
		
		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1">NPN CONNECTION</span></center></div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Expected Attempt</span></center>'
		+' <div class="panel-body counterPanelGreen">'
		+'<center><span class="valueBox"><b>8</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Actual Attemptt</span></center>'
		+' <div class="panel-body counterPanelRed">'
		+'<center><span class="valueBox"><b>'+counterMasterJson.cntConnectionMasterJson.cntConnection2+'</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		+' </div>'
		+' </div>'
		+' </div>'
		
		$("#mainDiv").html(htm);
		



		let initialData = [
		    { name: 'Questionaries', y: quesPercent },
		    { name: 'Configuration', y: configPercent },
		    { name: 'Mimic', y: allConnectPercent },
		    { name: 'Calculation', y: CalculationPercent },
			{ name: 'Observation', y: observationPercent },
		];

		// Create the pie chart
		let chart = Highcharts.chart('graph-div', {
		    chart: {
		        type: 'pie'
		    },
		    title: {
		        text: 'Student Performance'
		    },
		    series: [{
		        name: 'Observed',
		        colorByPoint: true,
		        data: initialData
		    }],
		    plotOptions: {
		        pie: {
		            dataLabels: {
		                enabled: true,
		                format: '{point.name}: {point.percentage:.1f} %'
		            }
		        }
		    }
		});
				


  }
