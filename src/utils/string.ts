export const isNotEmptyString = (str?: unknown) =>
  typeof str === "string" && str?.trim().length > 0;

export const toUpperCaseFirstLetter = (str?: string): string => {
  if (!str) {
    return "";
  }

  if (!isNotEmptyString(str)) {
    return "";
  }

  const arr = str.split("");
  arr[0] = arr[0].toUpperCase();

  return arr.join("");
};

export const fromSnakeCaseToNormal = (str?: string): string => {
  if (!isNotEmptyString(str)) return "";

  return toUpperCaseFirstLetter(str?.replace(/_/gi, " ") || "");
};