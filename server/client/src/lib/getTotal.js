export const getTotal = (cart) => {
    let total = 0;
    cart.forEach((product) => {
        total += (Number(product.price) * product.quantity)
    })

    return total;
}
