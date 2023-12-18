import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap";
import "../assets/css/login.css"

function Login() {
    const [loginData, setLoginData] = useState({ matricula: "", senha: "" });
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const history = useHistory();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const validateUser = (users) => {
        const validUser = users.find((user) => {
            const senhaValida = user.nome.split(" ")[0].charAt(0).toUpperCase() + user.nome.split(" ")[0].slice(1).toLowerCase() + user.matricula;
            return user.matricula === loginData.matricula && senhaValida === loginData.senha;
        });
        return validUser !== undefined;
    };


    const handleSubmit = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/funcionarios");
            const users = response.data;

            if (validateUser(users)) {
                history.push("/admin/dashboard");
            } else {
                throw new Error("Usuário ou senha incorretos");
            }
        } catch (error) {
            setErrorMessage(error.message);
            setShowErrorModal(true);
        }
    };

    const hideError = () => {
        setShowErrorModal(false);
        setErrorMessage("");
    };

    return (
        <>
            <div className="login-container">
                <Form>
                    <Form.Group as={Row}>
                        <div className="item-camp">
                            <Col md={12}>
                                <Form.Label>Matrícula</Form.Label>
                                <Form.Control
                                    name="matricula"
                                    value={loginData.matricula}
                                    onChange={handleInputChange}
                                    type="text"
                                />
                            </Col>
                        </div>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <div className="item-camp">
                            <Col md={12}>
                                <Form.Label>Senha</Form.Label>
                                <Form.Control
                                    name="senha"
                                    value={loginData.senha}
                                    onChange={handleInputChange}
                                    type="password"
                                />
                            </Col>
                        </div>
                    </Form.Group>

                    <div className="item-bot">
                        <Button variant="success" onClick={handleSubmit}>
                            Acessar
                        </Button>
                    </div>
                </Form>
            </div>

            {/* Modal de Erro */}
            <Modal show={showErrorModal} onHide={hideError}>
                <Modal.Header closeButton>
                    <Modal.Title>Erro</Modal.Title>
                </Modal.Header>
                <Modal.Body>{errorMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={hideError}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Login;
