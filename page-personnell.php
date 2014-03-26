<?php get_header();
/*
Template Name: Personnell Page
*/
?>

			<div id="content">

				<div id="inner-content" class="wrap clearfix">

				    <div id="main" class="twelvecol first clearfix" role="main">
			    		<header class="page__header box--theme5">
							<h1 class="page-title" itemprop="headline"><?php the_title(); ?></h1>
			    		</header>

					<?php if (have_posts()) : while (have_posts()) : the_post(); ?>


						<section id="projects-container" class="box-container twelvecol clearfix">

						<?php $this_page_id=$wp_query->post->ID; ?>

						<?php $args=array(
							'post_parent' => $this_page_id,
							'meta_key' => '_wp_page_template',
							'meta_value' => 'page-staff-profile.php',
							'posts_per_page' =>-1,
							'post_type' => 'page',
							'paged' => get_query_var('paged')
						);
						$my_query = null;
						$my_query = new WP_Query($args);

						if( $my_query->have_posts() ) {
						  while ($my_query->have_posts()) : $my_query->the_post(); ?>
						    <?php $parentid=array(post_id); ?>
							 <?php $paged = get_pages();

							foreach($pages as $page)
							{
							$content = $page -> post_title;

							}
							?>

								<article id="post-<?php the_ID(); ?>" <?php post_class('twelvecol clearfix'); ?> role="article" data-id="<?php the_ID(); ?>">

									<div class="box box--theme1">

										<div class="box__thumb box__thumb--narrow clearfix">
											<?php the_post_thumbnail( 'bones-thumb-450' ); ?>
										</div>

										<div class="box__body box__body--wide island">

											<header class="box__header">
												<h2 class="h2"><?php the_title(); ?></h2>
											</header> <!-- end article header -->

											<section class="box__content">
												<p><?php the_field('staff_bio'); ?></p>
											</section>

											<footer class="box__footer">
											</footer> <!-- end article footer -->

										</div>
									</div>
								</article> <!-- end article -->



						   <?php
						  endwhile;
						}

						wp_reset_query();  // Restore global post data stomped by the_post().
						?>

						<?php endwhile; ?>

					    <?php else : ?>

        					<article id="post-not-found" class="hentry clearfix">
        					    <header class="article-header">
        						    <h1><?php _e("Oops, Post Not Found!", "bonestheme"); ?></h1>
        						</header>
        					    <section class="entry-content">
        						    <p><?php _e("Uh Oh. Something is missing. Try double checking things.", "bonestheme"); ?></p>
        						</section>
        						<footer class="article-footer">
        						    <p><?php _e("This is the error message in the page-custom.php template.", "bonestheme"); ?></p>
        						</footer>
        					</article>

					    <?php endif; ?>

						</section> <!-- end projects container -->

				    </div> <!-- end #main -->

				    <?php //get_sidebar(); ?>

				</div> <!-- end #inner-content -->

			</div> <!-- end #content -->

<?php get_footer(); ?>