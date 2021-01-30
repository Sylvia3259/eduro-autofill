setTimeout(() => {
    document.querySelectorAll('input[id$="a1"]').forEach(answer => {
        answer.click();
    });
    document.querySelector('#btnConfirm')?.click();
}, 550);