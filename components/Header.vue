<template>
    <div>
        <div>
        <b-navbar toggleable="lg">
            <!-- <a to="/"> <b-navbar-brand to="/">Empleo</b-navbar-brand> </a> -->
            <b-navbar-brand to="/"><span> <strong> <font-awesome-icon :icon="['fab', 'etsy']"/>mpleo </strong> </span> </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <!-- <b-navbar-nav>
                <b-nav-item href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav> -->

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <!-- <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form> -->

                <!-- <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                Using 'button-content' slot
                <template v-slot:button-content>
                    <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown> -->


                <b-nav-item to="/createJobPost" v-if="isLoggedin()"> <span> wanna_hire </span></b-nav-item>


                <b-nav-item to="/jobs" > <span> jobs </span></b-nav-item>

                <b-nav-item to="/login" v-if="!isLoggedin()"> <span> login </span></b-nav-item>

                <b-nav-item to="/signup" v-if="!isLoggedin()"> <span> signup </span></b-nav-item>
                <b-nav-item to="/me" v-if="isLoggedin()"> <span> profile  </span></b-nav-item>
                
                <b-nav-item   > <span @click="logout" v-if="isLoggedin()"> logout  </span></b-nav-item>
            </b-navbar-nav>
            </b-collapse>

        </b-navbar>

        </div>

            <div id="hrLine"> </div>
    </div>
</template>

<style  scoped>

    div #hrLine{
        width: 100%;
        height: 1px;
        margin-bottom: auto;
        position: relative;
        background: rgb(194, 194, 241);
    }
    
    span{
        color: darkblue;
    }

    span:hover{
        color: rgb(84, 84, 238);
        text-decoration: none;
    }


</style>

<script>
export default {
    
    
    methods: {
        logout(){
            
            this.$store.dispatch('LOG_OUT')
            
            
        },

        isLoggedin(){
             return this.$store.state.isLoggedin;
        }
    }
}
</script>