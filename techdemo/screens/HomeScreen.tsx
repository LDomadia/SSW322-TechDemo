import { View, Text, StyleSheet } from "react-native";

type ScreenProps = {
    navigation: any,
    route: any
}

export default function HomeScreen({ navigation, route }: ScreenProps) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 40}}>Hi {route.params.firstName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});