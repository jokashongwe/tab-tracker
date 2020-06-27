<template>
  <div class="register">
    <h1>Register</h1>
    <input type="email" name="email" v-model="email" placeholder="email" />
    <br />
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="passord"
    />
    <br />
    <button @click="register">Register</button>
  </div>
</template>
<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.passord,
      });
      console.log(response.data);
    },
  },
};
</script>
