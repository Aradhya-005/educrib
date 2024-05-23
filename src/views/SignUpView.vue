<template>
  <div class="sign-up">
    <h1>Sign Up</h1>
    <form @submit.prevent="register">
      <div class="input-group">
        <label for="email">Email:</label>
        <input placeholder="Enter email" type="email" id="email" v-model="email" required />
      </div>
      <div class="input-group">
        <label for="password">Password:</label>
        <input
          placeholder="Enter password"
          type="password"
          id="password"
          v-model="password"
          required
        />
      </div>

      <button class="SignUp" type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script lang="ts">
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register() {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          alert('Successfully registered! Please login.')
          this.$router.push('/SignIn') // Redirect to sign-in page after registration
        })
        .catch((error) => {
          alert(error.message)
        })
    }
  }
}
</script>

<style>
.sign-up {
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 39px 77px;
  text-align: center;
  margin-top: 50px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 0;
  width: 100%;
  max-width: 300px;
}

label {
  margin-top: 21px;
  margin-bottom: 15px;
  font-weight: bold;
}

input {
  transition: border-color 0.3s ease;
  border-radius: 4px;
  border-color: #dfdbdb45;
  padding: 14px 16px;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
}
.input-group input:focus {
  border-color: cornflowerblue;
}
.SignUp {
  color: white;
  background: #008b8b9e;
  border: none;
  border-radius: 4px;
  margin-top: 22px;
  font-size: 16px;
  padding: 10px 22px;
}
</style>
