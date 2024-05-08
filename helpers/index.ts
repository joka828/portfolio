export const capitalize = (str: string): string => {
  const firstCharacter = str.charAt(0).toUpperCase();
  const restOfTheString = str.slice(1);
  return `${firstCharacter}${restOfTheString}`;
};
