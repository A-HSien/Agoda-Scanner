import $ from "jquery";
import { settings } from "../Setting";



export class Scanner {

    private brakes = 2;
    private scanResult: Element[] = [];

    runScanAsync = async () => {
        const prevLen = this.scanResult.length;
        this.scanResult = await this.scanAsync();
        const currLen = this.scanResult.length;
        console.log('result count: ' + currLen);
        if (prevLen === currLen)
            this.brakes--;
        if (this.brakes !== 0)
            await this.runScanAsync();
        return this.scanResult;
    };

    private scanAsync() {
        window.scrollTo(0, 0);
        return new Promise<Element[]>((resolve, reject) => {
            $('html').animate(
                { scrollTop: $(document).height() },
                {
                    duration: settings.scanSpeed,
                    complete: () => {
                        const hotels = Array.from(document.querySelectorAll('.hotel-item-box'));
                        resolve(hotels);
                    }
                }
            );
        });
    };
};