import React from "react";
import ReactDom from "react-dom";
import './index.css';
import config from './data.json';

import { PersonalCard } from "./components/PersonalCard";

class App extends React.Component {
    render() {
        return <PersonalCard {...config.personal} />
    }
}

ReactDom.render(
    <App/>, 
    document.getElementById('app')
);