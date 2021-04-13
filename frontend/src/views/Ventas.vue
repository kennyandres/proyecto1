<template>
  <div>
    <h1>Ventas</h1>

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
          <th scope="col">Estado</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, i) in ventas" :key="i">
          <th scope="row">{{ i + 1 }}</th>
          <td v-text="item._id"></td>
          <td v-text="item.usuario"></td>
          <td v-text="item.persona.nombre"></td>
          <td v-text="item.tipocomprobante"></td>
          <td v-text="item.numerocomprobante"></td>
          <td v-text="item.impuesto"></td>
          <td v-text="item.total"></td>          
           <td><button @click="editar">detalles</button></td>
           <td v-text="item.estado"></td>
          
         
          <div ></div>

          <td>
          
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Ventas",
  data: () => ({
    ventas: [],
  }),

  created() {
    this.listar();
  },

  methods: {
    listar() {
      let me = this;
      let header = { headers: { token: this.$store.state.token } };
      axios
        .get("venta", header)
        .then(function (response) {
          //este articulos es el array vacio
          me.ventas = response.data.venta;
          console.log(response.data);
        })
        .catch(function ({ response }) {
          console.log(response.data);
        });
    },
  },
};
</script>
