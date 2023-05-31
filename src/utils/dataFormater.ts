export const createDateFormatter = (date: string) => {
    const givenDate = new Date(date);
    const dateOptions: Intl.DateTimeFormatOptions = {
        day: 'numeric', // 2-digit
        month: 'long', // numeric "2-digit", "narrow", "short" и "long"
        year: 'numeric', // 2-digit
    };
    const UKDate = new Intl.DateTimeFormat('en-UK', dateOptions);
    return UKDate.format(givenDate)
};