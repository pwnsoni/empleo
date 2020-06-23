export const state = () => ({
    counter: 0
})

export const mutations = {
    increment( c){
        this.$toast.success('updated info successfully', { duration: 1000 })
    },

    postAJob({state}, job){
        state.user.myPosts.push(job);
        this.$toast.success('Job Posted successfully', { duration: 1000 })
    }
    
}

export const actions = {
    async POST_A_JOB({commit, state}, data){

        setTimeout(() => {
            alert('in here' + state.user)
        console.log(state)
        }, 2000);
        alert('in here' + state.user)
        console.log(state)
        // const token = state.user.token;
        // this.$axios.setToken(token, 'Bearer')
        // const job = await this.$axios.post('/api/auth/posts', data)
        // console.log(job);
        // commit('postAJob', job);
    }
}