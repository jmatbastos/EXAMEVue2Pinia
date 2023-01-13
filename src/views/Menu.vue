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

    components: {
        Footer,
        Header
    },
  

    data() {
        return {
        products: [],
        categories: [],
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
.thumbwrap {
    position:relative;
}

.thumb span { 
    position:absolute;
    visibility:hidden;
}
.thumb:hover, .thumb:hover span { 
    visibility:visible;
    top:-30px;
    left:-35px; 
    z-index:1;
}
</style>