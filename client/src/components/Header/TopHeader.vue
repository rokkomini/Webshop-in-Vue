<template>
  <header class="flex header" id="topHeader">
    <div class="flex-row space-between width-wrapper header-content">
      <div class="flex-row left-header">
        <RouterLink to="/"><font-awesome-icon icon="fa-solid fa-house" /></RouterLink>
        <div class="show-large search-section">
          <input class="search input" type="text" placeholder="Search" v-model="query" @keyup.enter="searchQuery" />
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" @click="searchQuery" />
        </div>
      </div>
      <div>
        <h1><RouterLink to="/">ITSY BITSY</RouterLink></h1>
      </div>
      <div class="flex">
        <div v-show="showCartButton">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" @click="$event => $emit('toggle-cart')"
            class="font-awesome" />
          <span @click="$event => $emit('toggle-cart')" class="badge pink-wrapper">
            <div>{{ quantity }}</div>
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TopHeader',
  data() {
    return {
      query: '',
    }
  },
  props: {
    showCartButton: Boolean,
    cart: Object,
    quantity: Number,
  },
  methods: {
    searchQuery() {
      this.$emit('search-query', this.query)
      this.$router.push({ name: 'ProductSearch', params: { query: this.query } })
      this.query = ''
    }
  },
  emits: ['toggle-cart'],
  mounted() {
    window.onscroll = function () { myFunction() };

    var header = document.getElementById("topHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }
}
</script>