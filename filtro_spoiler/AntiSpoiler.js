$(function () {
    let i = 0;
    var herois;
    $.ajax({
    
        url: 'https://gateway.marvel.com/v1/public/events/314/characters?&ts=1&apikey=48985e65e2babdeac044a1ad73d5b299&hash=b4e87ab657e8c6aedeed9c93780c917a',
        type: "GET",
        dataType: "json",
        success: function (result) {
          let herois = result.data.results;
         //result.data.results.name
           /*$.each(resultados, function(index, value){
                herois[index] = value.name;
            }); */

            
   $.each(herois, function(index, value){
        $('a, p, span, h1, h2, h3, h4, h5, h6').each(function () {
               // console.log(value);
                if ($(this).is(':contains("'+value.name+'")')) {
                    
                    let posicao = $(this).position();
    
                    $(this).append('<div data-clone="sim" id="novo' + i + '" style="position:absolute; width:' + $(this).width() + 'px;height:' + $(this).height() + 'px">SPOILERS</div>');
                   // console.log($(this).width());
                    $('#novo' + i).animate({
                        top: posicao.top,
                        left: posicao.left,
    
    
    
                    }, 0.0001).css('background-color', 'black').css('color', 'white').css('text-align', 'center').css('vertical-align', 'middle').css('line-height', $('#novo' + i).height() + 'px');
    
                    i++;
    
                }

            });            

        });



            
        }
    });
    
        $(document).on('mouseover', '[data-clone="sim"]', function () {


            let conf = confirm("Tem certeza?");
            if (conf) {
                $(this).hide();
                $(this).children().hide();
            }


        });


    });

    


