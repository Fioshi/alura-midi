
function tocaSom(seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {

        elemento.play();

    } else {

        console.log('Elemento não encontrado ou seletor inválido')

    }
}

const teclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < teclas.length; contador++) {

    const tecla = teclas[contador];
    const instrumento = tecla.classList[1];
    const idAuido = `#som_${instrumento}`; //template String e id-Dinâmico

    tecla.onclick = function () {
        tocaSom(idAuido);
    }

    tecla.onkeydown = function (event) {

        console.log(event.code)

        if (event.code === 'Space' || event.code === 'Enter') {

            tecla.classList.add('ativa');

        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
