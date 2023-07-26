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
			var offSetTop = $(href).offset().top;
	
			$('html,body').animate({'scrollTop':offSetTop});
	
			return false;
		})
	})

    var altura = ($('body').height()) + 5;
    $(function(){
        $('.box-modal').css('height',altura+'px')})

    $(function(){
        abrirJanela();
        verificarCliqueFechar();

        function abrirJanela(){
            $('.box-palestrantes-single').click(function(e){
                e.stopPropagation();
                $('.box-modal').fadeIn();
            });
        }
    
        function verificarCliqueFechar(){
            var el = $('body,.icon-fechar-janela');
    
            el.click(function(){
                $('.box').fadeOut();
            })
    
            $('.palestrante-modal').click(function(e){
                e.stopPropagation();
            })
        }
    });

})