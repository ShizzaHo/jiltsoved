export const formatCurrency = (value: number): string => {
    const stringValue: string = value.toFixed(2);
    const [integerPart, decimalPart] = stringValue.split('.');
    const formattedIntegerPart: string = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    const formattedValue: string = `${formattedIntegerPart},${decimalPart}₽`;
    return formattedValue;
}