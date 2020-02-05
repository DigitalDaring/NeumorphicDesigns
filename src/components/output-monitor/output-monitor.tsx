import React, { Component, Props } from 'react';
import RadiumComponent from '../radium';
import NeumorphCard from '../neumorph-card/neumorph-card';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../state';
import { SET_OUTPUT } from '../../state/output-actions';

const mapState = (state: RootState) => ({
    output: state.output.currentOutput
  });

const mapDispatch = {
    setOutput: () => ({type: SET_OUTPUT})
};

const connector = connect(
    mapState,
    mapDispatch
);

type PropsFromRedux = ConnectedProps<typeof connector>;

const OutputMonitor = (props: PropsFromRedux) => {
    return (
        <NeumorphCard>
            <h2>Current Output</h2>
            <RadiumComponent percent={props.output}></RadiumComponent>
        </NeumorphCard>
    );
}

export default connector(OutputMonitor);