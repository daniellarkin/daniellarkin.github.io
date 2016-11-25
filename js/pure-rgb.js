$(document).ready(function() {    
       

	$('#loadingDiv').hide();  // hide it initially

	//LOADING POPUP
        //Click the button event!
	    	
	$("#button1").click(function(){
		//centering with css
		centerPopup('p1');
		//load popup
		loadPopup('p1');
	});
				
	$("#button2").click(function(){
		//centering with css
		centerPopup('p2');
		//load popup
		loadPopup('p2');
	});

	$("#button3").click(function(){
		//centering with css
		centerPopup('p3');
		//load popup
		loadPopup('p3');
	});


        //----------------------------------------------------------------------------------------------
	$("#ln-about").click(function(){
		loadPopup('about');
	});

	$("#ln-terms").click(function(){
		loadPopup('terms');
	});
	$("#ln-contact").click(function(){
		loadPopup('contact');
	});

	$("#ln-bug").click(function(){
		loadPopup('bug');
	});



        //----------------------------------------------------------------
	//CLOSING POPUP
        //----------------------------------------------------------------
        //Click the x event!
        $("#popupContactClose1").click(function(){
		disablePopup();
 	});

	$("#popupContactClose2").click(function(){
		disablePopup();
	});
        
	$("#popupContactClose3").click(function(){
		disablePopup();
	});

	$("#popupContactClose3").click(function(){
		disablePopup();
	});

	$("#popupAboutClose").click(function(){
		disablePopup();
	});

	$("#popupTermsClose").click(function(){
		disablePopup();
	});

	$("#popupContactClose").click(function(){
		disablePopup();
	});
	$("#popupBugReportClose").click(function(){
		disablePopup();
	});

        //----------------------------------------------------------------
	//Click out event!
        //----------------------------------------------------------------
	$("#backgroundPopup").click(function(){
		disablePopup();
	});
        
	//Show progress bar for image upload
	$("#upload_img").click(function(){
		//show_upload_progress();
	});
        
   $('#new_photo_upload').submit(function() {
   	$("#upload_progress").empty().html('<p><img src="imgs/ajax-loader2.gif" /><p>');
   	$('#new_photo_upload').submit();
   });

   $(document).keyup(function(e) {
   	if( e.keyCode==27 ){
			disablePopup();
		}
  	});

   $('#mycarousel').jcarousel({
   	vertical: true,
      scroll: 2
  	});
});
	
$('#main_stage').load(function() {  
	//alert('Image Loaded');  
        
   $("#loadingDiv").css({
		"width": $("#main_stage").attr("width"),
		"height": $("#main_stage").attr("height")
   });
}); 

function show_upload_progress() {
  $("#upload_progress").html("<img src='imgs/ajax-loader2.gif' />");

  //window.setTimeout(function()
  // {
  //      $("#new_photo_upload").submit();
  //  }, 500);


};


function preload(images) {
    if (document.images) {
        var i = 0;
        var imageArray = new Array();
        imageArray = images.split(',');
        var imageObj = new Image();
        for(i=0; i<=imageArray.length-1; i++) {
          //document.write('<img src="' + imageArray[i] + '" />');// Write to page (uncomment to check images)
            imageObj.src=images[i];
        }
    }
}

function reloadImg(fname) {
  if (fname){
    var d=new Date();      
    document.getElementById("main_stage").src=fname+"?a="+d.getTime();
  }
  else {
    document.getElementById("main_stage").src='main_stage.jpg'+"?a="+d.getTime();
  }
}

//SETTING UP OUR POPUP
//0 means disabled; 1 means enabled;
var popupStatus1 = 0;
var popupStatus2 = 0;
var popupStatus3 = 0;
var popupStatus4 = 0;
var popupStatus5 = 0;
var popupStatus6 = 0;
var popupStatus7 = 0;

//loading popup with jQuery magic!
function loadPopup(pNo){
	//loads popup only if it is disabled
	if(popupStatus1==0 & popupStatus2==0 & popupStatus3==0 & popupStatus4==0 & popupStatus5==0 & popupStatus6==0 & popupStatus7==0 ){
		
		$("#backgroundPopup").css({
			"opacity": "0.8"
		});
		$("#backgroundPopup").fadeIn("slow");


		//request data for centering
		var windowWidth = document.documentElement.clientWidth;
		var windowHeight = document.documentElement.clientHeight;
		var popupHeight = $("#popupContact1").height();
		var popupWidth = $("#popupContact1").width();


		if (pNo=='p2'){		
			$("#popupContact2").fadeIn("slow");
			popupStatus2 = 1;
		} else if (pNo=='p3'){		
			$("#popupContact3").fadeIn("slow");
			popupStatus3 = 1;

		} else if (pNo=='about'){		
			$("#popupAbout").css({
				"position": "absolute",
				"top": windowHeight/2-popupHeight/2,
				"left": windowWidth/2-popupWidth/2
			});
			$("#popupAbout").fadeIn("slow");
			popupStatus4 = 1;
	

		} else if (pNo=='terms'){		
			$("#popupTerms").css({
				"position": "absolute",
				"top": windowHeight/2-popupHeight/2,
				"left": windowWidth/2-popupWidth/2
			});
			
			$("#popupTerms").fadeIn("slow");
			popupStatus5 = 1;

		} else if (pNo=='contact'){		
			$("#popupContact").css({
				"position": "absolute",
				"top": windowHeight/2-popupHeight/2,
				"left": windowWidth/2-popupWidth/2
			});			
			$("#popupContact").fadeIn("slow");
			popupStatus6 = 1;

		} else if (pNo=='bug'){		
			$("#popupBugReport").css({
				"position": "absolute",
				"top": windowHeight/2-popupHeight/2,
				"left": windowWidth/2-popupWidth/2
			});			
			$("#popupBugReport").fadeIn("slow");
			popupStatus7 = 1;

		} else {		
			$("#popupContact1").fadeIn("slow");
			popupStatus1 = 1;
		}
	}
}

//disabling popup with jQuery magic!
function disablePopup(){
	//disables popup only if it is enabled
	if(popupStatus1==1 || popupStatus2==1 ||popupStatus3==1 || popupStatus4==1 || popupStatus5==1 ||popupStatus6==1 ||popupStatus7==1 ){
		$("#backgroundPopup").fadeOut("slow");

		$("#popupContact1").fadeOut("slow");
		$("#popupContact2").fadeOut("slow");
		$("#popupContact3").fadeOut("slow");
		$("#popupAbout").fadeOut("slow");
		$("#popupTerms").fadeOut("slow");
		$("#popupContact").fadeOut("slow");
		$("#popupBugReport").fadeOut("slow");
		popupStatus1 = 0;
		popupStatus2 = 0;
		popupStatus3 = 0;
		popupStatus4 = 0;
		popupStatus5 = 0;
		popupStatus6 = 0;
		popupStatus7 = 0;
	}
}

//centering popup
function centerPopup(pNo){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $("#popupContact1").height();
	var popupWidth = $("#popupContact1").width();
	//centering


	if (pNo=='p1'){
		$("#popupContact1").css({
			"position": "absolute",
			"top": windowHeight/2-popupHeight/2,
			"left": windowWidth/2-popupWidth/2
		});
	} else if (pNo=='p2'){
		$("#popupContact2").css({
			"position": "absolute",
			"top": windowHeight/2-popupHeight/2,
			"left": windowWidth/2-popupWidth/2
		});
	}
	else if (pNo=='p3'){
		$("#popupContact3").css({
			"position": "absolute",
			"top": windowHeight/2-popupHeight/2,
			"left": windowWidth/2-popupWidth/2
		});
	}
	//only need force for IE6
	
	$("#backgroundPopup").css({
		"height": windowHeight
	});
	
}