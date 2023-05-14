import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Container, Grid } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from '../store/todolistSlice'
const Showtodolist = ({ lists }) => {
    const dispatch = useDispatch()
    return (
        <Container maxWidth="lg">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                <Typography variant='h2' sx={{ color: '#fff' }}>{lists.title}</Typography>
                <Box >
                    <DoneIcon sx={{ color: '#fff', fontSize: '50px', margin: '0 2rem', cursor: 'pointer', color: 'green', background: '#fff' }} />
                    <DeleteIcon sx={{ color: '#fff', fontSize: '50px', cursor: 'pointer', color: 'red', background: '#fff' }} onClick={() => dispatch(removeItem(lists.id))} />
                </Box>
            </Box>
        </Container>
    )
}

export default Showtodolist