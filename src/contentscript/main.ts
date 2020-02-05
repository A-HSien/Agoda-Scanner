import $ from "jquery";
import { SearchResult, parseElementToResult } from "./SearchResult";
import { Scanner } from "./Scanner"; 
 

const scanResults : SearchResult[][] = [];
const task = async () => {
    const scanner = new Scanner();
    const eles = await scanner.runScanAsync(); 
    const results = eles.map(parseElementToResult);
    scanResults.push(results);
    const next = document.querySelector('#paginationNext');
    if(next){
        $(next).click();
        setTimeout(() => {
            task();
        }, 500); 
    }   
        const each = results.map(r => [ r.hotelName, r.area, r.roomTypeName, r.price.toString(10), r.hasBreakfirst?'是':'否' ]);
       // const  csvContent = "data:text/csv;charset=utf-8," + each.map(e => e.map(e=>e.replace(/,/g, "")).join(",")).join("\r\n");
        const dlAnchorElem = document.createElement('a');

        const rows = [
            ["name1", "city1", "some other info"],
            ["name2", "city2", "more info"]
        ];
        
        let csvContent = "data:text/csv;charset=utf-8," 
            + rows.map(e => e.join(",")).join("\n");

        dlAnchorElem.setAttribute("href",encodeURI( csvContent ));
        dlAnchorElem.setAttribute("download", "data.csv");
        dlAnchorElem.click()
    
};
// task();



const rows = [
    ["中文", "中文", "some other info"],
    ["name2", "中文", "more info"]
];

let csvContent = "data:text/csv;charset=utf-8," 
    + rows.map(e => e.join(",")).join("\n");
    const dlAnchorElem = document.createElement('a');
dlAnchorElem.setAttribute("href",encodeURI( csvContent ));
dlAnchorElem.setAttribute("download", "data.csv");
dlAnchorElem.click()

export const module = null;