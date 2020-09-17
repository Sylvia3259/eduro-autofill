document.addEventListener('DOMContentLoaded', () => {
    var input = document.querySelector('#password');
    chrome.storage.sync.get({ 'password': '' }, item => {
        input.value = item.password;
    });
    input.addEventListener('input', () => {
        chrome.storage.sync.set({ 'password': input.value });
    });
});