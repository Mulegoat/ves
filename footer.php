
			<footer class="pre-footer twelvecol box--theme2" role="contentinfo">
				<div class="wrap">
					<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('footer-links') ) : ?> <?php endif; ?>
				</div>
			</footer>

			<footer class="footer twelvecol box--theme3" role="contentinfo">
				<div class="inner-footer clearfix">
					<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('riba-logo') ) : ?> <?php endif; ?>
				</div>

				<div class="inner-footer clearfix">
					<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('social-media') ) : ?> <?php endif; ?>
				</div>

				<div class="inner-footer twelvecol">
					<p class="text-center copyright">All content copyright &copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>.</p>
				</div>

			</footer> <!-- end footer -->

		</div> <!-- end #container -->


		<!-- all js scripts are loaded in library/bones.php -->
		<?php wp_footer(); ?>

        </body>

</html> <!-- end page. what a ride! -->
