
const dia = document.getElementById(`dia`);
const hora = document.getElementById(`hora`);
const minuto = document.getElementById(`minuto`);
const segundo = document.getElementById(`segundo`);

const lancamento = new Date(`dec 30, 2023 00:00:00`).getTime();

function countDown() {
    const hoje = new Date().getTime();
    const segTotal = (lancamento - hoje) / 1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60 % 24);
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = finalDias;
    hora.innerHTML = finalHoras;
    minuto.innerHTML = finalMinutos;
    segundo.innerHTML = finalSegundos;
}

countDown();
setInterval(countDown, 1000);
