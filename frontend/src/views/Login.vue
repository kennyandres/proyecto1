<template>
  <div>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          v-model="usuario.email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          v-model="usuario.password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
    </form>
    <div>
      <button @click="ingresar">Submit</button>
      <h3 v-text="errors"></h3>
    </div>
  </div>
</template>

><script>
import axios from "axios";
export default {
  data: () => ({
    usuario: {
      email: "",
      password: "",
    },
    errors: null,
  }),
  methods: {
    ingresar() {
      let me = this;
      axios
        .post("usuario/login", {
          email: me.usuario.email,
          password: me.usuario.password,
        })
        .then(function (response) {
          console.log(response.data);
          me.$store.dispatch("setToken", response.data);
          me.$router.push("/Home");
        })
        .catch(function ({ response }) {
          me.errors = response.data.msg;
        });
    },
  },
};
</script>

