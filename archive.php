<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap clearfix">

				    <div id="main" class="eightcol first clearfix" role="main">

				    	<div class="twelvecol first">
				    		<div class="island threecol box--theme1">

							    <?php if (is_category()) { ?>
								    <h1 class="archive-title h2">
									    <span><?php _e("Articles In:", "bonestheme"); ?></span> <?php single_cat_title(); ?>
							    	</h1>

							    <?php } elseif (is_tag()) { ?>
								    <h1 class="archive-title h2">
									    <span><?php _e("Articles Tagged:", "bonestheme"); ?></span> <?php single_tag_title(); ?>
								    </h1>

							    <?php } elseif (is_author()) {
							    	global $post;
							    	$author_id = $post->post_author;
							    ?>
								    <h1 class="archive-title h2">

								    	<span><?php _e("Posts By:", "bonestheme"); ?></span> <?php echo get_the_author_meta('display_name', $author_id); ?>

								    </h1>
							    <?php } elseif (is_day()) { ?>
								    <h1 class="archive-title h2">
			    						<span><?php _e("Daily Archives:", "bonestheme"); ?></span> <?php the_time('l, F j, Y'); ?>
								    </h1>

				    			<?php } elseif (is_month()) { ?>
					    		    <h1 class="archive-title h2">
						    	    	<span><?php _e("Monthly Archives:", "bonestheme"); ?></span> <?php the_time('F Y'); ?>
							        </h1>

							    <?php } elseif (is_year()) { ?>
							        <h1 class="archive-title h2">
							    	    <span><?php _e("Yearly Archives:", "bonestheme"); ?></span> <?php the_time('Y'); ?>
							        </h1>
							    <?php } ?>
							</div>

						</div>

						    <section class="entry-content clearfix">

							    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

							    <article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?> role="article">

									<header class="fivecol island">
										<h2 class="h3 newsList__header "><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
									</header>

									<section class="sixcol island">
										<?php the_excerpt(); ?>
									</section>


								    <footer class="article-footer">

								    </footer> <!-- end article footer -->

							    </article> <!-- end article -->

						    </section> <!-- end article section -->


					    <?php endwhile; ?>

						        <nav class="wp-prev-next">
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
    		    				    <p><?php _e("This is the error message in the archive.php template.", "bonestheme"); ?></p>
    			    			</footer>
    				    	</article>

					    <?php endif; ?>

    				</div> <!-- end #main -->

	    			<?php //get_sidebar(); ?>

                </div> <!-- end #inner-content -->

			</div> <!-- end #content -->

<?php get_footer(); ?>