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

export const findTimeDifference = (startDateString, endDateString) => {
  // Convert date strings to Date objects
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);

  // Calculate the time difference in milliseconds
  const timeDifferenceMs = endDate - startDate;

  // Convert the time difference to minutes
  return timeDifferenceMs / (1000 * 60);
};

/**
 *  startDate: 1704585600000,
        endDate: 1704672000000,
 */
