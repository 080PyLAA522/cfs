document.getElementById('send-button').addEventListener('click', checkCode);

function checkCode() {
    const inputCode = document.getElementById('codeInput').value;
    const correctCode = "080522";  
    if (inputCode === correctCode) {
        alert("Code is correct! Redirecting to the next page...");
        window.location.href = "confession.html"; 
    } else {
        alert("Incorrect code. Please try again.");
    }
}