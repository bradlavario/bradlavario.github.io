<!DOCTYPE HTML>
	<head> 
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/> 
		
		<title>Brad LaVario</title> 

		<link rel="stylesheet" type="text/css" href="css/app.css" />
		
		<script type="text/javascript" src="http://code.jquery.com/jquery-2.1.4.js"></script>
						
		<script type="text/javascript" src="js/scroll.js"></script>
			
		
	</head> 
	
	<body> 
	

	<?php
	$pages = array('Home', 'About', 'Code', 'Art', 'Music', 'Contact')
	?>
	
	<div class="container">
   
    <ul class="menu-nav">
      <li><a href="#A"><?php echo $pages[0]; ?></a></li>
      <li><a href="#B"><?php echo $pages[1]; ?></a></li>
      <li><a href="#C"><?php echo $pages[2]; ?></a></li>
      <li><a href="#D"><?php echo $pages[3]; ?></a></li>
      <li><a href="#E"><?php echo $pages[4]; ?></a></li>
      <li><a href="#F"><?php echo $pages[5]; ?></a></li>
     
    </ul>


    <div class="content-holder">

		<div id="A">
    
			<?php include(strtolower($pages[0]).".php"); ?>

		</div>
        
    	<div id="B">

    		<?php include(strtolower($pages[1]).".php"); ?>
        
    	</div>
 
    	<div id="C">

    		<?php include(strtolower($pages[2]).".php"); ?>
        
    	</div>
        
    	<div id="D">

    		<?php include(strtolower($pages[3]).".php"); ?>
        
    	</div>

    	<div id="E">

    		<?php include(strtolower($pages[4]).".php"); ?>
        
    	</div>

    	<div id="F">

    		<?php include(strtolower($pages[5]).".php"); ?>
        
    	</div>
         
    </div>

  </div>
  </body>