const ansi = {
    reset: "\x1b[0m",
    bold: "\x1b[1m",
    dim: "\x1b[2m",
    italic: "\x1b[3m",
    underline: "\x1b[4m",
    inverse: "\x1b[7m",
    hidden: "\x1b[8m",
    strikethrough: "\x1b[9m",

    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",

    brightBlack: "\x1b[90m",
    brightRed: "\x1b[91m",
    brightGreen: "\x1b[92m",
    brightYellow: "\x1b[93m",
    brightBlue: "\x1b[94m",
    brightMagenta: "\x1b[95m",
    brightCyan: "\x1b[96m",
    brightWhite: "\x1b[97m",

    bgBlack: "\x1b[40m",
    bgRed: "\x1b[41m",
    bgGreen: "\x1b[42m",
    bgYellow: "\x1b[43m",
    bgBlue: "\x1b[44m",
    bgMagenta: "\x1b[45m",
    bgCyan: "\x1b[46m",
    bgWhite: "\x1b[47m",

    bgBrightBlack: "\x1b[100m",
    bgBrightRed: "\x1b[101m",
    bgBrightGreen: "\x1b[102m",
    bgBrightYellow: "\x1b[103m",
    bgBrightBlue: "\x1b[104m",
    bgBrightMagenta: "\x1b[105m",
    bgBrightCyan: "\x1b[106m",
    bgBrightWhite: "\x1b[107m",
};

class Logger {
    loader: string[];
    iteration: number;
    delay: number;
    msg: string;
    constructor(config?: { loader: string[]; iteration?: number; delay?: number }, msg: string = "") {
        this.loader = config?.loader ?? [""];
        this.iteration = config?.iteration ?? 1;
        this.delay = config?.delay ?? 1;
        this.msg = msg;
    }

    log() {
        const allFrames = this.loader.length * this.iteration;

        const step = (i: number) => {
            if (i >= allFrames) return;
            const frame = this.loader[i % this.loader.length];
            console.clear();
            console.log(frame + this.msg);
            setTimeout(() => step(i + 1), this.delay);
        };

        step(0);
    }
}

const config = { loader: ["•", "◦", "⦿", "⦾", "◉", "◎", "⦾", "⦿", "◦", "•"], iteration: 10, delay: 100 };

new Logger(config, " Loading").log();
