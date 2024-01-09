import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Card, Form, Container, Row, Col } from "react-bootstrap"; 

function Perfil() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    _id: "",
    matricula: "",
    nome: "",
    email: "",
    cargo: "",
    cargaHoraria: "",
    dataAdmissao: "",
  });

  useEffect(() => {
    loadFuncionario();
  }, []);


  function formatDateForInput(isoDate, id) {
    if (!isoDate) return '';

    if(id === 'edit'){
      const date = new Date(isoDate);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate() + 1).padStart(2, '0');
      return `${year}-${month}-${day}`;
    } else {
      const date = new Date(isoDate);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
  }

  const loadFuncionario = async () => {
    const user = localStorage.getItem('user_id');
    try {
      const res = await axios.get(`http://localhost:8080/api/funcionarios/${user}`);
      if (res.data) {
        const funcionario = res.data    ; 
        setFormData({
          ...formData,
          _id: funcionario._id,
          matricula: funcionario.matricula,
          nome: funcionario.nome,
          email: funcionario.email,
          cargo: funcionario.cargo,
          cargaHoraria: funcionario.cargaHoraria,
          idade: funcionario.idade,
          nivelAcesso: funcionario.nivelAcesso,
          dataAdmissao: formatDateForInput(funcionario.dataAdmissao),
        });
      }
    } catch (error) {
      console.error("Erro ao carregar funcionários", error);
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEdit = (funcionarioId) => {
    const dataToSend = {
      ...formData,
      idade: parseInt(formData.idade, 10),  
      cargaHoraria: parseInt(formData.cargaHoraria, 10),
      nivelAcesso: parseInt(formData.nivelAcesso, 10),
      dataAdmissao: formatDateForInput(formData.dataAdmissao, 'edit')
      };

    axios.put(`http://localhost:8080/api/funcionarios/${funcionarioId}`, dataToSend)
      .then(() => {
        const updatedFuncionarios = funcionarios.map((funcionario) =>
          funcionario._id === funcionarioId ? { ...funcionario, ...dataToSend } : funcionario
        );
        setFuncionarios(updatedFuncionarios);
        showSucess("Funcionário editado com sucesso!");
        setShowModal(false);
      })
      .catch((error) => {
        showError("Erro ao editar funcionário: " + error.message);
        //setShowModal(false);
      });
  };

  const showSucess = (message) => {
    setSuccessMessage(message);
    setShowSuccessModal(true);
  };

  const hideSuccess = () => {
    setShowSuccessModal(false);
    setSuccessMessage("");
  };

  const showError = (message) => {
    setErrorMessage(message);
    setShowErrorModal(true);
  };

  const hideError = () => {
    setShowErrorModal(false);
    setErrorMessage("");
  };


  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Perfil</Card.Title>
              </Card.Header>
              <Card.Body>
              <Form>
            {/* Campos de formulário para criar/editar */}
            <Form.Group as={Row}>
              <Col md={6}>
              <Form.Label>Matrícula</Form.Label>
              <Form.Control
                name="matricula"
                value={formData.matricula}
                onChange={handleInputChange}
                type="text"
                disabled='true'
              />
              <Form.Label>Nome</Form.Label>
              <Form.Control
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                type="text"
              />
              </Col> 
              <Col md={6}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="text"
                />
                <Form.Label>Cargo</Form.Label>
                <Form.Control
                  name="cargo"
                  value={formData.cargo}
                  onChange={handleInputChange}
                  type="text"
                  disabled='true'
                />
              </Col>
              </Form.Group>
              <Form.Group as={Row}>
              <Col md={6}>
                <Form.Label>Carga Horária (Semanal)</Form.Label>
                <Form.Control
                  name="cargaHoraria"
                  value={formData.cargaHoraria}
                  onChange={handleInputChange}
                  type="text"
                  disabled='true'
                />
                <Form.Label>Idade</Form.Label>
                <Form.Control
                  name="idade"
                  value={formData.idade}
                  onChange={handleInputChange}
                  type="number"
                />
               </Col>
                <Col md={6}>
                <Form.Label>Nível de Acesso</Form.Label>
                <Form.Control
                  name="nivelAcesso"
                  value={formData.nivelAcesso}
                  onChange={handleInputChange}
                  type="text"
                  disabled='true'
                />
                <Form.Label>Data de Admissão</Form.Label>
                <Form.Control
                  name="dataAdmissao"
                  value={formData.dataAdmissao}
                  onChange={handleInputChange}
                  type="date"
                  disabled='true'
                />
              </Col>
            </Form.Group>
            <Button
                  className="btn-fill pull-right"
                  variant="success"
                  onClick={() => handleEdit(formData._id)}                  
                >
                  Salvar
                </Button>
                <div className="clearfix"></div>
          </Form>
                {/* Botão para criar um novo funcionário */}
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

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
      {/* Modal de Sucesso */}
      <Modal show={showSuccessModal} onHide={hideSuccess}>
        <Modal.Header closeButton>
          <Modal.Title>Concluído</Modal.Title>
        </Modal.Header>
        <Modal.Body>{successMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideSuccess}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default Perfil;
