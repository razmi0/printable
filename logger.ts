export type LoggerConfig = { loader?: string[]; iteration?: number; delay?: number } | undefined;

export default class Logger {
    /** Animation frames used in the loader */
    loader: string[];

    /** Number of times the animation should repeat */
    iteration: number;

    /** Delay in milliseconds between each frame */
    delay: number;

    /** Optional message displayed after each frame */
    msg: string;

    /**
     * Creates a new Logger instance.
     * @param config - Configuration for the loader animation.
     * @param config.loader - Array of strings used as animation frames.
     * @param config.iteration - Number of times the animation should repeat.
     * @param config.delay - Delay in milliseconds between each frame.
     * @param msg - Optional message displayed after each frame.
     */
    constructor(msg: string = "", config?: LoggerConfig) {
        this.loader = config?.loader ?? [""];
        this.iteration = config?.iteration ?? 1;
        this.delay = config?.delay ?? 1;
        this.msg = msg;
    }

    /**
     * Starts the animated logging process.
     * Displays the loader frames in the console with a delay and optional message.
     */
    log() {
        const loaderFrames = this.loader.length * this.iteration;
        const buildOutput = (frame: string, msg: string) => (frame ? frame + " " : "") + msg;
        const step = (i: number) => {
            if (i >= loaderFrames) return;
            const loaderFrame = this.loader[i % this.loader.length];
            console.clear();
            console.log(buildOutput(loaderFrame, this.msg));
            setTimeout(() => step(i + 1), this.delay);
        };

        step(0);
    }
}
