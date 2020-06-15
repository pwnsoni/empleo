<template>
    <div>
        <div id="hrLine"> </div>
        <div id="footer">
            <div id="footer-content">
                <p> 
                    Made with <font-awesome-icon :icon="['fas', 'heart']"/> by Nuxt 
                    <br/> <a href="mailto:pawansoni76@gmail.com"> Contact us </a> 
                </p>
            </div>
        </div>
    </div>
</template>

<style  scoped>

    div #hrLine{
        width: 100%;
        height: 1px;
        margin-bottom: 25px;
        position: relative;
        background: rgb(194, 194, 241);
    }
    
    a{
        color: darkblue;
        text-decoration: underline;
    }

    a:hover{
        color: rgb(84, 84, 238);
        text-decoration: none;
    }

    

    div #footer #footer-content {
        margin-top: 10px;
        bottom: 1.5vw;
        margin-bottom: 30px;
        color: darkblue;
        justify-content: center;
        text-align: center;
    }




</style>