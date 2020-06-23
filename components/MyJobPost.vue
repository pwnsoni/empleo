<template>
<div>


    <div id="deck">
        <div id="button">
             <font-awesome-icon id="edit" @click="editThisPost(post._id)" :icon="['fas', 'edit']" v-b-tooltip.hover title="Edit This Job Post" /> 
             <font-awesome-icon id="delete" @click="deleteThisPost(post._id)" :icon="['fas', 'trash-alt']" v-b-tooltip.hover title="Delete This Job Post" />
            </div>
        <hr/>

        

        <div id = "card">

             <h1 id="title"> {{post.jobProfile}}  </h1>
             <h2 id="subtitle">At {{post.organisation}} </h2>

             <p id="desc">  {{post.description}}  </p> 

             <p id="skills" v-for="skill in post.skills" :key="skill"> <strong> Skills : {{skill}} </strong>  </p>  
             <div id="sLine">
                 Salary :<span> {{post.salary}} </span>

                 Experience : <span>{{post.experience + 'years'}} </span> 

                <font-awesome-icon class="expand" v-if='!expand'  @click="showAllInfo" :icon="['fas', 'expand']" v-b-tooltip.hover title="Show All Information" />

                 <div v-if='expand'>
                 Posted On :<span> {{post.dateOfPosting}} </span>
                 Job Location :<span> {{post.location}} </span>

                 Posted By :<span> {{post.postedBy}} </span>
                 Requirement :<span> {{post.requirement}} </span>
                
                <font-awesome-icon class="expand" @click="showAllInfo" :icon="['fas', 'compress']" v-b-tooltip.hover title="Show Less Information" />
                 </div>

                 
             </div>

            <!-- <p> {{post}} </p> -->
        </div>
         <hr/>
    </div>

       


    <!-- <b-card title="Card title" sub-title="Card subtitle" id="c">
    <b-card-text>
      Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
      content.
    </b-card-text>

    <b-card-text>A second paragraph of text in the card.</b-card-text>

    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Card link</a>
    
    <b-link href="#" class="card-link" >Another link</b-link>
  </b-card> -->
</div>
</template>

<script>
export default {
    props : ['post'],

    data(){
        return{
            expand: false
        }
    },

    methods: {
        showAllInfo(){
            this.expand = !this.expand;
        },

        editThisPost(_id){
            this.$store.dispatch('EDIT_MY_POST', _id);
        },

        deleteThisPost(_id){
            this.$store.dispatch('DELETE_MY_POST', _id);
        }
    }
}
</script>

<style scoped>

hr {
    color: red;
}

#c{
    color: darkorange ;
}
a{
    text-align: right;
}

div #deck{
    /* background: darkcyan; */
    width: 100%;

    background: #e2e2e5;
    margin-bottom: 7vw;
    margin-top: 7vw;
    padding: 4vw;
}

div #deck:hover{
box-shadow: 0px 0px 5px 0px #666;
background: white;
}

div #deck #button {
    color: #34495e;
    align-items: flex-end;
    display: flex;
    margin-left: 2vw;
    margin-right: 2vw;
    margin-top: 0px ;
    justify-content: space-evenly;

    font-size: 2vw;
}

div #deck #button #edit:hover {
    color: grey;
}

div #deck #button #delete:hover {
    color: red;
}

div  #card{
    height: 100%;
    color: #34495e;
    margin-left: 20px;
    margin-right: 20px;
    
}

/* div #deck #button  #ic{
    display: flex;
    background: violet;
    word-spacing: 2vw;
    
} */

div #card #title{
    font-size: 3vw;
}

div #card #subtitle{
    font-size: 2.5vw;
}

div #card #desc{
    font-size: 2vw;
}

div #card #skills{
    font-size: 2vw;
}
div #card #sLine{
    text-align: center;
    justify-content: space-evenly;
    color: rgb(7, 52, 77);
    font-size: 2vw;

}

div #card #sLine .expand:hover {
    color: gray;
}

div #card  #sLine span{
    word-spacing: 2vw;
    text-decoration: bold;
    color: rgb(194, 136, 28);
}



button{
    margin-top: 20px;
    font-size: 2vw;
    margin-bottom: 10px;
    background: white;
    color: #34495e;
    margin-left: 6vw;
    margin-right: 6vw;
}


@media screen and (max-width: 600px) {
    div #card #sLine{
        font-size: 2.5vw;
    }

    button{
        font-size: 2.5vw;
    }

    div #card #desc{
        font-size: 2.5vw;
    }

    div #deck #button{
        font-size: 2.5vw;
    }

    div #card #skills{
        font-size: 2.5vw;
    }

    div #card #title{
        font-size: 4vw;
    }
    
}

/* div #card #title{

} */
</style>