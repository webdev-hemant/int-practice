import { numberConverter } from "src/helper/generalHelper";

export const generateCategoryUrl = (categoryName: string, categoryId: number) => {
  const formattedCategoryName = categoryName?.replace(/\s/g, '-');
  return `${formattedCategoryName}-${categoryId}`;
};


export const extractIssueIdFromUrl = (url: string) => {
  const urlElements = url.split('-');
  const lastElement = urlElements[urlElements.length - 1];
  return numberConverter(lastElement);
};
