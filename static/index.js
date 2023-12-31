function showAlert(alertMsg) {

    const alertArea = document.getElementById('alertArea');
    alertArea.innerText = alertMsg;
    alertArea.setAttribute('class', 'alert alert-dismissible fade show alert-area alert-success');

    setTimeout(() => {
        alertArea.innerText = '';
        alertArea.setAttribute('class', 'alert alert-dismissible fade show alert-area');
    }, 2000);
    
}

function handleClearClick() {
    const textarea = document.getElementById('myBox');
    textarea.value = '';

    showAlert("Cleard!")
}

function handleUpperClick() {
    const textarea = document.getElementById('myBox');
    let text = textarea.value;
    text = text.toUpperCase();
    textarea.value = text;

    showAlert("Converted to uppercase!");
}
function handleLowerClick() {
    const textarea = document.getElementById('myBox');
    let text = textarea.value;
    text = text.toLowerCase();
    textarea.value = text;

    showAlert("Converted to lowercase!");
}

function handleCopyClick() {
    const textarea = document.getElementById('myBox');
    let text = textarea.value;
    navigator.clipboard.writeText(text);

    showAlert("Copied!");
}

function handlePasteClick() {
    const textarea = document.getElementById('myBox');
    navigator.clipboard
        .readText()
        .then(
            (clipText) => textarea.value = clipText
        );

    showAlert("Pasted")
}

// let text = String();
setInterval(() => {
    const textarea = document.getElementById('myBox');
    let text = textarea.value;
    const readTimePara = document.getElementById('readTime');
    readTimePara.innerText = `${text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and ${text.length} characters
                              ${0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes to read `;
    
    const preview = document.getElementById('preview');
    preview.innerText = text;

}, 100);



