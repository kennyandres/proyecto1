<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Editar Articulo</h5>
                <button
                  type="button"
                  class="close"
                  aria-label="Close"
                  @click="cerrar"
                >
                  <span aria-hidden="true">&times; </span>
                </button>
              </div>
              <div class="modal-body" >
                
                <form>
                  <div class="mb-3">
                   
                    <label for="Categoria" class="form-label">Categoria</label>
                    <input
                      type="street"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <label for="Nombre" class="form-label">Codigo</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <label for="Nombre" class="form-label">Nombre</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <label for="Nombre" class="form-label">Descripcion</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <label for="Nombre" class="form-label"
                      >Precio de venta</label
                    >
                    <input
                      type="email-sm"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <label for="Nombre" class="form-label">Stock</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label"
                      >Password</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div class="mb-3 form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1"
                      >Check me out</label
                    >
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="cerrar">
                  Cerrar
                </button>
                <button type="button" class="btn btn-primary" @click="editar">
                  Guardar
                </button>
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
  methods: {
    cerrar() {
      this.$store.dispatch("setShowModel", false);
      console.log("llega el true");
    },
    editar() {
      this.$store.dispatch("setShowModel", false);
      console.log("llega el true");
    },
  },
  computed: {
    ...mapState(["showModelGlobal"]),
  },
};
</script>