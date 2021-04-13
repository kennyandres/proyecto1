<template>
  <div>
    <h1>Usuarios</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">Email</th>
          <th scope="col">Rol</th>
          <th scope="col">Estado</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, i) in usuariosData" :key="i">
          <th scope="row">{{ i + 1 }}</th>
          <td v-text="item._id"></td>
          <td v-text="item.nombre"></td>
          <td v-text="item.email"></td>
          <td v-text="item.rol"></td>
          <td v-text="item.estado"></td>
          <td>
            <div>
              <svg > 
                src="../assets/lapiz.png"
              </svg>
              <svg>
                src="../assets/delete.png"
              </svg>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Usuarios",
  data: () => ({
    usuariosData: [],
  }),

  created() {
    this.listar();
  },

  methods: {
    listar() {
      let me = this;
      let header = { headers: { token: this.$store.state.token } };
      axios
        .get("usuario", header)
        .then(function (response) {
          //este usuarios es el array vacio
          me.usuariosData = response.data.usuarios;
        })
        .catch(function ({ response }) {
          console.log(response.data.usuarios);
        });
    },
    editar() {
      alert("Voy a editar");
    },
  },
};
</script>
