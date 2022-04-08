   jQuery(document).ready(function($) { 

 


     $('.button_trigger').click(function(event) {

        event.preventDefault();
        event.stopPropagation();

        $('.open_wrap').removeClass('active');
        $('.open_wrap').css('height', '0');

          if ($(this).hasClass('active')) {
             $('.button_trigger').removeClass('active');

            $(this).closest('.Collapsible').find('.open_wrap').removeClass('active');
             $(this).closest('.Collapsible').find('.open_wrap').css('height', '0');

             //console.log('active class')
          }else{
            $('.button_trigger').removeClass('active');

            $(this).addClass('active');
            $(this).closest('.Collapsible').find('.open_wrap').addClass('active');

            var heights = $(this).closest('.Collapsible').find('.open_inner').outerHeight();
            var heights = heights+'px';

            $(this).closest('.Collapsible').find('.open_wrap').css('height', heights);
             //console.log('not active class')

          }   
          

     });

 
     

});
