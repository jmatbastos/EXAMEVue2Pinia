--
-- Drop tables
--

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `orders`;
DROP TABLE IF EXISTS `products`;
DROP TABLE IF EXISTS `categories`;
DROP TABLE IF EXISTS `customers`;

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
 `id` int(11) NOT NULL auto_increment,
 `name` varchar(255) default NULL,
 `email` varchar(255) default NULL,
 `created_at` datetime NOT NULL,
 `updated_at` datetime NOT NULL,
 `password_digest` varchar(255) default NULL,
 `remember_digest` varchar(255) default NULL,
 `admin` tinyint(1) default NULL,
 `activation_digest` varchar(255) default NULL,
 `activated` tinyint(1) default NULL,
 `activated_at` datetime default NULL,
 `reset_digest` varchar(255) default NULL,
 `reset_sent_at` datetime default NULL,
 PRIMARY KEY (`id`),
 UNIQUE KEY `index_users_on_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
 `id` int(11) NOT NULL auto_increment,
 `name` varchar(255) default NULL,
 `description` varchar(255) default NULL,
 `image` varchar(255) default NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` VALUES (1,'Pizza',NULL,NULL),(2,'Breads',NULL,NULL),(3,'Burgers',NULL,NULL),(4,'Chicken',NULL,NULL);

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
 `id` int(11) NOT NULL auto_increment,
 `cat_id` int(11) NOT NULL,
 `name` varchar(255) default NULL,
 `description` varchar(255) default NULL,
 `price` int(5) default NULL,
 `image` varchar(255) default NULL,
 PRIMARY KEY (`id`),
 CONSTRAINT FOREIGN KEY (`cat_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` VALUES (1,1,'Pizza Americano','Simply delicious',15,NULL),(2,1,'Pizza Tunisia','Simply wonderful!',20,NULL),(3,1,'Beef lovers Pizza','For meat lovers!',20,NULL),(4,1,'Chicken lovers Pizza','Chicken Chicken!',10,NULL),(5,1,'Meatball Pizza','No teeth required!',12,NULL),(6,1,'Bakery special Pizza','Our special!',25,NULL),(7,1,'Pizza Alfredo','Typical italian!',13,NULL),(8,1,'Cheese lovers Pizza','For vegetarians!',9,NULL),(9,2,'White bread','Simply delicious!',2,NULL),(10,2,'Whole grain bread','So healthy!',4,NULL),(11,3,'Bakery burger','Our special!',10,NULL),(12,3,'Cheese Burger','So tasty!',12,NULL),(13,3,'Vegetarian burger','So healty!',8,NULL),(14,3,'Spicy Burger!','Hot hot hot!',9,NULL),(15,4,'Chicken wings','So tasty!',10,NULL),(16,4,'Frango da Guia','Algarve special!',20,NULL);

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `product_id` int NOT NULL,
  `created_at` datetime NOT NULL,
  `price` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_id` (`customer_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

SET FOREIGN_KEY_CHECKS = 1;

