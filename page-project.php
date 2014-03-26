<?php
/*
Template Name: Project Page
*/
?>

<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap clearfix">

				    <div id="main" class="box-container--project first clearfix" role="main">

					    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

					    <article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

						    <section class="entry-content twelvecol clearfix" itemprop="articleBody">
						    	<div class="twelvecol project__row">

							    	<div class="l-span-12 project__slider">
							    		<?php $shortcode = get_field('image_slider'); echo do_shortcode ($shortcode);?>
							    	</div>

								    <?php // the_content(); ?>

								    <div class="l-span-3">
									    <div class="island box--theme3">
								    		<header class="project__header">
												<h1 class="page-title" itemprop="headline"><?php the_title(); ?></h1>
												<p class="project__row__p"><?php the_field('project_location'); ?></p>
								    		</header>

									        <h3 class="h3">Architectural Services</h3>
									        <p class="project__row__p"><?php the_field('project_service'); ?></p>

									        <h3 class="h3">Project Brief</h3>
									        <p class="project__row__p"><?php the_field('project_excerpt'); ?></p>
									        <h3 class="h3">Share</h3>
									       	<nav class="shareContent">
									    		<?php echo do_shortcode("[ssba]");?>
									    	</nav>
									    </div>
									</div>

						    	</div>

						    	<div class="l-span-6-1 first">
						    		<div class="island box--theme3">
									    <h3 class="h2">Client Requirements</h3>
										<p class="project__row__p"><?php the_field('project_desc'); ?></p>

								       <h3 class="h3">Project Status</h3>
								       <p class="project__row__p"><?php the_field('project_status'); ?></p>

					    				<div class="testimonial__icon icon-quotes-right"></div>
					    				<p class="testimonial__quote"><?php the_field('testimonial_quote'); ?></p>
					    				<p class="testimonial__client"><strong><?php the_field('testimonial_origin'); ?></strong></p>

										<p class="project__row__p enhanced cta">For a free project consultation or to find out more about us</p>
									    <p><a class="button" href="<?php echo home_url();?>/contact">Get in Touch <span class="icon-uniE600"></span></a></p>

								   </div>
						    	</div>

								<div id="relatedContent" class="l-span-6-2 large-content clearfix">


									<div class="box l-block box--theme3 large-content__aside clearfix">
										<div class="island">
											<?php
											$parent_id = $post->post_parent;
											$parent = get_post( $parent_id );
											$grandparent_id = $parent->post_parent;
											?>

									    	<?php $permalink = get_permalink ($grandparent_id);?>

										    <?php $permalink = get_permalink($post->post_parent); ?>
											<div class="see-all">
												<a class="header-link icon-cube icon--large" href="<?php echo $permalink; ?>"></a>
												<h3 class="h4 text-center"><a class="header-link" href="<?php echo $permalink; ?>">View <?php $parent_title = get_the_title($post->post_parent); echo $parent_title;?> Projects</a></h3>
											</div>
										</div>
									</div>


									<?php
									// Return Siblings Query...first set the id of current page
									$this_post = $post->ID;
									// query the id for children via the page parent. Exclude this post

									$args=array(
									    'post_in' => $post_parent,
									    'not_in' => $this_post,
										'meta_key' => '_wp_page_template',
										'meta_value' => 'page-project.php',
										'posts_per_page' =>2,
										'post_type' => 'page',
										'orderby' => 'rand',
										'paged' => get_query_var('paged'),
										  'meta_query'		=> array(
												array(
														'key' => 'home_feature',
														'value' => 'Yes'
													)
												)
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


								    <div class="box first clearfix">
										<article id="post-<?php the_ID(); ?>" <?php post_class('large__article clearfix'); ?> role="article">
											<div class="large__article__thumb">
												<a class="box__thumb--bw" href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_post_thumbnail( 'bones-thumb-900' ); ?></a>
											</div>
											<div class="large__article__body box--theme6">
												<header class="article-header">
												    <h3 class="h2"><a class="header-link" href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h3>
												</header>

												<section>
											        <p class="large__article__excerpt project-excerpt"><?php the_field('project_excerpt'); ?></p>
												</section>
												<footer>
											        <p><a href="<?php the_permalink() ?>" class="button button--related__article icon-uniE600"></a></p>
												</footer>
											</div>
								    	</article> <!-- end article -->
									</div>



			    					<?php endwhile;
									}

									wp_reset_postdata();  // Restore global post data stomped by the_post().
									?>
								</div>



							</section> <!-- end article section -->



					    </article> <!-- end article -->

					    <?php endwhile; else : ?>

    					    <article id="post-not-found" class="hentry clearfix">
    					    	<header class="article-header">
    					    		<h1><?php _e("Oops, Post Not Found!", "bonestheme"); ?></h1>
    					    	</header>
    					    	<section class="entry-content">
    					    		<p><?php _e("Uh Oh. Something is missing. Try double checking things.", "bonestheme"); ?></p>
    					    	</section>
    					    	<footer class="article-footer">
    					    	    <p><?php _e("This is the error message in the page.php template.", "bonestheme"); ?></p>
    					    	</footer>
    					    </article>

					    <?php endif; ?>

    				</div> <!-- end #main -->

				    <?php // get_sidebar(); ?>

				</div> <!-- end #inner-content -->

			</div> <!-- end #content -->

<?php get_footer(); ?>