<template>
  <div>
    <h3>CheckoutForm</h3>
    <form>
      <div class="form-control">
        <label for="firstName">Förnamn</label>
        <input type="text" id="firstName" name="firstName" v-model="firstName">
      </div>
      <div class="form-control">
        <label for="lastName">Efternamn</label>
        <input type="text" id="lastName" name="lastName" v-model="lastName">
      </div>
      <div>
        <label for="email">E-post</label>
        <input type="email" id="email" name="email" v-model="email">
      </div>
      <div>
        <label for="phone">Telefon</label>
        <input type="tel" id="phone" name="phone" v-model="phone">
      </div>
      <div>
        <label for="address">Adress</label>
        <input type="text" id="address" name="address" v-model="address">
      </div>
      <div>
        <label for="zip">Postnummer</label>
        <input type="text" id="zip" name="zip" v-model="zip">
      </div>
      <div>
        <label for="city">Stad</label>
        <input type="text" id="city" name="city" v-model="city">
      </div>
      <div>
        <label for="country">Land</label>
        <input type="text" id="country" name="country" v-model="country">
      </div>


      <div>Picked: {{ picked }}</div>

      <input type="radio" id="one" value="One" v-model="picked" />
      <label for="one">One</label>

      <input type="radio" id="two" value="Two" v-model="picked" />
      <label for="two">Two</label>
      <div>
        <input type="submit" value="Skicka">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picked: 'One'
    }
  }
}
</script>

<style lang="scss" scoped>
.form-control {
  // margin: 10px 0;
    
  label {
    display: block;
  }

  input {
    width: 100%;
    height: 20px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
  }
}

</style>