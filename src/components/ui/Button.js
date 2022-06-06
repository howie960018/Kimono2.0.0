import { Pressable, StyleSheet, Text, View } from 'react-native';



function Button({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
   
 
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
   
    fontSize: 16,
    fontWeight: 'bold'
  },
});
