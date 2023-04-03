import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    },
});

const PlayerProfile = ({ player }) => {
    const imageUrl =
        'https://www.thefamouspeople.com/profiles/images/aaron-rodgers-1.jpg';

    return (
        <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text>Aaron Rodgers</Text>
        </View>
    );
};

export default PlayerProfile;
