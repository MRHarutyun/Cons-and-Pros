let uniqueId = 1;

export const createItem = text => {
    return {
        id: uniqueId++,
        text
    }
}
