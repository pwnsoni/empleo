<template>
    <div v-if="user">
        <div class = "con">
            <h1 id="title"> {{user.fullName}} </h1>
            
            <div>
            <h2 id="subtitle" v-if="seeker && main"> Actively looking for job </h2>

            <h2 id="subtitle" v-if="!seeker && main"> Recruiting </h2>
            </div>
        </div>

        <div id="heading">
            <p> <strong> Professional Summary </strong></p>
        </div>


        <div id="content">
            <p>  {{user.professionalSummary}}  </p>
        </div>
        <div id="heading">
            <p> <strong> Let's get connected !! </strong></p>
        </div>
        <div id="social">
            
                <!-- <p> {{sm}} koakaosao -->

                    
                <p >
                    <a :href='profiles.github' target="_blank"> <font-awesome-icon :icon="['fab', 'github']"/> </a>
                    
                    <a :href='profiles.facebook' target="_blank"> <font-awesome-icon :icon="['fab', 'facebook']"/> </a>
                    
                    <a :href='profiles.linkedin' target="_blank"> <font-awesome-icon :icon="['fab', 'linkedin']"/> </a>
                    <a :href='profiles.globe' target="_blank"> <font-awesome-icon :icon="['fas', 'globe']"/> </a>   
                </p>
            
        </div>

        
    </div>
</template>


<script>
import Profile from '~/components/Profile.vue'

export default {
    components: {
        Profile
    },
    data(){
        return{
            user: {},
            profiles: {
                l: '#'
            },
            seeker: '',
            main: ''        }
    },

    async mounted() {
        // alert(  this.$route.params.user);
        console.log(this.$route.params);
        const u = await this.$axios.$get('/api/users/' +  this.$route.params.user);
        this.user = u.result;
        this.seeker = this.user.userType === 'seeker'? true: false;
        this.main = true;
        if(u.result.profiles != undefined)    this.profiles = JSON.parse(u.result.profiles);
        
    }


}
</script>

<style  scoped>

div #app{
        min-width: 100%;
        min-height: 420px;
    }

div #social a{
    color: #34495e;
}
.con{
    margin: auto;
    margin-top: 10vh;
    justify-content: center;

    margin-bottom: 7vw;
}

div #title{
    font-size: 11vw;
    display: flex;
    justify-content: center;
    color: darkblue;
    font-weight: 350;
}

p{
    font-size: 5vw;
}


div #social{
    background: #e2e2e5;
    color: #34495e;
    /* height: 10vh;
    
    width: 100%; */
    /* font-size: 1vw; */
    margin-bottom: 7vw;
    margin-top: 7vw;
    padding: 4vh;
    justify-content: space-evenly;
  text-align: center;
  word-spacing: 15vw;
}

div #heading{
    background: white;
    color: #34495e;
    margin-bottom: 0vw;
    margin-top: 4vw;
    padding: 3vw;
  /* text-align: center; */
    width: 100%;
    height: 10vw;
}

div #content{
    background: #e2e2e5;
    color: #34495e;
    margin-bottom: 7vw;
    margin-top: 7vw;
    padding: 4vh;
  /* text-align: center; */
  width: 100%;
  /* height: 16vw; */
}
div  #subtitle{
    color: darkblue;
    font-size: 3vw;
    display: flex;
    justify-content: center;
    font-weight: 290;
}
    
</style>