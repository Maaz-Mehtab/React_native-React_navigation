import React, { Fragment, Component } from 'react';
import {

    View,
    Text,

} from 'react-native';


export default class ProductDescription extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Description: this.props.navigation.state.params.Data
        }
    }


    render() {
        return (
            <View>
                <View style={{ width: '100%', flexDirection: 'row', marginBottom: 10, height: 50 }}>
                    <View style={{ width: '15%', justifyContent: 'center' }}>
                        <Text style={{ paddingLeft: 10 }}>Back</Text>
                    </View>
                    <View style={{ width: '85%', justifyContent: 'center' }}>

                        <Text style={{ textAlign: 'center', paddingRight: 40, fontSize: 16 }}> Product Description </Text>
                    </View>
                </View>
            </View>
        )
    }
}