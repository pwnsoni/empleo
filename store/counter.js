export const state = () => ({
    counter: 0
})

export const actions = {
    increment({commit}, c){
        this.$toast.success('updated info successfully', { duration: 1000 })
    }
}