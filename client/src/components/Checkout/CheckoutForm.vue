<template>
  <div class="flex checkoutform-wrapper">
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
          <input type="email" id="email" name="email" v-model="email" placeholder="Email address">
        </div>
        <div class="form-control">
          <label for="phone">Telefon</label>
          <input type="tel" id="phone" name="phone" v-model="phone" placeholder="Phonenumber">
        </div>
      </div>

      <div class="flex form-address">
        <div class="form-control">
          <label for="address">Address</label>
          <input type="text" id="address" name="address" v-model="address" placeholder="Address">
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

      
        Choose form of payment: {{ payment }}
      <div class="flex-row">
        <input type="radio" id="card" value="card" v-model="payment" />
        <img src="/src/assets/svg/credit-card-svgrepo-com.svg" alt="card-icon" class="svg-icon">

        <input type="radio" id="klarma" value="klarma" v-model="payment" />
        <img src="/src/assets/svg/klarna-marketing-badge-(pink-rgb.svg).svg" alt="Klarna-logo" class="svg-icon">
      </div>
      <div class="flex form-buttons">
        <input class="button primary" type="submit" value="Proceed and pay">
        <RouterLink to="/" class="button primary">Cancel purchase</RouterLink>
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
      payment: null,
      cart: {},
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if(!this.firstName || !this.lastName || !this.email || !this.phone || !this.address || !this.zip || !this.city || !this.country || !this.payment) {
        alert('Please fill in all fields')
        return
      }

      const customer = {
        name: this.firstName + ' ' + this.lastName,
        email: this.email,
        phone: this.phone,
        address: this.address + ' ' + this.zip + ' ' +this.city + ' ' + this.country,
        paymentMethod: this.payment,
      }

      this.$emit('submit-order', customer, this.cart)     
      this.$emit('get-order', customer.email)
      this.$emit('show-confirmation')

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