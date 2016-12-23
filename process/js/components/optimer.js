

/* Main object that does everything. */
class OPTimer
{
    constructor(store, scrambler, puzzle)
    {
        this.store = store;
        this.scrambler = scrambler;
        this.puzzle = puzzle;
        this.timer = this.timer || null;
        this.currentTime = 0;
    }

    /* Starts the timer */
    startTimer()
    {
        if (!this.timer)
        {
            /* Every 0.01 seconds, call the function and update the time. */
            this.timer = setInterval(function() {},2000);
        }
    }
    
    /* Stops the timer */
    stopTimer()
    {
        if (this.timer)
        {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    render()
    {

    }
}