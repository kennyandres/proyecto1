<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Detalle Compra</h5>
                <button
                  type="button"
                  class="close"
                  aria-label="Close"
                  @click="cerrar"
                >
                  <span aria-hidden="true">&times; </span>
                </button>
                
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">ID</th>
                      <th scope="col">Articulo</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Precio</th>
                      
                    </tr>
                  </thead>

                  <tbody>                    
                    <tr v-for="(item, i) in detalles" :key="i">
                      <th scope="row">{{ i + 1 }}</th>
                       <td v-text="item._id"></td>
                      <td v-text="item.articulo"></td>
                      <td v-text="item.cantidad"></td>
                      <td v-text="item.precio"></td>
                      
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Ingresos",
  data: () => ({
    
  }),
  props:{
    detalles:Array
  },
  created() {
console.log('siiii');
  },
  methods: {
    

    
    cerrar() {
      this.$store.dispatch("setShowModel", false);
      console.log("llega el true");
    },
  },
  computed: {
    ...mapState(["showModelGlobal"]),
  },
  //
};
</script>