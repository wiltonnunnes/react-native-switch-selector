import React from 'react';
import { View, Dimensions } from 'react-native';
import SwitchSelector from './SwitchSelector';

const SCREEN_WIDTH = Dimensions.get("screen").width;

const App = () => {
  const options = [
    {
      label: 'Telefone',
      value: 'telefone'
    },
    {
      label: 'E-mail',
      value: 'email'
    }
  ];
  return (
    <View 
      style={{ 
        paddingHorizontal: '3.888888889%',
        paddingTop: SCREEN_WIDTH * 0.038888889
      }}
    >
      <SwitchSelector 
        options={options} 
        buttonColor="#4B0082" 
        style={{
          width: '100%'
        }} 
        backgroundColor="#ece9e0"
      />
    </View>
  );
};

export default App;