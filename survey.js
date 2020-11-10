setTimeout(() => {
    var answers = new Array();
    for (var i = 1; i <= 3; i++)
        answers.push(document.querySelector('#survey_q' + i + 'a1'));

    var confirmButton = document.querySelector('#btnConfirm');

    answers.forEach(answer => {
        if (!answer) return;
        answer.click();
    });

    if (!confirmButton) return;
    confirmButton.click();
}, 550);