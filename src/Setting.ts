
export const storageKey = 'settings';

export const defaultSettings = {
    isEnabled: true,
    scanSpeed: 5000,
};

export const settings = { ...defaultSettings };

export async function reloadSettings() {
    Object.assign(settings, await getSettingsAsync());
};


export type Settings = typeof defaultSettings;

export function getSettingsAsync() {
    return new Promise<Settings>((resolve, reject) => {
        if (!chrome.storage) resolve(defaultSettings);
        else chrome.storage.sync.get(storageKey, ({ [storageKey]: currentSettings }) => {
            currentSettings.scanSpeed = Number(currentSettings.scanSpeed);
            resolve(currentSettings);
        });
    });
};

export async function setSettingsAsync(settings: Settings) {
    return new Promise<Settings>((resolve, reject) => {
        if (!chrome.storage) resolve();
        else chrome.storage.sync.set({ [storageKey]: settings }, async () => {
            const setted = await getSettingsAsync();
            console.log('Setting updated:');
            console.log(setted);
            resolve();
        });
    });
};
