import { timeDiffInSeconds, getTimeInTimeQuantity, getTimerPrint} from "../timer/timer";

const packetPrice = 13.5;
const cigarettePerDay = 8;

const moneyPerCigarette = packetPrice / 20;
const moneyPerDay = moneyPerCigarette * cigarettePerDay

const secondsInDay = 60 * 60 * 24;
const moneyPerSeconds = moneyPerDay / secondsInDay;


const getValueInMoneyFormat = (value: number) => {
   return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(value)
}

const getMoneyCount = () => {
    const totalMoneySaved = timeDiffInSeconds * moneyPerSeconds;
    return getValueInMoneyFormat(totalMoneySaved);
}

const getCigarretteCount = () => {
    const cigarettePerSeconds = cigarettePerDay / (24 * 60 * 60)
    return Math.round(cigarettePerSeconds * timeDiffInSeconds);
}

const getTimeSaved = () => {
    const timePerCigarretteInSeconds = 5 * 60
    let totalCigarrettesTimeInSeconds = timePerCigarretteInSeconds * getCigarretteCount();

    return getTimerPrint(getTimeInTimeQuantity(totalCigarrettesTimeInSeconds));
}

export const setMoneyCount = (element: Element) => {
    element.innerHTML = getMoneyCount();
    setInterval(() => {
        element.innerHTML = getMoneyCount()
        element.classList.add('text-green-500')
        setTimeout(() => {
            element.classList.remove('text-green-500')
        }, 500);
    }, 50000)
}

export const setCigarretteCount = (element: Element) => {
    element.innerHTML = `${getCigarretteCount()} cigarettes`;
    setInterval(() => {
        element.innerHTML = `${getCigarretteCount()} cigarettes`;
    }, 50000)
}

export const setTimeSavedCount = (element: Element) => {
    element.innerHTML = `${getTimeSaved()}`;
    setInterval(() => {
        element.innerHTML = `${getTimeSaved()}`;
    }, 50000)
}
