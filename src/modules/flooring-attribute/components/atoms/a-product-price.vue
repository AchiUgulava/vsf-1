<template>
  <div class="sf-price">
    <span class="sf-price__regular">{{ price.regular }}</span>
    <ins class="sf-price__special">{{ price.special }}</ins>
    <span v-if="FlooringPrice" class="sf-badge">{{ FlooringPrice }}</span>
  </div>
</template>
<script>
import { SfPrice } from '@storefront-ui/vue';
import { getProductPrice } from 'theme/helpers'
export default {
  name: 'AProductPrice',
  components: {
  //  SfPrice
  },
  props: {
    product: {
      type: Object,
      default: () => ({})
    },
    customOptions: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    price () {
      return getProductPrice(this.product, this.customOptions)
    },
    FlooringPrice () {
      return this.product.flooring_area
        ? '$' + (this.product.price / this.product.flooring_area).toFixed(2) + ' - m²'
        : '';
    }
  }
}
</script>
<style lang="scss" scoped>
.sf-price{
  gap: 5px;
}
</style>
