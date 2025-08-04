const charType = [
    "ABCDERFHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "0123456789",
    "!@#$%^&*()_+{}[],.<>/?';:"
];

let type = [false, false, false, false];

let passwordLen = 8;

const toggle = () => {
    type[0] = document.getElementById("uppercase").checked;
    type[1] = document.getElementById("lowercase").checked;
    type[2] = document.getElementById("numbers").checked;
    type[3] = document.getElementById("symbols").checked;
    console.log(type);
}

const passLen = () => {
    let valueOfLen = document.getElementById("value-of-password-length");
    let input = document.getElementById("password-length");
    valueOfLen.textContent = input.value;
    passwordLen = input.value;
}

const passGenerator = () => {
    let generatedPassword = "";
    let count = 0;
    for(let i=0; i<4; i++){
        if(type[i]) count++;
    }
    if(count == 0){
        alert("Please select at least one character type.");
        return;
    }
    for(let i=0; i<passwordLen; i++){
        
        while(true){
            let typeIndex = Math.floor(Math.random() * 4);
            if(type[typeIndex]){
                let charIndex = Math.floor(Math.random() * charType[typeIndex].length);
                generatedPassword += charType[typeIndex][charIndex];
                break;
            }
        }
        
    }
    const generatedPasswordElem = document.getElementById("generated-password");
    generatedPasswordElem.textContent = generatedPassword;

    const generate = document.getElementById("generate-button");
    generate.innerText = "Generated";

    const copy = document.getElementById("copy-button");
    copy.innerText = "Copy";

}

const copyToClipboard = () => {
    const pass = document.getElementById("generated-password").innerText;
    if(pass === ""){
        alert("Generate a password first");
        return;
    }
    navigator.clipboard.writeText(pass);

    const copy = document.getElementById("copy-button");
    copy.innerText = "Copied";

    const generate = document.getElementById("generate-button");
    generate.innerText = "Generate";

}