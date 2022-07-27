import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AgGridReact } from 'ag-grid-react';
import { useState } from 'react';
import { useApiStore } from '../../../../stores/useApiStore';
import './progressGrid.scss';

export const ProgressGrid = ({
    setTransactionGridOpen,
}: {
    setTransactionGridOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const { active_category_store } = useApiStore();
    const [columnDefs] = useState([
        {
            field: 'accountingDate',
            flex: 2,
            sortable: true,
            headerName: 'Dato',
            cellRenderer: (params: any) => {
                const date = new Date(params.value).toLocaleDateString('no-nb', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                });
                return date;
            },
        },
        {
            field: 'amount',
            flex: 1,
            sortable: true,
            headerName: 'Kostnad',
            cellRenderer: (params: any) => Math.round(params.value) + ' kr',
        },
        { field: 'name', flex: 2, sortable: true, headerName: 'Transaksjons navn', wrapText: true },
        { field: 'text', flex: 2, sortable: true, headerName: 'Transaksjons tekst', wrapText: true },
    ]);

    return (
        <div className='progress-grid-component'>
            <button className='close-btn' onClick={() => setTransactionGridOpen(false)}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <h1 className='title'>Transaksjoner</h1>
            {active_category_store && <AgGridReact rowHeight={50} rowData={active_category_store} columnDefs={columnDefs} />}
        </div>
    );
};
