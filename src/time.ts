const stopDayTimeStamp = new Date("2026-02-03T22:00:00");

const getTimeDiff = (from: Date, to: Date) => {
    const timestamp = Math.abs(from.getTime() - to.getTime());
    let timeStampInSeconds = timestamp / 1000;

    // Get count of year in timeStampInSeconds we have
    const year = Math.floor(timeStampInSeconds / timeInSecondRegistry.year);
    // Remove amount of years timeStampInSeconds
    timeStampInSeconds -= year * timeInSecondRegistry.year;

    // Get count of months in timeStampInSeconds remaining
    const months = Math.floor(timeStampInSeconds / timeInSecondRegistry.month);
    // Remove amount of months timeStampInSeconds
    timeStampInSeconds -= months * timeInSecondRegistry.month;

    // Get count of days in timeStampInSeconds remaining
    const days = Math.floor(timeStampInSeconds / timeInSecondRegistry.day);
    // Remove amount of days timeStampInSeconds
    timeStampInSeconds -= days * timeInSecondRegistry.day;

    // Get count of hour in timeStampInSeconds remaining
    const hours = Math.floor(timeStampInSeconds / timeInSecondRegistry.hour);
    // Remove amount of months timeStampInSeconds
    timeStampInSeconds -= hours * timeInSecondRegistry.hour;

    // Get count of minutes in timeStampInSeconds remaining
    const minutes = Math.floor(timeStampInSeconds / timeInSecondRegistry.minutes);
    // Remove amount of minutes timeStampInSeconds
    timeStampInSeconds -= Math.floor(minutes * timeInSecondRegistry.minutes);

    const seconds = Math.floor(timeStampInSeconds)

    return {year, months, days, hours, minutes, seconds};
}

const formatToTwoDigits = (time: number) => {
    return time > 9 ? time.toString() : `0${time}`
}

const getFormatedTimeToDisplay = (
    hours: number, minutes: number, seconds: number, separator:string
) => {
    const timeArray:Array<string> = [
        formatToTwoDigits(hours), 
        formatToTwoDigits(minutes),
        formatToTwoDigits(seconds)
    ];

    const timeToString = timeArray.join(separator)

    return timeToString;
}

const getFormatedFullTimeToDisplay = (years: number, months: number, days: number) => {
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


export const setTimer = (element: Element) => {
    const updateTime = () => {
        let timeDiff = getTimeDiff(stopDayTimeStamp, new Date())
        element.innerHTML = getFormatedFullTimeToDisplay(timeDiff.year, timeDiff.months, timeDiff.days) + " " + getFormatedTimeToDisplay(timeDiff.hours, timeDiff.minutes, timeDiff.seconds, ":");
    }
    setInterval(() => updateTime(), 1000)
}