export const dateFormat = (dateString) => {
  const shortMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const istDate = new Date(dateString);
  const date = istDate.getDate();
  const month = istDate.getMonth();
  return `${date} ${shortMonths[month]}`;
};
