$(function () {
  desencriptar();
  encriptar();
  copiarTexto();

});

function encriptar() {
  $("#encriptar").click(function (e) {
    var textoAencriptar = $("#input2").val();

    if (textoAencriptar == " ") {
    } else {
      $("#img").hide();
      $("#texto1").hide();
      $("#texto2").hide();

      var textoEncriptado = "";
      var letraRecorriendo = "";

      for (let i = 0; i < textoAencriptar.length; i++) {
        letraRecorriendo = textoAencriptar.charAt(i);

        switch (letraRecorriendo) {
          case "a":
            textoEncriptado = textoEncriptado + "ai";
            break;

          case "e":
            textoEncriptado = textoEncriptado + "enter";
            break;

          case "i":
            textoEncriptado = textoEncriptado + "imes";
            break;

          case "o":
            textoEncriptado = textoEncriptado + "ober";
            break;

          case "u":
            textoEncriptado = textoEncriptado + "ufat";
            break;

          default:
            textoEncriptado = textoEncriptado + letraRecorriendo;
            break;
        }
      }

      $("#resultado").html(textoEncriptado);
    }
  });
}

function desencriptar() {
  $("#desencriptar").click(function (e) {
    e.preventDefault();

    var textoAdesencriptar = $("#input2").val();

    if (textoAdesencriptar == "") {
    } else {
      $("#img").hide();
      $("#texto1").hide();
      $("#texto2").hide();

      var textoDesencriptado = "";
      var max = 0;

      let ai = textoAdesencriptar.match(/ai/g);
      let aiCount = ai ? ai.length : 0;
      if (aiCount > max) {
        max = aiCount;
      }

      let enter = textoAdesencriptar.match(/enter/g);
      let enterCount = enter ? enter.length : 0;
      if (enterCount > max) {
        max = enterCount;
      }

      let imes = textoAdesencriptar.match(/imes/g);
      let imesCount = imes ? imes.length : 0;
      if (imesCount > max) {
        max = imesCount;
      }

      let ober = textoAdesencriptar.match(/ober/g);
      let oberCount = ober ? ober.length : 0;
      if (oberCount > max) {
        max = oberCount;
      }

      let ufat = textoAdesencriptar.match(/ufat/g);
      let ufatCount = ufat ? ufat.length : 0;
      if (ufatCount > max) {
        max = ufatCount;
      }

      for (let i = 0; i < max; i++) {
        textoAdesencriptar = textoAdesencriptar.replace("ai", "a");

        textoAdesencriptar = textoAdesencriptar.replace("enter", "e");

        textoAdesencriptar = textoAdesencriptar.replace("imes", "i");

        textoAdesencriptar = textoAdesencriptar.replace("ober", "o");

        textoAdesencriptar = textoAdesencriptar.replace("ufat", "u");
      }

      textoDesencriptado = textoAdesencriptar;

      $("#resultado").html(textoDesencriptado);
    }
  });
}

function copiarTexto() {
  $("#BtnCopiar").click(function () {
    var textoCopiado = $("#resultado").text();

    if (textoCopiado=="") {
      
      alertify.error('No hay nada que copiar');

    } else {

      var dummy = document.createElement("textarea");
      document.body.appendChild(dummy);
      dummy.value = textoCopiado;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
    
    alertify.success("Copiado exitosamente");

    $("#input2").val("")

    }
      
  });
}

