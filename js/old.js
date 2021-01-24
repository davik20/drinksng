



if(jQuery('.brand-carousel').length > 0){  
    jQuery('.brand-carousel').owlCarousel({
    loop:true,
    margin:0,
    navText:false,
    autoplay:true,
    responsiveClass:true,
    autoWidth:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})
}


jQuery(document).ready(function (jQuery) {
     var menuLeft = $('#cbp-spmenu').slideMenu({
         position: 'left',
         submenuLinkAfter: '<span> > </span>',
         backLinkBefore: '<span class="back"> < back </span>'
     });
    
    if(jQuery(".demo").length > 0){ 
        options={
            maxValue: 999,
            minValue: -999,
            step: 1,
            start: 1,
            inputWidth: 40,
         }
       jQuery(".demo").WanSpinner(options);
    }
});



















$( ".selectpicker" ).on( "selectmenuselect", function( event, ui ) {
    selectIndex=ui.item.index+1;
   jQuery(this).find("option[selected=selected]").removeAttr('selected');
   jQuery(this).find("option:nth-child("+selectIndex+")").attr('selected','selected');
    
   if(jQuery('form.validate').length > 0){ 
      // alert('working')
    /*var selValue = ui.item.index;
        if (selValue == 0) {
           // alert($(this).parents('label').html());
            $(this).parents('label').addClass("error");
           // alert('remove')
        } else {
            $(this).parents('label').removeClass("error");
        }*/
       
       var selValue = $(this).val();
        $("#post-p").validate().element(this);
        if (selValue.length > 0) {
            $(this).next('div').removeClass("input-validation-error");
        } else {
            $(this).next('div').addClass("input-validation-error");
        }
   }
    
} );

if(jQuery('input.numb').length > 0){
    jQuery('input.numb').bootstrapNumber();
}

jQuery(window).load(function(){
       
    if(jQuery('#newsletter-modal').length > 0){
        jQuery('#newsletter-modal').modal({'show':true,'backdrop':false});
    }
    
    if(jQuery('#request-prop-modal').length > 0){
        jQuery('#request-prop-modal').modal({'show':true,'backdrop':false});
    }
    
    if(jQuery('#simmi-prop-in').length > 0){
        jQuery('#simmi-prop-in').modal({'show':true,'backdrop':false});
    }
    
    if(jQuery('#expired-prop').length > 0){
        jQuery('#expired-prop').modal({'show':true});
    }
    
    getScrollLocation();
    getScrollLocation_filter();
    getScrollOffer();
    
});

if(jQuery('#newsletter-modal').length > 0){
     jQuery('#newsletter-modal, #simmi-prop-in').on('show.bs.modal', function (e) {
          jQuery('body').addClass('no-fix'); 
        })
}

if(jQuery('#agent-form').length > 0){
jQuery('#agent-form').on('show.bs.collapse', function () {
    jQuery('.cont-btn').css('display','none')
})
    
jQuery('#agent-form').on('hidden.bs.collapse', function () {
    jQuery('.cont-btn').css('display','block');
    jQuery('#agent-contact-form').reset();
})
}




if(jQuery('.similar-carousel').length > 0){
   
    jQuery('.similar-carousel').owlCarousel({
    loop:true,
    margin:5,
    navText:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:false,
        },
        600:{
            items:2,
            nav:true,
            loop:false,
        },
        1000:{
            items:2,
            nav:true,
            loop:true,
        },
        1200:{
            items:3,
            nav:true,
            loop:true,
            
        }
    }
})

}

if(jQuery('.property-carousel').length > 0){
    jQuery('.property-carousel').owlCarousel({
    loop:true,
    margin:10,
    navText:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        
        600:{
            items:2,
            nav:true
        },
        750:{
            items:3,
            nav:true
        },
        
        1200:{
           items:5,
            nav:true,
            loop:false 
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

}

if(jQuery('.proj-property-carousel').length > 0){
    jQuery('.proj-property-carousel').owlCarousel({
    loop:true,
    margin:15,
    navText:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        },
        1200:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

}

if(jQuery('.shortlet-thumbs').length > 0){
   
    jQuery('.shortlet-thumbs').owlCarousel({
    loop:true,
    margin:5,
    navText:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:false,
        },
        600:{
            items:2,
            nav:true,
            loop:false,
        },
        1000:{
            items:3,
            nav:true,
            loop:true,
        },
        1200:{
            items:4,
            nav:true,
            loop:true,
            
        }
    }
})

}



if(jQuery('.testimonial-carousel').length > 0){
   
    jQuery('.testimonial-carousel').owlCarousel({
    loop:true,
    margin:10,
    navText:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})

}

   // jQuery(document).off('.bs.carousel.data-api');

    /*jQuery('#realcarousel a').live('click', function (ev) {
        if ( jQuery(ev.currentTarget).hasClass('right')) {
            jQuery('#realcarousel').carousel('next');
        }

        if ( jQuery(ev.currentTarget).hasClass('left')) {
            jQuery('#realcarousel').carousel('prev');
        }
    })*/



function gallery_settings(){
    jQuery('.gallery-carousel .carousel-container .title .img-title').text(jQuery('.gallery-carousel .carousel-item.active').attr('data-title'));
        
    jQuery('.gallery-carousel .carousel-container .title .counter-carousel').text(jQuery('.gallery-carousel .carousel-item.active').index()+1)
}

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

function changeCloneValue(clone,elem_index){
   newclone = clone.find('.main-title .title').text('Unit '+elem_index).end(); 
   newclone.find('.num-beds .tab-check').each(function( index ) {
      $(this).attr('for',$(this).attr('for')+"_"+elem_index).end();
      $(this).find('input').attr('id',$(this).find('input').attr('id')+"_"+elem_index).end();
   }); 
    
    newclone.find('.select-option').each(function( index ) {
      $(this).attr('for','').end();
    
      para="";
        if($(this).hasClass('currency')){
          para="<p>Currency</p>";
        }
        
        selectop=$(this).find('select').removeAttr('style');
        $(this).empty().append(para,selectop).find('.selectpicker').selectmenu().end();
   }); 
   
    return newclone;
}

jQuery('document').ready(function(){
    homeActiveTab();
    getScrollLocation();
    getScrollLocation_filter();
    getScrollOffer();
    
    
    if($("#post-p").length){
        $('#post-p').addClass('error');
        $('.status-cont').css('display','none');
        
       $("#redBecomesBlue").percircle({percent:1,text: "0",progressBarColor:"#6b3096"});

            $('#changeCircle').click(function(e){
                e.preventDefault();
                changeCircle();
            });
            
            $("[data-sticky_column]").stick_in_parent({
            parent: "[data-sticky_parent]"

           });
            
            $("#post-p").validate({
        errorElement: "label",
        ignore: "",
        showErrors: function(errorMap, errorList) {
        this.defaultShowErrors();
    },
        invalidHandler: function (form, validator) {
             checkform('#post-p');
            $.each(validator.errorList, function (index, value) {
                if (value.element.nodeName.toLowerCase() == 'select') {
                    $(value.element).next('div').addClass("input-validation-error");
                }
            });
        },
        highlight: function (element, errorClass) {
            $(element).addClass("input-validation-error");
        },
        unhighlight: function (element, errorClass) {
            $(element).removeClass("input-validation-error");
        },
        errorPlacement: function (error, element) {
            if(element.is('select')){   
                error.insertAfter(element.parent('label').find('.ui-selectmenu-button'));
            }
            else if(element.is('input[type=radio]')){
                error.insertAfter(element.parents('.col-cont'));
            }
            else if(element.is('input[type=checkbox]')){
                error.insertAfter(element.parents('.tab-check-list'));
            }
            else{
                error.insertAfter(element);
            }
        },
    });
       }
    
    if(jQuery('.unit-section').length > 0){
        var clonedindex=1;
        var clone=jQuery('.unit-section').clone();
        
        $(".add-more-units").click(function(){
            event.preventDefault();
            if(clonedindex < 10){
            var moreclone=clone.clone()
            var adjustedelement=changeCloneValue(moreclone,clonedindex+=1)
           $(".more-units").before(adjustedelement);
            }
    });
        
    }
    
    if(jQuery( "#Possession" ).length > 0){
       
       var date = new Date();
       //date.setDate(date.getDate() - 7);
       var d=('0' + date.getDate()).slice(-2);
       var m=('0' + (date.getMonth()+1)).slice(-2);
       var y=date.getFullYear();
        
       jQuery( "#Possession" ).datepicker();
       jQuery( "#Possession" ).val(m+'/'+d+'/'+y);
}
    
    if(jQuery('.gallery-carousel').length > 0){
        jQuery('.gallery-carousel').carousel({interval: false});
        gallery_settings();
        
        $('.gallery-carousel').on('slid.bs.carousel', function () {
           gallery_settings();
        })
    }
    
    if(jQuery('article.readmore').length > 0){
        jQuery('article.readmore').readmore({
            collapsedHeight:140,
        });
    }
    
    if(jQuery('div.readmore').length > 0){
        jQuery('div.readmore').readmore({
            collapsedHeight:70,
            moreLink: '<a href="#">More+</a>'
        });
    }
    
    if(jQuery('.hide-collapse-mobile').length > 0){
        jQuery('.hide-collapse-mobile').readmore({
            collapsedHeight:1
        });
    }
    
     if(jQuery('.iconSelectpicker').length > 0){
    
     jQuery.widget( "custom.iconselectmenu", $.ui.selectmenu, {
    _renderItem: function( ul, item ) {
      var li = jQuery( "<li>" ),
          wrapper = jQuery( "<div>", { text: item.label } );

      if ( item.disabled ) {
        li.addClass( "ui-state-disabled" );
      }

      jQuery( "<span>", {
        style: item.element.attr( "data-style" ),
        "class": "ui-icon " + item.element.attr( "data-class" )
      }).removeClass('ui-icon').appendTo( wrapper );

      return li.append( wrapper ).appendTo( ul );
    }
  });

        jQuery(".iconSelectpicker").iconselectmenu().iconselectmenu( "menuWidget").addClass( "ui-menu-icons avatar" );
    }
    
})

function checkform(elem){
            if($(elem).hasClass('error')){
                $('.status-cont').css('display','block');
                $('.status-cont p').each(function(index,element){
                    $(this).addClass('error');
                });
                $(elem).removeClass('error')
            }else{ 
            var sum=0;
                $(elem+' section.prop-use').each(function(par_index,elemet){
                par_elemet_id=$(this).attr('id');
                errorelem=$(this).find('.input-validation-error').length;
                totalelem=$(this).find('.elem').length;
                totalPerc=25 - Math.round((errorelem/totalelem) * 25);  
                sum=sum+totalPerc;
                if($(this).find('label.error').length > 0){
                    if(totalPerc == 0){
                        $('.status-cont p[data-ref='+par_elemet_id+'] span').text("0%")
                        changeCircle(sum);
                        event.preventDefault();
                    }else{
                        $('.status-cont p[data-ref='+par_elemet_id+'] span').text(totalPerc+"%");
                        changeCircle(sum);
                    }
                    
                     if(totalPerc ==25 ){
                        $('.status-cont p[data-ref='+par_elemet_id+']').removeClass('error').addClass('success');
                    }
                }
            })
            }
            
        }
        
        function changeCircle(perc){
            $("#redBecomesBlue").percircle({
                text: perc,
                percent: perc,
                progressBarColor:"#6b3096"
            });
        }

jQuery(window).resize(function(){
    homeActiveTab();
})


function getScrollLocation_filter(){
    if(jQuery('.filter.sticky').length > 0){
    var navElem=$('header.primary').height();
     $(window).scroll(function(){
        if($(window).scrollTop() > navElem){   
            $('.filter').addClass('fixed-to-top');     
                
        } else{
            $('.filter').removeClass('fixed-to-top');
        } 
    });
    }
}

function getScrollOffer(){
    if(jQuery('.primary.offer-nav').length > 0){
    var navElem=$('.offer-banner').outerHeight();
     $(window).scroll(function(){
        if($(window).scrollTop() > navElem){
            $('.primary.offer-nav').addClass('fixed-to-top');     
        } else{
            $('.primary.offer-nav').removeClass('fixed-to-top');
        }
    });
    }
}


function homeActiveTab(){
/*if(jQuery('.banner').length > 0){

//offsetTop = $('.banner .nav-tabs li label.active').offset().top - $('.nav').offset().top;
offsetTop = $('.banner .nav-tabs li label.active').offset().top;
//offsetLeft = $('.banner .nav-tabs li label.active').offset().left - $('.nav').offset().left;
offsetLeft = $('.banner .nav-tabs li label.active').offset().left ;

$('.banner .nav-background').css({
    top: offsetTop,
    left: offsetLeft,
   // right: $('.banner ul.nav-tabs').width() - $('.banner .nav-tabs li label.active').width() - offsetLeft+14,
    right: $('.banner ul.nav-tabs').width() - $('.banner .nav-tabs li label.active').width(),
   // bottom: $('.banner ul.nav-tabs').height() - $('.banner .nav-tabs li label.active').height() - offsetTop, 
    bottom: $('.banner ul.nav-tabs').height() - $('.banner .nav-tabs li label.active').height() 
});

$('.banner .nav-tabs li label').click(function() {
    if ( ! $(this).hasClass('active')) {
        $('li label.active').removeClass('active');
        $(this).addClass('active');
        
        offsetTop = $(this).offset().top - $('.banner ul.nav-tabs').offset().top;
        offsetLeft = $(this).offset().left - $('.banner ul.nav-tabs').offset().left;
        $('.banner .nav-background').animate({
            top: offsetTop,
            left: offsetLeft,
            right: $('.banner ul.nav-tabs').width() - $(this).width() - offsetLeft+14,
            bottom: $('.banner ul.nav-tabs').height() - $(this).height() - offsetTop 
        }, 'fast', 'linear');
    }
});
    
}
 */  
    
    $('.banner .nav-tabs li label').click(function() {
    if ( ! $(this).hasClass('active')) {
        $('li label.active').removeClass('active');
        $(this).addClass('active');
        offsetTop = $(this).offset().top - $('.banner ul.nav-tabs').offset().top;
        offsetLeft = $(this).offset().left - $('.banner ul.nav-tabs').offset().left;
    }
});
    
}


function getScrollLocation(){
    if(jQuery('#stickynav').length > 0){
    
    $('nav').localScroll({
        target:'body',offset:{top:0,left:0,duration:800}
    });
                              
    
    var navElem=$('.navigation-main-cont').offset().top+$('.navigation-main-cont').height();
     $(window).scroll(function(){
         
      //  var navElem=( navOff)
        
        if($(window).scrollTop() > navElem){
            
            $('.navigation').addClass('fixed-top');     
            $('#stickynav').addClass('container');     
        } else{
            $('.navigation').removeClass('fixed-top');
             $('#stickynav').removeClass('container');  
        }
         
    });
    }
}



/*****************maplace********************/
  if(jQuery('#gmap-mixed').length > 0){
        var data = [{
    "title": "Group E",
    "type": "circle",
    "locations": [{
        "lat": 52.1,
        "lon": 11.3,
        "title": "Title A2",
        "html": "<h3>Content A2</h3><p>Lorem Ipsum..</p>",
        "zoom": 8,
        "circle_options": {
            "radius": 30000
        }
    }]
}, {
    "title": "Group D",
    "type": "polygon",
    "locations": [{
        "lat": 52.1,
        "lon": 11.3,
        "title": "Title A2",
        "html": "<h3>Content A2</h3><p>Lorem Ipsum..</p>",
        "zoom": 8
    }, {
        "lat": 51.2,
        "lon": 22.2,
        "title": "Title B2",
        "html": "<h3>Content B2</h3><p>Lorem Ipsum..</p>",
        "zoom": 8
    }, {
        "lat": 49.4,
        "lon": 35.9,
        "title": "Title C2",
        "html": "<h3>Content C2</h3><p>Lorem Ipsum..</p>",
        "zoom": 4
    }, /*{
        "lat": 47.8,
        "lon": 15.6,
        "title": "Title D2",
        "html": "<h3>Content D2</h3><p>Lorem Ipsum..</p>",
        "zoom": 6
    }*/]
}, {
    "title": "Group C",
    "type": "directions",
    "locations": [{
        "lat": 45.9,
        "lon": 10.9,
        "title": "Title A1",
        "html": "<h3>Content A1</h3>",
        "icon": "https://maps.google.com/mapfiles/markerA.png"
    }, {
        "lat": 44.8,
        "lon": 1.7,
        "title": "Title B1",
        "html": "<h3>Content B1</h3>",
        "icon": "https://maps.google.com/mapfiles/markerB.png",
        "show_infowindow": false
    }, {
        "lat": 51.5,
        "lon": -1.1,
        "title": "Title C1",
        "html": "<h3>Content C1</h3><p>Lorem Ipsum..</p>",
        "zoom": 8,
        "icon": "https://maps.google.com/mapfiles/markerC.png"
    }]
}, {
    "title": "Group B",
    "type": "marker",
    "locations": [{
        "lat": 52.1,
        "lon": 11.3,
        "title": "Title A2",
        "html": "<h3>Content A2</h3><p>Lorem Ipsum..</p>",
        "zoom": 8
    }, {
        "lat": 51.2,
        "lon": 22.2,
        "title": "Title B2",
        "html": "<h3>Content B2</h3><p>Lorem Ipsum..</p>",
        "zoom": 8
    }, {
        "lat": 49.4,
        "lon": 35.9,
        "title": "Title C2",
        "html": "<h3>Content C2</h3><p>Lorem Ipsum..</p>",
        "zoom": 4
    }, {
        "lat": 47.8,
        "lon": 15.6,
        "title": "Title D2",
        "html": "<h3>Content D2</h3><p>Lorem Ipsum..</p>",
        "zoom": 6
    }]
}, {
    "title": "Group A",
    "type": "marker",
    "locations": [{
        "lat": 45.9,
        "lon": 10.9,
        "title": "Title A1",
        "html": "<h3>Content A1</h3>",
        "icon": "https://maps.google.com/mapfiles/markerA.png"
    }, {
        "lat": 44.8,
        "lon": 1.7,
        "title": "Title B1",
        "html": "<h3>Content B1</h3>",
        "icon": "https://maps.google.com/mapfiles/markerB.png",
        "show_infowindow": false
    }, {
        "lat": 51.5,
        "lon": -1.1,
        "title": "Title C1",
        "html": "<h3>Content C1</h3><p>Lorem Ipsum..</p>",
        "zoom": 8,
        "icon": "https://maps.google.com/mapfiles/markerC.png"
    }]
}]
        
        /*function showGroup(index) {
    var el = $('#g'+index);
    $('#tabs li').removeClass('active');
    $(el).parent().addClass('active');
    $.getJSON('data/ajax.php', { type: index }, function(data) {
        //loads data into the map
        maplace.Load({
            locations: data.locations,
            view_all_text: data.title,
            type: data.type,
            force_generate_controls: true
        });
    });
}*/
        
    
var maplace=new Maplace({
    map_div: '#gmap-mixed',
    controls_div: '#controls-mixed',
    controls_type: 'list',
    controls_on_map: false,
}).Load();

$('#map-dropdown .dropdown-menu a').click(function(e) {
    e.preventDefault();
    var index = $(this).attr('data-load');
    showGroup(index);
});

function showGroup(index) {
      var el = $('#g'+index);
      //$('#tabs li').removeClass('active');
      //$(el).parent().addClass('active');
      maplace.Load({
        locations: data[index].locations,
        view_all_text: data[index].title,
        type: data[index].type,
        force_generate_controls: true
      });
  }
    
showGroup(0);
      
  }
if(jQuery('#prop-details .carousel').length > 0){

/*************slick carousel***************/

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  variableWidth:false,
  arrows: false,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
    responsive: [{
       breakpoint: 400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }}
    ]
});
}

/*****************chart.js*********************/
    
if(jQuery('#canvas').length > 0){
var lineChartData = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
				label: 'My First dataset',
				borderColor: ['rgba(136,92,198,1)'],
				backgroundColor: [
                'rgba(255, 255, 255, 1)',
                ],
				fill: false,
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				],
				yAxisID: 'y-axis-1',
                pointRadius: 8,
			},
                       
                       {
				label: 'My Second dataset',
				borderColor: ['rgba(223,226,238,1)'],
				backgroundColor: [
                'rgba(255, 255, 255, 1)',
                ],
				fill: false,
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				],
				yAxisID: 'y-axis-2',
                pointRadius: 8,
			},
                       {
				label: 'My Third dataset',
				borderColor: [
                'rgba(97, 78, 172, 1)'
                ],
				backgroundColor:  [
                'rgba(255, 255, 255, 1)',
                ],
				fill: false,
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				],
                radius:10,
				yAxisID: 'y-axis-3',
                pointRadius: 8,
			}]
		};

		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myLine = Chart.Line(ctx, {
				data: lineChartData,
				options: {
					responsive: true,
					hoverMode: 'index',
					stacked: false,
					title: {
						display: true,
						text: 'Chart.js Line Chart - Multi Axis'
					},
					scales: {
						yAxes: [{
							type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
							display: true,
							position: 'left',
							id: 'y-axis-1',
						},
                                {
							type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
							display: false,
							position: 'left',
							id: 'y-axis-2',
						},
                                {
							type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
							display: false,
							position: 'right',
							id: 'y-axis-3',

							// grid line settings
							gridLines: {
								drawOnChartArea: false, // only want the grid lines for one axis to show up
							},
						}],
					}
				}
			});
		};
/*
		document.getElementById('randomizeData').addEventListener('click', function() {
			lineChartData.datasets.forEach(function(dataset) {
				dataset.data = dataset.data.map(function() {
					return randomScalingFactor();
				});
			});

			window.myLine.update();
		});*/ 
    
}

if($('.mobile-sticker').length > 0){
    $('.mobile-sticker').localScroll({
        target:'body',offset:{top:0,left:0,duration:800}
    });
    
    $('.mobile-sticker').click(function(){
        $('#agent-form').collapse('show');
    })
}

if($('.primary.offer-nav').length > 0){
    $('#navbarSupportedContent').localScroll({
        target:'body',offset:{top:-50,left:0,duration:800}
    });
}

if($('.table-cont').length > 0){
   $('.table-cont .tr').each(function(index){
       if(index == 0){
           $(this).addClass('active');
       }
   })
}

if($('.data-table .dropdown .dropdown-item').length > 0){
   $('.data-table .dropdown .dropdown-item').click(function(e){
       e.preventDefault();
       $('.table-cont .tr').removeClass('active');
       $($(this).attr('href')).addClass('active');
   })
}