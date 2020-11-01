import { Configuration } from './data-types';

export const CONFIG: Configuration = {
    "mode": "development"
}

export function updateConfig(config: Configuration) {
    for (let i in config) {
        CONFIG[i] = config[i];
    }
    log('config update to', CONFIG);
}

export const log = (...str) => {
    if (CONFIG.mode === "development") {
        console.log(...str);
    }
}