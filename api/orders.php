<?php
  
include 'db.php';

if($_SERVER['REQUEST_METHOD'] == 'POST') {
	
	// ligação à base de dados
	$db = dbconnect($hostname,$db_name,$db_user,$db_passwd);
	if($db) {	

		$json=file_get_contents('php://input');

		$data = json_decode($json, true);

		// criar query numa string
		$query  = "INSERT INTO orders SET customer_id='" . $data['customer_id'] . "',product_id='" . $data['product_id'] . "',price='" . $data['product_price'] . "',created_at=NOW()";

		// executar a query
		if(!($result = @ mysqli_query($db, $query)))
			showerror($db);
			
		$customer_id=$data['customer_id'];
		// get last order id
			$query = "select o.id, o.created_at, o.price as product_price, p.name as product_name, p.image as product_image from orders as o inner join (products as p, customers as c) on (o.product_id=p.id and o.customer_id=c.id ) where o.customer_id='$customer_id' order by o.id desc limit 1";
			if(!($result = @ mysqli_query($db, $query)))
				showerror($db);
			   
			$last_order = mysqli_fetch_assoc($result);

		// fechar a ligação à base de dados
		mysqli_close($db);

	} // end if db		
		
	// allow cross-origin requests (CORS)
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Authorization, Origin, User-Token, X-Requested-With, Content-Type");
	// convert to JSON
	$json=json_encode($last_order);
	echo $json;
		
	
}
	
    if($_SERVER['REQUEST_METHOD'] == 'GET') {
		
		// ligação à base de dados
		$db = dbconnect($hostname,$db_name,$db_user,$db_passwd);
		if($db) {	
			$customer_id = $_GET['customer_id'];
		
			$query = "select o.id, o.created_at, o.price as product_price, p.name as product_name, p.image as product_image from orders as o inner join (products as p, customers as c) on (o.product_id=p.id and o.customer_id=c.id ) where o.customer_id='$customer_id' order by o.created_at desc";
			
			if(!($result = @ mysqli_query($db, $query)))
				showerror($db);
			// vai buscar o resultado da query

			$nrows  = mysqli_num_rows($result);
			$orders = [];
			for($i=0; $i<$nrows; $i++)
				$orders[$i] = mysqli_fetch_assoc($result);

			// fechar a ligaçãbase de dados
			mysqli_close($db);

		} // end if db 	
		
		// allow cross-origin requests (CORS)
		header('Access-Control-Allow-Origin: *');
		header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
		header("Access-Control-Allow-Headers: Authorization, Origin, User-Token, X-Requested-With, Content-Type");
		// convert to JSON
		$ordersJSON = json_encode($orders);
		echo $ordersJSON;
		
    }

	// allow cross-origin requests (CORS)
	if($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
		header('Access-Control-Allow-Origin: *');
		header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
		header("Access-Control-Allow-Headers: Authorization, Origin, User-Token, X-Requested-With, Content-Type");	
	}	    



?>


