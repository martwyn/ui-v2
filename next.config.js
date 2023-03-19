/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			loader: "@svgr/webpack",
			options: {
				prettier: false,
				svgo: true,
				svgoConfig: {
					plugins: [
						{
							name: "preset-default",
							params: {
								overrides: { removeViewBox: false },
							},
						},
					],
				},
				titleProp: true,
			},
		});

		return config;
	},
};

module.exports = nextConfig;
