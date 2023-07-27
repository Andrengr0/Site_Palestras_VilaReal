$(()=>{

    $('.container-menu-mobile').click(function(){
        
        if($('#check-icon').is(':checked') == true){
            $('.container-menu-mobile > ul').show(300);
        }else{
            $('.container-menu-mobile > ul').hide(300);
        }
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