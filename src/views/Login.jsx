import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/actions/authAction";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({}); // State to store validation errors

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(login(formData)).then(() => {
        if (!error) {
          navigate("/products");
        }
      });
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!password.trim()) {
      errors.password = "Password is required";
      isValid = false;
    }

    if (!isValid) {
      // Toast validation errors
      Object.values(errors).forEach((error) => {
        toast.error(error);
      });
    }

    setErrors(errors);
    return isValid;
  };

  return (
    <Container fluid className="p-3 my-5 h-custom">
      <Row>
        <Col sm="10" md="6">
          <img
            className="img-fluid"
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample"
          />
        </Col>

        <Col sm="4" md="6">
          <div className="d-flex flex-row align-items-center justify-content-center mt-4">
            <Button color="primary" className="me-2">
              Facebook <FaFacebookF className="mb-1" />
            </Button>
            <Button color="" className="me-2">
              Google <FaGoogle className="mb-1" />
            </Button>
          </div>

          <div className="divider d-flex justify-content-center align-items-center my-4">
            <p className="text-center d-flex justiy-content-center align-items-center fw-bold mx-3 mb-0">
              <span>Or</span>
            </p>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
              <Form.Label htmlFor="emailInput" className="form-label">
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                id="emailInput"
                name="email"
                value={email}
                onChange={handleChange}
              />
              {errors.email && (
                <div className="text-danger">{errors.email}</div>
              )}
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label htmlFor="passwordInput" className="form-label">
                Password
              </Form.Label>
              <Form.Control
                type="password"
                id="passwordInput"
                name="password"
                value={password}
                onChange={handleChange}
              />
              {errors.password && (
                <div className="text-danger">{errors.password}</div>
              )}
            </Form.Group>

            <div className="d-flex justify-content-start align-items-center mb-4">
              <a href="!#">Forgot password?</a>
            </div>

            <div className="text-center text-md-start mt-4 pt-2">
              <Button
                color="primary"
                className="mb-0 px-5"
                size="lg"
                type="submit"
              >
                Login
              </Button>
              <p className="small fw-bold mt-2 pt-1 mb-2">
                Don't have an account?{" "}
                <Link to="/register" className="text-danger">
                  Register
                </Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
