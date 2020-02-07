import { bindCallback, of } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';


export const storageKey = 'settings';
export const dateFormat = 'YYYY-MM-DD';
export const defaultSettings = {
    isEnabled: true,
    scanSpeed: 5000,
    city: 4951,
    scannerNumber: -1,
};
export const settings = { ...defaultSettings };
export type Settings = typeof defaultSettings;


export async function reloadSettings() {
    return Object.assign(settings, await getSettingsStream().toPromise());
};


export function getSettingsStream() {
    if (!chrome.storage) return of(defaultSettings);

    const get: (keys: string, callback: (items: { [key: string]: Settings }) => void) => void = chrome.storage.sync.get;
    const stream = bindCallback(get).bind(chrome.storage.sync);
    return stream(storageKey).pipe(map(({ [storageKey]: currentSettings }) => {
        if (!currentSettings) return {} as Settings;
        currentSettings.scanSpeed = Number(currentSettings.scanSpeed);
        return currentSettings;
    }));
};


export function setSettingsStream(settings: Settings) {
    if (!chrome.storage) return of(settings);

    const set = chrome.storage.sync.set;
    const stream = bindCallback(set).bind(chrome.storage.sync);
    return stream({ [storageKey]: settings }).pipe(flatMap(() => getSettingsStream()));
};