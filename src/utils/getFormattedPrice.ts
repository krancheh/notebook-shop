

const getFormattedPrice = (price: number) => {
    let formattedPrice = price.toString();

    if (formattedPrice.length > 3) {
        formattedPrice = formattedPrice.slice(0, -3) + " " + formattedPrice.slice(-3);
    }

    return formattedPrice;
}

export default getFormattedPrice;