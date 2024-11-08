function tableAndGraph()
{$("#tableDesign").html("");
	Table();
	NewGraph();


}
function Table()
{
	
	$("#centerText1").html("MEASUREMENT OF CURRENT");
	currentTable=' <table class="table table-bordered table-hover">'
				 +'   <thead>'
				 +'     <tr>'
				 +'       <th colspan="4"><center>MATERIAL TYPE  '+currentMasterJson.demo[0].material+'</center></th>'
//				 +'       <th colspan="2">Measurement of Thinkness</th>'
				
				 +'     </tr>'
				 +'     <tr>'
				 +'       <th>Current (ampere)</th>'
				 +'       <th>Thickness (mm)</th>'
				 +'       <th>fluxDensity</th>'
				 +'       <th>Voltage Output(V)</th>'
				 +'     </tr>'
				 +'   </thead>'
				 +'    <tbody>'
				 for (var i = 0; i < currentMasterJson.demo.length; i++) {
					 currentTable+=' <tr>'
				       +' <td style="color:red;">'+currentMasterJson.demo[i].current+'</td>'
				       +' <td>'+currentMasterJson.demo[i].thickness+'</td>'
				       +' <td>'+currentMasterJson.demo[i].fluxDensity+'</td>'
				       +' <td>'+currentMasterJson.demo[i].VoltageOutput+'</td>'
				       +' </tr>'
				 }  
	currentTable+='   </tbody>'
				+' </table>'
	
				$("#main-div-conf").html(currentTable);
	
	
	$("#centerText2").html("MEASUREMENT OF THICKNESS");
	
	currentTable=' <table class="table table-bordered table-hover">'
		 +'   <thead>'
		 +'     <tr>'
		 +'       <th colspan="4"><center>MATERIAL TYPE  '+thicknessMasterJson.demo[0].material+'</center></th>'
		 +'     </tr>'
		 +'     <tr>'
		 +'       <th>Thickness (mm)</th>'
		 +'       <th>Current (ampere)</th>'
		 +'       <th>fluxDensity</th>'
		 +'       <th>Voltage Output(V)</th>'
		 
		 +'     </tr>'
		 +'   </thead>'
		 +'    <tbody>'
		 for (var i = 0; i < thicknessMasterJson.demo.length; i++) {
			 currentTable+=' <tr>'
				 +' <td style="color:red;">'+thicknessMasterJson.demo[i].thickness+'</td>'
		       +' <td>'+thicknessMasterJson.demo[i].current+'</td>'
		      
		       +' <td>'+thicknessMasterJson.demo[i].fluxDensity+'</td>'
		       +' <td>'+thicknessMasterJson.demo[i].VoltageOutput+'</td>'
		       +' </tr>'
		 }
currentTable+='   </tbody>'
		+' </table>'

		$("#canvas-div").html(currentTable);
}
function NewGraph(){
  var xdata=[];
	var ydata=[];
	var graphData1=[];
	for (var i = 0; i < currentMasterJson.demo.length; i++)
		 {
			xdata[i] = parseFloat(currentMasterJson.demo[i].current);
			ydata[i] = parseFloat(currentMasterJson.demo[i].VoltageOutput);
			
		}
	ydata.sort(function(a, b) { return a - b });
	xdata.sort(function(a, b) { return a - b });
	
	for (var j = 0; j < currentMasterJson.demo.length; j++) {
			tempArr = [];
			tempArr[0] = xdata[j];
			tempArr[1] = ydata[j];
			graphData1.push(tempArr);

	}
		console.log("xdata "+xdata);
		console.log("ydata "+ydata);
		
		console.log("graphData1 "+graphData1);
		
		console.log("After xdata "+xdata);
		console.log("After ydata "+ydata);
		Xmax = parseFloat(xdata[xdata.length - 1]);
		Ymax = parseFloat(ydata[ydata.length - 1]);
		console.log("Xmax "+Xmax);
		console.log("Ymax "+Ymax);
		Xmin = parseFloat(xdata[0]);
		Ymin = parseFloat(ydata[0]);
		
		console.log("Xmin "+Xmin);
		console.log("Ymin "+Ymin);
		console.log(" graph data  " + graphData1);
	
	
	Highcharts.chart('Graph1', {
		  chart: {
		    type: 'line',
		    marginTop: 80,
		    marginBottom: 80,
		    marginLeft: 50,
		    marginRight: 50,
		    events: {
		      render: function() {
		        var chart = this;

		        console.log(chart);

		        if (!chart.customText1) {
		          chart.customText1 = chart.renderer.text('Flex', 0, 10).css({
		            color: '#666666',
		            fontSize: '20px'
		          }).add();
		        }
		        chart.customText1.attr({
		          x: chart.chartWidth - chart.customText1.getBBox().width - chart.plotLeft,
		          y: chart.plotTop - 20
		        });

		        if (!chart.customText2) {
		          chart.customText2 = chart.renderer.text(
		            'Anchor',
		            chart.plotLeft,
		            chart.plotTop + chart.plotHeight + 30
		          ).css({
		            color: '#666666',
		            fontSize: '20px'
		          }).add();
		        }

		        if (!chart.customText3) {
		          chart.customText3 = chart.renderer.text('', 450, 160).css({
		            color: '#666666',
		            fontSize: '20px'
		          }).attr({
		            zIndex: 3
		          }).add();
		        }

		        if (!chart.customText4) {
		          chart.customText4 = chart.renderer.text('', 350, 360).css({
		            color: '#666666',
		            fontSize: '20px'
		          }).attr({
		            zIndex: 3
		          }).add();
		        }

		        if (!chart.customText5) {
		          chart.customText5 = chart.renderer.text('', 120, 450).css({
		            color: '#666666',
		            fontSize: '20px'
		          }).attr({
		            zIndex: 3
		          }).add();
		        }
		      }
		    }
		  },

		  title: {
		    text: ''
		  },

		  xAxis: {
		    gridLineWidth: 1,
//		    tickInterval: 0.5,
		    min: 0,
		    max: Xmax,
		    lineWidth: 1,
		    lineColor: '#d2d2d2',
		    offset: -220,
		    title: {
		      text: null
		    }
		  },

		  yAxis: {
//		    tickInterval: 0.5,
		    min: 0,
		    max: Ymax,
		    lineWidth: 1,
		    lineColor: '#d2d2d2',
		    offset: -250,
		    title: {
		      text: null
		    }
		  },

		  plotOptions: {
		    series: {
		      states: {
		        inactive: {
		          opacity: 1
		        }
		      }
		    }
		  },

		  series: [{
		    name: 'Target',
		    type: 'polygon',
		    showInLegend: false,
		   
		    color: 'rgba(223, 83, 83, 0.1)',
		    enableMouseTracking: false,
		  }, {
		    name: '',
		   
		    marker: {
		      symbol: 'circle'
		    },
		    
		  }, {
		    name: '',
		   
		    marker: {
		      symbol: 'circle'
		    },
		    data: graphData1
		  }]
		});

}
