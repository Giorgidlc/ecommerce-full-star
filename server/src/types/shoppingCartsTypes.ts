type HttpShoppingCartResponse<T> = { 
    status: number;
    headers: Record<string, string>;
    body:{
        shoppingCarts: T[];
    } ;
};

type ShoppingCarts = {
    shopping_cart_id: string;
    user_id: string;
    paying_method_id: string;
    total: number; 

}
export {ShoppingCarts, HttpShoppingCartResponse};