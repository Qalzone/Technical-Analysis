
function run() {
	


	var divCanv = document.getElementById("canvPlug");
	
	if (divCanv == null) {
	
		var chartoverlay = document.createElement('div');
		chartoverlay.id = "canvPlug";
		chartoverlay.style.position = "fixed";
		chartoverlay.style.top = "10px";
		chartoverlay.style.left = "10px";
		document.body.appendChild(chartoverlay);
		
		var pluss = document.createElement('a');
		pluss.id = "pluss";
		pluss.href = "javascript:undefined";
		pluss.innerHTML = "🕂";
		pluss.style.position = "fixed";
		pluss.style.top = "0px";
		pluss.style.left = "0px";
    	document.body.appendChild(pluss);
    	
    	
		
    	$("#canvPlug").resizable();
  
		
		$("#canvPlug").wPaint();
		
			
	}

	else if (divCanv != null) {
	
			$("#canvPlug").toggle();
			$("#pluss").toggle();
	}
 }


		document.body.addEventListener("mousemove", function(event) {

			if ($("#pluss").is(":focus")) {
  					var div = document.getElementById('canvPlug');
    		
    				div.style.top = event.clientY + 5 + 'px';
    				div.style.left = event.clientX + 5 + 'px';
    				
    				var pluss = document.getElementById('pluss');
    		
    				pluss.style.top = event.clientY - 5 + 'px';
    				pluss.style.left = event.clientX - 5 + 'px';
			}    		
    		
		});
		
		$('body').mouseup(function(){
    		$("#pluss").blur();
		});
		
		

  	
  		
  		
 
  
  
  