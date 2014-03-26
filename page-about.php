<?php
/*
Template Name: About Us Page
*/
?>

<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap clearfix">

				    <div id="main" class="twelvecol first clearfix" role="main">

					    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

					    <article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

				    		<header class="page__header box--theme5">
								<h1 class="page-title"><?php the_title(); ?></h1>
				    		</header>

						    <section class="entry-content twelvecol box-container clearfix" itemprop="articleBody">

					    		<div class="l-block l-block-a">
						    		<div class="box--theme1">
						    			<div class="island">
							    			<p>We are passionate about good design. A well-designed building or space has the ability to both physically and culturally transform people, groups and entire institutions. It is the pursuit of this ideal that helps us deliver the change our clients seek, and with it, realise the potential of their given space.</p>
							    		</div>
						    		</div>
						    	</div>
					    		<div class="l-block l-block-b">
					    			<div class="box--theme2">
						    			<div class="island">
						    				<p>Great design makes a positive contribution to the built environment and does not have to cost the earth. Unfortunately too much architecture today makes a negative contribution, due to a lack of flair or care. We aim to buck this trend.</p>
						    			</div>
						    		</div>
					    		</div>
					    		<div class="l-block l-block-c">
					    			<div class="box--theme3">
						    			<div class="island">
						    				<p>Our architectural approach aims to wed progressive, contemporary design with environmentally responsible construction practices. Each of our designs is bespoke and site specific, tailor made to the client’s requirements and the critical demands of a sustainable environment.</p>
						    			</div>
						    		</div>
					    		</div>
				    			<div class="l-block l-block-d">
				    				<img class="wp-post-image" src="<?php echo get_template_directory_uri(); ?>/library/images/page/about-01.jpg"/>
					    		</div>
					    		<div class="l-block l-block-e">
					    			<div class="box--theme1">
						    			<div class="island">
						    				<p>We believe an integral part of the design process is to undertake a complete and thorough design exercise at the start of each project. We build three dimensional computer models for each of our projects. This exercise, although time consuming, allows us to communicate the design more readily with our clients. Too often flat, two dimensional drawings can be easily misread and lead to a misunderstanding of the ‘complete’ design.</p>
						    			</div>
						    		</div>
					    		</div>
				    			<div class="l-block l-block-f">
					    			<div class="box--theme2">
						    			<div class="island">
						    				<p>Our portfolio of work ranges from the very small to large commercila developments. We treat each commission with the same verve and enthusiasm.</p>
					    					<p><a href="<?php echo get_home_url();?>/projects" class="button">view work ></a></p>
						    			</div>
						    		</div>
						    	</div>
				    			<div class="l-block l-block-g">
				    				<img class="wp-post-image"src="<?php echo get_template_directory_uri(); ?>/library/images/page/about-02.jpg"/>
					    		</div>
					    		<div class="l-block l-block-h">
						    		<div class="box--theme3">
						    			<div class="island">
						    				<p>We carry Professional Indemnity Insurance to a value of £5,000,000.00.</p>
							    		</div>
						    		</div>
						    	</div>
					    		<div class="l-block l-block-i">
					    			<div class="box--theme1">
						    			<div class="island">
											<p>Our team has a strong design and technical background. We are all professionally qualified and are an <a target="_blank" href="http://www.architecture.com/Home.aspx">RIBA</a> Chartered practice, which is the benchmark of achievement, ability and professionalism within the industry.</p>
											<p>For a free consultation on how we can help you realise the potential of your project</p>
						    				<p><a href="<?php echo get_home_url();?>/contact" class="button">Get In Touch ></a></p>
						    			</div>
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