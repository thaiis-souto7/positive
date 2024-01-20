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
  const [bemEstarAtual, setBemEstarAtual] = useState(0);
  const [siteAtual, setSiteAtual] = useState(0);
  const [monthlyAverages, setMonthlyAverages] = useState([]);
  const [monthlyAverageSite, setMonthlyAverageSite] = useState([]);

  useEffect(() => {
    loadFormularios();
    loadFuncionarios();
    loadRespostas();
    loadBemEstarAtual();
    loadSatifaçãoSite();
    loadMonthlyAverages();
    loadMonthlyAverageSite();
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

  const loadBemEstarAtual = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/respostas/average");
      setBemEstarAtual(res.data);
    } catch (error) {
      console.error("Erro ao carregar a média de bem-estar", error);
    }
  };

  const loadSatifaçãoSite = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/respostas/averageSite");
      setSiteAtual(res.data);
    } catch (error) {
      console.error("Erro ao carregar a média de satisfação do site", error);
    }
  };

  const loadMonthlyAverages = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/respostas/average/monthly");
      setMonthlyAverages(res.data);
    } catch (error) {
      console.error("Erro ao carregar as médias mensais", error);
    }
  };

  const loadMonthlyAverageSite = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/respostas/average/monthly/site");
      setMonthlyAverageSite(res.data);
    } catch (error) {
      console.error("Erro ao carregar as médias mensais", error);
    }
  };

  // Mapeamento de número do mês para nome do mês
  const monthNames = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

  // Inicializa um array de valores com 0 para cada mês
  const monthlyValues = new Array(12).fill(0);
  const monthlySite = new Array(12).fill(0);

  // Preenche os valores mensais com os dados de 'monthlyAverages'
  monthlyAverages.forEach(avg => {
    const monthIndex = avg.month - 1; // Ajusta porque os meses começam em 1, mas os índices de array em 0
    monthlyValues[monthIndex] = Number(avg.average.$numberDecimal); // Ajusta o valor para um número
  });

  monthlyAverageSite.forEach(avg => {
    const monthIndex = avg.month - 1; // Ajusta porque os meses começam em 1, mas os índices de array em 0
    monthlySite[monthIndex] = Number(avg.average.$numberDecimal); // Ajusta o valor para um número
  });

  // Estrutura de dados para o gráfico
  const chartData = {
    labels: monthNames,
    series: [monthlyValues, monthlySite]
  };


  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="4" sm="6">
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
          <Col lg="4" sm="6">
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
          <Col lg="4" sm="6">
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
                      <Card.Title as="h4"> {countResps} / {countFuncs*countForms} </Card.Title>
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
          <Col lg="4" sm="6">
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
                      <p className="card-category">Bem-Estar</p>
                      <Card.Title as="h4"> { bemEstarAtual ? bemEstarAtual.toFixed(2) : 0 } </Card.Title>
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
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-tv-2 text-info"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Satisfação - Site</p>
                      <Card.Title as="h4">{ siteAtual ? siteAtual.toFixed(2) : 0}</Card.Title>
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
                      labels: chartData.labels,
                      series: [[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                                chartData.series[0],
                                chartData.series[1]
                              ]
                    }}
                    //   {{labels: [
                    //     "JAN",
                    //     "FEV",
                    //     "MAR",
                    //     "ABR",
                    //     "MAI",
                    //     "JUN",
                    //     "JUL",
                    //     "AGO",
                    //     "SET",
                    //     "OUT",
                    //     "NOV",
                    //     "DEZ",
                    //   ],
                    //   series: [
                    //     [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                    //     [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2],
                    //     [5, 1, 3, 2, 1, 5, 3, 2, 4, 1, 5, 3],
                    //   ],
                    // }}
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
                  Bem-Estar  
                  <br></br>
                  <i className="fas fa-circle text-warning"></i>
                  Satisfação do Site
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
