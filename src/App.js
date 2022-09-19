import "./App.css";
import * as React from "react";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddModal from "./Components/AddModal";
import data from "./Components/rows.json";
import EditRow from "./Components/EditRow";
import NonEditRow from "./Components/NonEditRow";

function App() {
  const [modal, setModal] = useState(false);
  const [rows, setRows] = useState(data);
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [Email, setEmail] = useState("");
  const [editId, setEditId] = useState();

  const toggleModal = () => {
    setModal(!modal);
    // setRows([...rows,{id:rows.length,firstName:firstName,secondName:secondName,Email:Email}])
    // console.log(rows,"HI")
  };

  const deleteUser = (idToRemove) => {
    console.log(idToRemove);
    const filteredPeople = rows.filter((item) => item.id !== idToRemove);
    setRows(filteredPeople);
  };
  React.useEffect(() => {
    console.log(rows, "rowss");
    console.log(rows.JSON);
  }, [rows]);

const[query,setQuery]=useState("")

  return (
    <div>
      <div className="add-btn" onClick={toggleModal}>
        <AddIcon />
      </div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e)=>setQuery(e.target.value)}
          style={{ marginLeft: "230px", marginBottom: "20px", height: "30px" }}
        />
      </div>
      <div className="display-style">
        <form>
          <table>
            <thead>
              <tr>
                <th style={{ width: 90 }}>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Edit/Del</th>
              </tr>
            </thead>
            <tbody>
              {rows &&
                rows.filter(user=>user.firstName.toLowerCase().includes(query)).map((row, i) => {
                  return (
                    <React.Fragment>
                      {console.log(editId === row.id)}
                      {editId == row.id ? (
                        <EditRow row={row} rows={rows} setEditId={setEditId} />
                      ) : (
                        <NonEditRow
                          setEditId={setEditId}
                          row={row}
                          index={i}
                          deleteUser={deleteUser}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              
            </tbody>
          </table>
        </form>
      </div>
      <div>
        {modal && (
          <AddModal
            setModal={setModal}
            rows={rows}
            setRows={setRows}
            modal={modal}
          />
        )}
      </div>
    </div>
  );
}

export default App;
