import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserMainPage = (props) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state);
  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate("/SignIn");
    }
  }, [user]);
  return <div>Main Page</div>;
};

export default UserMainPage;
