import React, { Component } from 'react';
import styles from './ButtonComponent.module.css';
import PropTypes from "prop-types";

export class ButtonComponent extends Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
    };
    
    render() {
        return (
            <div className={styles.base} onClick={this.props.onClick}>
                Click Me!
            </div>
        );
    }
}
