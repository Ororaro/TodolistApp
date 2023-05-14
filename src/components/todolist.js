import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../store/todolistSlice'
import Showtodolist from './showtodolist';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Container, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { v4 as uuidv4 } from 'uuid';
const Todolist = () => {
    const lists = useSelector((state) => state.todo.lists)
    const dispatch = useDispatch()
    const [task, setTask] = useState('')
    const handleSubmit = () => {
        if (task != "") {
            dispatch(addItem({
                title: task,
                id: uuidv4()
            }))
        }
        setTask('')
    }
    return (
        <Box>
            <Container maxWidth="lg">
                <Typography variant='h1' sx={{ textAlign: 'center', fontWeight: '700', padding: '2rem', color: '#fff', textShadow: ' 0 0 0.2em #8E1199, 0 0 0.2em #8E1199' }}>Todolist APP</Typography>
                <Box sx={{ border: '2px solid #000', padding: '1.5rem'}}>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1 }, display: 'flex', justifyContent: 'center'
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField sx={{ width: '500px', border: "1px solid #000", backgroundColor: '#B9BDE3' }} id="outlined-basic" label="Todo" variant="filled" value={task} onChange={(e) => setTask(e.target.value)} />
                        <Button sx={{
                            backgroundColor: '#000 !important', width: '100px !important'
                            , color: '#fff', fontSize: "20px", fontWeight: '700'
                        }} variant="text" onClick={handleSubmit}>ADD</Button>
                    </Box>
                </Box>

                <Box sx={{ height: "100%", background: "#000" }}>
                    {lists.map((lists, index) => {
                        return <Showtodolist lists={lists} key={index} index={index} />
                    })}
                </Box>
            </Container>
        </Box>
    )
}

export default Todolist