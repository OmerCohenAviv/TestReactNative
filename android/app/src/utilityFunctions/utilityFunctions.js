export const updateObject = (oldObj, updatedParam) => {
    return {
        ...oldObj,
        ...updatedParam
    };
};
export const checkValid = (value, rules) => {
    let valid = true
    if (rules.required) {
        valid = value.trim() !== ''
    };
    return valid;
};