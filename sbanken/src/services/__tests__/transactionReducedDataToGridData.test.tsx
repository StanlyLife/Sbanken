import { transactionReducedDataToGridData } from '../transactionReducedDataToGridData';

const inputData = [
    {
        BUNNYCDN: {
            amount: -102.85,
            count: 1,
            name: 'BUNNYCDN',
        },
    },
];
const expectedData = [{ amount: -102.85, count: 1, name: 'BUNNYCDN' }];

test('takes reduced data and converts to griddata', () => {
    expect(transactionReducedDataToGridData(inputData)).toEqual(expectedData);
});
