import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Card, Form, Container, Row, Col } from "react-bootstrap";

function Filial() {
  const [filiais, setFiliais] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [responsaveis, setResponsaveis] = useState([]);
  const [responsaveisMapping, setResponsaveisMapping] = useState({});
  const [formData, setFormData] = useState({
    nome: "",
    matriz: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    telefone: "",
    email: "",
    responsavel: "",
    segmento: "",
    numFunc: "",
  });

  useEffect(() => {
    loadFiliais();
    loadResponsaveis();
  }, []);

  const loadFiliais = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/filiais");
      setFiliais(res.data);
    } catch (error) {
      console.error("Erro ao carregar filiais", error);
    }
  };

  const loadResponsaveis = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/funcionarios?nivelAcesso=1");
      const todosFuncionarios = res.data;
  
      // Filtra os funcionários com nivelAcesso igual a 1
      const responsaveisFiltrados = todosFuncionarios.filter((funcionario) => funcionario.nivelAcesso === 1);
  
      // Constrói o mapeamento de IDs para nomes
      const mapeamento = {};
      responsaveisFiltrados.forEach((responsavel) => {
        mapeamento[responsavel._id] = responsavel.nome;
      });
  
      // Armazena os responsáveis e o mapeamento no estado
      setResponsaveis(responsaveisFiltrados);
      setResponsaveisMapping(mapeamento);
    } catch (error) {
      console.error("Erro ao carregar responsáveis", error);
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
      cnpj: "",
      numFunc: parseInt(formData.numFunc, 10),  // Converte para número
      numero: parseInt(formData.numero, 10),
      matriz: false
    };

    axios.post("http://localhost:8080/api/filiais", dataToSend)
      .then((response) => {
        setFiliais([...filiais, response.data]);
        showSucess("Filial criada com sucesso!");
        setShowModal(false);
      })
      .catch((error) => {
        showError("Erro ao criar filial: " + error.message);
      });
  };

  const handleEdit = (filialId) => {
    const dataToSend = {
      ...formData,
      numFunc: parseInt(formData.numFunc, 10),  // Converte para número
      numero: parseInt(formData.numero, 10),
    };

    axios.put(`http://localhost:8080/api/filiais/${filialId}`, dataToSend)
      .then(() => {
        const updatedFiliais = filiais.map((filial) =>
          filial._id === filialId ? { ...filial, ...dataToSend } : filial
        );
        setFiliais(updatedFiliais);
        showSucess("Filial editada com sucesso!");
        setShowModal(false);
      })
      .catch((error) => {
        showError("Erro ao editar filial: " + error.message);
        //setShowModal(false);
      });
  };

  const handleDelete = (filialId) => {
    axios.delete(`http://localhost:8080/api/filiais/${filialId}`)
      .then(() => {
        const updatedFiliais = filiais.filter(
          (filial) => filial._id !== filialId
        );
        showSucess("Filial apagada com sucesso!");
        setFiliais(updatedFiliais);
      });
  };

  const handleSearch = (searchTerm) => {
    const filteredFiliais = filiais.filter((filial) =>
      filial.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiliais(filteredFiliais);
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
                <Card.Title as="h4">Editar Filial</Card.Title>
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
                {/* Tabela de Filiais */}
                <table className="table">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Email</th>
                      <th>Bairro</th>
                      <th>Responsável</th>
                      <th>Segmento</th>
                      <th>Número de Funcionários</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filiais.map((filial) => (
                      <tr key={filial._id}>
                        <td>{filial.nome}</td>
                        <td>{filial.email}</td>
                        <td>{filial.bairro}</td>
                        <td>{responsaveisMapping[filial.responsavel]}</td>
                        <td>{filial.segmento}</td>
                        <td>{filial.numFunc}</td>
                        <td>
                          <Button
                            variant="info"
                            onClick={() => {
                              setFormData(filial);
                              setShowModal(true);
                            }}
                          >
                            Editar
                          </Button>{" "}
                          <Button
                            variant="danger"
                            onClick={() => handleDelete(filial._id)}
                          >
                            Excluir
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Botão para criar uma nova filial */}
                <Button
                  className="btn-fill pull-right"
                  variant="success"
                  onClick={() => {
                    setFormData({
                      nome: "",
                      matriz: "",
                      cep: "",
                      rua: "",
                      numero: "",
                      bairro: "",
                      cidade: "",
                      estado: "",
                      telefone: "",
                      email: "",
                      responsavel: "",
                      segmento: "",
                      numFunc: "",
                    });
                    setShowModal(true);
                  }}
                >
                  Criar Filial
                </Button>
                <div className="clearfix"></div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Modal para criação/edição de filial */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {formData._id ? "Editar Filial" : "Criar Filial"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Campos de formulário para criar/editar */}
            <Form.Group as={Row}>
              <Col md={12}>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                type="text"
              />
              {/* <Form.Label>Matriz</Form.Label>
              <Form.Control
                name="status"
                checked={formData.matriz}
                onChange={e => setFormData({ ...formData, matriz: e.target.checked })}
                type="checkbox"
              /> */}
              </Col> 
              <Col md={4}>
                <Form.Label>CEP</Form.Label>
                <Form.Control
                  name="cep"
                  value={formData.cep}
                  onChange={handleInputChange}
                  type="text"
                />
                <Form.Label>Bairro</Form.Label>
                <Form.Control
                  name="bairro"
                  value={formData.bairro}
                  onChange={handleInputChange}
                  type="text"
                />
                <Form.Label>Telefone</Form.Label>
                <Form.Control
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  type="text"
                />
                <Form.Label>Segmento</Form.Label>
                <Form.Control
                  name="segmento"
                  value={formData.segmento}
                  onChange={handleInputChange}
                  type="text"
                />
              </Col>
              <Col md={4}>
                <Form.Label>Rua</Form.Label>
                <Form.Control
                  name="rua"
                  value={formData.rua}
                  onChange={handleInputChange}
                  type="text"
                />
                <Form.Label>Cidade</Form.Label>
                <Form.Control
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleInputChange}
                  type="text"
                />
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="text"
                />
                <Form.Label>Número de Funcionários</Form.Label>
                <Form.Control
                  name="numFunc"
                  value={formData.numFunc}
                  onChange={handleInputChange}
                  type="number"
                />
              </Col>
              <Col md={4}>
                <Form.Label>Número</Form.Label>
                <Form.Control
                  name="numero"
                  value={formData.numero}
                  onChange={handleInputChange}
                  type="number"
                />
                <Form.Label>Estado</Form.Label>
                <Form.Control
                  name="estado"
                  value={formData.estado}
                  onChange={handleInputChange}
                  type="text"
                />
                <Form.Label>Responsável</Form.Label>
                <Form.Control
                  name="responsavel"
                  as="select" // Use o select para criar um menu suspenso
                  value={formData.responsavel}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione</option>
                  {responsaveis.map((responsavel) => (
                    <option key={responsavel._id} value={responsavel._id}>
                      {responsavel.nome}
                    </option>
                  ))}
                </Form.Control>
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
              Criar Filial
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

export default Filial;
