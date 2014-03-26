<?php
/*
Template Name: Project Parent
*/
?>

<?php get_header(); ?>

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
							'meta_value' => 'page-project.php',
							'posts_per_page' =>12,
							'post_type' => 'page',
							'orderby' => 'menu_order',
							'order' => 'ASC',
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

										<div class="box__thumb clearfix">
											<a class="box__thumb--bw" href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_post_thumbnail( 'bones-thumb-900' ); ?></a>
										</div>

										<div class="box__body island">

											<header class="box__header">
												<h2 class="h2"><a class="header-link" href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
											</header> <!-- end article header -->

											<section class="box__content">
												<ul class="box__details">
													<li class="box__detail"><span class="box__detail--q">Architectural Service:</span> <span class="box__detail--a"><?php the_field('project_service')?></span></li>
													<li class="box__detail box__detail--brief"><span class="box__detail--q">Brief:</span> <span class="box__detail--a"><?php the_field('project_excerpt')?></span></li>
												</ul>
											</section>

											<footer class="box__footer">
												<a class="button" href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"> + View Project</a>
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

						    <nav id="page-nav" class="wp-prev-next">
								<ul class="clearfix">
									<li class="prev-link"><?php next_posts_link(__('&laquo; Older Entries', "bonestheme")) ?></li>
									<li class="next-link"><?php previous_posts_link(__('Newer Entries &raquo;', "bonestheme")) ?></li>
								</ul>
					    	</nav>

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