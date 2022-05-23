import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "./User";
import { getUsers } from "../redux/actions";

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);
//   console.log(users)

  return (
    <div className="h-screen overflow-auto">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
