/*
turns:
{
    "BUNNYCDN": {
        "amount": -102.85,
        "count": 1,
        "name": "BUNNYCDN"
    }
}
to:
{
    "amount": -840.3,
    "count": 2,
    "name": "Bekreftet VISA"
}
*/
export const transactionReducedDataToGridData = (data: Array<any>) => {
    const result = data.reduce((acc: Array<object>, curr: object) => {
        const name = Object.keys(curr)[0];
        curr[name].name = name;
        acc.push(curr[name] as object);
        return acc;
    }, []);
    //Sort array by amount spent
    const sortedData = sortData(result);
    return sortedData;
};

const sortData = (data: Array<any>) => {
    return data.sort((a, b) => a.amount - b.amount);
};
