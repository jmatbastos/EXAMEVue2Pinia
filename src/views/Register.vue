<template>
<div>


  
<Header />



    
            <!-- start banner Area -->
            <section class="banner-area relative about-banner" id="home">    

            </section>
            <!-- End banner Area -->                  

            <!-- Start contact-page Area -->
            <section class="contact-page-area section-gap">
   
            </section>
            <!-- End contact-page Area -->




<Footer />

</div>
</template>
<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
    name: 'register',
    components: {
        Footer,
        Header
    },

    data() {
        return {
            name: '',
            email: '',
            password: '',
            passwordConfirm: '',        
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