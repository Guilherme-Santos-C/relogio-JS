setInterval(function (){

    let hora_text = document.querySelector(".hora")
    let minuto_text = document.querySelector(".minuto")
    let segundo_text = document.querySelector(".segundo")

    let data = new Date();

    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();

    hora_text.textContent = hora;
    minuto_text.textContent = minuto;
    segundo_text.textContent = segundo;



}, 1000)