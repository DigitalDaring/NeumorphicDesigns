import React, { Component } from 'react';
import './neumorph-card.scss';

export default (props) => {
    return (
        <section className="neumorph-card">
            {props.children}
        </section>
    );
}