const URL = "https://qrtag.net/api/qr_200.svg?url=";

const generate = () => {
    const input = document.getElementById("url").value;
    const fullURL = URL + input;
    const imgBox = document.getElementById("qr-code");
    imgBox.src = fullURL;
}

const genElem = document.getElementById("generateButton");
genElem.addEventListener('click', generate);