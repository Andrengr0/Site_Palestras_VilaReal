$(()=>{

    $('.container-menu-mobile').click(function(){
        
        if($('#check-icon').is(':checked') == true){
            $('.container-menu-mobile > ul').show(300);
        }else{
            $('.container-menu-mobile > ul').hide(300);
        }
    })

    $('.header-2 > h5').click(function(){
			var offSetTop = $('#inicio');
	
			$('html,body').animate({'scrollTop':offSetTop});
			return false;
    })

    $('.bg-img-palestra .container-site .bg-image').slick({
        centerMode: false,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        dots: true,
        autoplaySpeed: 2500
    })


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
    

    $(function(){
		$('nav a').click(function(){
			var href = $(this).attr('href');
			var offSetTop = ($(href).offset().top)-160;
	
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