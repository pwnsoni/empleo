<template>

    <div>

        <!-- <h1> {{cnt}}</h1>

        <button @click="c">  hit me </button> -->

        <Loading />

    </div>

    
</template>


<script>

import Loading from '~/components/Loading.vue';
export default {
    components:{
        Loading
    },
    computed: {
        cnt(){
            return this.$store.state.counter;
        }
    },
    methods: {
        async c(){
            // this.$store.commit('increment');
            await this.$store.dispatch('counter/increment', 2);
        }
    }    
}
</script>