<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap clearfix">

					<div id="main" class="twelvecol first clearfix" role="main">

						<article id="post-not-found" class="twelvecol hentry cf">

							<div class="twelvecol box--theme1 fullScreenBG">

								<header class="fourcol island cf article-header">

									<h1 class="h1"><?php _e( '404 - Page Not Found', 'bonestheme' ); ?></h1>
									<p><?php _e( 'Go back, or try the main menu!', 'bonestheme' ); ?></p>

								</header> <?php // end article header ?>

								<img class="wp-post-image" src="<?php echo get_template_directory_uri(); ?>/library/images/404/404.jpg">

							</div>

						</article> <?php // end article ?>

					</div> <!-- end #main -->

				</div> <!-- end #inner-content -->

			</div> <!-- end #content -->

<?php get_footer(); ?>
