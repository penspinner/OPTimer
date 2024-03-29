import React from 'react';

class Index extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            date : new Date(),
            timerSeconds: 0
        };
    }

    componentDidMount()
    {
        window.addEventListener('keyup', (e) => this.handleKeyUp(e));
    }

    componentWillUnmount()
    {
    }

    tick()
    {
        // this.setState({date : new Date()});
        this.setState({timerSeconds: (this.state.timerSeconds + Date.now() - this.state.start) / 1000});
    }

    handleKeyUp(e)
    {
        console.log(e);
        if (e.key === ' ' && !this.timer)
            this.startTimer();
        else if (e.key === ' ' && this.timer)
            this.stopTimer();
    }

    startTimer()
    {
        this.setState({start: Date.now(), timerSeconds: 0}, () => 
        {
            this.timer = setInterval(() => this.tick(), 10);
        });
    }

    stopTimer()
    {
        clearInterval(this.timer);
        this.timer = null;
    }

    render()
    {
        return (
            <div onClick={this.startTimer}>
                {this.props.text}
                {this.state.date.toLocaleTimeString()}
                <div>{this.state.timerSeconds}</div>
            </div>
        );
    }
}

Index.defaultProps = 
{
    text: 'Default text props'
};

export default Index;