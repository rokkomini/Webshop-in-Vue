<template>
  <footer class="pink-wrapper">
    <div class="page-wrapper flex">
      <h1>@Made by Mika</h1>
      <h3>Created by <a href="https://github.com/rokkomini">me</a> with Vue.js, NodeJs, Express</h3>
        <div>
          Let's get in touch!
          Send an e-mail to:  <a href="mailto:mika.hagerstrom@gmail.com">mika.hagerstrom@gmail.com</a>
        </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  height: 300px;
  width: 100%;

  .page-wrapper.flex {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  a {
    color: #FAF4B7;
  }
}
</style>
