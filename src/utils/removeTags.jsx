export const removeTags = (str) => {
  if (str === null || str === "") {
    return "";
  }

  return str.replace(/(<([^>]+)>)/gi, "").replace(/&nbsp;/gi, " ");
};
