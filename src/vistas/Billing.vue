<template>
  <div class="container-fluid mt-4">
    <div class="row align-items-center">
      <div class="col-lg-4 col-sm-8">
        <!-- <nav-pill /> -->
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8">
        <div class="row mt-4">
          <div class="col-xl-6 mb-xl-0 mb-4">
            <master-card />
          </div>
          <div class="col-xl-6">
            <div class="row">
              <div class="col-md-6">
                <default-info-card
                  icon="text-white fas fa-landmark"
                  title="efectivo"
                  description="Dinero obtenido"
                  value="+$2000"
                />
              </div>
              <div class="col-md-6">
                <default-info-card
                  icon="text-white fab fa-paypal"
                  title="Paypal"
                  description="Dinero acomulado"
                  value="$455.00"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div class="col-lg-4">
        <invoice-card />
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-7">
        <billing-card
          title="Informacion de pagos"
          :bills="[
            {
              name: 'Empleado 1',
              company: 'puesto',
              email: 'puesto',
              id: '$358',
            },
            {
              name: 'Empleado 2',
              company: 'puesto',
              email: 'puesto',
              id: '$800',
            },
            {
              name: 'Empleado 3',
              company: 'puesto',
              email: 'puesto',
              id: '$350',
            },
          ]"
        />
      </div>
      <div class="col-md-5 mt-4">
        <ranking-list-card
          :horizontal-break="false"
          :card="{
            title: 'Transacciones',
            date: '23 - 30 Marzo 2024',
            subtitle: 'Hoy',
          }"
          :item="[
            {
              title: 'Pendiente',
              date: '27 marzo 2024,  12:30 PM',
              amount: '- $ 2,500',
              icon: 'fa-arrow-down',
              color: 'danger',
            },
            {
              title: 'Pagado',
              date: '27 Marzo 2024,  04:30 AM',
              amount: '+ $ 2,000',
              icon: 'fa-arrow-up',
              color: 'success',
            },
          ]"
        >
          <ranking-list
            title="Ayer"
            :item="[
              {
                title: 'pagado',
                date: '26 March 2024 13:45 PM',
                amount: '+ $ 750',
                icon: 'fa-arrow-up',
                color: 'success',
              },
              {
                title: 'pagado',
                date: '26 March 2024 12:30 PM',
                amount: '+ $ 1,000',
                icon: 'fa-arrow-up',
                color: 'success',
              },
              {
                title: 'pagado',
                date: '26 March 2024 08:30 AM',
                amount: '+ $ 2,500',
                icon: 'fa-arrow-up',
                color: 'success',
              },
              {
                title: 'pendiente',
                date: '26 Marzo 2024 05:00 AM',
                amount: 'En proceso',
                icon: 'fa-info',
                color: 'dark',
              },
            ]"
            :horizontal-break="false"
          />
        </ranking-list-card>
      </div>
    </div>
  </div>
</template>

<script>
import setTooltip from "@/assets/js/tooltip.js";
import MasterCard from "@/pantallas/Cards/MasterCard.vue";
import DefaultInfoCard from "@/pantallas/Cards/DefaultInfoCard.vue";
import InvoiceCard from "./components/InvoiceCard.vue";
import BillingCard from "./components/BillingCard.vue";
import RankingList from "@/pantallas/Cards/RankingList.vue";
import RankingListCard from "@/pantallas/Cards/RankingListCard.vue";

export default {
  name: "Billing",
  components: {
    //NavPill,
    MasterCard,
    DefaultInfoCard,
    InvoiceCard,
    BillingCard,
    RankingList,
    RankingListCard,
  },
  mounted() {
    setTooltip();
  },
};
</script>
