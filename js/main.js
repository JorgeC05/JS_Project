$(document).ready(function () {

    // Slider
    if(window.location.href.indexOf('index') > -1){ // este es if es para evaluar que solo se corra cuando este en Index
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 900,
        responsive: true,
        pager: false
      });
    };
    // Post Dinámicos
    if(window.location.href.indexOf('index') > -1){
    var post = [
            {
                title: "Prueba de titulo 1",
                date: moment().format('LL'),
                content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s  con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente  con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'          
            },
            {
                title: "Prueba de titulo 2",
                date: moment().format('LL'),
                content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s  con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente  con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'          
            },
            {
                title: "Prueba de titulo 3",
                date: moment().format('LL'),
                content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s  con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente  con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'          
            },
            {
                title: "Prueba de titulo 4",
                date: moment().format('LL'),
                content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s  con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente  con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'          
            },
            {
                title: "Prueba de titulo 5",
                date: moment().format('LL'),
                content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s  con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente  con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'          
            },
            {
                title: "Prueba de titulo 6",
                date: moment().format('LL'),
                content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s  con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente  con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'          
            }
        ];
     

        post.forEach((item,index)=>{
            var post = 
            ` 
                <article class="post">
                        <h2>${item.title}</h2>
                        <span class="date">${item.date}</span>
                        <p>
                            ${item.content}
                        </p>
                        <a href="#" class="button-more">Leer más</a>
                </article>       
            `;

            $('#posts').append(post);

        });
    };  // ************ FIn del condicional IF ***************
    // Selector de Tema
    var theme = $('#theme');

    $('#to-green').click(function (e) { 
        e.preventDefault();
        theme.attr("href","css/green.css");        
    });

    $('#to-red').click(function (e) { 
        e.preventDefault();
        theme.attr("href","css/red.css");        
    });

    $('#to-blue').click(function (e) { 
        e.preventDefault();
        theme.attr("href","css/blue.css");        
    });

    //Boton de Scroll para subir

    $('.subir').click(function (e) { 
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 800);

        // $('html').scrollTop(0); // Así también se puede, pero lo hace muyn rápido

        return false;
    });


    // Login Falso

    $('#login form').submit(function(){
        var form_name = $('#form_name').val();
        console.log(form_name);

        localStorage.setItem("form_name", form_name);
    });

  
    var form_name = localStorage.getItem("form_name");
    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $('#about p');
        about_parrafo.html("<strong><p> Bienvenido, " + form_name + "</p></strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar Sesión</a>");

        $('#login form').hide();

        $('#logout').click(function (e) { 
            e.preventDefault();
            localStorage.clear();
            location.reload(); // esto es para recargar la pantalla del navegador            
        });
    };


    // Acordeón


    if(window.location.href.indexOf('about') > -1){ // esto hace que el Script solo se ejecute en la pagina about

        $('#acordeon').accordion();
    };
    
    //Reloj

    if(window.location.href.indexOf('reloj') > -1){ // esto hace que el Script solo se ejecute en la pagina reloj

        setInterval(function(){ // esto es para refrescar cada segundo
            
            var reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);

        },1000);
    };

    // Vaidación del formulario
    if(window.location.href.indexOf('contact') > -1){
        
        $('form input[name="date"]').datepicker({
            dateFormat: 'dd-mm-yy'
        });
        
        
        $.validate({  // Validación del Formulario
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
      });
    }

});