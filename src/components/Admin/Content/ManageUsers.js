import ModalCreateUser from "./ModalCreateUsers";
import "./ManageUsers.scss";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";
import TableUser from "./TableUser";
const ManageUsers = (props) => {
  const [showModalCreateUser, setShowModalCrateUser] = useState(false);

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
          <TableUser />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCrateUser}
        />
      </div>
    </div>
  );
};

export default ManageUsers;
