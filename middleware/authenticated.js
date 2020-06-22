export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (store.state.isLoggedin) {
        // alert(store.state.isLoggedin)
      return redirect('/')
    }
}