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


export default {
	name: 'dishes',
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