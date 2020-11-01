import { Configuration } from "./data-types"

export const CONFIG: Configuration = {
	mode: "development",
}

export function updateConfig(config: Configuration): void {
	for (const i in config) {
		CONFIG[i] = config[i]
	}
	log("config update to", CONFIG)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const log = (...str: any[]): void => {
	if (CONFIG.mode === "development") {
		console.log(...str)
	}
}
