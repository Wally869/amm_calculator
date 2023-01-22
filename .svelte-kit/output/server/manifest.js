export const manifest = {
	appDir: "_app",
	appPath: "amm_calculator/_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-8bb286aa.js","imports":["_app/immutable/start-8bb286aa.js","_app/immutable/chunks/index-9ab7548f.js","_app/immutable/chunks/singletons-c1ad6b71.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
