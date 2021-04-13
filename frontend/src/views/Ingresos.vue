<template>
  <div>
    <h1>Ingresos</h1>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col">Usuario</th>
          <th scope="col">Persona</th>
          <th scope="col">Tipo Comprobante</th>
          <th scope="col">Numero Comprabante</th>
          <th scope="col">Impuesto</th>
          <th scope="col">Total</th>
          <th scope="col">Detalles Compra</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, i) in ingresos" :key="i">
          <th scope="row">{{ i + 1 }}</th>
          <td v-text="item._id"></td>
          <td v-text="item.usuario"></td>
          <td v-text="item.persona.nombre"></td>
          <td v-text="item.tipocomprobante"></td>
          <td v-text="item.numerocomprobante"></td>
          <td v-text="item.impuesto"></td>
          <td v-text="item.total"></td>
          <td>
            <img
              src="@/assets/observacion.png"
              width="25px"
              alt=""
              @click="ver(item)"
            />"
          </td>
          <div class="names">
            
          </div>
        </tr>
      </tbody>
    </table>
    <detallesArticulos v-if="showModelGlobal"  :detalles='detallesTemp'/>
  </div>
</template>
<script>
import axios from "axios";
import detallesArticulos from "@/components/detallesArticulos.vue";
import {mapState} from "vuex";
export default {
  
  name: "Ingresos",
  data: () => ({
    ingresos: [],
    detallesTemp:[],
  }),
    computed:{    
    ...mapState(['showModelGlobal'])
  },
   components: {
    detallesArticulos,
  },


  created() {
    this.listar();
  },

  methods: {
    listar() {
      let me = this;
      let header = { headers: { token: this.$store.state.token } };
      axios
        .get("compra", header)
        .then(function (response) {
          //este articulos es el array vacio
          me.ingresos = response.data.compra;
          console.log(response.data);
        })
        .catch(function ({ response }) {
          console.log(response.data);
        });
    },

    ver(item) {
      this.detallesTemp=item.detalles
      this.$store.dispatch("setShowModel", true);
    },
  },
};
</script>
