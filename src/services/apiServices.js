import axios from "../utils/axiosCustomize";
//Lưu ý file axiosCustomize export instance nhưng chỉ 1 biến
//thì axios nó tự hiểu thay cho instance

const postCreateUser = (email, password, username, role, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
};

const getAllUsers = () => {
  return axios.get("api/v1/participant/all");
};

export { postCreateUser, getAllUsers };