import { TextField } from '@material-ui/core'
import React from 'react'
import { useForm } from "react-hook-form";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FetchData, postData, deleteData } from "../utils/REST";
import { Button } from '@mui/material';
export default function RepairForm() {
    const { register, handleSubmit } = useForm();
    const submitHandler = async (data) => {
        console.log(data);
        
        event.preventDefault();
        try {
            const result = await postData("/repairs", false, null, data);
            console.log(result);
        } catch (err) {
            console.log(err.message);
        }
    };

  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)}>
        <TextField
            margin='normal'
            required
            fullWidth
            id='asset_id'
            label='Asset ID'
            name='asset_id'
            autoComplete='asset_id'
            autoFocus
            {...register('asset_id')}
        />
        <TextField
            margin='normal'
            required
            fullWidth
            id='repair_cost'
            label='Repair Cost'
            name='repair_cost'
            autoComplete='repair_cost'
            autoFocus
            {...register('repair_cost')}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                    margin='normal'
                    required
                    fullWidth
                    id='repair_date'
                    label='Repair Date'
                    name='repair_date'
                    autoComplete='repair_date'
                    autoFocus
                    {...register('repair_date')}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>Send for Repair</Button>
        </form>
        



    </div>
  )
}
