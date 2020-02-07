import React, { Fragment, Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    TextInput,
    Picker,
    Button,
    TouchableOpacity
} from 'react-native';

import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            dateofbirth: "",
            gender: 0,
            date: new Date('2020-06-12T14:42:42'),
            mode: 'date',
            show: false,
            DOB: ""
        }

    }

    onChangeText = (key, value) => {
        this.setState({ [key]: value })
    }
    setDate = (event, date) => {
        date = date || this.state.date;
        this.setState({
            show: Platform.OS === 'ios' ? true : false,
            date,
        });
        var momentdate = moment(date, 'mm-dd-yyyy ').format('')
        momentdate = momentdate.toString();
        var year = momentdate.split("-")[0]
        var month = momentdate.split("-")[1]
        var date = momentdate.split("-")[2].split("T")[0]
        this.setState({
            DOB: month + "-" + date + "-" + year
        })
    }

    show = mode => {
        this.setState({
            show: true,
            mode,
        });
    }

    datepicker = () => {
        this.show('date');
    }

    timepicker = () => {
        this.show('time');
    }

    ServiceCall = async (params) => {
        let response = await fetch('http://content/APIForPhoneDeveloper/api/user/?type=json', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Username: params.username,
                Email: params.email,
                Password: params.password,
                DOB: params.DOB,
                Genger: params.gender
            }),
        })
        let result = response.json()
        return result;
    }
    proceed() {
        let obj = {
            Username: this.state.username,
            Email: this.state.email,
            Password: this.state.password,
            DOB: this.state.DOB,
            Genger: this.state.gender
        }
        if (obj.username == "") {
            alert("plz enter user name ")
        }
        else if (obj.Email == "") {
            alert("plz enter Email ")
        }
        else if (obj.Password == "") {
            alert("plz enter password ")
        }
        else if (obj.DOB == "") {
            alert("plz selet Date Of Birth ")
        }
        else {
            var response = this.ServiceCall(obj);
            if (response.success) {

                this.props.navigation.navigate("Product")
            }
            else {
                alert("Error")
            }


        }
    }
    render() {
        const { show, date, mode } = this.state;
        return (
            <View style={{ width: '100%' }}>
                <View style={{ width: '100%', justifyContent: 'center', height: 45, borderBottomColor: '#777', borderBottomWidth: 1 }}>
                    <Text style={{ textAlign: 'center', padding: 10 }}>Create an Account  </Text>
                </View>

                <View style={{ height: 100, justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Sign Up </Text>
                </View>

                <View style={{ height: 50, width: '96%', marginHorizontal: '2%', alignItems: 'flex-start', flexDirection: 'row', borderBottomColor: '#777', borderBottomWidth: 1 }}>
                    <TextInput
                        style={{ textAlign: 'left', padding: 10 }}
                        placeholder="User Name"
                        onChangeText={val => {
                            this.onChangeText('username', val.trim())
                        }}
                        value={this.state.username}

                    />
                </View>



                <View style={{ height: 50, width: '96%', marginHorizontal: '2%', alignItems: 'flex-start', flexDirection: 'row', borderBottomColor: '#777', borderBottomWidth: 1 }}>
                    <TextInput
                        style={{ textAlign: 'left', padding: 10 }}
                        placeholder="Email"
                        onChangeText={val => {
                            this.onChangeText('email', val.trim())
                        }}
                        value={this.state.email}
                    />
                </View>

                <View style={{ height: 50, width: '96%', marginHorizontal: '2%', alignItems: 'flex-start', flexDirection: 'row', borderBottomColor: '#777', borderBottomWidth: 1 }}>
                    <TextInput
                        style={{ textAlign: 'left', padding: 10 }}
                        placeholder="Password"
                        onChangeText={val => {
                            this.onChangeText('password', val.trim())
                        }}
                        value={this.state.password}
                    />
                </View>

                <View style={{ height: 50, width: '96%', marginHorizontal: '2%', alignItems: 'flex-start', flexDirection: 'row', borderBottomColor: '#777', borderBottomWidth: 1 }}>
                    <Text onPress={this.datepicker} style={{ color: '#777', paddingTop: 15, paddingLeft: 5 }}>
                        {(this.state.DOB == "") ? "Date of Birth" : this.state.DOB}
                        {/* Date of Birth */}
                    </Text>

                    {show && <DateTimePicker value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={this.setDate} />
                    }
                </View>

                <View style={{ height: 50, width: '96%', marginHorizontal: '2%', alignItems: 'flex-start', flexDirection: 'row', borderBottomColor: '#777', borderBottomWidth: 1 }}>
                    <Picker

                        selectedValue={this.state.gender}
                        style={{ height: 50, width: "100%" }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ gender: itemValue })
                        }>
                        <Picker.Item label="Male" value="1" />
                        <Picker.Item label="Female" value="2" />
                    </Picker>
                </View>

                <View style={{ height: 50, width: '100%', marginHorizontal: '2%', alignItems: 'center', }}>
                    <TouchableOpacity onPress={this.proceed.bind(this)} style={{ width: 200, justifyContent: 'center', marginTop: 10, height: 50, borderRadius: 45, backgroundColor: 'lightgray' }}>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Proceed</Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
}