// Bloqueo Pagina en espera al WS
$(document).on({
    ajaxStart: function () { openLoading(); },
    ajaxStop: function () { closeLoading(); },
    load: function () { openLoading(); },
    onload: function () { openLoading(); },
    isPostBack: function () { openLoading(); },
    unload: function () { closeLoading(); }
});

//Iniciar Panel Cargando
function openLoading() {
    setTimeout(closeLoading, 3000);
    $.blockUI({
        css: {
            cursor: 'none',
            border: 'none',
            padding: '15px',
            backgroundColor: '#fff',
            'border-radius': '20px',
            opacity: 5,
            showOverlay: true,
            color: '#000',
        },
        overlayCSS: { backgroundColor: '#585858' },
        title: '',
        message: '<p style="font-size:20px">Espera un momento, estamos consultando la información...</p>' +
            '<div id="floatingCirclesG" >' +
            '<div class="f_circleG" id="frotateG_01"></div>' +
            '<div class="f_circleG" id="frotateG_02"></div>' +
            '<div class="f_circleG" id="frotateG_03"></div>' +
            '<div class="f_circleG" id="frotateG_04"></div>' +
            '<div class="f_circleG" id="frotateG_05"></div>' +
            '<div class="f_circleG" id="frotateG_06"></div>' +
            '<div class="f_circleG" id="frotateG_07"></div>' +
            '<div class="f_circleG" id="frotateG_08"></div>' +
            '</div>'


        //<img src="../App_Themes/Imagenes/Loading_icon.gif" style="width:20%; height:20%" />
        //this.Cerrar();
        //var mensajeCargador = '<div id="floatingCirclesG" style="margin: 0 auto; display: block; width: 75px;">' +
        //    '<div class="f_circleG" id="frotateG_01"></div>' +
        //    '<div class="f_circleG" id="frotateG_02"></div>' +
        //    '<div class="f_circleG" id="frotateG_03"></div>' +
        //    '<div class="f_circleG" id="frotateG_04"></div>' +
        //    '<div class="f_circleG" id="frotateG_05"></div>' +
        //    '<div class="f_circleG" id="frotateG_06"></div>' +
        //    '<div class="f_circleG" id="frotateG_07"></div>' +
        //    '<div class="f_circleG" id="frotateG_08"></div><br /><p style="text-align: center;">'
        //    + "Espera un momento, estamos consultando la información..." + '</p>';
        //this.ventana = alertify.alert()
        //    .setting({
        //        'basic': true,
        //        'message': mensajeCargador,
        //        'closable': false,
        //        'padding': false
        //    });
        //this.ventana.show()
    }
    );
};

//Iniciar Panel Cargando
function openLoadingCertificados() {
    setTimeout(closeLoading, 3000);
    $.blockUI({
        css: {
            cursor: 'none',
            border: 'none',
            padding: '15px',
            backgroundColor: '#fff',
            'border-radius': '20px',
            opacity: 5,
            showOverlay: true,
            color: '#000',
        },
        overlayCSS: { backgroundColor: '#585858' },
        title: '',
        message: '<p style="font-size:20px">Espera un momento, estamos consultando la información...</p>' +
            '<div id="floatingCirclesG" >' +
            '<div class="f_circleG" id="frotateG_01"></div>' +
            '<div class="f_circleG" id="frotateG_02"></div>' +
            '<div class="f_circleG" id="frotateG_03"></div>' +
            '<div class="f_circleG" id="frotateG_04"></div>' +
            '<div class="f_circleG" id="frotateG_05"></div>' +
            '<div class="f_circleG" id="frotateG_06"></div>' +
            '<div class="f_circleG" id="frotateG_07"></div>' +
            '<div class="f_circleG" id="frotateG_08"></div>' +
            '</div>'
    }
    );
};


//Cerrar Panel Cargando
function closeLoading() {
    $.unblockUI();
};

