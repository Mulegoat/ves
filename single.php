<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="clearfix">

					<div id="main" class="twelvecol first clearfix" role="main">

						<?php if (have_posts()) : while (have_posts()) : the_post(); ?>



							<article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

								<div class="blog__intro">
									<img class="wp-post-image" src="<?php the_field('main_image')?>" />
									<div class="blogCover">
										<div class="l-single-column">
								    		<header class="blogCover__header box--theme6 island clearfix">
												<h1 class="single-title"><?php the_title(); ?></h1>
												<p><?php the_excerpt(); ?></p>
												<p class="byline vcard">Published <time class="updated" datetime="<?php echo the_time('Y-m-j'); ?>" pubdate><?php the_time('F jS, Y'); ?></time> by <?php the_author(); ?></p>
												<div class="blog__scrollTo text-center">
													<a id="scroll-link" href="#"><span class="icon-arrow-down"></span></a>
												</div>
								    		</header>
								    	</div>
							    	</div>
							    </div>

								<section id="articleBody" class="entry-content l-single-column island clearfix" itemprop="articleBody">
									<?php the_content(); ?>
								</section> <!-- end article section -->

								<footer class="article-footer twelvecol">


								<?php

								$this_post = $post->ID;

								//Return Posts for Blog
								$args=array(
								  'posts_per_page' => 1,
								  'post_status' => 'draft',
								  'post__not_in' => array($this_post),
								  'in_same_cat' => true,
								  'order' => 'ASC',
								  'orderby' => 'date',
								  'caller_get_posts'=> 1
								);

								// the query
								$the_query = new WP_Query( $args ); ?>

								<?php if ( $the_query->have_posts() ) : ?>

								  <!-- the loop -->
								  <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

									<article id="post-<?php the_ID(); ?>" <?php post_class('twelvecol clearfix'); ?> role="article" data-id="<?php the_ID(); ?>">

										<div class="blog__intro">
											<img class="wp-post-image" src="<?php the_field('main_image')?>" />
											<div class="blogCover">
												<div class="l-single-column">
										    		<header class="blogCover__header box--theme6 island clearfix">
										    			<p class="h5"><?php echo('Next Article...');?></p>
														<h2 class="single-title"><a class="header-link" href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
														<p><?php the_excerpt(); ?></p>
														<p><a class="button" href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>">Read More ></a></p>
										    		</header>
										    	</div>
									    	</div>
									    </div>


									</article> <!-- end article -->

								  <?php endwhile; ?>
								  <!-- end of the loop -->

								  <?php wp_reset_postdata(); ?>

								<?php else:  ?>
								  <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
								<?php endif; ?>


								</footer> <!-- end article footer -->


							</article> <!-- end article -->

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
					    		    <p><?php _e("This is the error message in the single.php template.", "bonestheme"); ?></p>
					    		</footer>
							</article>

						<?php endif; ?>

					</div> <!-- end #main -->

					<?php //get_sidebar(); ?>

				</div> <!-- end #inner-content -->

			</div> <!-- end #content -->

<?php get_footer(); ?>