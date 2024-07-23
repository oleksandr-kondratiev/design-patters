import { format as fnsFormat } from "date-fns";

export const DATE_NOW = new Date();

export const getDateNow = (format?: string) => {
  return fnsFormat(DATE_NOW, format || "dd MMM yyyy");
}

export const formattedDate = getDateNow("dd MMM yyyy");