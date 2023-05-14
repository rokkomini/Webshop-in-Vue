<template>
  <div>
    <div class="flex cart-item">
      <div class="flex-row">
        <div>
          <img :src="cartItem.image.url" :alt="cartItem.image.alt">
        </div>


          <table>
            <tr>
              <th>{{ cartItem.productName }}</th>
              <td>
                {{ cartItem.price / cartItem.quantity }} kr
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-management">
                  <div>
                    <button class="button secondary" @click="removeOne">-</button>
                    {{ cartItem.quantity }}
                    <button class="button secondary" @click="addOne">+</button>
                  </div>

                </div>
              </td>
              <th>
                <p>{{ cartItem.price }} kr</p>
              </th>
            </tr>
            <tr>
              <td></td>
              <td><font-awesome-icon icon="fa-solid fa-trash" @click="deleteItem"/></td>
            </tr>
          </table>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    cartItem: {
      type: Object,
    },
    flexRow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    removeOne() {
      this.$emit('remove-one', this.cartItem._id);
    },
    addOne() {
      this.$emit('add-one', this.cartItem._id);
    },
    deleteItem() {
      this.$emit('delete-item', this.cartItem._id);
    }
  }
}
</script>