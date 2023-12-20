import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Modal } from 'react-bootstrap';
import axios from "axios";
import routes from "routes.js";

function Header() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Inicio";
  };
  const handleLogout = async () => {
    try {
      const userId = localStorage.getItem('user_id');
      if (userId) {
        const loginResponse = await axios.get(`http://localhost:8080/api/login`, {
        params: { userId, logout: false }
      });
      const loginId = loginResponse.data[loginResponse.data.length - 1]._id; // Supondo que a API retorne o ID do login
      const dataToSend = {
        logout: true,
        funcionario_id: userId       
      };

      if (loginId) {
        // Atualizar o registro de logout
        await axios.put(`http://localhost:8080/api/login/${loginId}`, dataToSend);

        // Mostrar modal de logout
        setShowLogoutModal(true);

        // Limpar localStorage
        localStorage.removeItem('user_id');
        localStorage.removeItem('matricula');
        localStorage.removeItem('logout');
      } else {
        console.error("Registro de login não encontrado");
      }
      }
    } catch (error) {
      console.error("Erro ao realizar o logout", error);
      // Trate o erro conforme necessário
    }
  };

  const closeModalAndRedirect = () => {
    setShowLogoutModal(false);
    history.push("/login");
  };

  return (
    <>
        <Navbar bg="light" expand="lg">
        <Container fluid>
          <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
            <Button
              variant="dark"
              className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
              onClick={mobileSidebarToggle}
            >
              <i className="fas fa-ellipsis-v"></i>
            </Button>
            <Navbar.Brand
              href="#home"
              onClick={(e) => e.preventDefault()}
              className="mr-2"
            >
              {getBrandText()}
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav mr-auto" navbar>
              <Nav.Item>
                <Nav.Link
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="m-0"
                >
                  <span className="d-lg-none ml-1">Dashboard</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav className="ml-auto" navbar>
              <Nav.Item>
                <Nav.Link
                  className="m-0"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogout();
                  }}
                >
                  <span className="no-icon">Sair</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal de Logout */}
      <Modal show={showLogoutModal} onHide={closeModalAndRedirect}>
        <Modal.Header closeButton>
          <Modal.Title>Logout Realizado</Modal.Title>
        </Modal.Header>
        <Modal.Body>Logout realizado com sucesso!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalAndRedirect}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header;
