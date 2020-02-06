import $ from "jquery";
import { parseElementToResult } from "./SearchResult";
import { Scanner } from "./Scanner";
import { reloadSettings, settings } from "../Setting";


setInterval(() => {
    const pagination = document.querySelector('#paginationPageCount') as HTMLElement;
    if (settings.isEnabled && pagination) {
        const text = pagination.innerText
            .replace(/第/g, "")
            .replace(/共/g, "")
            .replace(/ /g, "")
            .replace(/頁/g, "");
        chrome.runtime.sendMessage(text);
    }
    else
        chrome.runtime.sendMessage('暫停中');
}, 500);

const task = async () => {

    await reloadSettings();
    if (!settings.isEnabled) return;

    const scanner = new Scanner();
    const eles = await scanner.runScanAsync();
    if (!settings.isEnabled || eles.length === 0) return;

    const results = eles.map(parseElementToResult);
    const each = results.map(r => [r.hotelName, r.area, r.price.toString(10), r.hasBreakfirst ? '是' : '否']);
    const csvContent = "data:text/csv;charset=utf-8," +
        '飯店名稱, 區域, 價格, 附早餐 \r\n'+
        each.map(e => e.map(e => e.replace(/,/g, "")).join(",")).join("\r\n");
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", encodeURI(csvContent));
    dlAnchorElem.setAttribute("download", JSON.stringify(new Date()) + ".csv");
    dlAnchorElem.click();

    const next = document.querySelector('#paginationNext');
    if (next) {
        $(next).click();
        setTimeout(() => {
            task();
        }, 500);
    }
};

if (location.pathname.endsWith('/search')) task();

export const module = null;