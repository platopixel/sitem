import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import PlayerContainer from './components/PlayerContainer';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default function App() {
    return (
        <View style={styles.container}>
            <PlayerContainer />
            <PlayerContainer />
            <StatusBar style="auto" />
        </View>
    );
}
