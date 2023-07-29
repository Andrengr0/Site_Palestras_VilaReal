$(()=>{

    $('.container-menu-mobile').click(function(){
        
        if($('#check-icon').is(':checked') == true){
            $('.container-menu-mobile > ul').show(300);
        }else{
            $('.container-menu-mobile > ul').hide(300);
        }
    })

    $(window).scroll(function(){
        var windowOffY = $(window).scrollTop();
        var windowHeight = $(window).height();
      
        // console.log("01"+offSetTop)
        
        $('section').each(function(){
            var elOffY = $(this).offset().top;
            var elOffContato = $('.contato').offset().top;
            if(elOffY < windowOffY){
                $('header a').css('border','0');
                var target = $(this).attr('target');
                $('.'+target).css('border-bottom','3px solid #333');
                return;
            }else if(windowOffY < windowHeight){
                $('.id-inicio').css('border-bottom','3px solid #333');
            }else if(elOffContato < window.pageYOffset){
                $('header a').css('border','0');
                $('.id-contato').css('border-bottom','3px solid #333');
            }

            // if(elOffY + 250 < (windowOffY + windowHeight) && 
            // elOffY + 250 + $(this).height() > windowOffY)
            
            
            
        })
        
    })
    

    $(function(){
		$('nav a').click(function(){
			var href = $(this).attr('href');
			var offSetTop = ($(href).offset().top)-30;
	
			$('html,body').animate({'scrollTop':offSetTop});
	
			return false;
		})
	})

    var altura = ($('body').height()) + 5;
    $(function(){
        $('.box-modal').css('height',altura+'px')
    })

    var offSetPalestrantes = ($('.palestrantes').offset().top)+100;
    $(function(){
        $('.palestrante-modal').css('margin-top',offSetPalestrantes+'px')
    })




    $(function(){
        abrirJanela();
        verificarCliqueFechar();

        function abrirJanela(){
            $('.box-palestrantes-single').click(function(e){
                var palestranteID = $(this).attr("id");
                e.stopPropagation();
                var elementID = $('.palestrante-'+palestranteID)
                elementID.fadeIn();
            });
        }
    
        function verificarCliqueFechar(){
            var el = $('body,.icon-fechar-janela');
    
            el.click(function(){
                $('.palestrante-1, .palestrante-2').fadeOut();
            })
    
            $('.palestrante-modal').click(function(e){
                e.stopPropagation();
            })
        }
    });

})