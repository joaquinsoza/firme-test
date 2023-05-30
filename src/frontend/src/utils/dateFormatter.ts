export const dateFormatter = (date: string) => {
  const current = new Date();
  const input = new Date(date);

  const inputDateString =
    input.getUTCFullYear() +
    "-" +
    ("0" + (input.getUTCMonth() + 1)).slice(-2) +
    "-" +
    ("0" + input.getUTCDate()).slice(-2);

  const currentDateString =
    current.getUTCFullYear() +
    "-" +
    ("0" + (current.getUTCMonth() + 1)).slice(-2) +
    "-" +
    ("0" + current.getUTCDate()).slice(-2);

  if (inputDateString === currentDateString) {
    let hourFormat = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "UTC",
    };
    return new Intl.DateTimeFormat("en-US", hourFormat).format(input);
  }

  current.setUTCDate(current.getUTCDate() - 1);
  const yesterdayDateString =
    current.getUTCFullYear() +
    "-" +
    ("0" + (current.getUTCMonth() + 1)).slice(-2) +
    "-" +
    ("0" + current.getUTCDate()).slice(-2);

  if (inputDateString === yesterdayDateString) {
    return "Yesterday";
  }

  let dateFormat = { month: "short", day: "2-digit", timeZone: "UTC" };
  return new Intl.DateTimeFormat("en-US", dateFormat).format(input);
};
