import React from 'react';

class Index extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {date : new Date()};
    }

    componentDidMount()
    {
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount()
    {
        clearInterval(this.timer);
    }

    tick()
    {
        this.setState({date : new Date()});
    }

    render()
    {
        return (
            <div>
            {this.props.text}
            {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}

Index.defaultProps = 
{
    text: 'Default text props'
};

export default Index;