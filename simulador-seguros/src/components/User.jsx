import { useDispatch, useSelector} from "react-redux";
import { getDetailUser } from "../redux/actions";

const User = ({ user }) => {
  const dispatch = useDispatch();
  const detailUser = useSelector(state => state.detailUser);
  
  const getData = () => {
    dispatch(getDetailUser(user.id));
  };

  return (
    <button
      onClick={() => getData()}
      className={user.id === detailUser.id ? "w-full p-4 flex flex-col bg-blue-400 text-white" :
        "w-full p-4 border-b-gray-200 border-[1px] border-solid flex flex-col hover:bg-blue-400 hover:text-white ease-in duration-100"
      }
    >
      <h3 className="text-2xl font-semibold mb-2">{user.name}</h3>
      <p>{`${user.address}, ${user.city}`}</p>
    </button>
  );
};

export default User;
