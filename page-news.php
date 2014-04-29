<?php get_header();
/*
Template Name: News Home
*/
?>

			<div id="content">

				<div id="inner-content" class="wrap clearfix">

				    <div id="main" class="twelvecol first clearfix" role="main">

					    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

					    <article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

				    		<header class="page__header box--theme4">
								<h1 class="page-title" itemprop="headline"><?php the_title(); ?></h1>
				    		</header>


						    <section class="entry-content clearfix" itemprop="articleBody">

							    <?php the_content(); ?>

								<?php

								//Return Posts for News
								$args=array(
								  'cat' =>7,
								  'posts_per_page' => 12
								);

								// the query
								$the_query = new WP_Query( $args ); ?>

								<?php if ( $the_query->have_posts() ) : ?>

								  <!-- the loop -->
								  <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

									<article id="post-<?php the_ID(); ?>" <?php post_class('twelvecol clearfix'); ?> role="article" data-id="<?php the_ID(); ?>">
										<div class="clearfix">

											<div class="twocol first box--theme2 island clearfix">

										    	<p class="byline vcard"><?php
							                    printf(__('<time class="updated" datetime="%1$s" pubdate>%2$s</time>', 'bonestheme'), get_the_time('Y-m-j'), get_the_time(get_option('date_format')), get_the_category_list(', '));
							                  ?></p>

											</div>
											<div class="box__thumb threecol">
												<a class="box__thumb--bw" href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_post_thumbnail( 'bones-thumb-600' ); ?></a>
											</div>

											<header class="sixcol island">
												<h2 class="h3"><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
												<p><?php the_excerpt(); ?></p>
												<p><a class="button" href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>">Read More ></a></p>
											</header> <!-- end article header -->

											<footer class="sixcol">
											</footer> <!-- end article footer -->

										</div>


									</article> <!-- end article -->

								  <?php endwhile; ?>
								  <!-- end of the loop -->

								  <?php wp_reset_postdata(); ?>

								<?php else:  ?>
								  <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
								<?php endif; ?>

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

						<!-- Begin Blog List -->


    				</div> <!-- end #main -->

				    <?php //get_sidebar(); ?>

				</div> <!-- end #inner-content -->

			</div> <!-- end #content -->

<?php get_footer(); ?>