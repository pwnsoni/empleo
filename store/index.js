export const state = () => ({
    user: null,
    isLoggedin: false,
    myPosts: null
  })
  
export const mutations = {
    INC (state, c) {
        state.counter += c;
        this.$toast.success('Menu removed successfully.', { duration: 500 })
    },

    logUserIn(state, user){
        state.user = user;
        state.isLoggedin = true;
        this.$toast.success('logged in successfully', { duration: 1000 })
        this.$router.push('/me');
    },

    resetUser(state){
        state.user = null;
        state.isLoggedin = false;
        this.$toast.success('logged out successfully', { duration: 1000 })
        this.$router.push('/');
    },

    updateUser(state, user){
        state.user = user;
        state.isLoggedin = true;
        this.$toast.success('updated info successfully', { duration: 1000 })
        this.$router.push('/me');
    },
    curUser(state){
        state.user = localStorage.getItem('token');
    },

    getMyoPosts(state, myPosts){
        state.myPosts = myPosts;
    },



    postAJob(state, job){
        console.log(state)
        console.log(state.myPosts)
        state.myPosts.data.result.push(job);
        this.$toast.success('Job Posted successfully', { duration: 1000 })
        this.$router.push('/me');
    }
}

export const actions = {

    async GET_MY_POSTS({commit, state}){
        
        console.log(state.user.token)
        const token = state.user.token;
        this.$axios.setToken(token, 'Bearer')

        const myPosts = await this.$axios.get('/api/auth/myPosts')

        commit('getMyoPosts', myPosts);
    },

    async DELETE_MY_POST({commit}, _id){
        alert('delete this job' + _id);
        //add code to delete the job
    },

    async EDIT_MY_POST({commit}, _id){
        alert('delete this job' + _id);
        //add code to delete the job
    },

    async APPLY_FOR_THIS_JOB({commit, state}, _id){
        alert('Applying this job' + _id);
        alert('Mr. ' + state.user.token)
        //add code to delete the job
    },
    increment({commit}, c){
        commit('INC', c);
    },


    async LOG_USER_IN({commit}, credentials){
        let x = await this.$axios.$post('/api/login', credentials);
        // let x = {token : '12345'}
        console.log('in store');
        console.log(x);
        commit('logUserIn', x);
    },

    async UPDATE_USER({commit, state}, credentials){
        alert(JSON.stringify(credentials))
        console.log(credentials)
        const token = state.user.token;
        this.$axios.setToken(token, 'Bearer')
        let x = await this.$axios.$put('/api/auth/users', credentials);
        x.token = token;
        commit('updateUser', x);
    },

    async SIGN_USER_UP({commit}, credentials){
        console.log(credentials)
        let x = await this.$axios.$post('/api/auth/users', credentials);
        this.$toast.success('Signed up successfully', { duration: 1000 });
        this.$router.push('/login');
    },

    LOG_OUT({commit}) {
        commit('resetUser');
    },

    CUR_USER({commit}){
        commit('curUser');
    },



    async POST_A_JOB({commit, state}, data){
        alert('in here' + state.user)
        console.log(state)
        const token = state.user.token;
        this.$axios.setToken(token, 'Bearer')
        const job = await this.$axios.post('/api/auth/posts', data)
        console.log(job);
        commit('postAJob', job);
    }
}