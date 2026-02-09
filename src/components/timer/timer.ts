export const stopDayTimeStamp = new Date("2026-02-03T22:00:00");
export let timeDiffInSeconds = 0

export const getTimeInTimeQuantity = (seconds: number) => {
    // Get count of year in seconds we have
    const years = Math.floor(seconds / timeInSecondRegistry.year);
    // Remove amount of years seconds
    seconds -= years * timeInSecondRegistry.year;

    // Get count of months in seconds remaining
    const months = Math.floor(seconds / timeInSecondRegistry.month);
    // Remove amount of months seconds
    seconds -= months * timeInSecondRegistry.month;

    // Get count of days in seconds remaining
    const days = Math.floor(seconds / timeInSecondRegistry.day);
    // Remove amount of days seconds
    seconds -= days * timeInSecondRegistry.day;

    // Get count of hour in seconds remaining
    const hours = Math.floor(seconds / timeInSecondRegistry.hour);
    // Remove amount of months seconds
    seconds -= hours * timeInSecondRegistry.hour;

    // Get count of minutes in seconds remaining
    const minutes = Math.floor(seconds / timeInSecondRegistry.minutes);
    // Remove amount of minutes seconds
    seconds -= Math.floor(minutes * timeInSecondRegistry.minutes);

    const remainingSeconds = Math.floor(seconds)

    return {years, months, days, hours, minutes, seconds: remainingSeconds};
}

const formatToTwoDigits = (time: number) => {
    return time > 9 ? time.toString() : `0${time}`
}

const getFormatedTimeToDisplay = (
    timeQuantity: {hours: number, minutes: number, seconds: number}, separator: string
) => {
    const timeArray:Array<string> = [
        formatToTwoDigits(timeQuantity.hours), 
        formatToTwoDigits(timeQuantity.minutes),
        formatToTwoDigits(timeQuantity.seconds)
    ];

    const timeToString = timeArray.join(separator)

    return timeToString;
}

const getFormatedFullTimeToDisplay = (timeQuantity: {years: number, months: number, days: number}) => {
    let years = timeQuantity.years;
    let months = timeQuantity.months
    let days = timeQuantity.days;

    const formatedYears =  years > 0 ? `${years} ${years > 1 ? "ans" : "an"}` : "";
    const formatedMonths = months > 0 ? `${months} mois` : "";
    const formatedDays = days > 0 ? `${days} ${days > 1 ? "jours" : "jour"}` : "";

    return `${formatedYears} ${formatedMonths} ${formatedDays}`
}

const timeInSecondRegistry = {
    year : 12 * 30 * 24 * 60 * 60,
    month: 30 * 24 * 60 * 60,
    day: 24 * 60 * 60,
    hour: 60 * 60,
    minutes: 60,
}

const getDiffTimeInSeconds = (from: Date, to: Date) => {
    const timestamp = Math.abs(from.getTime() - to.getTime());
    return timestamp / 1000;
}

export const getTimerPrint = (timeQuantity: {
    years: number, 
    months: number, 
    days: number, 
    hours: number, 
    minutes: number, 
    seconds: number}) => {
        
    return `<p>
        ${getFormatedFullTimeToDisplay(timeQuantity)} 
        ${getFormatedTimeToDisplay(timeQuantity, ":")}
    </p>`
}

export const setTimer = (element: Element) => {
    const updateTime = () => {
        timeDiffInSeconds = getDiffTimeInSeconds(stopDayTimeStamp, new Date())
        let timeQuantity = getTimeInTimeQuantity(timeDiffInSeconds)
    
        element.innerHTML = getTimerPrint(timeQuantity);
    }
    updateTime()
    setInterval(updateTime, 1000)
}