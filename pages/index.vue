<template>
  <div id="app">
    <!-- <div class="container">
      <div>
        <logo />
        
        <h2 class="subtitle">
          Find your dream job

          <font-awesome-icon :icon="['fab', 'linkedin']"/>
        </h2>


        <div class="links">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="button--green"
          >
            Documentation
          </a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--grey"
          >
            GitHub
          </a>

          
        </div>

      </div>
      
    </div> -->

    <div id="mainContent">
        <div>
        <logo />
        </div>

        <div>
        <h2 class="subtitle">
          Find your dream job

          <font-awesome-icon :icon="['fab', 'linkedin']"/>
        </h2>
        </div>
    </div>

  <div id="slab" > 
    <div id="center">
      <p > <strong> Our Partners </strong> </p> 
    </div>

    <div id="comps">
      <span> <font-awesome-icon :icon="['fab', 'amazon']"/> </span>
      <span> <font-awesome-icon :icon="['fab', 'google']"/> </span>
      <span> <font-awesome-icon :icon="['fab', 'facebook']"/> </span>
      <span> <font-awesome-icon :icon="['fab', 'linkedin']"/> </span>

      <!-- <b-card-group deck>
      
      <b-card>
        <b-card-text><font-awesome-icon :icon="['fab', 'amazon']"/></b-card-text>
      </b-card>
      <b-card>
        <b-card-text><font-awesome-icon :icon="['fab', 'google']"/></b-card-text>
      </b-card>
      <b-card>
        <b-card-text><font-awesome-icon :icon="['fab', 'adobe']"/> </b-card-text>
      </b-card>

      
      </b-card-group> -->
    </div>


  </div>
  </div>

</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>

div #app{
        min-width: 100%;
        min-height: 400px;
    }

div #mainContent {
  text-align: center;
  margin-top: 10vh;
}

span {
  margin: auto;
  
}

div #slab  #comps{
  /* display: inline; */
  background: rgb(209, 209, 214);
  justify-content: space-evenly;
  text-align: center;
  word-spacing: 15vw;
  font-size: 7vw;
  padding: 6vw;
}

div #slab  #center {
  color: rgba(4, 4, 112, 0.534);
  text-align: center;
  font-size: 7vw;
}

div #slab{
  width: 100%;
  height: 100%;
  background: rgb(209, 209, 214);
  margin-bottom: 7vw;
  margin-top: 7vw;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 6vw;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
