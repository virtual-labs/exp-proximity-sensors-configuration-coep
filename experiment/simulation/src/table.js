function tableCreate(masterJson)		
{
//			console.log(masterJson);
			var tableMainDiv=""
					
					+ '<div class="well well-lg">'
					+'<center class="blink"> TAKE ALL MATERIAL TYPE </center>'
					+'<center><b>Configuration Type : '+masterJson.demo[0].configType+'</b></center>'
				    +'<table class="table table-bordered table-responsive" >'
					+ ' <thead>'

					+ '  <tr>'
					+'<th scope="col-sm-2"><center>Sr. No.</center></th>'
					+ '  <th scope="col-sm-2"><center>CONFIGURATION TYPE</center></th>'
					+ '  <th scope="col-sm-2"><center>SUPPLY VOLTAGE</center></th>'
					+ '   <th scope="col-sm-3"><center >SENSOR TYPE </center></th>'
					+ '  <th scope="col-sm-3"><center>MATERIAL TYPE</center></th>'
					
					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
				for (var i = 0; i < masterJson.demo.length; i++) {
					tableMainDiv += '<tr>'
								+ '<td scope="col-sm-2"><center>' + (i+1) + '</center></td>'
								+ '<td scope="col-sm-2"><center>' + masterJson.demo[i].configType + '</center></td>'
								+ ' <td scope="col-sm-2"><center>' + masterJson.demo[i].voltage + '</center></td>'
								+' <td scope="col-sm-3"><center style="color:red;">' + masterJson.demo[i].sensorSelect + '</center></td>'
								+'   <td scope="col-sm-3"><center style="color:red;">' + masterJson.demo[i].materialSelect + '</center></td>'
						        
						        + ' </tr>'
				}
				tableMainDiv += ' </tbody>'
					 + '  </table>'
					 + ' </div>'
					
					
				+ ' <!-- Modal -->'
				+ '<div class="modal fade" id="modelMsg111" role="dialog">'
				+ ' <div class="modal-dialog modal-md">'
				+ '    <div class="modal-content">'
				+ '     <div class="modal-header">'
				
				+ '       <h4 class="modal-title">Message box</h4>'
				+ '     </div>'
				+ '     <div class="modal-body" id="modelBody">'
				
				+ '     </div>'
				+ '     <div class="modal-footer">'
				+ '       <button type="button" class="btn btn-danger" id = "ok" data-dismiss="modal" >Okay</button>'
				+ '     </div>'
				+ '   </div>'
				+ ' </div>'
				+ '</div>'
				+'</div>'
				+ '</div>'
				+ ' </div>'
					
					
				
					
					 if(i>=5)
						 {
//						 console.log('appCount'+connectionCount);
						 if(connectionCount==0){
							 $("#modelBody").html("SELECT ANOTHER APPLICATION  ");
							 tableMainDiv+='<button type="button" class="btn btn-danger" id="continue" style="width:100%;margin-top: -6px;margin-bottom: 30px;"  >SELECT ANOTHER CONFIGURATION TYPE   </button>'	 
						 }
						 else
							 {
							
//							 $("#modelBody").html('<img src="images/cong.gif" class="img-fluid" > ');
							 $("#checkConfg").prop('disabled',true);
 							tableMainDiv +='<button type="button" class="btn btn-danger" id="finish" data-toggle="modal" data-target="#modelMsg111" style="width:100%;margin-top: -6px;margin-bottom: 30px;"  >FINISH</button>'					
							 } 
						 
						 
				      }
				      
				      
				
				$("#sub-main-div1").html(tableMainDiv);
				
	$("#finish").click(function(){
		alert("Your experiment has been successfully completed");	
//		$("#MODELMSG111").HTML('<IMG SRC="IMAGES/CONG.GIF" CLASS="IMG-FLUID" >');
		$("#finish").prop('disabled',true);
//		console.log("Finish EXP.................");
	});
					

				$("#continue").click(function() {
					
					connectionCount++;
					if(connectionCount==1)
					{
						$("#tableDesign").html("");
						$("#sub-main-div1").html("");
						$("#main-div-conf").html("");
	             		$("#canvas-div").html("");
	            	    $("#configConnection").prop('disabled',false);
						
						 $("#continue").prop('hidden',true);
						//$("#canvas-div").html("<img src='images/sensor_created_img.png' class='img-fluid' >");
						mainPage();
						
						
//						console.log("connetionCount="+connectionCount);				
						
					}					
				});
			
			
			
}