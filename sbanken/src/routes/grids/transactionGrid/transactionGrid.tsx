import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { useApiStore } from '../../../stores/useApiStore';

export const TransactionGrid = () => {
    const { transactions_store } = useApiStore();
    const [rowData, setRowData] = useState<any>();

    useEffect(() => {
        setRowData(transactions_store.items);
    }, [transactions_store]);

    const [columnDefs] = useState([
        {
            field: 'accountingDate',
            flex: 1,
            sortable: true,
            headerName: 'Dato',
            cellRenderer: (param: any) => {
                return `${new Date(param.data.accountingDate).toLocaleDateString('no-nb', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}`;
            },
        },
        {
            field: 'amount',
            flex: 1,
            sortable: true,
            headerName: 'Kostnad',
            cellRenderer: (param: any) => {
                return `${Math.round(param.data.amount)}kr`;
            },
        },
        { field: 'transactionType', flex: 1, sortable: true, headerName: 'Transaksjonstype' },
        { field: 'text', flex: 1, sortable: true, headerName: 'Tekst' },
    ]);

    return (
        <div className='transaction-summary-grid-component'>
            {transactions_store && (
                <div className='ag-theme-alpine' id='transaction-summary-grid' style={{ height: 400 }}>
                    <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
                </div>
            )}
        </div>
    );
};
