setTimeout(() => {
    var passwordInput = document.querySelector('input');
    var confirmButton = document.querySelector('#btnConfirm');

    if (!passwordInput) return;
    if (!confirmButton) return;

    chrome.storage.sync.get({ 'password': '' }, item => {
        passwordInput.value = item.password;
        confirmButton.click();
    });
}, 0);