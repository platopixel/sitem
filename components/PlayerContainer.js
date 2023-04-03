import { View, Text, StyleSheet } from 'react-native';
import PlayerProfile from './PlayerProfile';
import PlayerStats from './PlayerStats';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
});

export default PlayerContainer = () => {
    return (
        <View style={styles.container}>
            <PlayerProfile />
            <PlayerStats />
        </View>
    );
};
