<template>


  <div>
     <b-alert show variant="warning">Warning Alert : {{ message }}</b-alert>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: ['message']
}
</script>