<template>
  <div class="house-list">
    <house-list v-for="house in houses" :item="house"></house-list>
  </div>
</template>

<script>
  import ItemList from '../components/ItemList'

  export default {
    name: 'House',
    components: {
      'house-list': ItemList
    },
    data () {
      return {
        houses: []
      }
    },
    methods: {
      getHouses () {
        this.$http.get('http://localhost:3000/house')
          .then((houses) => {
            console.log(houses)
            this.houses = houses.data
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    mounted () {
      this.getHouses()
    }
  }
</script>

<style>
  .house-list {
    display: flex;
    padding: 20px;
  }
</style>
