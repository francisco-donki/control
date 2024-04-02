<template>
  <div
    class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
    id="sidenav-collapse-main"
  >
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-collapse navText="Inicio" :to="{ name: 'Dashboard' }">
          <template #icon>
            <shop />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="solicitudes" :to="{ name: 'Tables' }">
          <template #icon>
            <office />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Historicos" :to="{ name: 'Billing' }">
          <template #icon>
            <credit-card />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Usuario" :to="{ name: 'Profile' }">
          <template #icon>
            <customer-support />
          </template>
        </sidenav-collapse>
      </li>
      <li class="mt-3 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="this.$store.state.isRTL ? 'me-4' : 'ms-2'"
        >
          Pruebas
        </h6>
      </li>
      <!--<li class="nav-item">
        <sidenav-collapse navText="Perfil" :to="{ name: 'Profile' }">
          <template #icon>
            <customer-support />
          </template>
        </sidenav-collapse>
      </li> -->
      <li class="nav-item">
        <sidenav-collapse navText="Iniciar sesion" :to="{ name: 'Sign In' }">
          <template #icon>
            <spaceship />
          </template>
        </sidenav-collapse>
      </li>
    </ul>
  </div>
  
</template>
<script>
import SidenavCollapse from "./SidenavCollapse.vue";
//import SidenavCard from "./SidenavCard.vue";
import Shop from "../../components/Icon/Shop.vue";
import Office from "../../components/Icon/Office.vue";
import CreditCard from "../../components/Icon/CreditCard.vue";
import CustomerSupport from "../../components/Icon/CustomerSupport.vue";
//import Document from "../../components/Icon/Document.vue";
import Spaceship from "../../components/Icon/Spaceship.vue";
export default {
  name: "SidenavList",
  props: {
    cardBg: String,
  },
  data() {
    return {
      title: "Sistema",
      controls: "dashboard",
      isActive: "active",
    };
  },
  components: {
    SidenavCollapse,
    //SidenavCard,
    Shop,
    Office,
    CreditCard,
    CustomerSupport,
    //Document,
    Spaceship,
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
  },
};
</script>
