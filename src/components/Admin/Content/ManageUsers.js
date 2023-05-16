import ModalCreateUser from "./ModalCreateUsers";

const ManageUsers = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="user-content">
        <div>
          <button>Add new users</button>
        </div>
        <div>
          <button>
            table users
            <ModalCreateUser />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
