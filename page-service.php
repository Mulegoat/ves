<?php
/*
Template Name: Service Page
*/
?>

<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap clearfix">

				    <div id="main" class="twelvecol first clearfix" role="main">

					    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

					    <article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

				    		<header class="page__header box--theme5">
								<h1 class="page-title" itemprop="headline"><?php the_title(); ?></h1>
				    		</header>


							<section id="services-container" class="box-container">

					    		<div class="l-block l-block__1-3">
					    			<div class="box--theme2">
						    			<div class="island">
						    				<h2 class="h2">Consult</h2>
						    				<p>Free of charge, no-obligation initial consultation.</p>
						    			</div>
						    		</div>
					    		</div>
					    		<div class="l-block l-block__2-3">
					    			<div class="box--theme3">
						    			<div class="island">
						    				<h2 class="h2">Fee</h2>
											<p>Fee, scope of works and timescale proposals.</p>
						    			</div>
						    		</div>
					    		</div>
					    		<div class="l-block l-block__3-3">
					    			<div class="box--theme2">
						    			<div class="island">
						    				<h2 class="h2">Appraisal</h2>
						    				<p>Appraisal of project possibilities and potential planning challenges.</p>
						    			</div>
						    		</div>
					    		</div>
					    		<div class="l-block l-block__4-3">
					    			<div class="box--theme1">
						    			<div class="island">
						    				<h2 class="h2">Design</h2>
						    				<p>Full Design consultation and service.</p>
						    			</div>
						    		</div>
					    		</div>
					    		<div class="l-block l-block__1-3">
					    			<img class="wp-post-img" src="<?php echo get_template_directory_uri(); ?>/library/images/page/architectural-design-services.jpg"/>
					    		</div>
					    		<div class="l-block l-block__2-3">
					    			<div class="box--theme5">
						    			<div class="island">
						    				<h2 class="h2">Feasibility</h2>
						    				<p>Project Feasibility & Brief Development.</p>
						    			</div>
						    		</div>
					    		</div>
					    		<div class="l-block l-block__3-3">
					    			<div class="box--theme1">
						    			<div class="island">
						    				<h2 class="h2">Outline Proposals</h2>
											<p>Fully sketched designs for preliminary approval.</p>
						    			</div>
						    		</div>
					    		</div>
					    		<div class="l-block l-block__4-3">
					    			<div class="box--theme3">
						    			<div class="island">
						    				<h2 class="h2">Final Detail</h2>
						    				<p>Final detail proposals & planning applications; including 3d computer imaging.</p>
						    			</div>
						    		</div>
					    		</div>
					    		<div class="l-block l-block__1-3">
					    			<div class="box--theme4">
						    			<div class="island">
						    				<h2 class="h2">Building Regs</h2>
						    				<p>We prepare and submit any build regulation appliction and any other statutory requirements.</p>
						    			</div>
						    		</div>
					    		</div>
					    		<div class="l-block l-block__2-3">
					    			<div class="box--theme3">
						    			<div class="island">
						    				<h2 class="h2">Tender Preparation</h2>
											<p>Tender doccuments to a list of agreed contractors with specialst advice on contractor appointment.</p>
						    			</div>
						    		</div>
					    		</div>
					    		<div class="l-block l-block__3-3">
					    			<img class="wp-post-img" src="<?php echo get_template_directory_uri(); ?>/library/images/page/architectural-final-detail-services.jpg"/>
					    		</div>
					    		<div class="l-block l-block__4-3">
					    			<div class="box--theme4">
						    			<div class="island">
						    				<h2 class="h2">Construction Drawings</h2>
											<p>Fully developed scheme designs to enable final agreements over spatial arrangements, materials and appearance.</p>
						    			</div>
						    		</div>
					    		</div>
					    		<div class="l-block l-block__1-3">
					    			<img class="wp-post-img" src="<?php echo get_template_directory_uri(); ?>/library/images/page/architectural-services-construction-drawings.jpg"/>
					    		</div>
					    		<div class="l-block l-block__2-3">
					    			<div class="box--theme5">
						    			<div class="island">
						    				<h2 class="h2">Contract Administration</h2>
						    				<p>Onsite inspection & administration of the building contract terms along with quality & progress reports.</p>
						    			</div>
						    		</div>
					    		</div>
					    		<div class="l-block l-block__3-3">
					    			<div class="box--theme3">
						    			<div class="island">
						    				<h2 class="h2">Post Contract Services</h2>
						    				<p>Evaulation and resolution of the Final Account.</p>
						    			</div>
						    		</div>
					    		</div>
					    		<div class="l-block l-block__4-3">
					    			<div class="box--theme2">
						    			<div class="island">
						    				<h2 class="h2">RIBA</h2>
											<p>Further information regarding the services architects provide can be obtained from the <a target="_blank" href="http://www.architecture.com/UseAnArchitect/GuidanceAndPublications/GuidanceAndPublications.aspx">RIBA website</a></p>
						    			</div>
						    		</div>
					    		</div>

							</section>

						    <section class="entry-content clearfix" itemprop="articleBody">
							    <?php the_content(); ?>
							</section> <!-- end article section -->

						    <footer class="article-footer">

							    <?php the_tags('<p class="tags"><span class="tags-title">Tags:</span> ', ', ', '</p>'); ?>

						    </footer> <!-- end article footer -->


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


				</div> <!-- end #inner-content -->

			</div> <!-- end #content -->

<?php get_footer(); ?>