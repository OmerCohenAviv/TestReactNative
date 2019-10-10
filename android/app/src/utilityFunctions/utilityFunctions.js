//Updating an object immutably.
export const updateObject = (oldObj, updatedParam) => {
    return {
        ...oldObj,
        ...updatedParam
    };
};


//Inputs Validations Checking.
export const checkValid = (value, rules) => {
    let valid = true
    if (rules.required) {
        valid = value.trim() !== ''
    };
    return valid;
};