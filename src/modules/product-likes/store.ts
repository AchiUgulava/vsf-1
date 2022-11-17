// import { isServer } from '@vue-storefront/core/helpers';

export const ExtendProductStore = {
  state: {
    // array of products id-s and like status
    likedProducts: [
      {
        id: '',
        liked: false
      }
    ]
  },
  actions: {
    // check if product is allready pushed into likedproducts array, if not commit a mutation to push it
    checkIfStored ({ state, commit }) {
      var product = state.likedProducts.find(product => {
        if (product.id === state.current.id) {
          return product;
        }
      });
      if (product === undefined) {
        commit('pushProduct', state);
      } else {
        console.log('product found', product);
      }
    }
  },
  mutations: {
    // push product into array
    pushProduct (state) {
      state.likedProducts.push({ id: state.current.id, liked: false });
    },
    // find product in array and toggle like
    toggleLike (state) {
      state.likedProducts.find(product => {
        if (product.id === state.current.id) {
          product.liked = !product.liked;
        }
      });
    }
  },
  getters: {
    // return like status of a product
    // when the component gets mounted product.current is not yet defined so, it has a seccond parameter curent. if current is defined it proceeds with the code or else yolo.
    // (current product state needs to be passed down when you call this getter from component)
    getProductLike: state => current => {
      return current
        ? state.likedProducts.find(product => {
          if (product.id === current.id) {
            return product.liked;
          }
        })
        : 'yolo';
    }
  }
};
