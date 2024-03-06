import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaUser, FaEnvelope, FaLock, FaKey } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../store/actions/authAction";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState({});

  const { name, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(register(formData)).then(() => {
        if (!error) {
          navigate("/products");
        }
      });
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

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

    if (!confirmPassword.trim()) {
      errors.confirmPassword = "Confirm Password is required";
      isValid = false;
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
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
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col lg={12} xl={11}>
          <div className="text-black">
            <div className="p-md-5">
              <Row className="justify-content-center">
                <Col md={10} lg={6} xl={5} order={{ xs: 2, lg: 1 }}>
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign up
                  </p>
                  <Form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                    <Form.Group className="d-flex flex-row align-items-center mb-4">
                      <FaUser className="me-3 fa-lg fa-fw" />
                      <Form.Control
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        placeholder="Your Name"
                      />
                    </Form.Group>

                    <Form.Group className="d-flex flex-row align-items-center mb-4">
                      <FaEnvelope className="me-3 fa-lg fa-fw" />
                      <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Your Email"
                      />
                    </Form.Group>

                    <Form.Group className="d-flex flex-row align-items-center mb-4">
                      <FaLock className="me-3 fa-lg fa-fw" />
                      <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        placeholder="Password"
                      />
                    </Form.Group>

                    <Form.Group className="d-flex flex-row align-items-center mb-4">
                      <FaKey className="me-3 fa-lg fa-fw" />
                      <Form.Control
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChange}
                        placeholder="Repeat your password"
                      />
                    </Form.Group>

                    <div className="mx-4 mb-3 mb-lg-4">
                      <Button variant="primary" size="lg" type="submit">
                        Register
                      </Button>
                      <p className="small fw-bold mt-2 pt-1 mb-2">
                        Already have an account?{" "}
                        <Link to="/login" className="text-danger">
                          Login
                        </Link>
                      </p>
                    </div>
                  </Form>
                </Col>
                <Col
                  md={10}
                  lg={6}
                  xl={7}
                  className="d-flex align-items-center"
                  order={{ xs: 1, lg: 2 }}
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    className="img-fluid"
                    alt="Sample"
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
