<template>
  <div>
    <div class="flex cart-item">
      <div class="flex item-info">
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
import { RouterLink } from 'vue-router'

export default {
  name: 'CartItem',
  props: {
    cartItem: {
      type: Object,
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

<style lang="scss" scoped>
.cart-item {
  padding: 1rem;
  border-bottom: 1px solid #000;

  .item-info {
    width: 100%;
    align-items: center;

    table {
      width: 100%;
      text-align: left;
    }

    svg {
      cursor: pointer;
      color: #e79bee;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #CDF0EA;
        transition: all 0.3s ease-in-out;
      }
    }
  }

  img {
    width: 100px;
    height: 100px;
  }

  .button.secondary {
    padding: 3px 10px;
    font-size: 20px;
    font-weight: 800;
  }
}
</style>