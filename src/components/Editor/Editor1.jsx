
import React from 'react';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
            }`,
    },
];

export const Editor1 = () => {
    const { data } = useDemoData({
        dataSet: columns,
        rowLength: 10000,
        editable: true,
    });


    return (
        <div className="item">
            <div style={{ width: '100%', height: '100%' }}>
                <div style={{ height: '100%', width: '100%' }}>
                    <DataGridPro
                        {...data}
                        loading={data.rows.length === 0}
                        rowHeight={38}
                        checkboxSelection
                        disableSelectionOnClick
                    />
                </div>
            </div>

        </div>


    );
};
