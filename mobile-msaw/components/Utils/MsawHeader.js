import React from 'react';
import { Header } from 'react-native-elements';

export default class MsawHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            leftComponent: props.leftComponent ? props.leftComponent : null,
            centerComponent: props.centerComponent ? props.centerComponent : null,
            rightComponent: props.rightComponent ? props.rightComponent : null
        }
    }

    render() {
        return (
            <Header
                backgroundColor={'#00AEF9'}
                leftComponent={this.state.leftComponent}
                centerComponent={{ text: '', style: { fontSize: 21, fontWeight: '500' } }}
                rightComponent={this.state.rightComponent}
            />
        )
    }
}