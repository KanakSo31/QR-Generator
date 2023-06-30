const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const GenerateBtn = document.getElementById('GenerateBtn');
const DownloadBtn = document.getElementById('DownloadBtn');

const qrContainer = document.querySelector('.body');


let size = sizes.value;

GenerateBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    isEmptyInput()
    
});

sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    isEmptyInput();
    // generateQRCode();
});

function isEmptyInput() {
    if(qrText.value.length > 0){

        generateQRCode();
    }else{
        alert("Enter the text or link to Generate your QR code")
    }
}

function generateQRCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    })
}