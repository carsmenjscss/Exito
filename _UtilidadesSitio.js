/// <reference path="jquery-1.11.3.min.js" />
/// <reference path="jquery.blockUI.js" />

//#region Ventana

// Abrir en una Nueva Ventana
function AbrirAplicacion() {
    window.open('login.html.html', 'winpopupPortal', 'channelmode,scrollbars,resizable=yes,width=' + screen.availWidth + ',height=' + screen.availHeight + ', left=0,top=0');
    window.opener = self;
    self.window.close();
    return false;
};

// Redimensiona la Ventana para que ocupe toda la pantalla
function fullScreen() {
    window.moveTo(0, 0);
    if (document.getElementById || document.all) {
        window.resizeTo(screen.availWidth, screen.availHeight);
        
        // Solo activar para pruebas de DESARROLLO
        //window.resizeTo(1280, 768);
        //window.resizeTo(1024, 768);
    }
    else if (document.layers) {
        if (window.outerHeight < screen.availHeight || window.outerWidth < screen.availWidth) {
            window.outerHeight = screen.availHeight;
            window.outerWidth = screen.availWidth;
        }
    }
};

function noEmbebed() {
    if (top != self) { top.location = document.location; }
    self.moveTo(0, 0);
    self.resizeTo(screen.availWidth, screen.availHeight);
};

//#endregion

//#region Bloquear Teclado y Mouse

// Bloqueo del Boton secundario del Mouse (Menu Contextual)
function disableContext() {
    document.oncontextmenu = function () { return false };
};

// Bloqueo de combinaciones de Teclas
function disableKeys() {
    document.onkeydown = function () {
        if (window.event) {
            if ((window.event.keyCode >= 112) && (window.event.keyCode <= 124)) {
                window.event.cancelBubble = true;
                window.event.keyCode = 8;
                window.event.returnValue = false;
                return false;
            }

            if (window.event.keyCode >= 226) {
                window.event.cancelBubble = true;
                window.event.keyCode = 8;
                window.event.returnValue = false;
                return false;
            }
            if (event.altLeft) {
                if ((window.event.keyCode == 37) || (window.event.keyCode == 39)) {
                    return false;
                }
            }
            return true;
        }
    };
};

// Validar algunos Digitos
function onlyDigits(e) {
    var isIE = document.all ? true : false;
    var key = (isIE) ? window.event.keyCode : e.which;
    var isNum = ((key > 47 && key < 58) || key === 8) ? true : false;
    return (isNum);
};

//#endregion

//#region Teclado

//Image1 = new Image(75, 50)
//Image1.src = "GeneradorTeclado.aspx"
//Image2 = new Image(75, 50)
//Image2.src = "../App_Themes/Imagenes/Tapa1.gif"

// Obtiene la ruta con Directorios Virtuales
var getPath = function (relative_path) {
    var url = window.location.href.split('?')[0].substring(0, location.href.lastIndexOf("/") + 1);

    if (url.substring(url.length - 1, url.length) == '/') {
        url = url.substring(0, url.length - 1);
    }

    var url_parts = url.split('/');

    if (relative_path.substring(0, 1) != '/') {
        url_parts[url_parts.length] = relative_path;
    }
    else {
        url_parts[url_parts.length] = relative_path.substring(1);
    }

    var new_page_absolute_path = url_parts.join('/');

    if (new_page_absolute_path.substring(new_page_absolute_path.length - 1, new_page_absolute_path.length) == '/') {
        new_page_absolute_path = new_page_absolute_path.substring(0, new_page_absolute_path.length - 1);
    }

    return new_page_absolute_path;
};



function mouseOverPad() {
    for (var i = 1; i <= 10; i++) {
        document.getElementById("area" + i).style.backgroundImage = "url(" + getPath('botonAsterisco.png') + ")";
    }

};

function mouseOutPad(r) {
    var pos = r.split(',');
    for (var i = 0; i < pos.length; i++) {
        document.getElementById("area" + (i + 1)).style.backgroundImage = "url(" + getPath('boton' + pos[i] + '.png') + ")";
    }
};

function mouseOverStart() {
    document.getElementById('btnIngreso').src = "BotonIngresoSel.gif";
};
function mouseOutStart(p_document) {
    document.getElementById('btnIngreso').src = "BotonIngreso.gif";
};

function Llenarclave(boton) {

    // Para el Ingreso
    if (focoPassword == null) {
        if (document.getElementById("ctl00_DefaultContent_txtPassword").value.length < 4) {
            document.getElementById("ctl00_DefaultContent_txtPassword").value = document.getElementById("ctl00_DefaultContent_txtPassword").value + boton;
        }
    }

    // Para cambio de Clave
    if (focoPassword == 0) {
        if (document.forms[0].txtPasswordActual.value.length < 4) {
            document.forms[0].txtPasswordActual.value = document.forms[0].txtPasswordActual.value + boton;
        }
    }
    if (focoPassword == 1) {
        if (document.forms[0].txtPasswordNuevo.value.length < 4) {
            document.forms[0].txtPasswordNuevo.value = document.forms[0].txtPasswordNuevo.value + boton;
        }
    }
    if (focoPassword == 2) {
        if (document.forms[0].txtPasswordConfirmacion.value.length < 4) {
            document.forms[0].txtPasswordConfirmacion.value = document.forms[0].txtPasswordConfirmacion.value + boton;
        }
    }
};

function limpiarPass() {
    // Para el Ingreso
    if (focoPassword == null) {
        document.getElementById("ctl00_DefaultContent_txtPassword").value = "";
    }

    // Para el Cambio de Clave
    if (focoPassword == 0) {
        document.forms[0].txtPasswordActual.value = "";
    }
    if (focoPassword == 1) {
        document.forms[0].txtPasswordNuevo.value = "";
    }
    if (focoPassword == 2) {
        document.forms[0].txtPasswordConfirmacion.value = "";
    }
};

function checkFields() {
    missinginfo = "";

    // Para el Ingreso
    if (focoPassword == null) {

        if (document.getElementById("ctl00_DefaultContent_txtIdentificacion").value == "") {
            missinginfo += "\n     -  Documento de Identificación";
        }
        if (isNaN(document.getElementById("ctl00_DefaultContent_txtIdentificacion").value)) {
            missinginfo += "\n     -  Documento de Identificación no tiene el formato correcto";
        }
        if (document.getElementById("ctl00_DefaultContent_txtPassword").value == "") {
            missinginfo += "\n     -  Clave";
        }

        closeLoading();
        if (missinginfo != "") {
            missinginfo = "_____________________________\n" +
                    "Debes ingresar tu:\n" +
                    missinginfo + "\n_____________________________" +
                    "\nPor favor inténtalo de nuevo";
            alert(missinginfo);
            return false;
        }
        else {
            return true;
        }
    }

    // Para el Cambio de Clave
    if (focoPassword != null) {
        //if (document.forms[0].txtPasswordActual.value == "") {
        //    missinginfo += "\n     -  Clave Actual";
        //}
        //if (document.forms[0].txtPasswordActual.value.length < 4) {
        //    missinginfo += "\n     -  Clave Actual debe ser de 4 digitos";
        //}
        //if (document.forms[0].txtPasswordNuevo.value == "") {
        //    missinginfo += "\n     -  Clave Nueva";
        //}
        //if (document.forms[0].txtPasswordNuevo.value.length < 4) {
        //    missinginfo += "\n     -  Clave Nueva debe ser de 4 digitos";
        //}
        //if (document.forms[0].txtPasswordConfirmacion.value == "") {
        //    missinginfo += "\n     -  Confirmación de la nueva clave";
        //}
        //if (document.forms[0].txtPasswordConfirmacion.value.length < 4) {
        //    missinginfo += "\n     -  Confirmación de la nueva clave debe ser de 4 digitos";
        //}
        //if (document.forms[0].txtPasswordNuevo.value != document.forms[0].txtPasswordConfirmacion.value) {
        //    missinginfo += "\n     -  La clave nueva y la confirmación son diferentes";
        //}

        //if (missinginfo != "") {
        //    missinginfo = "_____________________________\n" +
        //            "Debes ingresar tu:\n" +
        //            missinginfo + "\n_____________________________" +
        //            "\nPor favor inténtalo de nuevo";
        //    alert(missinginfo);
        //    return false;
        //}
        //else {
        if (confirm('   seguro que desea cambiar su clave?'))
            return true;
        else
        {
            closeLoading();
                return false;
        }
    }

    // Para el Proveedor
    if (focoPassword != null) {
        if (document.forms[0].txtIdentificacion.value == "") {
            missinginfo += "\n     -  Documento de Identificación";
        }
        if (isNaN(document.forms[0].txtIdentificacion.value)) {
            missinginfo += "\n     -  Documento de Identificación no tiene el formato correcto";
        }
        if (document.forms[0].txtPassword.value == "") {
            missinginfo += "\n     -  Clave";
        }

        if (missinginfo != "") {
            missinginfo = "_____________________________\n" +
                    "Debes ingresar tu:\n" +
                     missinginfo + "\n_____________________________" +
                     "\nPor favor inténtalo de nuevo";
            alert(missinginfo);
            return false;
        }
        else return true;
    }
};

// Efecto de la imagen
var slideCache = new Array();
function RunSlideShow(pictureName, imageFiles, displaySecs) {
    var imageSeparator = imageFiles.indexOf(";");
    var nextImage = imageFiles.substring(0, imageSeparator);
    if (document.all) {
        document.getElementById(pictureName).style.filter = "blendTrans(duration=2)";
        document.getElementById(pictureName).filters.blendTrans.Apply();
    }
    document.getElementById(pictureName).src = nextImage;
    if (document.all) {
        document.getElementById(pictureName).filters.blendTrans.Play();
    }
    var futureImages = imageFiles.substring(imageSeparator + 1, imageFiles.length) + ';' + nextImage;
    setTimeout("RunSlideShow('" + pictureName + "','" + futureImages + "'," + displaySecs + ")", displaySecs * 4000);
    // cambio de imagen. 
    imageSeparator = futureImages.indexOf(";");
    nextImage = futureImages.substring(0, imageSeparator);
    if (slideCache[nextImage] == null) {
        slideCache[nextImage] = new Image;
        slideCache[nextImage].src = nextImage;
    }
};

// Cambio de Clave
var focoPassword = null;

function initProveedor() {
    focoPassword = -1;
};

function initFoco() {
    focoPassword = 0;
};

function foco(elemento) {
    focoPassword = elemento.id;
    elemento.style.border = "solid 1px #000000";
};

function no_foco(elemento) {
    elemento.style.border = "solid 1px #cccccc";
};

//#endregion

//#region Certificado
function Validate_Checkbox() {

    var combo = document.getElementsByName('ctl00$DefaultContent$ddlCertificado');
    var chks = document.getElementsByTagName('input');


    var hasChecked = false;
    var contador = 0;
    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
            hasChecked = true;
            contador++;
        }
    }

    if (hasChecked == false) {
        alert("Por favor seleccione una o varias casillas");
        return false;
    }

    if (combo.ctl00$DefaultContent$ddlCertificado.value == '4') {
        if (contador > 1) {
            alert("Por favor seleccione una casilla");
            return false;
        }

    }
    return true;
};
//#endregion

//#region Popup de Ayuda

function VentanaAyuda(URL) {
    window.open(URL);
    return false;
};

function launch(newURL, newName, newFeatures, orgName) {
    var remote = open(newURL, newName, newFeatures);
    if (remote.opener == null) {
        remote.opener = window;
    }
    remote.opener.name = orgName;
    return remote;
};

function launchRemote() {
    myRemote = launch("Ayuda.aspx", "myRemote", "height=500,width=600,channelmode=no,scrollbars,resizable=no,left=0,top=0", "myWindow");
};

//#endregion

//#region Acrobat Reader
function detectAcrobat() {
    var acrobat = new Object();

    acrobat.installed = false;
    acrobat.version = '0.0';

    if (navigator.plugins && navigator.plugins.length) {
        for (var x = 0, l = navigator.plugins.length; x < l; ++x) {
            if (navigator.plugins[x].description.indexOf('Adobe Acrobat') != -1) {
                acrobat.version = parseFloat(navigator.plugins[x].description.split('Version ')[1]);

                if (acrobat.version.toString().length == 1) acrobat.version += '.0';

                acrobat.installed = true;
                
                break;
            }
        }
    }
    else if (window.ActiveXObject) {
        for (x = 2; x < 10; x++) {
            try {
                oAcro = eval("new ActiveXObject('PDF.PdfCtrl." + x + "');");
                if (oAcro) {
                    acrobat.installed = true;
                    acrobat.version = x + '.0';
                }
            }
            catch (e) { }
        }

        try {
            oAcro4 = new ActiveXObject('PDF.PdfCtrl.1');
            if (oAcro4) {
                acrobat.installed = true;
                acrobat.version = '4.0';
            }
        }
        catch (e) { }

        try {
            oAcro7 = new ActiveXObject('AcroPDF.PDF.1');
            if (oAcro7) {
                acrobat.installed = true;
                acrobat.version = '7.0';
            }
        }
        catch (e) { }

    }
    if (acrobat.installed) {
        return true;
    }
    else {
        alert('El equipo no tiene Adobe Reader instalado por favor decarguelo para poder ver los extractos');
        window.open('http://www.adobe.com/es/products/reader/');
        return false;
    }
    //alert(acrobat.installed);
    //alert(acrobat.version);
}
//#endregion

//#region Modificar CSS
var addClass = function (c, e) {
    e.className += ' ' + c;
};

var removeClass = function (c, e) {
        e.className = e.className.replace(c, '');
};