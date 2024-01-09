import axios from "axios";
import React, { useState, useEffect } from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {
  const [countForms, setCountForms] = useState([]);
  const [countResps, setCountResps] = useState([]);
  const [countFuncs, setCountFuncs] = useState([]);

  useEffect(() => {
    loadFormularios();
    loadFuncionarios();
    loadRespostas();
  }, []);


  const loadFuncionarios = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/funcionarios/count");
      setCountFuncs(res.data);
    } catch (error) {
      console.error("Erro ao carregar funcionários", error);
    }
  };

  const loadFormularios = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/formularios/count");
      setCountForms(res.data);
    } catch (error) {
      console.error("Erro ao carregar formulários", error);
    }
  };

  const loadRespostas = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/respostas/count");
      setCountResps(res.data);
    } catch (error) {
      console.error("Erro ao carregar respostas", error);
    }
  };


  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-single-02 text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total de Funcionários</p>
                      <Card.Title as="h4">{countFuncs}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              {/* <Card.Footer>
                <hr></hr>
                <div className="stats">               
                </div>
              </Card.Footer> */}
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-notes text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total de Formulários</p>
                      <Card.Title as="h4"> {countForms} </Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              {/* <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Last day
                </div>
              </Card.Footer> */}
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-ruler-pencil text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Forms Respondidos</p>
                      <Card.Title as="h4"> {countResps} </Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              {/* <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  In the last hour
                </div>
              </Card.Footer> */}
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-satisfied text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Satisfação Atual</p>
                      <Card.Title as="h4">+45K</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              {/* <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update now
                </div>
              </Card.Footer> */}
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Análise de Satisfação</Card.Title>
                <p className="card-category">Análise Anual de Satisfação dos Colaboradores</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        "JAN",
                        "FEV",
                        "MAR",
                        "ABR",
                        "MAI",
                        "JUN",
                        "JUL",
                        "AGO",
                        "SET",
                        "OUT",
                        "NOV",
                        "DEZ",
                      ],
                      series: [
                        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                        [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 5,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Margem Adequada 
                  <br></br>
                  <i className="fas fa-circle text-danger"></i>
                  Satisfação 
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  );
}

export default Dashboard;
