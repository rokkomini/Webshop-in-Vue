<template>
  <section class="hero-section ">
    <div class="page-wrapper flex">
      <h1>Welcome to Itsy Bitsy</h1>
      <h2>Some itsy bitsy products</h2>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero-section {
  background-image: url('../assets/images/rue-s-white-silc.jpg');
  background-size: cover;
  background-position: center;
  height: 400px;
  width: 100%;

  .flex {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    h1 {
      font-size: 4rem;
      color: white;
      text-shadow: 3px 3px 3px #e79bee;
    }

    h2 {
      font-size: 2rem;
      color: #FAF4B7;
      text-shadow: 3px 3px 3px #808080;
    }
  }
}
</style>

<script>

</script>