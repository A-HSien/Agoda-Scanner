import { defaultSettings, getSettingsStream, setSettingsStream } from "../Setting";


!async function () {
    const currentSettings = await getSettingsStream().toPromise();
    const settings = { ...defaultSettings };
    Object.keys(defaultSettings).forEach(key => {
        const value = (currentSettings as any)[key];
        if (value != null || value !== undefined)
            (settings as any)[key] = value;
    });
    settings.scannerNumber = Date.now();
    await setSettingsStream(settings).toPromise();
}();

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    chrome.browserAction.setBadgeText({ text: message });
    sendResponse("回覆");
});

export const module = null;