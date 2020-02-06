import $ from "jquery";


export function parseElementToResult(ele: Element) {
    const hotel = $(ele);

    const hotelName = hotel.find('.InfoBox__HotelTitle').text();
    const price = hotel.find('.price-box__price__amount').text().split(',').join('');
    const area = hotel.find('.areacity-name-text').text().replace(' - 查看地圖', '');
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
        hasBreakfirst,
        price: Number(price),
    };
};

export type SearchResult = ReturnType<typeof parseElementToResult>;

