<template>
  <div>
    <button
      class="sf-button"
      :aria-disabled="false"
      :link="null"
      type="button"
      aria-label="button"
      @click="toggleModal"
    >
      Open Area Calculator
    </button>
    <SfModal title="My title" v-model="modal" cross overlay :persistent="false">
      <SfInput
        class="sf-input"
        value=""
        label="Area to be covered (m²)"
        name="name"
        type="text"
        valid
        error-message="Error message value of form input. It appears if `valid` is `false`."
        placeholder=""
        v-model.number="area"
      />
      <SfCheckbox
        label="Include Wastage"
        name="wastage"
        valid
        value=""
        v-model="wastage"
      />
      {{ 'number of packeages - ' + calculateQty }} <br>
      {{ 'price - $' + calculatePrice }}
      <button
        class="color-primary sf-button"
        :aria-disabled="false"
        :link="null"
        type="button"
        aria-label="button"
        @click=" selectPackages "
      >
        select {{ calculateQty }} packages
      </button>
    </SfModal>
  </div>
</template>
<script>
import { SfInput, SfCheckbox, SfModal } from '@storefront-ui/vue';
export default {
  name: 'MFlooringCalculator',
  components: {
    SfInput,
    SfCheckbox,
    SfModal
  },
  data () {
    return {
      area: '',
      price: '',
      wastage: false,
      modal: false
    };
  },
  props: {
    product: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  computed: {
    calculateQty () {
      // if input area exists divide input area by flooring area
      // if waste is toggled add 10% to the area
      // return the rounded up number
      return this.area
        ? Math.ceil((this.area + (this.wastage ? this.area / 10 : 0)) / this.product.flooring_area)
        : '0'
    },
    calculatePrice () {
      return (this.calculateQty * this.product.price)
    }
  },
  methods: {
    toggleModal () {
      this.modal = !this.modal
    },
    selectPackages () {
      this.toggleModal()
      this.$emit('increase-by', this.calculateQty)
    }
  }
};
</script>
<style>
.sf-button{
    margin: 10px 0px
}
</style>
