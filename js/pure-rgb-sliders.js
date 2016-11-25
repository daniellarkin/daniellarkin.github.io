//-------------------------------------------------------------------------------
//
// PROC_IMG 
// 
//-------------------------------------------------------------------------------
var img_value = "";
var img_proc=0;

function reset_sliders(){

	$("#slider1").slider("value", 0);
	$("#slider2").slider("value", 0);
	$("#slider3").slider("value", 0);
	$("#slider4").slider("value", 0);
	$("#slider5").slider("value", 0);
	$("#slider6").slider("value", 0);
	$("#slider7").slider("value", 0);
	$("#slider8").slider("value", 0);
	$("#slider9").slider("value", 0);
	$("#slider10").slider("value", 0);
	$("#slider11").slider("value", 0);
	$("#slider12").slider("value", 0);
	$("#slider13").slider("value", 0);
	$("#slider14").slider("value", 0);
	$("#slider15").slider("value", 0);
	$("#slider16").slider("value", 0);
	$("#slider17").slider("value", 0);
	$("#slider18").slider("value", 0);
	$("#slider19").slider("value", 0);
	$("#slider20").slider("value", 0);
	$("#slider21").slider("value", 0);
	$("#slider22").slider("value", 0);
	$("#slider23").slider("value", 0);

	$("#exposure_slider").val(0); 	
        $("#recovery_slider").val(0); 
	$("#fill_slider").slider("value",0); 
	$("#black_slider").slider("value",0); 
	$("#brightness_slider").slider("value",0); 
	$("#contrast_slider").slider("value",0); 
	$("#clarity_slider").slider("value",0); 
	$("#vibrance_slider").slider("value",0); 
	$("#saturation_slider").slider("value",0); 
	$("#red_slider").slider("value",0); 
	$("#green_slider").slider("value",0); 
	$("#blue_slider").slider("value",0); 
	$("#rotate_slider").slider("value",0); 
	$("#x1_slider").slider("value",0); 
	$("#y1_slider").slider("value",0); 
	$("#x2_slider").slider("value",0); 
	$("#y2_slider").slider("value",0); 
	$("#vig_amt_slider").slider("value",0); 
	$("#vig_mid_slider").slider("value",0); 
	$("#sharp_rad_slider").slider("value",1); 
	$("#sharp_amt_slider").slider("value",0); 
	$("#sharp_thresh_slider").slider("value",0); 
	$("#nr_amt_slider").slider("value",0); 
        $('input[name=xpro1]').attr('checked', false);
        $('input[name=xpro2]').attr('checked', false);
        $('input[name=bleach]').attr('checked', false);
        $('input[name=vig1]').attr('checked', false);
        $('input[name=vig2]').attr('checked', false);
}

function proc_img(){
		
	img_proc=1;

	var dbg_msg = '<hr>DEBUG INFORMATION<hr>';
	
	var val = $("#slider1").slider("value"); 
        var exposure = val;
	dbg_msg = dbg_msg + "Exposure=" + val + "; ";

	val = $("#slider2").slider("value");
        var recovery = val;
	dbg_msg = dbg_msg + "Recovery=" + val + "; ";

	val = $("#slider3").slider("value");
   	var fill = val;
	var dbg_msg = dbg_msg + "Fill=" + val + " ";

	val = $("#slider4").slider("value");
   	var blacks = val;
   	dbg_msg = dbg_msg + "Blacks=" + val + "; ";

	val = $("#slider5").slider("value");
   	var brightness = val;
   	dbg_msg = dbg_msg + "Brightness=" + val + "; ";

	val = $("#slider6").slider("value");
   	var contrast = val;
   	dbg_msg = dbg_msg + "Contrast=" + val + "; ";

	val = $("#slider7").slider("value");
   	var clarity = val;
   	dbg_msg = dbg_msg + "Clarity=" + val + "; ";
	
	val = $("#slider8").slider("value");
   	var vibrance = val;
   	dbg_msg = dbg_msg + "Vibrance=" + val + "; ";

	val = $("#slider9").slider("value");
   	var saturation = val;
   	dbg_msg = dbg_msg + "Saturation=" + val + "; ";

	val = $("#slider10").slider("value");   
   	var rotation = val;
   	dbg_msg = dbg_msg + "Rotation=" + val + "; ";				

	val = $("#slider11").slider("value");   
   	var x1 = val;
   	dbg_msg = dbg_msg + "X1=" + val + "; ";				

	val = $("#slider12").slider("value");   
   	var y1 = val;
   	dbg_msg = dbg_msg + "Y1=" + val + "; ";				

	val = $("#slider13").slider("value");   
   	var x2 = val;
   	dbg_msg = dbg_msg + "X2=" + val + "; ";				

	val = $("#slider14").slider("value");   
   	var y2 = val;
   	dbg_msg = dbg_msg + "Y2=" + val + "; ";				

	val = $("#slider15").slider("value");   
   	var vig_amt = val;
   	dbg_msg = dbg_msg + "vig_amt=" + val + "; ";				

	val = $("#slider16").slider("value");   
   	var vig_mid = val;
   	dbg_msg = dbg_msg + "vig_mid=" + val + "; ";				

	val = $("#slider17").slider("value");   
   	var sharp_rad = val;
   	dbg_msg = dbg_msg + "sharp_rad=" + val + "; ";				

	val = $("#slider18").slider("value");   
   	var sharp_amt = val;
   	dbg_msg = dbg_msg + "sharp_amt=" + val + "; ";				
	val = $("#slider19").slider("value");   
   	var sharp_thresh = val;
   	dbg_msg = dbg_msg + "sharp_thresh=" + val + "; ";				
				
	val = $("#slider20").slider("value");   
   	var nr_amt = val;
	if (nr_amt == 0)
	nr_amt = 1;
   	dbg_msg = dbg_msg + "nr_amt=" + val + "; ";				

	val = $("#slider21").slider("value");   
   	var red = val;
   	dbg_msg = dbg_msg + "Red=" + val + "; ";				

	val = $("#slider22").slider("value");   
   	var green = val;
   	dbg_msg = dbg_msg + "Green=" + val + "; ";				

	val = $("#slider23").slider("value");   
   	var blue = val;
   	dbg_msg = dbg_msg + "Blue=" + val + "; ";				

	val = $("#chkb-hflip").prop("checked");   
   	var hflip = val;
   	dbg_msg = dbg_msg + "hflip=" + val + "; ";				

	val = $("#chkb-vflip").prop("checked");   
   	var vflip = val;
   	dbg_msg = dbg_msg + "vflip=" + val + "; ";				

	val = $("#chkb-xpro1").prop("checked");   
   	var xpro1 = val;
   	dbg_msg = dbg_msg + "xpro1=" + val + "; ";				

	val = $("#chkb-xpro2").prop("checked");   
   	var xpro2 = val;
   	dbg_msg = dbg_msg + "xpro2 =" + val + "; ";				

	val = $("#chkb-bleach").prop("checked");   
   	var bleach = val;
   	dbg_msg = dbg_msg + "bleach =" + val + "; ";				

	val = $("#chkb-vig1").prop("checked");   
   	var vig1 = val;
   	dbg_msg = dbg_msg + "vig1=" + val + "; ";				

	val = $("#chkb-vig2").prop("checked");   
   	var vig2 = val;
   	dbg_msg = dbg_msg + "vig2 =" + val + "; ";				

	$('#dbg-ctrl').html(dbg_msg);		

      	img_value = $("#main_stage").attr("src");


        endPtr = img_value.indexOf('_view');
	if (endPtr != -1){ 

		base_img = img_value.substr(0,endPtr); 
		ext = "_opt.jpg";
		img_value = base_img + ext;
	}

	$.post( "cmd_dispatch.php", {
            img: img_value, 
            p_exposure:exposure,
	    p_recovery:recovery,
	    p_fill: fill,
	    p_blacks:blacks,
	    p_brightness:brightness,
	    p_contrast:contrast,
	    p_clarity: clarity,
	    p_vibrance: vibrance,
	    p_saturation:saturation,
	    p_rotation: rotation,
	    p_x1: x1,
	    p_y1: y1,
	    p_x2: x2,
	    p_y2: y2,
	    p_vig_mid: vig_mid,
	    p_vig_amt: vig_amt,
	    p_sharp_rad: sharp_rad, 
	    p_sharp_amt: sharp_amt, 
	    p_sharp_thresh: sharp_thresh,
            p_nr_amt: nr_amt,
            p_red :red,
            p_green : green,
            p_blue : blue,
	    p_vflip: vflip,
            p_hflip: hflip,
            p_xpro1: xpro1,
            p_xpro2: xpro2,
            p_bleach: bleach,
            p_vig1: vig1,
            p_vig2: vig2}, function(){
	    var temp = new Array();
            temp = img_value.split('.');
            	
            // if last three characters are src, then remove these 
            // and replace with view
            // otherwise just reload the file

            endPtr = img_value.indexOf('_opt');

 	    ext = '_view.jpg'; 
	    base= img_value.substr(0,endPtr); 
	    new_file = base + ext;
	    d = new Date();
         	
            $("#main_stage").attr("src", new_file+"?"+d.getTime()).fadeIn('slow');

	    // THIS NEEDS TO BE DELAYED UNTIL THE IMAGE IS LOADED	
            $('#loadingDiv').fadeOut('fast');
               
      	});		
       };

//----------------------------------------------------------------
$(function() {

      	img_value = $("#main_stage").attr("src");

	// Reset the default image
	$('#reset_img').click(function(){
        	
	        // THIS IS REALLLLY SLOW
                //var src = $('#main_stage').attr("src").replace("view","opt");
	        
                $("#main_stage").attr("src", img_value);
                reset_sliders();
	});

	$('#chkb-vflip:checkbox').click(function(){
        	$('#loadingDiv').fadeIn('fast');
                proc_img();
	});

	$('#chkb-hflip:checkbox').click(function(){
        	$('#loadingDiv').fadeIn('fast');
                proc_img();
	});


	$('#chkb-xpro1:checkbox').click(function(){
        	$('#loadingDiv').fadeIn('fast');
                proc_img();
	});

	$('#chkb-xpro2:checkbox').click(function(){
        	$('#loadingDiv').fadeIn('fast');
                proc_img();
	});

	$('#chkb-bleach:checkbox').click(function(){
        	$('#loadingDiv').fadeIn('fast');
                proc_img();
	});

	$('#chkb-vig1:checkbox').click(function(){
        	$('#loadingDiv').fadeIn('fast');
                proc_img();
	});

	$('#chkb-vig2:checkbox').click(function(){
        	$('#loadingDiv').fadeIn('fast');
                proc_img();
	});


        $("#main_stage")
        .mouseover(function() { 
            if ( $("#chkb-rollover").prop("checked") && img_proc==1) {
        	var src = $(this).attr("src").replace("view","opt");
            	$(this).attr("src", src);
	    }
        })       
        .mouseout(function() {
            if ( $("#chkb-rollover").prop("checked") && img_proc==1 ) {
            	var src = $(this).attr("src").replace("opt","view");
            	$(this).attr("src", src);
		}
        });
						
	var sliderOpts1 = {

      		value: 0,
		animate: true,
		handle: "ui-slider-handle",
		min: -20,			
		max: 20,
		steps: 3,
		
		create: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#exposure_slider").val($("#slider1").slider("value"));
		},

		change: function() {
			//get the new value
			var val = parseFloat($(this).slider("value"));
			val = val / 10;
		        var message = "Slider value =" + val;
			//$("#exposure_slider").val($("#slider1").slider("value"));
			$("#exposure_slider").val(val);
        					
        	$('#loadingDiv').fadeIn('fast');
                proc_img();
		},

		slide: function() {
			var val = parseFloat($(this).slider("value"));
			val = val / 10;
			var message = "Slider value =" + val;
    		//$("#exposure_slider").val($("#slider1").slider("value"));
			$("#exposure_slider").val(val);
      }
											
	};

	
	$("#exposure_slider").change(function() {
		//alert('Handler for .change() called.');
		var message = "Slider value =" + parseInt($("#exposure_slider").val());
		$("#slider1").slider("value", parseInt($("#exposure_slider").val()));
	});
	
	$('#exposure_slider_form').submit(function() {
		alert('Handler for .submit() called.');
		return false;
	});
	
	//define click handler for button
	$("#move").click(function(e, ui){
		//set slider value
		$("#slider1").slider("value", 50);
	});			
					
	$("#slider1").slider(sliderOpts1);
	
   //---------------------------------------------------------------------------	
	var sliderOpts2 = {

      value: 0,
		animate: true,
		handle: "ui-slider-handle",
		min: 0,			
		max: 100,
		steps: 100,
		
		create: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#recovery_slider").val($("#slider2").slider("value"));
		},

		change: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#recovery_slider").val($("#slider2").slider("value"));
        					
        	$('#loadingDiv').fadeIn('fast');
			proc_img();
        	},

		slide: function() {
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
    		$("#recovery_slider").val($("#slider2").slider("value"));
      }
											
	};

	
	$("#recovery_slider").change(function() {
		//alert('Handler for .change() called.');
		var message = "Slider value =" + parseInt($("#recovery_slider").val());
		$("#slider2").slider("value", parseInt($("#recovery_slider").val()));
	});
	
	$('#recovery_slider_form').submit(function() {
		alert('Handler for .submit() called.');
		return false;
	});
	
	//define click handler for button
	$("#move").click(function(e, ui){
		//set slider value
		$("#slider2").slider("value", 50);
	});			
	
	$("#slider2").slider(sliderOpts2);

	//---------------------------------------------------------------------------	
	var sliderOpts3 = {

      value: 0,
		animate: true,
		handle: "ui-slider-handle",
		min: 0,			
		max: 100,
		steps: 100,
		
		create: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#fill_slider").val($("#slider3").slider("value"));
		},

		change: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#fill_slider").val($("#slider3").slider("value"));
        	proc_img();        					
        	},

		slide: function() {
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
    		$("#fill_slider").val($("#slider3").slider("value"));
      }
											
	};

	
	$("#exposure_slider").change(function() {
		//alert('Handler for .change() called.');
		var message = "Slider value =" + parseInt($("#fill_slider").val());
		$("#slider3").slider("value", parseInt($("#fill_slider").val()));
	});
	
	$('#exposure_slider_form').submit(function() {
		alert('Handler for .submit() called.');
		return false;
	});
	
	$("#slider3").slider(sliderOpts3);

	//---------------------------------------------------------------------------	
	var sliderOpts4 = {

      value: 0,
		animate: true,
		handle: "ui-slider-handle",
		min: 0,			
		max: 100,
		steps: 100,
		
		create: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#black_slider").val($("#slider4").slider("value"));
		},

		change: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#black_slider").val($("#slider4").slider("value"));
        					
        	$('#loadingDiv').fadeIn('fast');
			proc_img();
		},

		slide: function() {
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
    		$("#black_slider").val($("#slider4").slider("value"));
      }
											
	};

	
	$("#black_slider").change(function() {
		//alert('Handler for .change() called.');
		var message = "Slider value =" + parseInt($("#black_slider").val());
		$("#slider4").slider("value", parseInt($("#black_slider").val()));
	});
	
	$('#black_slider_form').submit(function() {
		alert('Handler for .submit() called.');
		return false;
	});
	
	$("#slider4").slider(sliderOpts4);

	//---------------------------------------------------------------------------	
	var sliderOpts5 = {

      value: 0,
		animate: true,
		handle: "ui-slider-handle",
		min: -100,			
		max: 100,
		steps: 100,
		
		create: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#brightness_slider").val($("#slider5").slider("value"));
		},

		change: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#brightness_slider").val($("#slider5").slider("value"));
        					
        	$('#loadingDiv').fadeIn('fast');
			proc_img();
		},

		slide: function() {
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
    		$("#brightness_slider").val($("#slider5").slider("value"));
      }
											
	};

	
	$("#brightness_slider").change(function() {
		//alert('Handler for .change() called.');
		var message = "Slider value =" + parseInt($("#brightness_slider").val());
		$("#slider5").slider("value", parseInt($("#brightness_slider").val()));
	});
	
	$('#brightness_slider_form').submit(function() {
		alert('Handler for .submit() called.');
		return false;
	});
	
	$("#slider5").slider(sliderOpts5);

	//---------------------------------------------------------------------------	
	var sliderOpts6 = {

      value: 0,
		animate: true,
		handle: "ui-slider-handle",
		min: -100,			
		max: 100,
		steps: 100,
		
		create: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#contrast_slider").val($("#slider6").slider("value"));
		},

		change: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#contrast_slider").val($("#slider6").slider("value"));
        					
        	$('#loadingDiv').fadeIn('fast');
			proc_img();
		},

		slide: function() {
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
    		$("#contrast_slider").val($("#slider6").slider("value"));
      }
											
	};

	
	$("#contrast_slider").change(function() {
		//alert('Handler for .change() called.');
		var message = "Slider value =" + parseInt($("#contrast_slider").val());
		$("#slider6").slider("value", parseInt($("#contrast_slider").val()));
	});
	
	$('#contrast_slider_form').submit(function() {
		alert('Handler for .submit() called.');
		return false;
	});
	
	$("#slider6").slider(sliderOpts6);

	//---------------------------------------------------------------------------	
	var sliderOpts7 = {

                value: 0,
		animate: true,
		handle: "ui-slider-handle",
		min: -100,			
		max: 100,
		steps: 200,
		
		create: function() {
			var val = $(this).slider("value");
			//var message = "Slider value =" + val;
			$("#clarity_slider").val($("#slider7").slider("value"));
		},

		change: function() {
			//get the new value
			var val = $(this).slider("value");
			//var message = "Slider value =" + val;
			$("#clarity_slider").val($("#slider7").slider("value"));
        					
        		$('#loadingDiv').fadeIn('fast');
			proc_img();
		},

		slide: function() {
			var val = $(this).slider("value");
			//var message = "Slider value =" + val;
    			$("#clarity_slider").val($("#slider7").slider("value"));
      		}
											
	};

	
	$("#clarity_slider").change(function() {
		//alert('Handler for .change() called.');
		//var message = "Slider value =" + parseInt($("#clarity_slider").val());
		$("#slider7").slider("value", parseInt($("#clarity_slider").val()));
	});
	
	$('#clarity_slider_form').submit(function() {
		alert('Handler for .submit() called.');
		return false;
	});
	
	$("#slider7").slider(sliderOpts7);

	//---------------------------------------------------------------------------	
	var sliderOpts8 = {

      value: 0,
		animate: true,
		handle: "ui-slider-handle",
		min: -100,			
		max: 100,
		steps: 100,
		
		create: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#vibrance_slider").val($("#slider8").slider("value"));
		},

		change: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#vibrance_slider").val($("#slider8").slider("value"));
        					
        	$('#loadingDiv').fadeIn('fast');
			proc_img();
		},

		slide: function() {
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
    		$("#vibrance_slider").val($("#slider8").slider("value"));
      }
											
	};

	
	$("#vibrance_slider").change(function() {
		//alert('Handler for .change() called.');
		var message = "Slider value =" + parseInt($("#vibrance_slider").val());
		$("#slider8").slider("value", parseInt($("#vibrance_slider").val()));
	});
	
	$('#vibrance_slider_form').submit(function() {
		alert('Handler for .submit() called.');
		return false;
	});
	
	$("#slider8").slider(sliderOpts8);
	
	//---------------------------------------------------------------------------	
	var sliderOpts9 = {

      value: 0,
		animate: true,
		handle: "ui-slider-handle",
		min: -100,			
		max: 100,
		steps: 100,
		
		create: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#saturation_slider").val($("#slider9").slider("value"));
		},

		change: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#saturation_slider").val($("#slider9").slider("value"));
        					
        	$('#loadingDiv').fadeIn('fast');
			proc_img();
		},

		slide: function() {
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
    		$("#saturation_slider").val($("#slider9").slider("value"));
      }
											
	};

	$("#saturation_slider").change(function() {
		//alert('Handler for .change() called.');
		var message = "Slider value =" + parseInt($("#saturation_slider").val());
		$("#slider9").slider("value", parseInt($("#saturation_slider").val()));
	});
	
	$('#saturation_slider_form').submit(function() {
		alert('Handler for .submit() called.');
		return false;
	});
	
	$("#slider9").slider(sliderOpts9);

	//---------------------------------------------------------------------------	
	var sliderOpts10 = {

      value: 0,
		animate: true,
		handle: "ui-slider-handle",
		min: -360,			
		max: 360,
		steps: 100,
		
		create: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#rotate_slider").val($("#slider10").slider("value"));
		},

		change: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#rotate_slider").val($("#slider10").slider("value"));
        					
        	$('#loadingDiv').fadeIn('fast');
			proc_img();
		},

		slide: function() {
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
    		$("#rotate_slider").val($("#slider10").slider("value"));
      }
											
	};

	$("#saturation_slider").change(function() {
		//alert('Handler for .change() called.');
		var message = "Slider value =" + parseInt($("#rotate_slider").val());
		$("#slider10").slider("value", parseInt($("#rotate_slider").val()));
	});
	
	$('#saturation_slider_form').submit(function() {
		alert('Handler for .submit() called.');
		return false;
	});
	
	$("#slider10").slider(sliderOpts10);

//---------------------------------------------------------------------------	
	var sliderOpts11 = {

      value: 0,
		animate: true,
		handle: "ui-slider-handle",
		min: 0,			
		max: 100,
		steps: 100,
		
		create: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#x1_slider").val($("#slider11").slider("value"));
		},

		change: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#x1_slider").val($("#slider11").slider("value"));
        					
        	$('#loadingDiv').fadeIn('fast');
			proc_img();
		},

		slide: function() {
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
    		$("#x1_slider").val($("#slider11").slider("value"));
      }
											
	};

	$("#x1_slider").change(function() {
		//alert('Handler for .change() called.');
		var message = "Slider value =" + parseInt($("#x1_slider").val());
		$("#slider11").slider("value", parseInt($("#x1_slider").val()));
	});
	
	$('#x1_slider_form').submit(function() {
		alert('Handler for .submit() called.');
		return false;
	});
	
	$("#slider11").slider(sliderOpts11);


//---------------------------------------------------------------------------	
	var sliderOpts12 = {

      value: 0,
		animate: true,
		handle: "ui-slider-handle",
		min: 0,			
		max: 100,
		steps: 100,
		
		create: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#y1_slider").val($("#slider12").slider("value"));
		},

		change: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#y1_slider").val($("#slider12").slider("value"));
        					
        	$('#loadingDiv').fadeIn('fast');
			proc_img();
		},

		slide: function() {
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
    		$("#y1_slider").val($("#slider12").slider("value"));
      }
											
	};

	$("#y1_slider").change(function() {
		//alert('Handler for .change() called.');
		var message = "Slider value =" + parseInt($("#y1_slider").val());
		$("#slider12").slider("value", parseInt($("#y1_slider").val()));
	});
	
	$('#y1_slider_form').submit(function() {
		alert('Handler for .submit() called.');
		return false;
	});
	
	$("#slider12").slider(sliderOpts12);

//---------------------------------------------------------------------------	
	var sliderOpts13 = {

      value: 0,
		animate: true,
		handle: "ui-slider-handle",
		min: 0,			
		max: 100,
		steps: 100,
		
		create: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#x2_slider").val($("#slider13").slider("value"));
		},

		change: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#x2_slider").val($("#slider13").slider("value"));
        					
        	$('#loadingDiv').fadeIn('fast');
			proc_img();
		},

		slide: function() {
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
    		$("#x2_slider").val($("#slider13").slider("value"));
      }
											
	};

	$("#x2_slider").change(function() {
		//alert('Handler for .change() called.');
		var message = "Slider value =" + parseInt($("#x2_slider").val());
		$("#slider13").slider("value", parseInt($("#x2_slider").val()));
	});
	
	$('#x2_slider_form').submit(function() {
		alert('Handler for .submit() called.');
		return false;
	});
	
	$("#slider13").slider(sliderOpts13);


//---------------------------------------------------------------------------	
	var sliderOpts14 = {

      value: 0,
		animate: true,
		handle: "ui-slider-handle",
		min: 0,			
		max: 100,
		steps: 100,
		
		create: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#y2_slider").val($("#slider14").slider("value"));
		},

		change: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#y2_slider").val($("#slider14").slider("value"));
        					
        	$('#loadingDiv').fadeIn('fast');
			proc_img();
		},

		slide: function() {
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
    		$("#y2_slider").val($("#slider14").slider("value"));
      }
											
	};

	$("#y2_slider").change(function() {
		//alert('Handler for .change() called.');
		var message = "Slider value =" + parseInt($("#y2_slider").val());
		$("#slider14").slider("value", parseInt($("#y2_slider").val()));
	});
	
	$('#y2_slider_form').submit(function() {
		alert('Handler for .submit() called.');
		return false;
	});
	
	$("#slider14").slider(sliderOpts14);

//---------------------------------------------------------------------------	
	var sliderOpts15 = {

      value: 0,
		animate: true,
		handle: "ui-slider-handle",
		min: -100,			
		max: 100,
		steps: 100,
		
		create: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#vig_amt_slider").val($("#slider15").slider("value"));
		},

		change: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#vig_amt_slider").val($("#slider15").slider("value"));
        					
        	$('#loadingDiv').fadeIn('fast');
			proc_img();
		},

		slide: function() {
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
    		$("#vig_amt_slider").val($("#slider15").slider("value"));
      }
											
	};

	$("#vig_amt_slider").change(function() {
		//alert('Handler for .change() called.');
		var message = "Slider value =" + parseInt($("#vig_amt_slider").val());
		$("#slider15").slider("value", parseInt($("#vig_amt_slider").val()));
	});
	
	$('#vig_amt_slider_form').submit(function() {
		alert('Handler for .submit() called.');
		return false;
	});
	
	$("#slider15").slider(sliderOpts15);

//---------------------------------------------------------------------------	
	var sliderOpts16 = {

      value: 0,
		animate: true,
		handle: "ui-slider-handle",
		min: 0,			
		max: 100,
		steps: 100,
		
		create: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#vig_mid_slider").val($("#slider16").slider("value"));
		},

		change: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#vig_mid_slider").val($("#slider16").slider("value"));
        					
        	$('#loadingDiv').fadeIn('fast');
			proc_img();
		},

		slide: function() {
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
    		$("#vig_mid_slider").val($("#slider16").slider("value"));
      }
											
	};

	$("#vig_mid_slider").change(function() {
		//alert('Handler for .change() called.');
		var message = "Slider value =" + parseInt($("#vig_mid_slider").val());
		$("#slider16").slider("value", parseInt($("#vig_mid_slider").val()));
	});
	
	$('#vig_mid_slider_form').submit(function() {
		alert('Handler for .submit() called.');
		return false;
	});
	
	$("#slider16").slider(sliderOpts16);

//---------------------------------------------------------------------------	
	var sliderOpts17 = {

      value: 0,
		animate: true,
		handle: "ui-slider-handle",
		min: 1,			
		max: 13,
		steps: 1,
		
		create: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#sharp_rad_slider").val($("#slider17").slider("value"));
		},

		change: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#sharp_rad_slider").val($("#slider17").slider("value"));
        					
        	$('#loadingDiv').fadeIn('fast');
			proc_img();
		},

		slide: function() {
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
    		$("#sharp_rad_slider").val($("#slider17").slider("value"));
      }
											
	};

	$("#sharp_rad_slider").change(function() {
		//alert('Handler for .change() called.');
		var message = "Slider value =" + parseInt($("#sharp_rad_slider").val());
		$("#slider17").slider("value", parseInt($("#sharp_rad_slider").val()));
	});
	
	$('#sharp_rad_slider_form').submit(function() {
		alert('Handler for .submit() called.');
		return false;
	});
	
	$("#slider17").slider(sliderOpts17);

//---------------------------------------------------------------------------	
	var sliderOpts18 = {

      value: 0,
		animate: true,
		handle: "ui-slider-handle",
		min: 0,			
		max: 100,
		steps: 100,
		
		create: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#sharp_amt_slider").val($("#slider18").slider("value"));
		},

		change: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#sharp_amt_slider").val($("#slider18").slider("value"));
        					
        	$('#loadingDiv').fadeIn('fast');
			proc_img();
		},

		slide: function() {
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
    		$("#sharp_amt_slider").val($("#slider18").slider("value"));
      }
											
	};

	$("#sharp_amt_slider").change(function() {
		//alert('Handler for .change() called.');
		var message = "Slider value =" + parseInt($("#sharp_amt_slider").val());
		$("#slider18").slider("value", parseInt($("#sharp_amt_slider").val()));
	});
	
	$('#sharp_amt_slider_form').submit(function() {
		alert('Handler for .submit() called.');
		return false;
	});
	
	$("#slider18").slider(sliderOpts18);

//---------------------------------------------------------------------------	
	var sliderOpts19 = {

      value: 0,
		animate: true,
		handle: "ui-slider-handle",
		min: 0,			
		max: 100,
		steps: 100,
		
		create: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#sharp_thresh_slider").val($("#slider19").slider("value"));
		},

		change: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#sharp_thresh_slider").val($("#slider19").slider("value"));
        					
        	$('#loadingDiv').fadeIn('fast');
			proc_img();
		},

		slide: function() {
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
    		$("#sharp_thresh_slider").val($("#slider19").slider("value"));
      }
											
	};

	$("#sharp_thresh_slider").change(function() {
		//alert('Handler for .change() called.');
		var message = "Slider value =" + parseInt($("#sharp_thresh_slider").val());
		$("#slider19").slider("value", parseInt($("#sharp_thresh_slider").val()));
	});
	
	$('#sharp_thresh_slider_form').submit(function() {
		alert('Handler for .submit() called.');
		return false;
	});
	
	$("#slider19").slider(sliderOpts19);

//---------------------------------------------------------------------------	
	var sliderOpts20 = {

      value: 0,
		animate: true,
		handle: "ui-slider-handle",
		min: 0,			
		max: 100,
		steps: 20,
		
		create: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#nr_amt_slider").val($("#slider20").slider("value"));
		},

		change: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#nr_amt_slider").val($("#slider20").slider("value"));
        					
        	$('#loadingDiv').fadeIn('fast');
			proc_img();
		},

		slide: function() {
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
    		$("#nr_amt_slider").val($("#slider20").slider("value"));
      }
											
	};

	$("#nr_amt_slider").change(function() {
		//alert('Handler for .change() called.');
		var message = "Slider value =" + parseInt($("#nr_amt_slider").val());
		$("#slider20").slider("value", parseInt($("#nr_amt_slider").val()));
	});
	
	$('#nr_amt_slider_form').submit(function() {
		alert('Handler for .submit() called.');
		return false;
	});
	
	$("#slider20").slider(sliderOpts20);


//---------------------------------------------------------------------------	
	var sliderOpts21 = {

                value: 0,
		animate: true,
		handle: "ui-slider-handle",
		min: -100,			
		max: 100,
		steps: 1,
		
		create: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#red_slider").val($("#slider21").slider("value"));
		},

		change: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#red_slider").val($("#slider21").slider("value"));
        					
        	$('#loadingDiv').fadeIn('fast');
			proc_img();
		},

		slide: function() {
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
    		$("#red_slider").val($("#slider21").slider("value"));
      }
											
	};

	$("#red_slider").change(function() {
		//alert('Handler for .change() called.');
		var message = "Slider value =" + parseInt($("#red_slider").val());
		$("#slider21").slider("value", parseInt($("#red_slider").val()));
	});
	
	$('#red_slider_form').submit(function() {
		alert('Handler for .submit() called.');
		return false;
	});
	
	$("#slider21").slider(sliderOpts21);

//---------------------------------------------------------------------------	
	var sliderOpts22 = {

                value: 0,
		animate: true,
		handle: "ui-slider-handle",
		min: -100,			
		max: 100,
		steps: 1,
		
		create: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#green_slider").val($("#slider22").slider("value"));
		},

		change: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#green_slider").val($("#slider22").slider("value"));
        					
        	$('#loadingDiv').fadeIn('fast');
			proc_img();
		},

		slide: function() {
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
    		$("#green_slider").val($("#slider22").slider("value"));
      }
											
	};

	$("#green_slider").change(function() {
		//alert('Handler for .change() called.');
		var message = "Slider value =" + parseInt($("#green_slider").val());
		$("#slider22").slider("value", parseInt($("#green_slider").val()));
	});
	
	$('#green_slider_form').submit(function() {
		alert('Handler for .submit() called.');
		return false;
	});
	
	$("#slider22").slider(sliderOpts22);

//---------------------------------------------------------------------------	
	var sliderOpts23 = {

                value: 0,
		animate: true,
		handle: "ui-slider-handle",
		min: -100,			
		max: 100,
		steps: 1,
		
		create: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#blue_slider").val($("#slider23").slider("value"));
		},

		change: function() {
			//get the new value
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
			$("#blue_slider").val($("#slider23").slider("value"));
        					
        	$('#loadingDiv').fadeIn('fast');
			proc_img();
		},

		slide: function() {
			var val = $(this).slider("value");
			var message = "Slider value =" + val;
    		$("#blue_slider").val($("#slider23").slider("value"));
      }
											
	};

	$("#blue_slider").change(function() {
		//alert('Handler for .change() called.');
		var message = "Slider value =" + parseInt($("#blue_slider").val());
		$("#slider23").slider("value", parseInt($("#blue_slider").val()));
	});
	
	$('#blue_slider_form').submit(function() {
		alert('Handler for .submit() called.');
		return false;
	});
	
	$("#slider23").slider(sliderOpts23);



});

