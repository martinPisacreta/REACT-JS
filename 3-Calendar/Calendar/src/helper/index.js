/*With getDaysMonths you get the days that have the month.*/
export default function getDaysMonths(yearSelected,indexMonthSelected) {
    let daysMonth = new Date(yearSelected, indexMonthSelected + 1, 0).getDate();
    return daysMonth;
}