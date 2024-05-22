export const formatBirthday = (birthday) => {
    const date = new Date(birthday);
    const formattedDate = date
        .toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        })
        .replace(/\//g, ".");
    return formattedDate;
};