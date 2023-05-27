import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiServices";
import ModalCreateUser from "./ModalCreateUsers";
import "./ManageUsers.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
const ManageUsers = (props) => {
  const [showModalCreateUser, setShowModalCrateUser] = useState(false);
  const [listUsers, setListUsers] = useState([]);

  //componentDidMount
  useEffect(() => {
    fetchListUsers();
  }, []);

  const fetchListUsers = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };

  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="btn-add-new">
        <div>
          <button
            className="btn btn-primary"
            onClick={() => setShowModalCrateUser(true)}
          >
            <FcPlus />
            Add new users
          </button>
        </div>
        <div className="table-users-container">
          <TableUser listUsers={listUsers} />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCrateUser}
          fetchListUsers={fetchListUsers}
        />
      </div>
    </div>
  );
};

export default ManageUsers;
