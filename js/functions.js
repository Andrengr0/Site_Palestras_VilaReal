$(()=>{
    // Função para exibir ou ocultar menu mobile
    $('.container-menu-mobile').click(function(){
        if($('#check-icon').is(':checked') == true){
            $('.container-menu-mobile > ul').show(300);
        }else{
            $('.container-menu-mobile > ul').hide(300);
	    $('.container-menu-mobile > ul').css('z-index','333');
        }
    })
    $('.header-2 > h5').click(function(){
			var offSetTop = $('#inicio');
			$('html,body').animate({'scrollTop':offSetTop});
			return false;
    })

    // Função para exibir ou ocultar menu secundário quando a página rola para baixo
    $(window).scroll(function(){
        let windowOffX = $(window).width();
        let windowOffY = $(window).scrollTop();
        console.log(windowOffY)

        if(windowOffY > 90 && windowOffX > 768){
            $('header').css('display:none');
            $('header-2').fadeIn();
        }
        if(windowOffY < 100){
            $('header').fadeIn();
            $('header-2').fadeOut();
        }
    })
    
    // Funções para dar o efeito hover em cada opção do menu conforme o scroll vai rolando
    $('.id-inicio').css('border-bottom','3px solid #ffffff');
    $(window).scroll(function(){
        var windowOffY = $(window).scrollTop();
        var windowHeight = $(window).height();
        
        $('section').each(function(){
            var elOffY = $(this).offset().top;
            var elOffContato = ($('.contato').offset().top)-500;
            if(elOffY-350 < windowOffY && windowOffY > windowHeight){
                $('header a, header-2 a').css('border','0');
                var target = $(this).attr('target');
                $('.'+target).css('border-bottom','3px solid #ffffff');
                return;
            }else if(windowOffY <= windowHeight){
                $('.id-inicio').css('border-bottom','3px solid #ffffff');
                $('.id-palestras').css('border','0');
                return;
            }else if(elOffContato < window){
                $('header a').css('border','0');
                $('.id-contato').css('border-bottom','3px solid #ffffff');
                $('.id-quem-somos').css('border','0');
            }   
        }) 
    })


    // Função para exibir e ocultar Historico de Palestras
    $('.btn-exibir-historico').click(function(){
        $('.box-historico-palestras').slideToggle();
        if(controler == 0){
            $('.btn-exibir-historico i').css('transform','rotate(0deg)').css('transition','0.3s');
            controler = 1;
        }else{
            $('.btn-exibir-historico i').css('transform','rotate(90deg)').css('transition','0.3s');
            controler = 0;
        }
    })
    // Alternativa para colocar efeito do icone "Arrow" do botão exibir historico
    $('.btn-exibir-historico').click()
    var controler = 1;
    $('.btn-exibir-historico i').css('transform','rotate(0deg)')


    // Função para rolar a barra até a seção escolhida pelo clique no menu
    $(function(){
		$('nav a').click(function(){
			var href = $(this).attr('href');
			var offSetTop = ($(href).offset().top)-160;
	
			$('html,body').animate({'scrollTop':offSetTop});
			return false;
		})
	})

    // Definindo posições da janela Modal dos palestrantes
    var altura = ($('body').height()) + 5;
    $(function(){
        $('.box-modal').css('height',altura+'px')
    })
    var offSetPalestrantes = ($('.palestrantes').offset().top)-300;
    $(function(){
        $('.palestrante-modal').css('margin-top',offSetPalestrantes+'px')
    })

    // Função para abrir e fechar janela Modal dos palestrantes
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
