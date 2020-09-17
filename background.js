chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete') {
        switch (tab.url) {
            case 'https://hcs.eduro.go.kr/#/relogin':
                chrome.tabs.executeScript(null, { file: "relogin.js" });
                break;
            case 'https://hcs.eduro.go.kr/#/main':
                chrome.tabs.executeScript(null, { file: "main.js" });
                break;
            case 'https://hcs.eduro.go.kr/#/survey':
                chrome.tabs.executeScript(null, { file: "survey.js" });
                break;
        }
    }
})