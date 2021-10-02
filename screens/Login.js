import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

const Login = () => {
    return (
        <View style={styles.container}>
            <Text>Login</Text>

            {/* Sir this will trigger google login */}
            <Button
            title="Login With Google"
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default Login
