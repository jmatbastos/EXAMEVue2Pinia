import { defineStore } from 'pinia'

export const useOrdersStore = defineStore({
  id: 'orders',
  state: () => ({
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
  }),
  getters: {
    getOrders (state) {
      return state.orders
    },   
  }, 
  actions: {
    addOrders(orders){
      this.orders = orders
    },
    newOrder(order){
      this.orders = [order, ...this.orders]
    },  
    async getMyOrdersFromDB(id) {
            try {
                const response = await fetch(`http://daw.deei.fct.ualg.pt/~a12345/EXAME/api/orders.php?customer_id=${id}`)
                const data = await response.json()
                console.log('received data:', data)                
                this.addOrders(data)
                return true
            } 
            catch (error) {
              console.log('error: ', error)
              return false
            }
        },
    async newOrder(newOrder) {         
          try {
              const response = await fetch('http://daw.deei.fct.ualg.pt/~a12345/EXAME/api/orders.php', {
                  method: 'POST',
                  body: JSON.stringify(newOrder),
                  headers: { 'Content-type': 'text/html; charset=UTF-8' },
              })
              const data = await response.json()
              console.log('received data:', data)
              this.newOrder(data)
              return true
          } 
          catch (error) {
              console.error(error)
              return false
          }
      },     
  },
})
