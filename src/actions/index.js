export const BUY_FEATURE = "BUY_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = () => {
    return { type: BUY_FEATURE };
};

export const removeFeature = () => {
    return { type: REMOVE_FEATURE };
};