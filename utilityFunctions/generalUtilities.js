/**
 * Flattens an object with custom fields, so it can be easily
 * displayed.
 * @param {*} arr
 */
export const flattenObjectValues = obj => {
  const newObj = { ...obj };
  newObj.defaultFields.forEach(field => {
    newObj[field.name] = field.value;
  });
  return newObj;
};

/**
 * Flattens an object with custom fields, so it can be easily
 * displayed.
 * @param {*} arr
 */
export const flattenObjectsValues = arr => {
  console.log(arr, Array.isArray(arr));
  return arr.map(obj => {
    const newObj = flattenObjectValues(obj);
    return newObj;
  });
};
