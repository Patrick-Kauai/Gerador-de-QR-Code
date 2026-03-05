const container = document.querySelector('.container');
const input = document.querySelector('#qr-form input');

const button = document.querySelector('#qr-form button');

const qrCodeImg = document.querySelector('#qr-code img');


/* Function*/

/* Gerar QR Code */
function generateQRCode() {

    const qrValue = input.value;

    if (!qrValue) return;

    button.innerText = 'Gerando QR Code...';

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

    qrCodeImg.addEventListener('load', () => {
        container.classList.add('active');
        button.innerText = 'QR Code Gerado';
    });



}

button.addEventListener('click', () => {
    generateQRCode();
});

input.addEventListener('keydown', (e) => {
    if (e.code === "Enter") {
        generateQRCode();
    }
});

/* Limpar QR Code */

input.addEventListener('keyup', () => {
    if (!input.value) {
        container.classList.remove('active');
    }
});