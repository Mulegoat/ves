<?php

	if(get_field('header_slider')) {

		while(has_sub_field('header_slider')) { ?>
			<?php $image = wp_get_attachment_image_src(get_sub_field('slider_image'), 'homepage' ); ?>
			<div style="background-image: url('<?php echo $image[0]; ?>')">
			</div>

		<?php }
	}
	?>