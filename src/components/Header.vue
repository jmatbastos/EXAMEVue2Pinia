 <template>
			  <header id="header">
	            <div class="header-top">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-sm-6 col-4 header-top-left no-padding">
                                <div class="menu-social-icons">
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-dribbble"></i></a>
                                    <a href="#"><i class="fa fa-behance"></i></a>
                                </div>	    				  					
				  			</div>
                            <div class="col-lg-6 col-sm-6 col-8 header-top-right no-padding">
								<a class="btns" href="tel:+953 012 3654 896">+953 012 3654 896</a>
				  				<a class="btns" href="mailto:support@colorlib.com">support@colorlib.com</a>		
				  				<a class="icons" href="tel:+953 012 3654 896">
				  					<span class="lnr lnr-phone-handset"></span>
				  				</a>
				  				<a class="icons" href="mailto:support@colorlib.com">
				  					<span class="lnr lnr-envelope"></span>
				  				</a>		
				  			</div>
				  		</div>			  					
		  			</div>
				</div>
			    <div class="container main-menu">
			    	<div class="row align-items-center justify-content-between d-flex">
			    		<a href="index.html"><img src="img/logo.png" alt="" title="" /></a>		
						<nav id="nav-menu-container">
							<ul class="nav-menu">
							  <li><a href="index.html">Home</a></li>
							  <li><a href="#">Welcome Stranger!</a></li>								  
							  <li><a href="myOrders.html">My Orders</a></li>								  			          	          
							  <li><a href="register.html">Register</a></li>							  			          	          
							  <li><a href="login.html">Login</a></li>
							</ul>
						</nav><!-- #nav-menu-container -->		
			    	</div>
			    </div>
			  </header><!-- #header -->
</template>

<script>


export default {
    methods: {
        logout() {
            this.$store.commit('user/logoutUser')
            localStorage.setItem('message', 'Bye, see you back soon!');
            this.$router.push('/message')
        }
    },
    computed: {
        userIsEmpty: function() {
            let obj = this.$store.getters['user/getUser']
            return Object.keys(obj).length === 0;
        },
        userName: function() {
            return this.$store.getters['user/getUser'].name
        }
    },
}


</script>  
