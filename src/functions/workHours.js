export const workHours = (workDays) => workDays?.filter((day) => day?.isOpen).map((day) => {
        const fromTime = day.from ? day.from.slice(0, 5) : "00:00";
        const toTime = day.to ? day.to.slice(0, 5) : "00:00";
        return `${fromTime} - ${toTime}`;
    })[0];