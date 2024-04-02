<template>
  <div class="container-fluid">
    <div
      class="mt-4 page-header min-height-300 border-radius-xl"
      :style="{
        backgroundImage:
          'url(' + require('@/assets/img/curved-images/curved14.jpg') + ')',
        backgroundPositionY: '50%',
      }"
    >
      <span class="mask bg-gradient-success opacity-6"></span>
    </div>
    <div class="mx-4 overflow-hidden card card-body blur shadow-blur mt-n6">
      <div class="row gx-4">
        <div class="col-auto">
          <div class="avatar avatar-xl position-relative">
            <img
              src="@/assets/img/usuario.png"
              alt="profile_image"
              class="shadow-sm w-100 border-radius-lg"
            />
          </div>
        </div>
        <div class="col-auto my-auto">
          <div class="h-100">
            <h5 class="mb-1">Usuario 1</h5>
            <p class="mb-0 text-sm font-weight-bold">Area de adscripcion</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-4 container-fluid">
    <div class="mt-3 row">
      
      <div class="mt-4 col-12 col-md-6 col-xl-4 mt-md-0">
        <profile-info-card
          title="Informacion general"
          description="Informacion del usuario"
          :info="{
            fullName: 'usuario',
            mobile: '(52) 123 1234 123',
            email: 'usuario@mail.com',
            location: '1',
          }"
          
          :action="{
            route: 'javascript:;',
            tooltip: 'Edit Profile',
          }"
        />
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-12">
        <div class="mb-4 card">
          <div class="p-3 pb-0 card-header">
            <h6 class="mb-1">Proyectos</h6>
            <p class="text-sm">Administra tus Comisiones</p>
          </div>
          <div class="p-3 card-body">
            <div class="row">
              <default-project-card
                title="Adscripcion"
                :image="img1"
                label="Proyecto 1"
                description="Descripcion"
                :action="{
                  color: 'danger',
                  label: 'ver proyecto',
                }"
              />

              <default-project-card
                title="Adscripcion"
                :image="img1"
                label="Proyecto 2"
                description="Descripcion."
                
                :action="{
                  color: 'success',
                  label: 'completado',
                }"
              />

              <default-project-card
                title="Adscripcion"
                :image="img1"
                label="proyecto 3"
                description="Descripcion"
                :action="{
                  color: 'success',
                  label: 'completado',
                }"
              />

              <div class="mb-4 col-xl-3 col-md-6 mb-xl-0">
                <place-holder-card
                  :title="{ text: 'Nuevo proyecto', variant: 'h5' }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import SoftSwitch from "@/components/SoftSwitch.vue";
import ProfileInfoCard from "./components/ProfileInfoCard.vue";
//import SoftAvatar from "@/components/SoftAvatar.vue";
import sophie from "@/assets/img/kal-visuals-square.jpg";
import marie from "@/assets/img/marie.jpg";
import ivana from "@/assets/img/ivana-square.jpg";
import peterson from "@/assets/img/team-4.jpg";
import nick from "@/assets/img/team-3.jpg";
import img1 from "@/assets/img/ruta.jpg";
import img2 from "@/assets/img/home-decor-2.jpg";
import img3 from "@/assets/img/home-decor-3.jpg";
import team1 from "@/assets/img/ruta.jpg";

import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import DefaultProjectCard from "./components/DefaultProjectCard.vue";
import PlaceHolderCard from "@/pantallas/Cards/PlaceHolderCard.vue";
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";

export default {
  name: "ProfileOverview",
  components: {
    //SoftSwitch,
    ProfileInfoCard,
    //SoftAvatar,
    DefaultProjectCard,
    PlaceHolderCard,
  },
  data() {
    return {
      showMenu: false,
      sophie,
      marie,
      ivana,
      peterson,
      nick,
      img1,
      team1,
      img2,
      img3,
      faFacebook,
      faTwitter,
      faInstagram,
    };
  },

  mounted() {
    this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip(this.$store.state.bootstrap);
  },
  beforeUnmount() {
    this.$store.state.isAbsolute = false;
  },
};
</script>
