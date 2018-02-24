//significado_oculto_nombre.js
$(document).ready(function() {

           //LINK PRIMER TEST
    
         $('.td-test1').mouseover(function() {

                 $('#test1').css('display','block');
                 $('#test1').css('height','60%');

                
         });

         $('.td-test1').mouseout(function() {


                 $('#test1').css('display','none');
                 $('#test1').css('height','0%');

         });

         $('#link-test1').click(function() {


                 $('.hero-body').load('ajax_nombre_pareja.html');
         });


         //LINK SEGUNDO TEST

        $('.td-test2').mouseover(function() {

                 $('#test2').css('display','block');
                 $('#test2').css('height','80%');

                
         });

         $('.td-test2').mouseout(function() {


                 $('#test2').css('display','none');
                 $('#test2').css('height','0%');

         });

         $('#link-test2').click(function() {


                 $('.hero-body').load('ajax_numero_hijos.html');
         });

                //LINK TERCER TEST

         $('.td-test3').mouseover(function() {

                 $('#test3').css('display','block');
                 $('#test3').css('height','80%');

                
         });

         $('.td-test3').mouseout(function() {


                 $('#test3').css('display','none');
                 $('#test3').css('height','0%');

         });

         $('#link-test3').click(function() {


                 $('.hero-body').load('ajax_test_personalidad.html');
         });


            //LINK CUARTO TEST

         $('.td-test4').mouseover(function() {

                 $('#test4').css('display','block');
                 $('#test4').css('height','80%');

                
         });

         $('.td-test4').mouseout(function() {


                 $('#test4').css('display','none');
                 $('#test4').css('height','0%');

         });

         $('#link-test4').click(function() {


                 $('.hero-body').load('ajax_test_edad_mental.html');
         });

            //LINK QUINTO TEST

         $('.td-test5').mouseover(function() {

                 $('#test5').css('display','block');
                 $('#test5').css('height','80%');

                
         });

         $('.td-test5').mouseout(function() {


                 $('#test5').css('display','none');
                 $('#test5').css('height','0%');

         });

         $('#link-test5').click(function() {


                 $('.hero-body').load('ajax_test_color.html');
         });


            //LINK SEXTO TEST

          $('.td-test6').mouseover(function() {

                 $('#test6').css('display','block');
                 $('#test6').css('height','80%');

                
         });

         $('.td-test6').mouseout(function() {


                 $('#test6').css('display','none');
                 $('#test6').css('height','0%');

         });

         $('#link-test6').click(function() {


                 $('.hero-body').load('ajax_nombre_significado.html');
         });

                 // LINK SÉPTIMO TEST

          $('.td-test7').mouseover(function() {

                 $('#test7').css('display','block');
                 $('#test7').css('height','80%');

                
         });

         $('.td-test7').mouseout(function() {


                 $('#test7').css('display','none');
                 $('#test7').css('height','0%');

         });

         $('#link-test7').click(function() {


                 $('.hero-body').load('ajax_test_muerte.html');
         });

         

});