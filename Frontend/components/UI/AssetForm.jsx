import React from 'react'
import Box from '@mui/material/Box';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { Checkbox, InputLabel, MenuItem, Select,FormControlLabel} from '@material-ui/core';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FetchData, postData, deleteData } from "../utils/REST";

export default function AssetForm() {
    const { register, handleSubmit } = useForm();
    const [rooms, setRooms] = React.useState([]);


    const fetchRooms = async () => {
        try {
          const res = await FetchData("/rooms");
          setRooms(res.data.data);
        } catch (error) {
          console.log(error.message);
        }
      };

    React.useEffect(() => {
        fetchRooms();
        }, []);
    
        console.log(rooms);
        const menuitems=rooms.map((room)=>{
            return <MenuItem value={room.room_id}>Room {room.room_id}</MenuItem>
        })

  return (
    <div>
        <TextField
            margin='normal'
            required
            fullWidth
            id='comp_name'
            label='Computer Name'
            name='comp_name'
            autoComplete='comp_name'
            autoFocus
            {...register('comp_name')}
        />
        <TextField
            margin='normal'
            required
            fullWidth
            id='model'
            label='Model'
            name='model'
            autoComplete='model'
            autoFocus
            {...register('model')}
        />
        <InputLabel htmlFor="room_id">Room</InputLabel>

        <Select
            margin='normal'
            required
            fullWidth
            id='room_id'
            labelId='room_id'
            name='room_id'
            autoComplete='room_id'
            autoFocus
            {...register('room_id')}
        >
            {menuitems}
        </Select>
        <TextField
            margin='normal'
            required
            fullWidth
            id='Cost'
            label='Cost'
            name='Cost'
            autoComplete='Cost'
            autoFocus
            {...register('Cost')}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
                margin='normal'
                required
                fullWidth
                id='purchase_date'
                label='purchase_date'
                name='purchase_date'
                autoComplete='purchase_date'
                autoFocus
                {...register('purchase_date')}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
        <FormControlLabel
            defaultValue={false}
            control={<Checkbox />}
            label="Is it a computer?"
            labelPlacement="end"
            {...register('is_computer')}
        />
    </div>
  )
}
