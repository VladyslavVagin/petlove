export const formatDate = (date) => {
    const dateStr = date.split('T')[0];
    const dateObj = new Date(dateStr);
    const formattedDate = `${dateObj.getDate().toString().padStart(2, '0')}/${(dateObj.getMonth() + 1).toString().padStart(2, '0')}/${dateObj.getFullYear()}`;
    return formattedDate;
};