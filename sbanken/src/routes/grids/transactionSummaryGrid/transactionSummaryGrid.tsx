import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import './transactionSummaryGrid.scss';
import { transactionReducedDataToGridData } from '../../../services/transactionReducedDataToGridData';
import { useApiStore } from '../../../stores/useApiStore';

export const TransactionSummaryGrid = () => {
    const { transaction_data_store } = useApiStore();
    const [rowData, setRowData] = useState<any>();
    useEffect(() => {
        const data = Object.entries(transaction_data_store).map((e) => ({ [e[0]]: e[1] }));
        const gridData = transactionReducedDataToGridData(data);
        setRowData(gridData);
    }, [transaction_data_store]);

    const [columnDefs] = useState([
        { field: 'name', flex: 2, headerName: 'Navn', sortable: true },
        {
            field: 'amount',
            flex: 1,
            headerName: 'Kostnad',
            cellRenderer: (param: any) => {
                console.log('param');
                console.log(param.data);
                return `${Math.round(param.data.amount)}kr`;
            },
            sortable: true,
        },
        { field: 'count', flex: 1, headerName: 'Antall transaksjoner', sortable: true },
    ]);

    return (
        <div className='transaction-summary-grid-component'>
            {transaction_data_store && (
                <div className='ag-theme-alpine' id='transaction-summary-grid' style={{ height: 400 }}>
                    <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
                </div>
            )}
        </div>
    );
};
