import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Card, Form, Container, Row, Col } from "react-bootstrap";

function UserProfile() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    matricula: "",
    nome: "",
    email: "",
    cargo: "",
    cargaHoraria: "",
    dataAdmissao: "",
  });

  useEffect(() => {
    loadFuncionarios();
  }, []);

  function formatDateToISO(dateStr) {
    // Verifica se a data está no formato AAAA-MM-DD (formato padrão do input date)
    const isoDatePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (isoDatePattern.test(dateStr)) {
      // Se estiver no formato correto, cria a data e retorna em ISO
      return new Date(dateStr).toISOString();
    }
  
    // Caso contrário, assume o formato DD/MM/AAAA
    const parts = dateStr.split("/");
    if (parts.length === 3) {
      return new Date(parts[2], parts[1] - 1, parts[0]).toISOString();
    }
  
    // Se não for um formato válido, retorna uma string vazia ou trata o erro
    return '';
  }

  function formatDateForInput(isoDate) {
    if (!isoDate) return '';
  
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate() +1).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const loadFuncionarios = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/funcionarios");
      const formattedFuncionarios = res.data.map(funcionario => ({
        ...funcionario,
        dataAdmissao: formatDateForInput(funcionario.dataAdmissao)
      }));
      setFuncionarios(formattedFuncionarios);
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

  const handleCreate = () => {

    const dataToSend = {
      ...formData,
      idade: parseInt(formData.idade, 10),  // Converte para número
      cargaHoraria: parseInt(formData.cargaHoraria, 10),
      nivelAcesso: parseInt(formData.nivelAcesso, 10),
      dataAdmissao: formatDateToISO(formData.dataAdmissao)
      };

    axios.post("http://localhost:8080/api/funcionarios", dataToSend)
      .then((response) => {
        setFuncionarios([...funcionarios, response.data]);
        showSucess("Funcionário criado com sucesso!");
        setShowModal(false);
      })
      .catch((error) => {
        showError("Erro ao criar funcionário: " + error.message);
      });
  };

  const handleEdit = (funcionarioId) => {
    const dataToSend = {
      ...formData,
      idade: parseInt(formData.idade, 10),  // Converte para número
      // cargaHoraria: parseInt(formData.cargaHoraria, 10),
      // nivelAcesso: parseInt(formData.nivelAcesso, 10),
      dataAdmissao: formatDateToISO(formData.dataAdmissao)
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

  const handleDelete = (funcionarioId) => {
    axios.delete(`http://localhost:8080/api/funcionarios/${funcionarioId}`)
      .then(() => {
        const updatedFuncionarios = funcionarios.filter(
          (funcionario) => funcionario._id !== funcionarioId
        );
        showSucess("Funcionário apagado com sucesso!");
        setFuncionarios(updatedFuncionarios);
      });
  };

  const handleSearch = (searchTerm) => {
    const filteredFuncionarios = funcionarios.filter((funcionario) =>
      funcionario.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFuncionarios(filteredFuncionarios);
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

  function formatDate(isoDate) {
    const date = new Date(isoDate);
    const day = String(date.getDate() + 1).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }


  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Editar Perfil</Card.Title>
              </Card.Header>
              <Card.Body>
                {/* Campo de pesquisa */}
                <Form>
                  <Form.Group>
                    <Form.Control
                      placeholder="Pesquisar por nome"
                      onChange={(e) => handleSearch(e.target.value)}
                    />
                  </Form.Group>
                </Form>
                {/* Tabela de Funcionários */}
                <table className="table">
                  <thead>
                    <tr>
                      <th>Matrícula</th>
                      <th>Nome</th>
                      <th>Email</th>
                      <th>Cargo</th>
                      <th>Carga Horária</th>
                      <th>Data de Admissão</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {funcionarios.map((funcionario) => (
                      <tr key={funcionario._id}>
                        <td>{funcionario.matricula}</td>
                        <td>{funcionario.nome}</td>
                        <td>{funcionario.email}</td>
                        <td>{funcionario.cargo}</td>
                        <td>{funcionario.cargaHoraria}</td>
                        <td>{formatDate(funcionario.dataAdmissao)}</td>
                        <td>
                          <Button
                            variant="info"
                            onClick={() => {
                              const funcionarioEdit = {
                                ...funcionario,
                                dataAdmissao: formatDateForInput(funcionario.dataAdmissao)
                              };
                              setFormData(funcionarioEdit);
                              setShowModal(true);
                            }}
                          >
                            Editar
                          </Button>{" "}
                          <Button
                            variant="danger"
                            onClick={() => handleDelete(funcionario._id)}
                          >
                            Excluir
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Botão para criar um novo funcionário */}
                <Button
                  className="btn-fill pull-right"
                  variant="success"
                  onClick={() => {
                    setFormData({
                      matricula: "",
                      nome: "",
                      email: "",
                      cargo: "",
                      cargaHoraria: "",
                      dataAdmissao: "",
                    });
                    setShowModal(true);
                  }}
                >
                  Criar Funcionário
                </Button>
                <div className="clearfix"></div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Modal para criação/edição de funcionário */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {formData._id ? "Editar Funcionário" : "Criar Funcionário"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                />
              </Col>
              <Col md={6}>
                <Form.Label>Carga Horária (Semanal)</Form.Label>
                <Form.Control
                  name="cargaHoraria"
                  value={formData.cargaHoraria}
                  onChange={handleInputChange}
                  type="text"
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
                />
                <Form.Label>Data de Admissão</Form.Label>
                <Form.Control
                  name="dataAdmissao"
                  value={formData.dataAdmissao}
                  onChange={handleInputChange}
                  type="date"
                />
              </Col>
            </Form.Group>
            {/* Outros campos */}
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
              Criar Funcionário
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


export default UserProfile;
