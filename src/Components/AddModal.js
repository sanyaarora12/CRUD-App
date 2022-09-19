import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "./AddModal.css";

const AddModal = ({ setModal, modal, rows, setRows }) => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [Email, setEmail] = useState("");
  const toggleModaltwo = () => {
    setModal(!modal);
    const data = {
      id: rows.length + 1,
      firstName: firstName,
      secondName: secondName,
      Email: Email,
      edit: false,
    };
    const data1 = JSON.stringify(data);
    console.log(data, data1, "heloooooo");
    setRows([
      ...rows,
      {
        id: rows.length + 1,
        firstName: firstName,
        secondName: secondName,
        Email: Email,
      },
    ]);
    console.log(rows);
  };
  return (
    <div>
      <div className="modal ">
        <div className="overlay"></div>
        <div className="modal-content">
          <div className="first-modal">
            <form>
              <TextField
                type="text"
                label="Enter Your Firstname"
                onChange={(e) => setFirstName(e.target.value)}
              />

              <TextField
                type="text"
                label="Enter your Last name"
                onChange={(e) => setSecondName(e.target.value)}
                style={{
                  marginLeft: "230px",
                  marginTop: "-56px",
                  width: "200px",
                }}
              />
              <br />
              <br />

              <TextField
                type="email"
                fullWidth
                label="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
                style={{ marginTop: "-30px", width: "430px" }}
              />
            </form>
          </div>
          <Button
            onClick={toggleModaltwo}
            style={{ marginTop: "20px", marginLeft: "320px" }}
            variant="contained"
          >
            Add User
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
