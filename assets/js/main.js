window.onscroll = () => {
    diminuiHeight();
}

var positionAnterior = window.scrollY;
const capa = document.querySelector('#capa');
const textosCapa = capa.firstElementChild;
textosCapa.style.opacity = 1;
capa.style.height = capa.offsetHeight + 'px';
var capaHeight = parseInt(capa.style.height.replace('px', ''));

function diminuiHeight() {
    console.clear();
    console.log('positionAnterior => ' + positionAnterior);
    console.log('window.scrollY => ' + window.scrollY);
    console.log('capaHeight => ' + capa.style.height);

    // if (positionAnterior < window.scrollY && window.scrollY < capaHeight) {
    //     if (textosCapa.style.opacity > 0) {
    //         textosCapa.style.opacity -= .04;
    //         capa.style.height = (capaHeight--) + 'px';
    //     }
    // } else if (positionAnterior > window.scrollY && window.scrollY < capaHeight) {
    //     if (textosCapa.style.opacity < 1) {
    //         textosCapa.style.opacity += .04;
    //         capa.style.height = (capaHeight++) + 'px';
    //     }
    // }

    if (window.scrollY < positionAnterior) {
        console.log('menor');
        // if (textosCapa.style.opacity > 0 && textosCapa.style.opacity <= 1) {
        //     textosCapa.style.opacity += (parseInt(textosCapa.style.opacity) + 0.04);
        //     capa.style.height = (parseInt(capaHeight) + 5) + 'px';
        // }

        if (textosCapa.style.opacity > 0 && textosCapa.style.opacity <= 1) {
            textosCapa.style.opacity += .02;
            capa.style.height = parseInt(capa.style.height.replace('px', '')) + 5 + 'px';
        }

        // textosCapa.style.opacity += (parseInt(textosCapa.style.opacity) + 0.04);
        // capa.style.height = parseInt(capa.style.height.replace('px', '')) + 5 + 'px';

    } else if (window.scrollY == positionAnterior) {
        console.log('igual');
    } else if (window.scrollY > positionAnterior) {
        console.log('maior');
        if (textosCapa.style.opacity > 0 && textosCapa.style.opacity <= 1) {
            textosCapa.style.opacity -= .02;
            capa.style.height = parseInt(capa.style.height.replace('px', '')) - 5 + 'px';
        }
    }
    positionAnterior = window.scrollY;
}