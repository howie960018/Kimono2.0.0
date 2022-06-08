import { Pressable, StyleSheet } from 'react-native';
import { Ionicons,MaterialIcons } from '@expo/vector-icons';

function IconButton({ icon, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <MaterialIcons name={icon} size={50} color={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
