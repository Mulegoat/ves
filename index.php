<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap clearfix">

					<div id="main" class="twelvecol masonry clearfix">

							<div class="box large clearfix">
								<article class="even">
									<div class="large__article__thumb">
										<a class="box__thumb--bw" href="projects/bespoke-house-design"><img class="wp-post-image" src="<?php echo get_template_directory_uri(); ?>/library/images/home/architectural_services_bespoke_house_design.jpg"></a>
									</div>
									<div class="large__article__body box__copy box--theme7">
										<header class="article-header">
											<h1 class="h1"><a href="projects/bespoke-house-design" class="header-link">Bespoke House Design</a></h1>
										</header>
										<section>
											<p class="large__article__excerpt">Our designs are unique. Each new home is bespoke and tailored completely to your needs and the critical demands of a sustainable environment.</p>
										</section>
									</div>
								</article>
							</div>

							<div class="box l-small l-block">
				    			<div class="box--theme3">
					    			<div class="island">
										<p class="enhanced">We are a medium sized architectural practice, located in Ashburton, Devon.</p>
										<p class="enhanced">Our approach aims to wed progressive, contemporary design with environmentally responsible construction practices.</p>
						    			<p><a class="button" href="about">About Us <span class="icon-uniE600"></span></a></p>
					    			</div>
					    		</div>
					    	</div>

							<div class="box l-small l-block">
								<div class="box--theme2">
									<a href="projects">
										<div class="island">
											<a class="header-link icon-cube icon--large" href="projects"></a>
											<h3 class="h2 text-center"><a href="projects" class="header-link">Projects</a></h3>
										</div>
									</a>
								</div>
							</div>

							<div class="box large last clearfix">
								<article class="odd">
									<div class="large__article__thumb">
										<a class="box__thumb--bw" href="projects/extensions"><img class="wp-post-image" src="<?php echo get_template_directory_uri(); ?>/library/images/home/architectural_services_barn_conversions.jpg"></a>
									</div>
									<div class="large__article__body box__copy box--theme6">
										<header class="article-header">
											<h1 class="h1"><a href="projects/extensions" class="header-link">Extensions & Conversions</a></h1>
										</header>
										<section>
											<p class="large__article__excerpt">From conversions of Listed Buildings to modern alterations & Extensions. We specialise in all aspects of domestic property design.</p>
										</section>
									</div>
									<div class="colorfill"></div>

								</article>
								<div class="hitarea"></div>
							</div>
							<div class="box l-small l-block">
								<div class="box--theme5">
									<a href="projects">
										<div class="island">
											<a class="header-link icon-rulers icon--large" href="services"></a>
											<h3 class="h2 text-center"><a class="header-link" href="services">Services</a></h3>
										</div>
									</a>
								</div>
							</div>

							<div class="box l-small l-block">
				    			<div class="box--theme3">
					    			<div class="island">
					    				<div class="testimonial__icon icon-quotes-right"></div>
					    				<p class="testimonial__quote">Our fantastic home is testament to their sympathetic design approach.</p>
					    				<p class="testimonial__client">Tony Marsh, Devon 2013</p>
					    				<p><a class="button" href="testimonials">Testimonials <span class="icon-uniE600"></span></a></p>
					    			</div>
					    		</div>
					    	</div>








					</div><?php //end main ;?>


<!-- 						<div class="box-container">
							<div class="box--theme1 l-block l-block__2-3--home">
								<div class="island first clearfix">
									<p>We are a medium sized architectural practice, located in Ashburton, Devon.</p>
									<p>Our approach aims to wed progressive, contemporary design with environmentally responsible construction practices.</p>
								</div>
							</div>
							<div class="box--theme2 l-block l-block__2-6--home">
								<div class="island last clearfix">
									<p class="project__row__p">We have experience of all building sectors and are able to undertake the following projects:</p>
									<ul>
										<li class="box--theme3__listItem"><a href="projects/commercial">Commercial developments</a></li>
										<li class="box--theme3__listItem"><a href="projects/multiple-dwellings">Residential developments</a></li>
										<li class="box--theme3__listItem"><a href="projects/single-dwellings">Bespoke, one-off house design</a></li>
										<li class="box--theme3__listItem"><a href="projects/extensions">Residential extensions & conversions</a></li>
										<li class="box--theme3__listItem">Barn conversions</li>
										<li class="box--theme3__listItem">Restoration work to listed properties</li>
									</ul>
								</div>
							</div>
						</div> -->

<!-- 				    <div id="main" class="twelvecol clearfix first" role="main">

						<section id="projects-container" class="box-container clearfix">

							<?php /* Return main home page */
							$args=array(
								'meta_key' => '_wp_page_template',
								'posts_per_page' =>1,
								'post_type' => 'page',
								'paged' => get_query_var('paged'),
								  'meta_query'		=> array(
										array(
												'key' => 'main_home_feature',
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


								<article id="post-<?php the_ID(); ?>" <?php post_class('twelvecol clearfix'); ?> role="article" data-id="<?php the_ID(); ?>">

									<div class="box box--theme1">

										<div class="box__thumb clearfix">
											<a class="box__thumb--bw" href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_post_thumbnail( 'bones-thumb-900' ); ?></a>
										</div>

										<div class="box__body island">

											<header class="box__header">
												<h2 class="h2"><a class="header-link" href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
											</header>

											<section class="box__content">
												<ul class="box__details">
													<li class="box__detail"><span class="box__detail--q">Architectural Service:</span> <span class="box__detail--a"><?php the_field('project_service')?></span></li>
													<li class="box__detail box__detail--brief"><span class="box__detail--q">Brief:</span> <span class="box__detail--a"><?php the_field('project_excerpt')?></span></li>
												</ul>
											</section>

											<footer class="box__footer">
												<a class="button" href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"> + View Project</a>
											</footer>

										</div>
									</div>
								</article>

							   <?php
							  endwhile;
							}

							wp_reset_postdata();  // Restore global post data stomped by the_post().
							?>

						</section>

						<section id="projects-container" class="box-container clearfix">

							<?php
								// set the id of current page
								$gen1_ids = get_the_ID();
								// query the id for children
								$gen2 = $wpdb->get_col("SELECT ID FROM $wpdb->posts WHERE $wpdb->posts.post_parent IN ($gen1_ids) AND $wpdb->posts.post_type = 'page' AND $wpdb->posts.post_status = 'publish' ORDER BY $wpdb->posts.ID ASC");
								$gen2_ids = implode($gen2,', ');

								$args=array(
								'meta_key' => '_wp_page_template',
								'posts_per_page' =>3,
								'post_type' => 'page',
								'orderby' => 'menu_order',
								'order' => 'ASC',
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


								<article id="post-<?php the_ID(); ?>" <?php post_class('twelvecol clearfix'); ?> role="article" data-id="<?php the_ID(); ?>">
									<div class="box box--theme1">

										<div class="box__thumb clearfix">
											<a class="box__thumb--bw" href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_post_thumbnail( 'bones-thumb-900' ); ?></a>
										</div>

										<div class="box__body island">

											<header class="box__header">
												<h2 class="h2"><a class="header-link" href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
											</header>

											<section class="box__content">
												<ul class="box__details">
													<li class="box__detail"><span class="box__detail--q">Architectural Service:</span> <span class="box__detail--a"><?php the_field('project_service')?></span></li>
													<li class="box__detail box__detail--brief"><span class="box__detail--q">Brief:</span> <span class="box__detail--a"><?php the_field('project_excerpt')?></span></li>
												</ul>
											</section>

											<footer class="box__footer">
												<a class="button" href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"> + View Project</a>
											</footer>
										</div>
									</div>
								</article>

							   <?php
							  endwhile;
							}

							wp_reset_query();  // Restore global post data stomped by the_post().
							?>

						</section>

					</div> -->

				</div> <!-- end #inner-content -->

			</div> <!-- end #content -->

<?php get_footer(); ?>
