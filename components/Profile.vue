<template>
    <div>
    
    <div v-if="currUser ">
        <div class = "con">
            <!-- <p> {{currUser.result}} </p> -->
            <h1 id="title"> {{currUser.result.fullName}} </h1>
            
            <div>
            <h2 id="subtitle" v-if="currUser.result.userType === 'seeker'"> Actively looking for job </h2>

            <h2 id="subtitle" v-if="currUser.result.userType === 'recruiter'"> Recruiting </h2>
            </div>
        </div>

        <div id="ll">
            <div id="heading">
            <p> <strong> Professional Summary </strong></p>
            </div>

            <div id="content">
                <p > {{currUser.result.professionalSummary}}  </p>
            </div> 

            <div id="heading">

                <p> <strong> Let's get connected !! </strong></p>

            </div>

            <div id="social">
                
                    <!-- <p> {{sm}} koakaosao -->

                        
                    <p>

                        <a :href='ps.github' target="_blank"> <font-awesome-icon :icon="['fab', 'github']"/> </a>
                        
                        <a :href='ps.facebook' target="_blank"> <font-awesome-icon :icon="['fab', 'facebook']"/> </a>
                        
                        <a :href='ps.linkedin' target="_blank"> <font-awesome-icon :icon="['fab', 'linkedin']"/> </a>
                        <a :href='ps.globe' target="_blank"> <font-awesome-icon :icon="['fas', 'globe']"/> </a>  
                    </p>
                
            </div>

            <div v-if="currUser.result.userType === 'recruiter'">

                <div id="heading">

                    <p> <strong> Jobs Posted By Me </strong></p>

                </div>


            </div>

        </div>
    </div>
    </div>
</template>

<script>
export default {
props: ['user'],

data(){
    return{
        token : '',
        seeker : '',
        l : 'hellp'
    }
},


computed: {
      
    currUser() {
        // this.$store.dispatch('CUR_USER');
        // console.log(this.token);
        return this.$store.state.user;
        // this.$axios.setToken(this.token, 'Bearer')
        // const x = await this.$axios.get('/api/auth/currentUser') ;
        // return x.result;
    },

    ps(){
      return JSON.parse(this.$store.state.user.result.profiles || JSON.stringify(this.l));  
    }
  }
}
</script>

<style  scoped>
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

div #social a{
    color: #34495e;
}

p{
   
  font-size: 4vw;
    margin-right: 20px;
    color: #34495e;
}

/* div #ll{
    background: #e2e2e5;
} */


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