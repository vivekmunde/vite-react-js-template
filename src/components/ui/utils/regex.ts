const removeNonAlphaNumeric = (value: string) => {
  return value.replace(/[^a-z0-9]/gi, '');
};

const replaceSpace = (value: string, replace: string) => {
  return value.replace(/\s/gi, replace);
};

export { removeNonAlphaNumeric, replaceSpace };
