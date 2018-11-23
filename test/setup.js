import jsdom from 'jsdom';

if (typeof document === 'undefined') {
	global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
	global.window = document.defaultView;
	global.navigator = global.window.navigator;
	global.window.matchMedia = global.window.matchMedia || function() {
		return {
			matches: false,
			addListener: function() {},
			removeListener: function() {}
		}
	};
}