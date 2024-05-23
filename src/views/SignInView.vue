<template>
  <div class="SignIn-Container">
    <div class="img">
      <img src="../assets/Mobile-login-Cristina.jpg" alt="login" />
    </div>
    <div class="sign-in">
      <h1>Sign In</h1>
      <form @submit.prevent="login">
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
        <a href="#"> forgot password?</a>
        <button class="login" type="submit">Sign In</button>
      </form>

      <p>Don't have an account? <RouterLink to="/SignUp">SignUp</RouterLink></p>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          alert('Successfully logged in')
          this.$router.push('/DashBoard')
        })
        .catch((error) => {
          alert(error.message)
        })
    },
    signInWithGoogle() {
      // Add your Google sign-in logic here
    },
    signInWithFacebook() {
      // Add your Facebook sign-in logic here
    },
    signInWithApple() {
      // Add your Apple sign-in logic here
    }
  }
}
</script>

<style scoped>
/* Your styles here */
img {
  width: 564px;
  height: 686px;
}
.SignIn-Container {
  display: flex;
  flex-direction: row;
}
.sign-in {
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

.sign-in a {
  margin-left: 276px;
  padding: 12px 26px;
}

.social-signin {
  display: flex;
  align-items: center;
}

.login {
  width: 137px;
  margin-top: 45px;
  color: white;
  border-radius: 5px;
  border: 1px solid;
  background: indianred;
  padding: 10px 39px;
  cursor: pointer;
}

.login:hover {
  background: rgb(133, 55, 55);
  transition: 0.3s ease;
}

.social-signin button {
  width: 20px;
  margin: 10px;
  padding: 0; /* Remove padding */
  background: none; /* Remove background */
  border: none; /* Remove border */
  cursor: pointer;
}

.social-signin button img {
  width: 30px;
  height: 30px; /* Set the height */
  border-radius: 50%; /* Make the image circular */
  transition: transform 0.3s ease; /* Add transition for hover effect */
}

/* Style for when the mouse hovers over the button */
.social-signin button:hover img {
  transform: scale(1.1); /* Enlarge the icon */
}

.social-signin button {
  margin-top: 10px;
}

.social-signin img {
  width: 48px;
  height: 48px;
}
@media (max-width: 500px) {
  .SignIn-Container {
    display: flex;
    flex-direction: column;
  }
  img[data-v-e2bd44b3] {
    width: 404px;
    height: 426px;
  }
  .sign-in a[data-v-e2bd44b3] {
    margin-left: 4px;
    padding: 0;
  }
}
</style>
