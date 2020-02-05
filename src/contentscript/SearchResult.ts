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
