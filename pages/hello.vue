<template>

    <div>
        {{x}}

    </div>

    
</template>


<script>

import Loading from '~/components/Loading.vue';
export default {
    data(){
        return{
            x : 'kk'
        }
    },

    async mounted(){
        this.x = await this.$axios.get('/')
    }
}
</script>