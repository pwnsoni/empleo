<template>
  <div id="app">
    <div id="cont">
    <body>
      <div id="login">
        <div id="description">
          <h1>Sign Up</h1>
          <p>By signing up you agree to the ridiculously long terms that you didn't bother to read.</p>
          <p> Already a member, <nuxt-link to='/login' id="link"> login  </nuxt-link></p>
        </div>
        <div id="form">
          <form @submit.prevent="doSignup">

            <b-form-group label=" You are ">
              <b-form-radio-group
                id="radio-slots"
                v-model="form.userType"
                :options="options"
                name="radio-options-slots"
              > 
              </b-form-radio-group>
            </b-form-group>


            <!-- <input type="radio" id="male" name="gender" value="male">
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Female</label> -->

            <label for="full name">Full Name</label>
            <input type="text" id="full name" v-model="form.fullName" placeholder="Johny Deep" autocomplete="off">
            
            <label for="username">username</label>
            <input type="text" id="userName" v-model="form.userName" placeholder="JDeep" autocomplete="off">
            <label for="email">Email</label>
            <input type="text" id="email" v-model="form.email" placeholder="me@example.com" autocomplete="off">

            <label for="password">
              Password   <font-awesome-icon v-if="!hidePassword" @click="hidePassword = !hidePassword" :icon="['fas', 'eye-slash']"/> 
              <font-awesome-icon v-if="hidePassword" @click="hidePassword = !hidePassword" :icon="['fas', 'eye']"/>
            </label>
            <input type="password" id="password" v-if="hidePassword" v-model="form.password" placeholder="**********">
            <input type="text" id="password" v-if="!hidePassword" v-model="form.password" placeholder="**********">

            <button type="submit">Sign Up</button>
        </form>
        </div>
      </div>
    </body>
  </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          userName: '',
          fullName: '',
          email: '',
          password: '',
          userType: '',
        },
        options: [
          { text: 'recruiter', value: 'recruiter' },
          { text: 'seeker', value: 'seeker' },
          ],
        hidePassword: true,
        passwordType: 'password',
      }
    },
    
    methods: {
      async doSignup() {
        confirm(JSON.stringify(this.form))
        try{
        this.$store.dispatch('SIGN_USER_UP', this.form);
        
        // this.$store.dispatch('LOG_USER_IN', this.form);
        }
        catch(e){
          alert('pta nhi')
          alert(e.message);
        }
        // console.log(this.form)
        // let x = await this.$axios.$post('/api/auth/users', this.form)
        // this.$router.push('/me')
        // const token = x.token;
        // console.log(token);
        // this.$axios.setToken(token, 'Bearer')
        // console.log(await this.$axios.$get('/api/auth/test'))
        // alert(await this.$axios.$get('/api/auth/test'))
      },

      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style  scoped>
* {
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
  /* margin-bottom: ; */
  /* background-color: red; */
}

div#app {
  width: 100%;
  height: 100%;
  margin-top: 10% ;
  /* justify-content: center; */
  padding: 0;
  margin-bottom: 10%;
  
}

div #cont{
  margin-bottom: 0vw;
}

#link{
    color: #34495e;
}

div#app div#login {
  align-items: center;
  background-color: #e2e2e5;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}

div#app div#login div#description {
  background-color: #ffffff;
  width: 280px;
  padding: 35px;
}

div#app div#login div#description h1,
div#app div#login div#description p {
  margin: 0;
}

div#app div#login div#description p {
  font-size: 0.8em;
  color: #95a5a6;
  margin-top: 10px;
}

div#app div#login div#form {
  background-color: #34495e;
  border-radius: 5px;
  box-shadow: 0px 0px 30px 0px #666;
  color: #ecf0f1;
  width: 300px;
  padding: 35px;
}

div#app div#login div#form label,
div#app div#login div#form input {
  outline: none;
  width: 100%;
}

div#app div#login div#form label {
  color: #95a5a6;
  font-size: 0.8em;
}

div#app div#login div#form input {
  background-color: transparent;
  border: none;
  color: #ecf0f1;
  font-size: 1em;
  margin-bottom: 20px;
}

div#app div#login div#form ::placeholder {
  color: #ecf0f1;
  opacity: 1;
}

div#app div#login div#form button {
  background-color: #ffffff;
  cursor: pointer;
  border: none;
  padding: 10px;
  transition: background-color 0.2s ease-in-out;
  width: 100%;
}

div#app div#login div#form button:hover {
  background-color: #eeeeee;
}

@media screen and (max-width: 600px) {
  div#app div#login {
    align-items: unset;
    background-color: unset;
    display: unset;
    justify-content: unset;
  }

  div#app div#login div#description {
    margin: 0 auto;
    max-width: 350px;
    width: 100%;
  }

  div#app div#login div#form {
    border-radius: unset;
    box-shadow: unset;
    width: 100%;
  }

  div#app div#login div#form form {
    margin: 0 auto;
    max-width: 280px;
    width: 100%;
  }
}
</style>