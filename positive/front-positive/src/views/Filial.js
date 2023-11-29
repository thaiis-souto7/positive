import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "react-bootstrap";

function User() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              {/* <Card.Header>
                <Card.Title as="h4">Filial</Card.Title>
              </Card.Header> */}
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>CNPJ</label>
                        <Form.Control
                        placeholder="CNPJ"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="7">
                      <Form.Group>
                        <label>Nome</label>
                        <Form.Control
                          placeholder="Nome"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-0" md="1">
                      <Form.Check>
                        <label>Matriz</label>
                        <Form.Control
                          type="checkbox"
                        ></Form.Control>
                      </Form.Check>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>CEP</label>
                        <Form.Control
                          placeholder="CEP"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="6">
                      <Form.Group>
                        <label>
                          Endereço
                        </label>
                        <Form.Control
                          placeholder="Rua"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="2">
                      <Form.Group>
                        <label>Número</label>
                        <Form.Control
                          placeholder="Número"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Bairro</label>
                        <Form.Control
                          placeholder="Bairro"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Cidade</label>
                        <Form.Control
                          placeholder="Cidade"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="2">
                      <Form.Group>
                        <label> Estado </label>
                        <Form.Control
                          placeholder="UF"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="3">
                      <Form.Group>
                        <label>Telefone</label>
                        <Form.Control
                          placeholder="Telefone"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                    <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email
                        </label>
                        <Form.Control
                          placeholder="Email"
                          type="email"
                        ></Form.Control>
                      </Form.Group> 
                    </Col>
                    <Col className="pl-1" md="5">
                      <Form.Group>
                        <label> Responsável </label>
                        <Form.Control
                          placeholder="Nome"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Segmento</label>
                        <Form.Control
                          placeholder="Segmento"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                    <Form.Group>
                        <label>
                          Nº de Funcionários
                        </label>
                        <Form.Control
                          placeholder="000"
                          type="text"
                        ></Form.Control>
                      </Form.Group> 
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label> Faturamento Anual </label>
                        <Form.Control
                          placeholder="R$ 000.000,00"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <br></br>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                   Salvar
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default User;
