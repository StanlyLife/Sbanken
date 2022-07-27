import { categoryItem } from '../../../../interfaces/categoryItem';
import { TransactionItem, TransactionWithCategoryItem } from '../../../../interfaces/transactionItem';
import { TransactionBlackList } from '../../../../utils/blackList';
import { TransactionCategoryMapper } from '../../../../utils/transactionCategoryMapper';

//Local utils, not meant to be used anywhere else in the project
export const getTransactionsGroupedInCategories = (transactions: TransactionWithCategoryItem[]) => {
    //Return an array of categories calculated by transactions parameter
    const result = transactions.reduce((acc: categoryItem[], curr) => {
        const existingCategory = acc.filter((transaction) => transaction.category === curr.category)[0];
        if (existingCategory) {
            //Add curr to existing category
            existingCategory.amount += curr.amount;
            existingCategory.amountIn += curr.amount > 0 ? curr.amount : 0;
            existingCategory.amountOut += curr.amount < 0 ? curr.amount : 0;
            existingCategory.count++;
            existingCategory.transactions.push(curr);
        } else {
            const categoryItem: categoryItem = {
                category: curr.category,
                color: 'temporary color',
                count: 1,
                amountIn: curr.amount > 0 ? curr.amount : 0,
                amountOut: curr.amount < 0 ? curr.amount : 0,
                amount: curr.amount,
                transactions: [curr],
            };
            acc.push(categoryItem);
        }
        return acc;
    }, []);
    return result.sort((a, b) => a.amount - b.amount);
};

export const getTransactionsWithCategories = (transactions: TransactionItem[]) => {
    const result = transactions?.reduce((acc: TransactionWithCategoryItem[], curr) => {
        const merchantName = curr.cardDetails?.merchantName;
        const name = merchantName ? merchantName : curr.text;
        if (TransactionBlackList.includes(name)) return acc;
        const category = TransactionCategoryMapper(name);
        const transactionItemWithCategory: TransactionWithCategoryItem = {
            ...curr,
            category: category,
            name: name,
        };
        acc.push(transactionItemWithCategory);
        return acc;
    }, []);
    return result;
};
