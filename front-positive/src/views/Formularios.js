import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Card, Form, Container, Row, Col, Table, Range } from "react-bootstrap";
import "../assets/css/form.css";

function Formulario() {
  const [formularios, setFormularios] = useState([]);
  const [perguntas, setPerguntas] = useState([]);
  const [funcionarios, setFuncionarios] = useState([]);
  const [nivelAcesso, setNivelAcesso] = useState(parseInt(localStorage.getItem('nivelAcesso')));
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showResponseModal, setShowResponseModal] = useState(false);
  const [responseFormData, setResponseFormData] = useState({});
  const [formData, setFormData] = useState({
    descricao: "",
    responsavel: localStorage.getItem('user_id'),
    perguntasSelecionadas: [] 
  });
  const responsavel = funcionarios.find(func => func._id === localStorage.getItem("user_id"));
  const responsavelNome = responsavel ? responsavel.nome : 'Não encontrado';

  useEffect(() => {
    loadFormularios();
    loadPerguntas();
    loadFuncionarios();
  }, []);

  const loadFormularios = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/formularios");
      setFormularios(res.data);
    } catch (error) {
      console.error("Erro ao carregar formulários", error);
    }
  };

  const loadFuncionarios = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/funcionarios");
      setFuncionarios(res.data);
    } catch (error) {
      console.error("Erro ao carregar formulários", error);
    }
  };

  const loadPerguntas = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/perguntas?status=true");
      const perguntasAtivas = res.data.filter(pergunta => pergunta.status === true);
      setPerguntas(perguntasAtivas);
    } catch (error) {
      console.error("Erro ao carregar perguntas", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePerguntaChange = (perguntaId) => {
    setFormData((prevState) => {
      const isSelected = prevState.perguntasSelecionadas.includes(perguntaId);
      return {
        ...prevState,
        perguntasSelecionadas: isSelected
          ? prevState.perguntasSelecionadas.filter(id => id !== perguntaId)
          : [...prevState.perguntasSelecionadas, perguntaId]
      };
    });
  };

  const handleSearch = (searchTerm) => {
    const filteredFormularios = formularios.filter((formulario) =>
    formulario.descricao.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFormularios(filteredFormularios);
  };

  const handleCreate = async () => {
    try {
      // Estrutura os itens do formulário com as perguntas selecionadas
      const itens = formData.perguntasSelecionadas.map(perguntaId => ({
        pergunta: perguntaId,
        resposta: null  // Inicializa a resposta como null
      }));
  
      const dataToSend = {
        descricao: formData.descricao,
        responsavel: localStorage.getItem('user_id'),
        usuario: localStorage.getItem('user_id'),  // Aqui eu assumo que o usuário é o mesmo que o responsável
        itens,  // Estrutura correta para itens
        resolvido: false
      };
  
      const response = await axios.post("http://localhost:8080/api/formularios", dataToSend);
      setFormularios([...formularios, response.data]);
      setShowModal(false);
    } catch (error) {
      console.error("Erro ao criar formulário: " + error.message);
    }
  };

  const handleEdit = (formularioId) => {

    const itens = formData.perguntasSelecionadas.map(perguntaId => ({
        pergunta: perguntaId,
        resposta: null  // Inicializa a resposta como null
      }));

    const dataToSend = {
        ...formData,
        resolvido: false, 
        itens
        };

    axios.put(`http://localhost:8080/api/formularios/${formularioId}`, dataToSend)
      .then(() => {
        const updatedFormularios = formularios.map((formulario) =>
          formulario._id === formularioId ? { ...formulario, ...dataToSend } : formulario
        );
        setFormularios(updatedFormularios);
        showSucess("Formulário editado com sucesso!");
        setShowModal(false);
      })
      .catch((error) => {
        showError("Erro ao editar formulário: " + error.message);
        //setShowModal(false);
      });
  };

  const handleDelete = (formularioId) => {
    axios.delete(`http://localhost:8080/api/formularios/${formularioId}`)
      .then(() => {
        const updatedFormularios = formularios.filter(
          (formulario) => formulario._id !== formularioId
        );
        showSucess("Formulario apagada com sucesso!");
        setFormularios(updatedFormularios);
      });
  };

  const openResponseModal = (formularioId) => {
    const formularioParaResponder = formularios.find(form => form._id === formularioId);
    if (formularioParaResponder) {
      setResponseFormData({
        _id: formularioParaResponder._id,
        descricao: formularioParaResponder.descricao,
        respostas: formularioParaResponder.itens.map(item => ({ perguntaId: item.pergunta, resposta: item.resposta }))
      });
      setShowResponseModal(true);
    }
  };

  const handleSaveResponse = () => {
    // Lógica para enviar as respostas para o backend
    console.log("Respostas:", responseFormData);
    setShowResponseModal(false);
  };

  const handleResponseChange = (index, newValue) => {
    setResponseFormData((prevFormData) => {
      const newRespostas = prevFormData.respostas.map((resposta, i) => {
        if (i === index) {
          return { ...resposta, resposta: newValue };
        }
        return resposta;
      });
  
      return { ...prevFormData, respostas: newRespostas };
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
                <Card.Title as="h4">Formulários</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Control
                      placeholder="Pesquisar"
                      onChange={(e) => handleSearch(e.target.value)}
                    />
                  </Form.Group>
                </Form>
                <Table className="table">
                  <thead>
                    <tr>
                      <th>Descrição</th>
                      <th>Responsável</th>
                      {parseInt(localStorage.getItem('nivelAcesso')) === 2 && <th>Resolvido</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {formularios.map((formulario) => (
                        <tr key={formulario._id}>
                            <td>{formulario.descricao}</td>
                            <td>{responsavelNome}</td>
                            {parseInt(localStorage.getItem('nivelAcesso')) === 2 && <td>{formulario.resolvido ? "RESPONDIDO" : "EM ABERTO"}</td>}
                            <td><Button hidden={nivelAcesso !== 1} variant="info" onClick={() => {
                                const formularioParaEditar = formularios.find(form => form._id === formulario._id);
                                if (formularioParaEditar) {
                                  setFormData({
                                    _id: formularioParaEditar._id,
                                    descricao: formularioParaEditar.descricao,
                                    responsavel: formularioParaEditar.responsavel,
                                    perguntasSelecionadas: (formularioParaEditar.itens ?? []).map(item => item.pergunta)
                                  });
                                }
                                setShowModal(true);
                                }}>
                                    Editar
                                </Button>{" "}
                                <Button hidden={nivelAcesso !== 1} variant="danger" onClick={() => handleDelete(formulario._id)}>
                                    Excluir
                                </Button>
                                <Button hidden={nivelAcesso === 1} variant="info" onClick={() => openResponseModal(formulario._id)}>
                                    Responder
                                </Button>{" "}
                            </td>
                        </tr>))}
                  </tbody>
                </Table>
                {nivelAcesso === 1 && (
                  <Button 
                    className="btn-fill pull-right" 
                    variant="success" 
                    onClick={() => {
                        setFormData({
                          descricao: "",
                          responsavel: "",
                          perguntasSelecionadas: [] 
                        });
                        setShowModal(true);
                        }}>
                    Criar Formulário
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Modal para criação de formulário */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Criar Formulário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row}>
              <Col md={12}>
                <Form.Label>Descrição</Form.Label>
                <Form.Control
                  name="descricao"
                  value={formData.descricao}
                  onChange={handleInputChange}
                  type="text"
                />
                <Form.Label className="text">Responsável</Form.Label>
                <Form.Control
                  name="responsavel"
                  value={responsavelNome}
                  onChange={handleInputChange}
                  type="text"
                  disabled
                />
              </Col>
              <Col md={12}>
                <Form.Label className="text">Perguntas</Form.Label>
                {perguntas.map((pergunta, index) => (
                    <Form.Group key={index} className="mb-1 custom-checkbox d-flex align-items-center">
                    <input
                        name={`checkbox-${pergunta._id}`}
                        type="checkbox"
                        id={`checkbox-${pergunta._id}`}
                        className="me-2" // Bootstrap class for margin-right
                        onChange={() => handlePerguntaChange(pergunta._id)}
                        checked={formData.perguntasSelecionadas.includes(pergunta._id)}
                    />
                    <Form.Label htmlFor={`checkbox-${pergunta._id}`}>{pergunta.pergunta}</Form.Label>
                    </Form.Group>
                ))}
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
              Criar Formulário
            </Button>
          )}
        </Modal.Footer>
      </Modal>
      {/* Modal para responder ao formulário */}
      <Modal show={showResponseModal} onHide={() => setShowResponseModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{responseFormData.descricao}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {responseFormData.respostas?.map((resposta, index) => {
            const perguntaCorrespondente = perguntas.find(p => p._id === resposta.perguntaId);
            return (
              <Form.Group key={index} className="mb-3">
                <Form.Label>{perguntaCorrespondente?.pergunta}</Form.Label>
                {perguntaCorrespondente?.tipo === 'Texto' ? (
                  <Form.Control type="text" value={resposta.resposta || ''} onChange={e => handleResponseChange(index, e.target.value)} />
                ) : (
                  <div class="formulario-teste">
                    <Form.Control type="range" min="0" max="4" value={resposta.resposta || 0} onChange={e => handleResponseChange(index, parseInt(e.target.value, 10))} />
                    <div className="range-labels">
                        <span>1</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>5</span>
                    </div>
                  </div>
                )}
              </Form.Group>
            );
          })}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowResponseModal(false)}>
          Fechar
        </Button>
        <Button variant="success" onClick={handleSaveResponse}>
          Salvar Respostas
        </Button>
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

export default Formulario;
