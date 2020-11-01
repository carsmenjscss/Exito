var popup = {

    ventana: null,

    tipo: {
        Exito: "exito",
        Alerta: "alerta",
        Error: "error"   
    },
    
    MostrarMensaje: function (tipoMensaje, mensaje) {
        this.Cerrar();
        var spanTitulo = tipoMensaje.length ? '<span class="' + tipoMensaje + '"></span> ' : '';
        this.ventana = alertify.alert().setting({
                                                    'basic': false,
                                                    'title': spanTitulo + tituloPopup,
                                                    'label': 'Aceptar',
                                                    'message': mensaje,
                                                    'closable': false,
                                                    'padding': true
                                                }); 

        this.ventana.show();
    },

    Cerrar : function () {
        if (this.ventana !== null)
        {
            this.ventana.close();
            this.ventana = null;
        }
    },

    MostrarVentanaInactividad: function (mensaje, segundos) {
        this.Cerrar();
        this.ventana = alertify.alert()
                            .setting({
                                'basic': false,
                                'title': tituloPopup,
                                'label': 'Aceptar',
                                'message': mensaje.replace('{0}', segundos), //'Su sesión expirará en <span id="segs">' + segundos + '</span> segundos por inactividad.<br /><br />¿Desea mantener la sesión?',
                                'closable': false,
                                'padding': true/*,
                                'onok': function () { ValidarSesion(); }*/
                            });
        this.ventana.show();
    },

    MostrarVentanaCargador: function () {
        this.Cerrar();
        var mensajeCargador = '<div id="floatingCirclesG" style="margin: 0 auto; display: block; width: 75px;">' +	
            '<div class="f_circleG" id="frotateG_01"></div>' +
            '<div class="f_circleG" id="frotateG_02"></div>' +
            '<div class="f_circleG" id="frotateG_03"></div>' +
            '<div class="f_circleG" id="frotateG_04"></div>' +
            '<div class="f_circleG" id="frotateG_05"></div>' +
            '<div class="f_circleG" id="frotateG_06"></div>' +
            '<div class="f_circleG" id="frotateG_07"></div>' +
            '<div class="f_circleG" id="frotateG_08"></div><br /><p style="text-align: center;">'
            + "Espera un momento, estamos consultando la información..." + '</p>';
        this.ventana = alertify.alert()
            .setting({
                'basic': true,
                'message': mensajeCargador,
                'closable': false,
                'padding': false
            });
        this.ventana.show();
    },    

    MostrarVentanaConfirmacionCierre: function (tipoMensaje, mensaje) {
        var spanTitulo = tipoMensaje.length ? '<span class="' + tipoMensaje + '"></span> ' : '';
        this.ventana = alertify.confirm(mensaje,
            function () {
                RegistrarLogSalir($("#identificacion").val(), accionLogSalir);
                CerrarSesion(true);
            },
            function () { }
        ).setting({
            'basic': false,
            'title': spanTitulo + tituloPopup,
            'closable': false,
            'padding': true,
            'labels': { ok: 'Aceptar', cancel: 'Cancelar' }
        });
    }
};