import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { logout } from "../store/actions/authAction";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Account = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout);
    toast.success("logged out successfuly");
    navigate("login");
  };
  return (
    <Card className="p-4 px-2">
      <Card.Header>USER INFO</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>{user?.name}</ListGroup.Item>
        <ListGroup.Item>{user?.email}</ListGroup.Item>
        <Button onClick={handleLogout}>logout</Button>
      </ListGroup>
    </Card>
  );
};

export default Account;
