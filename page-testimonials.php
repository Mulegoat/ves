<?php
/*
Template Name: Testimonials Page
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

						    <section class="entry-content twelvecol box-container clearfix" itemprop="articleBody">

					    		<div class="l-block l-block-a">
						    		<div class="box--theme1">
						    			<div class="island">
						    				<div class="testimonial__icon icon-quotes-right"></div>
						    				<p class="testimonial__quote">We have been clients of van Ellen + Sheryn since their early days and have always found them a pleasure to work with. We are still with van Ellen + Sheryn partly because they are excellent architects but also because we get a highly personalised service. We are consistently looked after by the right person and our requests are dealt with swiftly.</p>
						    				<p class="testimonial__client">D Stevenson, Anchorstone Properties Devon</p>
						    			</div>
						    		</div>
						    	</div>
					    		<div class="l-block l-block-b">
					    			<div class="box--theme2">
						    			<div class="island">
						    				<div class="testimonial__icon icon-quotes-right"></div>
											<p class="testimonial__quote">van Ellen + Sheryn had real vision and gave us some fantastic ideas as to how to make the space really special. We are delighted with our new loft and can’t thank them enough.</p>
											<p class="testimonial__client">Dr. and Mrs. S. Rex Bucks</p>
										</div>
						    		</div>
					    		</div>
					    		<div class="l-block l-block-c">
					    			<div class="box--theme3">
						    			<div class="island">
						    				<div class="testimonial__icon icon-quotes-right"></div>
						    				<p class="testimonial__quote">The team at VE & S were wonderful. They delivered our dreams into a reality mixing Grade 2* with modern lines. Highly recommend. Come and see for yourself.</p>
						    				<p class="testimonial__client">Andrew Walwyn, Kingsbridge 2012</p>
						    			</div>
						    		</div>
					    		</div>
				    			<div class="l-block l-block-d">
				    				<img class="wp-post-image" src="<?php echo get_template_directory_uri(); ?>/library/images/page/testimonial-01.jpg"/>
					    		</div>

					    		<div class="l-block l-block-e">
					    			<div class="box--theme3">
						    			<div class="island">
						    				<div class="testimonial__icon icon-quotes-right"></div>
											<p class="testimonial__quote">van Ellen + Sheryn Ltd. have worked with me on a number of projects in South Devon, ranging from the refurbishment of a 1930’s period property, to high-end private dwellings and a new-build housing scheme. In each project they have provided an excellent and comprehensive service, combining contemporary design, planning knowledge and technical expertise. It has been an enjoyable process working with them, and I would not hesitate in recommending their services in the future.</p>
											<p class="testimonial__client">David Miles, Leicester  2013</p>
										</div>
						    		</div>
					    		</div>
				    			<div class="l-block l-block-f">
					    			<div class="box--theme4">
						    			<div class="island">
						    				<div class="testimonial__icon icon-quotes-right"></div>
						    				<p class="testimonial__quote">We engaged van Ellen + Sheryn to come up with a new, inspirational design for our barn, where others had failed.  We were delighted with their response, and in their handling of the planning process. Our fantastic home is testament to their sympathetic design approach.</p>
						    				<p class="testimonial__client">Tony Marsh, 2012</p>
						    			</div>
						    		</div>
						    	</div>
				    			<div class="l-block l-block-g">
				    				<img class="wp-post-image"src="<?php echo get_template_directory_uri(); ?>/library/images/page/testimonial-02.jpg"/>
					    		</div>
					    		<div class="l-block l-block-h">
						    		<div class="box--theme5">
						    			<div class="island">
						    				<div class="testimonial__icon icon-quotes-right"></div>
						    				<p class="testimonial__quote">Thank you so much for your input into my project. I cannot recommend you highly enough in terms of design, time keeping and efficiency. With best wishes</p>
						    				<p class="testimonial__client">Ruth Bill, Yelverton 2013</p>
						    			</div>
						    		</div>
						    	</div>
					    		<div class="l-block l-block-i">
					    			<div class="box--theme3">
						    			<div class="island">
						    				<div class="testimonial__icon icon-quotes-right"></div>
						    				<p class="testimonial__quote">van Ellen + Sheryn provided us with expert professional services as we undertook our first build project. It was a steep learning curve but Eilir and Freddie helped us through design (keeping to our brief), planning (negotiating with Dartmoor National Park), choosing a builder, drawing up contracts and advice during the build itself. We couldn’t have done it without them and we felt their combined experience locally made a huge difference to the project’s success. Thank you very much!</p>
						    				<p class="testimonial__client">Dr. and Mrs. N Cartmell Devon</p>
						    			</div>
						    		</div>
					    		</div>
					    		<div class="l-block l-block-a">
						    		<div class="box--theme1">
						    			<div class="island">
						    				<div class="testimonial__icon icon-quotes-right"></div>
						    				<p class="testimonial__quote">From the start you approached the assignment with a level of creativity and originality, as well as an understanding of how we wanted to live as a family, not shown by any of the many other architects we spoke to. Throughout you have demonstrated exemplary attention to detail, patience and a clear enjoyment in what you do. We started with a run down, dark, claustrophobic house and have ended up with a property truly worthy of its setting in the most beautiful countryside I know.</p>
						    				<p class="testimonial__client">Mr C Sharp, Devon 2013</p>
						    			</div>
						    		</div>
						    	</div>
					    		<div class="l-block l-block-b">
					    			<div class="box--theme5">
					    				<img class="wp-post-image"src="<?php echo get_template_directory_uri(); ?>/library/images/page/testimonial-03.jpg"/>
						    		</div>
					    		</div>
					    		<div class="l-block l-block-a">
					    			<div class="box--theme3">
						    			<div class="island">
						    				<div class="testimonial__icon icon-quotes-right"></div>
						    				<p class="testimonial__quote">We commissioned Van Ellen & Sheryn to draw up plans for a major refurbishment of our modest property.  When we started, we weren't even sure what it was we wanted and it wasn't until about the 'Mark VII' version that we finally felt brave enough to give the go ahead.  During this 'design gestation' we felt embarrassed at our lack of direction but our indecision was met with patience and guidance until the final layout was agreed. From start to finish everything was handled with smooth professionalism including the planning process with Dartmoor National Park.</p>
						    				<p class="testimonial__client">David Holyoak, Buckfast 2013</p>
						    			</div>
						    		</div>
					    		</div>
					    		<div class="l-block l-block-b">
					    			<div class="box--theme2">
					    				<img class="wp-post-image"src="<?php echo get_template_directory_uri(); ?>/library/images/page/testimonial-04.jpg"/>
						    		</div>
					    		</div>
					    		<div class="l-block l-block-a">
						    		<div class="box--theme1">
						    			<div class="island">
						    				<div class="testimonial__icon icon-quotes-right"></div>
						    				<p class="testimonial__quote">Van Ellen + Sheryn have a consistent and thorough approach to the design of individual properties as well as place making.  The projects we have undertaken with them have expertly balanced our brief with relevant contemporary design that is highly marketable.  Their design lead approach, along with excellent interpersonal skills, pays dividends when presenting proposals to both Local Authorities and the public at consultation events.</p>
						    				<p class="testimonial__client">Graeme Fuell, Head of Design, Linden Homes 2014</p>
						    			</div>
						    		</div>
						    	</div>

					    		<div class="l-block l-block-b">
					    			<div class="box--theme4">
						    			<div class="island">
						    				<div class="testimonial__icon icon-quotes-right"></div>
						    				<p class="testimonial__quote">You don’t think you need an architect until you hit problems (especially awkward planners) then the experience, insight and professionalism of van Ellen and Sheryn is priceless.</p>
						    				<p class="testimonial__client">Ian Buswell, Cirencester 2013</p>
						    			</div>
						    		</div>
					    		</div>
					    		<div class="l-block l-block-a">
					    			<div class="box--theme2">
						    			<div class="island">
						    				<div class="testimonial__icon icon-quotes-right"></div>
						    				<p class="testimonial__quote">In 2013 I built a new home for my family in Totnes. This was based on plans and design produced by Eilir Sheryn. He assisted me throughout the design, planning and build process and I would commend him to anyone with a building project in mind. I found his genuine interest and willingness to help in all aspects of the project to be especially helpful along with other members of the VES team all of whom who I found to be both professional and personable.</p>
						    				<p class="testimonial__client">Simeon Rich, Totnes 2013</p>
						    			</div>
						    		</div>
					    		</div>

					    		<div class="l-block l-block-h">
						    		<div class="box--theme5">
						    			<div class="island">
						    				<p class="testimonial__quote">Think we can help you realise the potential of your project?</p>
						    				<p><a class="button" href="<?php echo get_home_url();?>/contact">Get In Touch ></a></p>
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