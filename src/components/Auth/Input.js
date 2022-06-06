import { View, Text, TextInput, StyleSheet } from 'react-native';



function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
    
  },
  label: {
    color: 'black',
    marginBottom: 4,
    fontSize:23
  },
  labelInvalid: {
   
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor:"#fff",
    borderRadius: 10,
    fontSize: 16,
  },
  inputInvalid: {
  
  },
});
