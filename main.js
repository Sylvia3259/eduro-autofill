setTimeout(() => {
    var surveyButton = document.querySelector('.btn');

    if (!surveyButton) return;
    if (surveyButton.innerText != '미참여') return;

    surveyButton.click();
}, 100);