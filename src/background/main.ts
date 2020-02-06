import { Settings, defaultSettings, getSettingsAsync, setSettingsAsync } from "../Setting"; 

debugger;
 
!async function(){ 
   const currentSettings = await getSettingsAsync();
   const settings = {...defaultSettings} as any; 
   Object.keys(defaultSettings).forEach(key=>{
       settings[key]=currentSettings[key as keyof Settings];
    });  
   await setSettingsAsync(settings);
}();

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => { 
    chrome.browserAction.setBadgeText({text:message});
    sendResponse("回覆");  
});

export const module = null;