<template>
    <div >
        <div v-if="!posts.data">
            <Loading />
        </div>
        <div v-if="posts.data">  
            <div v-for="post in posts.data.result" :key='post'>
                <br/>
                <!-- {{posts.data.result}} -->
                <JobPost v-if='post' :post='post' />
            </div>
        </div>
    </div>
</template>

<script>
import JobPost from '~/components/JobPost.vue';
import Loading from '~/components/Loading.vue';
export default {
    components:{
        JobPost,
        Loading
    },

    data(){
        return{
            posts: []
        }
    },
    
    async mounted(){
        try{
            const allPosts = await this.$axios.get('/api/posts',  { headers: { 'Access-Control-Allow-Origin': '*' } });
            this.posts = allPosts;
        }catch(e){
            alert(e);
        }
    }
    
}
</script>