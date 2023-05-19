import React from "react";
import SideBar from "./SideBar";
import s from "../style/Rooms.module.css";
import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { FetchData, postData, deleteData } from "../utils/REST";
import RoomCard from "./RoomCard";
import { useForm } from "react-hook-form";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Rooms() {
  const { handleSubmit, register } = useForm();
  const [rooms, setRooms] = React.useState([]);
  const fetchRooms = async () => {
    try {
      const res = await FetchData("/rooms");
      setRooms(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const deleteRoom = async (id) => {
    try {
      console.log(id);
      const res = await deleteData(`/rooms/${id}`);
      fetchRooms();
    } catch (error) {
      console.log(error.message);
      toast.error('Room contains assets', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };

  const addRoom = async (data) => {
    try {
      const res = await postData("/rooms",false,null,{room_id:data});
      fetchRooms();
    } catch (error) {
      console.log(error.message);
      toast.error('Room already exists', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }

  function handleSumbit(data) {
    console.log(data);
    addRoom(data.room_id);
    fetchRooms();
  }

  useEffect(() => {
    fetchRooms();
  }, []);
  return (
    <div className={s.layout}>
      <SideBar />
      <div className={s.main}>
        <div className={s.nav}>
          <h1>Rooms</h1>
          <div className={s.rin}>
          <form onSubmit={handleSubmit(handleSumbit)} className={s.form}>
          <input className={s.rno} type="text" placeholder="Enter Room Id" {...register("room_id")}/>
            <Button type="sumbit" variant="contained" color="primary" >
              Add new Room
            </Button>
            </form>
            </div>
        </div>
        <div className={s.cards}>
            {(rooms.map((room) => {
            return <RoomCard data={room} key={room.room_id} deleteRoom={deleteRoom}/>;
          }))}
          
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Rooms;