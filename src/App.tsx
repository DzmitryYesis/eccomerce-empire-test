import React, {useEffect, useState} from 'react';
import './App.css';
import {DataGrid, GridColDef, GridRowsProp} from '@mui/x-data-grid';
import {ResponseCharactersType} from './types/DataTypes';
import {Box, Typography} from '@mui/material';
import {createDateFormatter} from './utils/dataFormater';
import {CharactersPhoto} from './components/CharactersPhoto/CharactersPhoto';
import {getData} from './api/characters';

function App() {

    const [characters, setCharacters] = useState<ResponseCharactersType>()

    useEffect(() => {
        getData().then(result => setCharacters(result))
    }, [])

    const rows: GridRowsProp = characters ? characters.data.map((el) => {
            return {
                _id: el._id,
                photoURL: el.imageUrl,
                name: el.name,
                createdAt: createDateFormatter(el.createdAt),
                films: el.films.join(', '),
            }
        })
        :
        []

    const columns: GridColDef[] = [
        {field: '_id', headerName: '№', width: 60,},
        {
            field: 'photoURL',
            headerName: 'Photo',
            type: 'actions',
            width: 200,
            renderCell: (params) => <CharactersPhoto imgURL={params.row.photoURL}/>,
            sortable: false,
            filterable: false
        },
        {field: 'name', headerName: 'Name', width: 200, cellClassName: 'name_field'},
        {
            field: 'createdAt',
            headerName: 'Data created',
            width: 200,
            cellClassName: 'data_created'
        },
        {field: 'films', headerName: 'Films', width: 200, cellClassName: 'films'},
    ];

    const isLoading = !characters?.data.length

    return (
        <Box
            sx={{
                height: 800,
                width: '100%'
            }}>
            <Typography
                variant={'h3'}
                component={'h3'}
                sx={{textAlign: 'center', mt: 3, mb: 3}}
            >
                Disney Characters
            </Typography>
            <DataGrid rows={rows} columns={columns} getRowId={row => row._id}
                      loading={isLoading}
            />
        </Box>
    );
}

export default App;
