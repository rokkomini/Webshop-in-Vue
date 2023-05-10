<template>
  <div class="flex checkoutform-wrapper">
    <h3>CheckoutForm</h3>
    <form @submit="onSubmit">
      <div class="flex">
        <div class="form-control">
          <label for="firstName">Förnamn</label>
          <input type="text" id="firstName" name="firstName" v-model="firstName" placeholder="Firstname">
        </div>
        <div class="form-control">
          <label for="lastName">Efternamn</label>
          <input type="text" id="lastName" name="lastName" v-model="lastName" placeholder="Lastname">
        </div>
      </div>

      <div class="flex">
        <div class="form-control">
          <label for="email">E-post</label>
          <input type="email" id="email" name="email" v-model="email" placeholder="Email adress">
        </div>
        <div class="form-control">
          <label for="phone">Telefon</label>
          <input type="tel" id="phone" name="phone" v-model="phone" placeholder="Phonenumber">
        </div>
      </div>

      <div class="flex form-address">
        <div class="form-control">
          <label for="address">Adress</label>
          <input type="text" id="address" name="address" v-model="address" placeholder="Adress">
        </div>
        <div class="form-control">
          <label for="zip">Postnummer</label>
          <input type="text" id="zip" name="zip" v-model="zip" placeholder="Postal code">
        </div>
        <div class="form-control">
          <label for="city">Stad</label>
          <input type="text" id="city" name="city" v-model="city" placeholder="Postal city">
        </div>
        <div class="form-control">
          <label for="country">Land</label>
          <input type="text" id="country" name="country" v-model="country" placeholder="Country">
        </div>
      </div>

      <div>Choose form of payment: {{ payment }}</div>

      <input type="radio" id="card" :value="card" v-model="payment" />
      <label for="card">Card</label>

      <input type="radio" id="klarma" :value="klarma" v-model="payment" />
      <label for="klarma">Klarma</label>
      <div class="flex form-buttons">
        <input class="button primary" type="submit" value="Skicka">
        <RouterLink to="/" class="button primary">Cancel</RouterLink>
      </div>
    </form>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      zip: '',
      city: '',
      country: '',
      paymentMethod: '',
    }
  },
  props: {

  },
  methods: {
    onSubmit(e) {
      console.log('submit')
      e.preventDefault();
      if(!this.firstName || !this.lastName || !this.email || !this.phone || !this.address || !this.zip || !this.city || !this.country || !this.payment) {
        alert('Please fill in all fields')
        return
      }

      const customer = {
        name: this.firstName + '' + this.lastName,
        email: this.email,
        phone: this.phone,
        address: this.address + '' + this.zip + '' +this.city + '' + this.country,
        paymentMethod: this.payment,
      }

      this.$emit('save-order', customer)

      this.firstName = ''
      this.lastName = ''
      this.email = ''
      this.phone = ''
      this.address = ''
      this.zip = ''
      this.city = ''
      this.country = ''
      this.payment = '' 
    
    }
  }
}
</script>

<style lang="scss" scoped>
.checkoutform-wrapper {
  padding: 1rem;
  margin: 1rem;
  width: 100%;
  width: 550px;
  flex-direction: column;

  .form-address {
    flex-wrap: wrap;
  }

  .form-buttons {
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 20px
  }
}

.form-control {
  // margin: 10px 0;

  label {
    display: block;
  }

  input {
    // max-width: inherit;
    height: 20px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
  }


}
</style>