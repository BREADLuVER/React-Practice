class Stopwatch {
    constructor() {
        this.startTime = null;
        this.endTime = null;
        this.running = false;
        this.duration = 0;
    }

    start() {
        if (this.running) throw new Error("Stopwatch has already started!");
        this.running = true;
        this.startTime = new Date();
    }

    stop() {
        if (!this.running) throw new Error("Stopwatch is not running!");
        this.running = false;
        this.endTime = new Date();
        this.duration += (this.endTime - this.startTime) / 1000;
    }

    reset() {
        this.startTime = null;
        this.endTime = null;
        this.running = false;
        this.duration = 0;
    }

    async getDuration() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.duration);
            }, 1000); // Simulate async delay
        });
    }
}

(async () => {
    const sw = new Stopwatch();
    sw.start();

    setTimeout(() => {
        sw.stop();
    }, 2000);

    setTimeout(async () => {
        const duration = await sw.getDuration();
        console.log(duration);
    }, 3000);
})();