import { addDays, format, parseISO } from "date-fns";

export const generateDataBetweenDates = (startDate, endDate) => {
  const generatedData = [];
  let currentDate = startDate;

  while (currentDate <= endDate) {
    const randomValue = Math.random() * 10000;
    const formattedDate = format(currentDate, "yyyy-MM-dd'T'HH:mm:ss.SSSX");

    generatedData.push({
      TotalVal: randomValue,
      DateAndTime: formattedDate,
    });

    currentDate = addDays(currentDate, 1);
  }

  return generatedData;
};
