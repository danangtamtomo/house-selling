<template>
  <div class="item">
     <b-card img="http://placeskull.com/200/200/ABABAB/-1/0"
             :title="item.name"
             class="mb-2">
       {{ item.price | currency }}
    </b-card>
  </div>
</template>

<script>
  export default {
    name: 'ItemList',
    props: ['item']

  }
</script>
