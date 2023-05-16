import ModalCreateUser from "./ModalCreateUsers";
import "./ManageUsers.scss";

const ManageUsers = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="user-content">
        <div>
          <button>Add new users</button>
        </div>
        <div>
          <button>table users</button>
        </div>
        <ModalCreateUser />
      </div>
    </div>
  );
};

export default ManageUsers;
