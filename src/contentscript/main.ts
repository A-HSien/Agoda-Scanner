import $ from "jquery";
 

export interface SearchResult { 
    area: string ,
    hotelName: string ,
    hotelStar: number ,
    specialRank: string,
    roomTypeName: string ,
    hasBreakfirst?: boolean ,
    price: number,
};

export class Scanner {
    private scanSpeed = 5000; 
    private brakes = 2;
    private scanResult :Element[] = [];

    runScanAsync = async () => {
            const prevLen = this.scanResult.length;
            this.scanResult = await this.scanAsync(); 
            const currLen = this.scanResult.length;
            console.log('result count: '+ currLen);
            if (prevLen===currLen)
                this.brakes--;
            if (this.brakes!==0) 
                await this.runScanAsync(); 
            return this.scanResult ;
    };

    private scanAsync  ()  {
        window.scrollTo(0, 0);
        return new Promise<Element[]>((resolve, reject) =>{
            $('html').animate(
                { scrollTop: $(document).height() },
                {
                    duration: this.scanSpeed,
                    complete: () => {
                        const hotels = Array.from(document.querySelectorAll('.hotel-item-box')); 
                        resolve(hotels);
                    }
                }
            ); 
        });
    };
};

export function parseElementToResult(ele:Element){ 
        const hotel = $(ele);
        const hotelName = hotel.find('.InfoBox__HotelTitle').text() as string;
        const price = hotel.find('.price-box__price__amount').text().split(',').join('');
        const area = hotel.find('.areacity-name-text').text();
        const hasBreakfirst = hotel.find('.breakfast-included').length > 0;

        let hotelStar: number = 0;
        try {
            const startNumberClassName: string = 'ficon-star-';
            const starClasses: string = hotel.find('.ficon.orange-yellow').attr('class') || '';
            const starClass: string = starClasses.split(startNumberClassName)[1].split(' ')[0];
            hotelStar = Number(starClass);
            hotelStar = (hotelStar >= 10) ? hotelStar / 10 : hotelStar;

        }
        catch (err) {

        }
       return { 
                area,
                hotelName,
                hotelStar,
                specialRank: '',
                roomTypeName: '',
                  hasBreakfirst,
                price: Number(price),
            } as SearchResult;  
};

debugger;
let scanResults : SearchResult[][] = [];
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
};
 // task();

export const module = null;