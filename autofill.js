(function(){
    var targetList = [ '선택', '선택', '선택', '선택' ];
    var selectList = document.querySelectorAll('.nice-select');
    if (targetList.length != selectList.length) return;

    targetList.forEach((target, idx) => {
        var select = document.querySelectorAll('.nice-select')[idx];
        select.querySelectorAll('.option').forEach(option => {
            if (option.innerText == target) option.click();
        });
    });

    var button = document.querySelector('.btn');
    if (!button) return;

    button.click();
})();