   $('.open_close_nav').click(function(){
    $('.responsive_nav_bar').toggleClass('responsive_bar');
    $('.content_body_wrapper').toggleClass('responsive_content_body');
    $('.responsive_content_color').toggleClass('responsive_content_body_color');
    $('.report_responsive_nav_bar').toggleClass('report_sidebar_control_with_respect_main');
    });
    
    $('.click_report').click(function(){
      $('.report_responsive_nav_bar').toggleClass('report_sidebar_control');
      });
    
    
   //  header_profile_btn
    $('.header_login_details').click(function(){
      $('.header_login_details_section_click_data').toggleClass('toggle_profile_detail');
      });
   
// header_notification_btn

      $('.header_notification_btn').click(function(){
         $('.header_notification_click_detail').toggleClass('toggle_notification_btn');
         });

           //responsive  header_profile_btn
    $('.responsive_header_login_details').click(function(){
      $('.header_login_details_section_click_data').toggleClass('toggle_profile_detail');
      });


            //responsive  Search bar
    $('.responsive_header_search_field').click(function(){
      $('.header_responsive_search_field').toggleClass(' toogle_responsive_search_field');
      });
     
      // admin dashboard

      function admin_dashboard(){
         $("#admin_screen").fadeIn();
         $("#admin_screen").css({"visibility":"visible","display":"block"});
        
          $("#create_department").fadeOut();
         $("#create_department").css({"visibility":"hidden","display":"none"});

         $("#view_department").fadeOut();
         $("#view_department").css({"visibility":"hidden","display":"none"});

         $("#create_user").fadeOut();
         $("#create_user").css({"visibility":"hidden","display":"none"});

         $("#view_employee_leave").fadeOut();
         $("#view_employee_leave").css({"visibility":"hidden","display":"none"});
         
      }
    
      // create_department

      function  create_department(){

         $("#create_department").fadeIn();
         $("#create_department").css({"visibility":"visible","display":"block"});

         $("#admin_screen").fadeOut();
         $("#admin_screen").css({"visibility":"hidden","display":"none"});
        
         $("#view_department").fadeOut();
         $("#view_department").css({"visibility":"hidden","display":"none"});

         $("#create_user").fadeOut();
         $("#create_user").css({"visibility":"hidden","display":"none"});
         
      
         $("#view_employee_leave").fadeOut();
         $("#view_employee_leave").css({"visibility":"hidden","display":"none"});
      
      }
     

        // view_department

        function  view_department(){
         $("#view_department").fadeIn();
         $("#view_department").css({"visibility":"visible","display":"block"});

         $("#create_department").fadeOut();
         $("#create_department").css({"visibility":"hidden","display":"none"});

         $("#admin_screen").fadeOut();
         $("#admin_screen").css({"visibility":"hidden","display":"none"});

         $("#create_user").fadeOut();
         $("#create_user").css({"visibility":"hidden","display":"none"});
         
     
         $("#view_employee_leave").fadeOut();
         $("#view_employee_leave").css({"visibility":"hidden","display":"none"});
     
      }
     
      // create_employee

      function create_employee(){

         $("#create_user").fadeIn();
         $("#create_user").css({"visibility":"visible","display":"block"});

         $("#view_department").fadeIn();
         $("#view_department").css({"visibility":"hidden","display":"none"});

         $("#create_department").fadeOut();
         $("#create_department").css({"visibility":"hidden","display":"none"});

         $("#admin_screen").fadeOut();
         $("#admin_screen").css({"visibility":"hidden","display":"none"});
         
     
         $("#view_employee_leave").fadeOut();
         $("#view_employee_leave").css({"visibility":"hidden","display":"none"});
      }

        // view_employee leave

        function view_employee_leave(){

         $("#create_user").fadeIn();
         $("#create_user").css({"visibility":"hidden","display":"none"});

         $("#view_department").fadeIn();
         $("#view_department").css({"visibility":"hidden","display":"none"});

         $("#create_department").fadeOut();
         $("#create_department").css({"visibility":"hidden","display":"none"});

         $("#admin_screen").fadeOut();
         $("#admin_screen").css({"visibility":"hidden","display":"none"});
         
     
         $("#view_employee_leave").fadeIn();
         $("#view_employee_leave").css({"visibility":"visible","display":"block"});
      }

