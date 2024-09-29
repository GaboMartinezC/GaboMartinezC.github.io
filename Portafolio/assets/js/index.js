const Responsive = () => {
    let elementosImg = document.getElementsByClassName('imagen');
    let panelesBTN = document.getElementsByClassName('panelBtns');
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    //Movil/Resolucion pequeña
    if ((/android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)))
    {
        //Remueve las imágenes
        for(let i = 0; i < elementosImg.length; i++)
            elementosImg[i].style.display = 'none';
        //Acomoda los botones horizontalmente
        for(let i = 0; i < panelesBTN.length; i++)
            panelesBTN[i].style.display = 'block';
    }
    //Resolucion pantalla grande
    else 
    {
        //Agrega las imágenes
        for(let i = 0; i < elementosImg.length; i++)
            elementosImg[i].style.display = 'block';
        //Acomoda verticalmente los botones
        for(let i = 0; i < panelesBTN.length; i++)
            panelesBTN[i].style.display = 'flex';
    }
}
Responsive();
