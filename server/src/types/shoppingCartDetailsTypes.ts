type HttpShoppingCartDetailsResponse<T> = { 
    headers: Record<string, string>;
    body:{
        shoppingCartDetails: T[];
    } ;
};

type ShoppingCartsDetails = {
    cart_details_id: string;
    shopping_cart_id: string;
    product_id: string;
    quantity: number;

}
export {ShoppingCartsDetails, HttpShoppingCartDetailsResponse};