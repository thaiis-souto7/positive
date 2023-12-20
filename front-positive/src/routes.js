
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import Filial from "views/Filial.js";
import Perguntas from "views/Perguntas.js";
import TableList from "views/TableList.js";
//import Typography from "views/Typography.js";
//import Icons from "views/Icons.js";
// import Maps from "views/Maps.js";
// import Notifications from "views/Notifications.js";
// import Upgrade from "views/Upgrade.js";
let dashboardRoutes = []

if (parseInt(localStorage.getItem('nivelAcesso')) === 1) {
  dashboardRoutes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: "nc-icon nc-chart-pie-35",
      component: Dashboard,
      layout: "/admin"
    },
    {
      path: "/api/funcionarios",
      name: "Perfil",
      icon: "nc-icon nc-circle-09",
      component: UserProfile,
      layout: "/admin"
    },
    {
      path: "/pergunta",
      name: "Perguntas",
      icon: "nc-icon nc-chat-round",
      component: Perguntas,
      layout: "/admin"
    },
    {
      path: "/filial",
      name: "Filial",
      icon: "nc-icon nc-bank",
      component: Filial,
      layout: "/admin"
    },
    {
      path: "/formulario",
      name: "Formulário",
      icon: "nc-icon nc-single-copy-04",
      component: Filial,
      layout: "/admin"
    },
    {
      path: "/relatorio",
      name: "Relatórios",
      icon: "nc-icon nc-notes",
      component: TableList,
      layout: "/admin"
    },
  ];
} else if(parseInt(localStorage.getItem('nivelAcesso')) === 2){
  dashboardRoutes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: "nc-icon nc-chart-pie-35",
      component: Dashboard,
      layout: "/admin"
    },
    {
      path: "/formulario",
      name: "Formulário",
      icon: "nc-icon nc-single-copy-04",
      component: Filial,
      layout: "/admin"
    }];
}



export default dashboardRoutes;
