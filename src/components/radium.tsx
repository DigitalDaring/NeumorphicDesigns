import React, { Component, useState, useRef } from 'react';
import 'web-component-essentials';

export default (props) => {
    return (
        <>
            <radium-component percent={props.percent}></radium-component>
        </>
    );
}