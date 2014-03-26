/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon-ultimate\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-rulers' : '&#xe000;',
			'icon-balance' : '&#xe001;',
			'icon-cup' : '&#xe002;',
			'icon-user' : '&#xe003;',
			'icon-stack' : '&#xe005;',
			'icon-clipboard' : '&#xe006;',
			'icon-cube' : '&#xe007;',
			'icon-cone' : '&#xe008;',
			'icon-calendar' : '&#xe009;',
			'icon-signup' : '&#xe00a;',
			'icon-stats' : '&#xe00b;',
			'icon-tools' : '&#xe00c;',
			'icon-close' : '&#xe00d;',
			'icon-home' : '&#xe00e;',
			'icon-palette' : '&#xe00f;',
			'icon-copy' : '&#xe010;',
			'icon-pencil' : '&#xe011;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};