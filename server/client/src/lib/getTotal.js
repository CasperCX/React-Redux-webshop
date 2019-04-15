export const getTotal = (cart) => {
    let total = 0;
    cart.forEach((product) => {
        total += (Number(product.price) * product.quantity)
    })

    return total;
}

export const getProductTotal = (product) => {
    const {price, quantity} = product;

    return Number(price * quantity);
}

export const getTotalProduct = (product) => {
    return (product.price * product.quantity).toFixed(2);
}

export const getCartTotalVat = (cart) => {
    const total = getTotal(cart);
    const vat = (total / 100 * 21);

    return (total + vat).toFixed(2);
}
