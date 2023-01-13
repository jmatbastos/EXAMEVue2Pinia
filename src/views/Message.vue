<template>
			<!-- start banner Area -->
			<section class="banner-area relative about-banner" id="home">	

				<div class="container">				
					<div class="row d-flex align-items-center justify-content-center">
						<div class="about-content col-lg-12">
							<h1 class="text-white">
								{{message}}		
							</h1>	
						</div>	
					</div>
				</div>
				
			</section>
			<!-- End banner Area -->
</template>

<script>
export default {
    data() {
		return {
            message: '',
		}
	},   
    mounted() {
        this.message = localStorage.getItem('message')
        var timeleft = 2;
        var downloadTimer = setInterval(() => {
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            this.$router.push('/menu')
        }
        timeleft -= 1;
        }, 1000);
	},

}
</script>

<style scoped>
</style>



