<template>
  <div class="logo">
     <p>
       <strong> <font-awesome-icon :icon="['fab', 'etsy']"/>mpleo  </strong>
      </p> 
  </div>
</template>
<style scoped>
.logo {
  animation: 1s appear;
  margin: auto;
}

p {
  color: darkblue;
  font-size: 11vw;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
