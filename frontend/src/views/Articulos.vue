<template>
  <div>
    <h1>Articulos</h1>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">categoria</th>
          <th scope="col">codigo</th>
          <th scope="col">nombre</th>
          <th scope="col">descripcion</th>
          <th scope="col">precioventa</th>
          <th scope="col">stock</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, i) in articulos" :key="i">
          <th scope="row">{{ i + 1 }}</th>
          <td v-text="item.categoria"></td>
          <td v-text="item.codigo"></td>
          <td v-text="item.nombre"></td>
          <td v-text="item.descripcion"></td>
          <td v-text="item.precioventa"></td>
          <td v-text="item.stock"></td>
          <td>
            <img src="@/assets/lapiz.png"
             width="25px" 
             alt="" 
             @click="editar" />
            <img
              src="@/assets/delete.png"
              width="25px"
              alt=""
              @click="borrar"
            />
            <div class="names">
             <editarArticulo v-if="showModelGlobal"/>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import editarArticulo from "@/components/editarArticulo.vue";
import axios from "axios";
import {mapState} from "vuex";
export default {
  name: "Articulos",
  data: () => ({
    articulos: [],
   
  }),
  
  computed:{    
    ...mapState(['showModelGlobal'])
  },
  
  components: {
    editarArticulo,
  },

  created() {
    this.listar();

    
  },

  methods: {
    listar() {
      let me = this;
      let header = { headers: { token: this.$store.state.token } };
      axios
        .get("articulo", header)
        .then(function (response) {
          //este articulos es el array vacio
          me.articulos = response.data.articulo;
          console.log(response.data);
        })
        .catch(function ({ response }) {
          console.log(response.data);
        });
    },
 
    editar() {
      this.$store.dispatch('setShowModel',true)
    },
    borrar() {
      alert("Voy a borrar");
    },
  },
};
</script>
