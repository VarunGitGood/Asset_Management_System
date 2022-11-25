import React from "react";
import SideBar from "./SideBar";
import s from "../style/Rooms.module.css";
import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { FetchData, postData, deleteData } from "../utils/REST";
import RoomCard from "./RoomCard";

function Rooms() {
  const [rooms, setRooms] = React.useState([]);
  const fetchRooms = async () => {
    try {
      const res = await FetchData("/rooms");
      setRooms(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(rooms);
  const deleteRoom = async (id) => {
    try {
      console.log(id);
      const res = await deleteData(`/rooms/${id}`);
      fetchRooms();
    } catch (error) {
      console.log(error.message);
    }
  };

  const addRoom = async () => {
    try {
      const res = await postData("/rooms",false,null,{room_id:rooms.length+1});
      fetchRooms();
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleSumbit(e) {
    e.preventDefault();
    addRoom();
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
          <form onSubmit={handleSumbit}>
          <input className={s.rno} type="text" placeholder="Enter Room No." />
         
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
    </div>
  );
}

export default Rooms;
