import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const naviagate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      naviagate("/");
    }, 1000);
  }, []);

  return <h1>NotFound</h1>;
};

export default NotFound;
