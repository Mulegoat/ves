<?php
/*
Template Name: Contact Us
*/
?>

<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap clearfix">

				    <div id="main" class="twelvecol first clearfix" role="main">

					    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

					    <article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

						    <section class="entry-content twelvecol box-container clearfix" itemprop="articleBody">

							<div class="sixcol last clearfix">
								<div class="sixcol last"><?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('social-media') ) : ?> <?php endif; ?></div>
							</div>

							<div class="twelvecol first clearfix">
								<?php gravity_form(1, true, false, false, '', true); ?>
							</div>

							<div id="map" class="map-container first">

								<div class="address-container box--theme3 first clearfix">

									<header class="twelvecol first">
										<h3 class="h2">Alternatively, get in touch at your leisure.</h3>
									</header>

									<ul class="twelvecol first company-info">
										<li class="company-info__item">
											<span class="company-info__icon icon-location"></span>
											<span class="company-info__item--address--name">van Ellen + Sheryn,</span>
											<span class="company-info__item--address">5 Station Yard,</span>
											<span class="company-info__item--address">Ashburton,</span>
											<span class="company-info__item--address">Devon,</span>
											<span class="company-info__item--address">TQ13 7EF</span>
										</li>
										<li class="company-info__item"><span class="company-info__icon icon-phone"></span><a target="_blank" href="tel:01364653503">+44 (0)1364 653 503</a></li>
										<li class="company-info__item"><span class="company-info__icon icon-envelop-opened"></span><a href="mailto:<?php echo get_option('admin_email'); ?>">Via Email</a></li>
									</ul>

								    <div class="twelvecol first">
								    	<a class="button" target="_blank" href="https://maps.google.com/maps?daddr=Van+Ellen+%2B+Sheryn,+Ashburton,+United+Kingdom&t=m&layer=1&doflg=ptk&om=0">Get Directions ></a>
								    </div>

								</div>

								<div id="locationMap">
									<?php echo do_shortcode( "[mapsmarker marker='1']" ); ?>
								</div>

							</div>

						    <?php the_content(); ?>




							</section> <!-- end article section -->

						    <footer class="article-footer">

							    <?php the_tags('<p class="tags"><span class="tags-title">Tags:</span> ', ', ', '</p>'); ?>

						    </footer> <!-- end article footer -->


					    </article> <!-- end article -->

					    <?php endwhile; else : ?>

    					    <article id="post-not-found" class="hentry clearfix">
    					    	<header class="article-header">
    					    		<h1><?php _e("Oh Dear...", "bonestheme"); ?></h1>
    					    	</header>
    					    	<section class="entry-content">
    					    		<p><?php _e("Nothing to see here!", "bonestheme"); ?></p>
    					    	</section>
    					    	<footer class="article-footer">
    					    	    <p><?php _e("Try going back to the previous page.", "bonestheme"); ?></p>
    					    	</footer>
    					    </article>

					    <?php endif; ?>

    				</div> <!-- end #main -->


				</div> <!-- end #inner-content -->

			</div> <!-- end #content -->

<?php get_footer(); ?>