<template>
  <div>
    <p>you liked <b>{{ prepProduct.title }}</b></p>

    <SfProductCard :title="prepProduct.title" :image="prepProduct.image" :regular-price="prepProduct.price.regular"
                   :special-price="prepProduct.price.special" :max-rating="prepProduct.rating.max"
                   :score-rating="prepProduct.rating.score" :link="prepProduct.link" :wishlist-icon="false" link-tag="router-link"
    />
  </div>
</template>

<script>
import { SfProductCard } from '@storefront-ui/vue';
import { prepareCategoryProduct } from 'theme/helpers';
export default {
  name: 'Liked',
  components: {
    SfProductCard
  },
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    prepProduct () {
      return prepareCategoryProduct(this.product)
    }
  }
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
