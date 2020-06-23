<template>
    <div id="appl">

        <div id='lik'>
            <nuxt-link to='/updateProfile' v-b-tooltip.hover title="Edit Your Profile">
        
            <font-awesome-icon :icon="['fas', 'edit']"/>
            </nuxt-link>
        </div>
        
        <div id="body">


        <Profile  />
        <!-- <div v-if='tok'> -->
        <div v-if="myPosts && myPosts.data && tok && tok.result.userType === 'recruiter'">
        <div v-for="post in myPosts.data.result" :key='post'>
            <MyJobPost :post='post'/>
        </div>
        </div>
        <!-- </div> -->

        </div>
    </div>
</template>


<script>
import contentProcessing from '~/mixins/content.js'
import Profile from '~/components/Profile.vue'
import MyJobPost from '~/components/MyJobPost.vue'

export default {

    mixins: [contentProcessing],
    components: {
        Profile,
        MyJobPost
    },

    

    data(){
        return{
            // myPosts:{},
            tokl: this.$store.state.user
        }
    },

    // async fetch ({store}) {
    //     console.log(store.state.user);
    //     // console.log(this.$store.state.user);
    //     // this.$axios.setToken(this.$store.state.user, 'Bearer')
    //     // const x = await this.$axios.get('/api/auth/currentUser') ;
    //     console.log('success');
    //     this.user=store.state.user;
    //     // this.user = x.result;
    // },

    mounted(){
        // if(this.$store.isLoggedin)s
        setTimeout(() => {
            this.$store.dispatch('GET_MY_POSTS')
        }, 1000);
            
    },

    computed: {
        currUser(){
            // this.$store.dispatch('CUR_USER');
            // console.log(this.token);
            return this.user.token;
            // this.$axios.setToken(this.token, 'Bearer')
            // const x = await this.$axios.get('/api/auth/currentUser') ;
            // return x.result;
        },

        isLoggedin(){
            return this.$store.state.isLoggedin;
        },

        tok(){
            return this.$store.state.user;
        },

        myPosts(){
            return this.$store.state.myPosts;
        }
    }
}
</script>

<style  scoped>

div #lik{
    display: flex;
    text-align: right;
    justify-content: flex-end;
    margin-right: 20px;
    margin-top: 2vw;
    font-size: 3vh;;
}

div #lik a{
    color: #34495e;
}

div #lik a :hover{
    color: grey;
}


p{
    font-size: 2vw;
}
</style>