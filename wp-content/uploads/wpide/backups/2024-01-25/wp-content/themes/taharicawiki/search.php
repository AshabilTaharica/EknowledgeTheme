
<?php get_header()  ?>


    <section class="page-wrap">
        <div class="container">
           <h1><?php single_cat_title();?></h1> 
    
            <?php get_template_part('includes/section', 'archive')?>
    
            <!-- kode ini untuk pagination Button yang lebih simple  -->
            <?php previous_posts_link();?>
            <?php next_posts_link();?>
         </div>
    
    </section>
     

  <?php get_footer()  ?>