export const transactionGridColumnDefs = [
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
];

export const transactionSummaryGridColumnDefs = [
    { field: 'name', flex: 2, headerName: 'Navn', sortable: true },
    {
        field: 'amount',
        flex: 1,
        headerName: 'Kostnad',
        cellRenderer: (param: any) => {
            return `${Math.round(param.data.amount)}kr`;
        },
        sortable: true,
    },
    { field: 'count', flex: 1, headerName: 'Antall transaksjoner', sortable: true },
];
