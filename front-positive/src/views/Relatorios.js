import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Relatorios() {
  const [perguntas, setPerguntas] = useState([]);
  const [funcionarios, setFuncionarios] = useState([]);
  const [filiais, setFiliais] = useState([]);

  useEffect(() => {
    // Carregar dados das tabelas do banco
    const fetchData = async () => {
      try {
        const resPerguntas = await axios.get("http://localhost:8080/api/perguntas");
        const resFuncionarios = await axios.get("http://localhost:8080/api/funcionarios");
        const resFiliais = await axios.get("http://localhost:8080/api/filiais");
        setPerguntas(resPerguntas.data);
        setFuncionarios(resFuncionarios.data);
        setFiliais(resFiliais.data);
      } catch (error) {
        console.error("Erro ao carregar dados", error);
      }
    };

    fetchData();
  }, []);

  // Funções auxiliares para renderizar cada linha das tabelas
  const renderPerguntasRows = () => {
    return perguntas.map((pergunta, index) => (
      <tr key={pergunta._id}>
        <td>{pergunta.pergunta}</td>
        <td>{pergunta.tipo.toUpperCase()}</td>
        <td>{pergunta.status == true ? "ATIVO" : "INATIVO"} </td>
      </tr>
    ));
  };

  const renderFuncionariosRows = () => {
    return funcionarios.map((funcionario, index) => (
      <tr key={funcionario._id}>
        <td>{funcionario.matricula}</td>
        <td>{funcionario.nome}</td>
        <td>{funcionario.email}</td>
        <td>{funcionario.cargo}</td>
        <td>{funcionario.cargaHoraria}</td>
        <td>{funcionario.nivelAcesso}</td>
        <td></td>
      </tr>
    ));
  };

  const renderFiliaisRows = () => {
    return filiais.map((filial, index) => {
      const responsavel = funcionarios.find(func => func._id === filial.responsavel);
      const responsavelNome = responsavel ? responsavel.nome : 'Não encontrado';
  
      return (
        <tr key={filial._id}>
          <td>{filial.nome}</td>
          <td>{filial.bairro}</td>
          <td>{filial.cidade}</td>
          <td>{filial.email}</td>
          <td>{filial.telefone}</td>
          <td>{responsavelNome}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Perguntas</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Pergunta</th>
                      <th className="border-0">Tipo</th>
                      <th className="border-0">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderPerguntasRows()}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Funcionários</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Matrícula</th>
                      <th className="border-0">Nome</th>
                      <th className="border-0">E-mail</th>
                      <th className="border-0">Cargo</th>
                      <th className="border-0">Carga Horária</th>
                      <th className="border-0">Nível Acesso</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderFuncionariosRows()}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Filiais</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Nome</th>
                      <th className="border-0">Bairro</th>
                      <th className="border-0">Cidade</th>
                      <th className="border-0">E-mail</th>
                      <th className="border-0">Telefone</th>
                      <th className="border-0">Responsável</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderFiliaisRows()}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Relatorios;
