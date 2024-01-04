<template>
<div>


  
<Header />

            <!-- start banner Area -->
            <section class="banner-area relative about-banner" id="home">    

            </section>
            <!-- End banner Area -->    

            <!-- Start menu-list Area -->
            <section class="menu-list-area section-gap">
   
            </section>
            <!-- End menu-list Area --> 






<Footer />

</div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

import { useOrdersStore } from '@/store/orders'

export default {
	setup() {
		const ordersStore = useOrdersStore()		
		return { ordersStore }
    },
    components: {
		Footer,
        Header
	},
	data() {
		return {
            orders: [],
		}
	},
	mounted() {

	},
	methods: {      
		
	},
    computed: {

    },
}
</script>

<style scoped>
</style>