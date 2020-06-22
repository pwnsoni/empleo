export default {
    created: function() {
      // console.log('Created from Mixin!')
    },
    computed: {
      user(){
          return this.$store.state.user;
      },

    //   async curUser(){
    //       console.log('here')
    //       let x = await this.$axios.get('/api/auth/user/pwnsoni')
    //       console.log(x.data)
    //       return JSON.stringify(x.data.result)
    //   }
    },
    methods: {

      aCommonMethod: function() {
        console.log('A common method')
      },
      isLoggedIn:  function(){
          
        if(this.$store.state.authUser && this.$store.state.authUser.token) {
            return true;
          }else {
            return false;
          }
  
          // if(this.$store.state.auth && this.$store.state.auth.token){
          //   return true;
          // } else{
          //   return false;
          // }
        
      },
      html2text(html) {
        if(html) {
          html = html.replace(/<\s*br\/*>/gi, '\n')
          html = html.replace(
            /<\s*a.*href="(.*?)".*>(.*?)<\/a>/gi,
            ' $2 (Link->$1) '
          )
          html = html.replace(/<\s*\/*.+?>/gi, '\n')
          html = html.replace(/ {2,}/gi, ' ')
          html = html.replace(/\n+\s*/gi, '\n\n')
        }
        return html
      }
    }
  }
  