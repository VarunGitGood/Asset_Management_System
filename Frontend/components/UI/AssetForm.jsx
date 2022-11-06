import React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import {
  Checkbox,
  InputLabel,
  MenuItem,
  Select,
  FormControlLabel,
} from "@material-ui/core";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FetchData, postData } from "../utils/REST";
import { Button } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export default function AssetForm() {
  const { register, handleSubmit } = useForm();
  const [rooms, setRooms] = React.useState([]);
  const auth = useContext(AuthContext);

  const fetchRooms = async () => {
    try {
      const res = await FetchData("/rooms");
      setRooms(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const submitHandler = async (data) => {
    try {
      data["asset_status"] = 1;
      const date = dayjs(data["asset_purchase_date"]).format("YYYY-MM-DD");
      data["purchase_date"] = date;
      data = { ...data, last_updated_staff_id: auth.user.data[0].staff_id };
      data["is_computer"] = data["is_computer"] ? 1 : 0;
      console.log(data);
      const result = await postData("/assets", false, null, data);
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
  };

  React.useEffect(() => {
    console.log(auth.user);
    fetchRooms();
  }, []);

  const menuitems = rooms.map((room) => {
    return <MenuItem value={room.room_id}>Room {room.room_id}</MenuItem>;
  });

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="comp_name"
          label="Computer Name"
          name="comp_name"
          autoComplete="comp_name"
          autoFocus
          {...register("comp_name")}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="model"
          label="Model"
          name="model"
          autoComplete="model"
          autoFocus
          {...register("model")}
        />
        <InputLabel htmlFor="room_id">Room</InputLabel>

        <Select
          margin="normal"
          required
          fullWidth
          id="room_id"
          labelId="room_id"
          name="room_id"
          autoComplete="room_id"
          autoFocus
          {...register("room_id")}
        >
          {menuitems}
        </Select>
        <TextField
          margin="normal"
          required
          fullWidth
          id="purchase_cost"
          label="Purchase Cost"
          name="purchase_cost"
          autoComplete="purchase_cost"
          autoFocus
          {...register("purchase_cost")}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            margin="normal"
            required
            fullWidth
            id="purchase_date"
            label="purchase_date"
            name="purchase_date"
            autoComplete="purchase_date"
            autoFocus
            {...register("purchase_date")}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <FormControlLabel
          defaultValue={false}
          control={<Checkbox />}
          label="Is it a computer?"
          labelPlacement="end"
          {...register("is_computer")}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}
