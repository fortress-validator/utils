const isEmpty = (value: unknown): boolean => {
  return value === undefined
    || value === null
    || value === ''
    || (Array.isArray(value) && value.length < 1);
};

export default isEmpty;
