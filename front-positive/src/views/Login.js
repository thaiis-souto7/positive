import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import "../assets/css/login.css";

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
        return users.find((user) => {
            const senhaValida = user.nome.split(" ")[0].charAt(0).toUpperCase() + user.nome.split(" ")[0].slice(1).toLowerCase() + user.matricula;
            return user.matricula === loginData.matricula && senhaValida === loginData.senha;
        });
    };
    


    const handleSubmit = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/funcionarios");
            const users = response.data;
    
            const validUser = validateUser(users);
            if (validUser) {
                const userId = validUser._id;
    
                await axios.post("http://localhost:8080/api/login", {
                    funcionario_id: userId,
                    logout: false
                });

                localStorage.setItem('user_id', userId);
                localStorage.setItem('matricula', loginData.matricula);
                localStorage.setItem('nivelAcesso', validUser.nivelAcesso);
                localStorage.setItem('logout', 'false');
                
                if (validUser.nivelAcesso === 1) {
                    window.location.href = "/admin/dashboard";
                } else if (validUser.nivelAcesso === 2) {
                    window.location.href = "/admin/perfil";
                }
                
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
                    <div className="login-all">
                        <img src="./icone.png" width="230px" alt="Logo" />
                        <div className="text-name">
                            POSITIVE
                        </div>

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
                            <Button className="login-button" onClick={handleSubmit}>Login</Button>
                        </div>
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
