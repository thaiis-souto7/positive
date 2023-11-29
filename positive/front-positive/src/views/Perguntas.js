// import React from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Card, Form, Container, Row, Col } from "react-bootstrap";


function Perguntas() {
  const [perguntas, setPerguntas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    pergunta: "",
    status: "",
  });

  useEffect(() => {
    loadPerguntas();
  }, []);

  const loadPerguntas = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/perguntas");
      setPerguntas(res.data);
    } catch (error) {
      console.error("Erro ao carregar perguntas", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  

  const handleCreate = () => {

    axios.post("http://localhost:8080/api/perguntas", formData)
      .then((response) => {
        setPerguntas([...perguntas, response.data]);
        showSucess("Pergunta criada com sucesso!");
        setShowModal(false);
      })
      .catch((error) => {
        showError("Erro ao criar pergunta: " + error.message);
      });
  };

  const handleEdit = (perguntaId) => {
    
    axios.put(`http://localhost:8080/api/perguntas/${perguntaId}`, formData)
      .then(() => {
        const updatedperguntas = perguntas.map((pergunta) =>
          pergunta._id === perguntaId ? { ...pergunta, ...formData } : pergunta
        );
        setPerguntas(updatedperguntas);
        showSucess("Pergunta editada com sucesso!");
        setShowModal(false);
      })
      .catch((error) => {
        showError("Erro ao editar pergunta: " + error.message);
        //setShowModal(false);
      });
  };

  const handleDelete = (perguntaId) => {
    axios.delete(`http://localhost:8080/api/perguntas/${perguntaId}`)
      .then(() => {
        const updatedperguntas = perguntas.filter(
          (pergunta) => pergunta._id !== perguntaId
        );
        showSucess("Pergunta apagada com sucesso!");
        setPerguntas(updatedperguntas);
      });
  };

  const handleSearch = (searchTerm) => {
    const filteredperguntas = perguntas.filter((pergunta) =>
      pergunta.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setPerguntas(filteredperguntas);
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
                <Card.Title as="h4">Editar Perguntas</Card.Title>
              </Card.Header>
              <Card.Body>
                {/* Campo de pesquisa */}
                <Form>
                  <Form.Group>
                    <Form.Control
                      placeholder="Pesquisar"
                      onChange={(e) => handleSearch(e.target.value)}
                    />
                  </Form.Group>
                </Form>
                {/* Tabela de perguntas */}
                <table className="table">
                  <thead>
                    <tr>
                      <th>Pergunta</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {perguntas.map((pergunta) => (
                      <tr key={pergunta._id}>
                        <td>{pergunta.pergunta}</td>
                        <td>{pergunta.status == true ? "ATIVO" : "INATIVO"}</td>
                        <td>
                          <Button
                            variant="info"
                            onClick={() => {
                              setFormData(pergunta);
                              setShowModal(true);
                            }}
                          >
                            Editar
                          </Button>{" "}
                          <Button
                            variant="danger"
                            onClick={() => handleDelete(pergunta._id)}
                          >
                            Excluir
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Botão para criar uma nova pergunta */}
                <Button
                  className="btn-fill pull-right"
                  variant="success"
                  onClick={() => {
                    setFormData({
                      pergunta: "",
                      status: "",
                    });
                    setShowModal(true);
                  }}
                >
                  Criar
                </Button>
                <div className="clearfix"></div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Modal para criação/edição de pergunta */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {formData._id ? "Editar" : "Criar"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Campos de formulário para criar/editar */}
            <Form.Group as={Row}>
              <Col md={10}>
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                name="pergunta"
                value={formData.pergunta}
                onChange={handleInputChange}
                type="text"
              />
              </Col>
              <Col md={2}>
              <Form.Label>Status</Form.Label>
              <Form.Control
                name="status"
                checked={formData.status}
                onChange={e => setFormData({ ...formData, status: e.target.checked })}
                type="checkbox"
              />
              </Col> 
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Fechar
          </Button>
          {formData._id ? (
            <Button variant="info" onClick={() => handleEdit(formData._id)}>
              Salvar Alterações
            </Button>
          ) : (
            <Button variant="info" onClick={handleCreate}>
              Criar
            </Button>
          )}
        </Modal.Footer>
      </Modal>

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

export default Perguntas;
