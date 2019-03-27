import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";

class App extends Component {
    getChildContext() {
        return {
            coloredTheme: "green"
        };
    }

    render() {
        return <Header>Hi children</Header>;
    }
}

class C extends React.Component {
    render() {
        console.log(this.context);
        const { children } = this.props;
        console.log(children);
        return (
            <div style={{ color: this.context.coloredTheme }}>
                <p>{this.context.coloredTheme}</p>
                <p>{children}</p>
            </div>
        );
    }
}
C.contextTypes = {
    coloredTheme: PropTypes.string
};

function Header(params) {
    const { children } = params;
    return (
        <div>
            <C>Hi children</C>
            <h1>{children}</h1>
        </div>
    );
}

App.childContextTypes = {
    coloredTheme: PropTypes.string
};

export default App;
