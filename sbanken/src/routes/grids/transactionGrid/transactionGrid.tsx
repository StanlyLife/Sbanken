import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { useApiStore } from '../../../stores/useApiStore';
import { transactionGridColumnDefs } from '../columnDefinitions';

export const TransactionGrid = () => {
    const { transactions_store } = useApiStore();
    const [rowData, setRowData] = useState<any>();

    useEffect(() => {
        setRowData(transactions_store.items);
    }, [transactions_store]);

    return (
        <div className='transaction-summary-grid-component'>
            {transactions_store && (
                <div className='ag-theme-alpine' id='transaction-summary-grid' style={{ height: 400 }}>
                    <AgGridReact rowData={rowData} columnDefs={transactionGridColumnDefs}></AgGridReact>
                </div>
            )}
        </div>
    );
};
