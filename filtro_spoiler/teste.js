$(function () {
    let i = 0;
   let spoilers = ["café", "Café", "cafe"];
   let cafe = "café"
   $.each(spoilers, function(index, value){
        $('a, p, span, h1, h2, h3, h4, h5, h6').each(function () {

           
               // console.log(value);
                if ($(this).is(':contains("'+value+'")')) {
                    
                    let posicao = $(this).position();
    
                    $(this).append('<div data-clone="sim" id="novo' + i + '" style="position:absolute; width:' + $(this).width() + 'px;height:' + $(this).height() + 'px">SPOILERS</div>');
                    console.log($(this).width());
                    $('#novo' + i).animate({
                        top: posicao.top,
                        left: posicao.left,
    
    
    
                    }, 0.0001).css('background-color', 'black').css('color', 'white').css('text-align', 'center').css('vertical-align', 'middle').css('line-height', $('#novo' + i).height() + 'px');
    
                    i++;
    
                }

            });            

        });
        $(document).on('mouseover', '[data-clone="sim"]', function () {


            let conf = confirm("Tem certeza?");
            if (conf) {
                $(this).hide();
                $(this).children().hide();
            }


        });


    });

    


