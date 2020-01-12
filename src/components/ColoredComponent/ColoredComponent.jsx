import React, { Component } from 'react';
import styles from './ColoredComponent.module.css';
import classNames from 'classnames';
import { GREEN, RED } from "../../constants/colors";
import PropTypes from 'prop-types';

export class ColoredComponent extends Component {
    static propTypes = {
        color: PropTypes.oneOf([RED, GREEN]).isRequired,
    };
    
    render() {
        const baseClasses = classNames(styles.base, {
            [styles.red]: this.props.color === RED,
            [styles.green]: this.props.color !== RED,
        });
        
        return (
            <div className={baseClasses}>
                Colored Component!
            </div>
        );
    }
}
