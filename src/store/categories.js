 
import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore({
  id: 'categories',
  state: () => ({
    categories: [
    // {
    //"id":"1",
    //"name":"Pizza",
    //"description":"NULL",
    //"image":"NULL",
    //}
    ]
  }),
  getters: {
    getCategories (state) {
      return state.categories;
    },   
  }, 
  actions: {
    addCategories(categories){
      this.categories = categories
    },
    async getCategoriesFromDB() {
            try {
                const response = await fetch('http://daw.deei.fct.ualg.pt/~a12345/EXAME/api/categories.php')
                const data = await response.json()
                console.log('received data:', data)                
                this.addCategories(data)
                return true
            } 
            catch (error) {
                console.log('error: ', error)
                return false
            }
        },
  },
})
  