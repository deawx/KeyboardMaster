/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { build } = require("esbuild")
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { join } = require("path")

if (process.env.MODE == undefined) {
	process.env.MODE = "development"
}
console.log(`Building for ${process.env.MODE}`)
const MyConfig = {
	outDir: "lib",
	fileName: "index"
}

const options = {
	bundle: true,
	minify: process.env.MODE === "production",
	format: "iife",
	sourcemap: true,
	globalName: "KeyboardMaster",
	outfile:
		process.env.MODE === "production"
			? join(MyConfig.outDir, MyConfig.fileName + ".min.js")
			: join(MyConfig.outDir, MyConfig.fileName) + ".js",
	entryPoints: ["src/index.ts"]
}

build(options)
	.then(() => {
		process.stdout.write("BUILD FINISHED")
	})
	.catch((err) => {
		process.stderr.write(err)
		process.stderr.write("BUILD FAILED")
		process.exit(1)
	})
