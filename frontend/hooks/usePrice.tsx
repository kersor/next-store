import currencyFormatter from 'currency-formatter' 

export function usePrice (price: number) {
    const newPrice = currencyFormatter.format(price, {code: 'RUB'})
    return newPrice
}