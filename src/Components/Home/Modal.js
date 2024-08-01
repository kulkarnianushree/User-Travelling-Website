import React from 'react';
import { Modal, Button, TextField, Backdrop } from '@mui/material';
import './Modal.css';

const RoomModal = ({ open, onClose, rooms, onRoomChange, onAddRoom, onDeleteRoom }) => {
    const handleRoomChange = (index, field, value) => {
        onRoomChange(index, field, value);
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <div className="modal-backdrop">
                <div className="modal-content">
                    <Button onClick={onClose} className="close-button">Close</Button>
                    {rooms.map((room, index) => (
                        <div key={index} className="room-details">
                            <h3>Room {index + 1}</h3>
                            <label>Adults</label>
                            <Button onClick={() => handleRoomChange(index, 'adults', room.adults - 1)}>-</Button>
                            <input
                                type="number"
                                value={room.adults}
                                onChange={(e) => handleRoomChange(index, 'adults', parseInt(e.target.value))}
                                className="input-field"
                            />
                            <Button onClick={() => handleRoomChange(index, 'adults', room.adults + 1)}>+</Button>
                            <br />
                            <label>Children</label>
                            <Button onClick={() => handleRoomChange(index, 'children', room.children - 1)}>-</Button>
                            <input
                                type="number"
                                value={room.children}
                                onChange={(e) => handleRoomChange(index, 'children', parseInt(e.target.value))}
                                className="input-field"
                            />
                            <Button onClick={() => handleRoomChange(index, 'children', room.children + 1)}>+</Button>
                            {room.children > 0 && (
                                <div>
                                    <label>Enter children’s Age</label>
                                    {room.childrenAges.map((age, i) => (
                                        <TextField
                                            key={i}
                                            type="number"
                                            value={age}
                                            onChange={(e) => {
                                                const newAges = [...room.childrenAges];
                                                newAges[i] = parseInt(e.target.value);
                                                handleRoomChange(index, 'childrenAges', newAges);
                                            }}
                                            className="input-field"
                                        />
                                    ))}
                                    <Button onClick={() => handleRoomChange(index, 'childrenAges', [...room.childrenAges, ''])}>Add Age</Button>
                                </div>
                            )}
                            <Button onClick={() => onDeleteRoom(index)} style={{ marginTop: '10px', color: 'red' }}>Delete Room</Button>
                        </div>
                    ))}
                    <Button onClick={onAddRoom} style={{ marginRight: '10px' }}>Add Room</Button>
                    <Button onClick={onClose}>Done</Button>
                </div>
            </div>
        </Modal>
    );
};

export default RoomModal;
