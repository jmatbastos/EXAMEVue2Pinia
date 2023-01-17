 
  const products = {
  namespaced: true,
  state: {
    products: [
    // {
    //"cat_name":"Pizza",
    //"id":"1",
    //"name":"Pizza Americano",
    //"description":"Simply delicious!",
    //"price":"18",
    //"image":"NULL",
    //}
    ]
  },
  getters: {
    getProducts (state) {
      return state.products
    },
    getProductsByCatName: (state) => (cat_name) => {
      const results = state.products.filter(p => {
          return p.cat_name == cat_name;
      })
      return results
    },    
  }, 
  mutations: {
    addProducts(state, products){
        state.products = products
    },

    },
  actions: {
    async getProductsFromDB({commit}) {
            try {
                const response = await fetch('http://daw.deei.fct.ualg.pt/~a12345/EXAME/api/products.php')
                const data = await response.json()
                console.log('received data:', data)                
                commit('addProducts', data)
                return true
            } 
            catch (error) {
                console.log('error: ', error)
                return false
            }
        },
  },
  modules: {
  }
}
export default 
    products