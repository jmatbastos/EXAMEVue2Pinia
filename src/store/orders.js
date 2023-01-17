  const orders = {
  namespaced: true,
  state: {
    orders: 
    [
    //{
    //"id":"11",
    //"created_at":"2021-12-03 18:20:31",
    //"product_price":"15",
     //"product_name":"Pizza Americano",
     //"product_image":"p1.jpeg",     
    //}
    ]
  },
  getters: {
    getOrders (state) {
      return state.orders
    },   
  }, 
  mutations: {
    addOrders(state, orders){
        state.orders = orders
    },
    newOrder(state, order){
      state.orders = [order, ...state.orders]
    },
  },
  actions: {
    async getMyOrdersFromDB({commit},id) {
            try {
                const response = await fetch(`http://daw.deei.fct.ualg.pt/~a12345/EXAME/api/orders.php?customer_id=${id}`)
                const data = await response.json()
                console.log('received data:', data)                
                commit('addOrders', data)
                return true
            } 
            catch (error) {
              console.log('error: ', error)
              return false
            }
        },
    async newOrder({commit}, newOrder) {         
          try {
              const response = await fetch('http://daw.deei.fct.ualg.pt/~a12345/EXAME/api/orders.php', {
                  method: 'POST',
                  body: JSON.stringify(newOrder),
                  headers: { 'Content-type': 'text/html; charset=UTF-8' },
              })
              const data = await response.json()
              console.log('received data:', data)
              commit('newOrder', data)
              return true
          } 
          catch (error) {
              console.error(error)
              return false
          }
      },     
  },
  modules: {
  }
}
export default 
    orders