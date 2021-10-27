import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Animated } from 'react-native';
import PropTypes from 'prop-types';

class SwitchSelector extends React.Component {

  state = {
    animation: new Animated.Value(0),
    containerWidth: 0
  };

  static propTypes = {
    height: PropTypes.number,
    borderRadius: PropTypes.number,
    style: PropTypes.object,
    backgroundColor: PropTypes.string,
    buttonColor: PropTypes.string,
    options: PropTypes.array.isRequired,
    textColor: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    animationDuration: PropTypes.number
  };

  static defaultProps = {
    height: 40,
    borderRadius: 50,
    style: {},
    backgroundColor: '#ffffff',
    buttonColor: '#BCD635',
    options: null,
    textColor: '#000',
    onPress: console.log,
    animationDuration: 250
  };

  render() {
    return (
      <View 
        style={[
          styles.container,
          this.props.style,
          { 
            backgroundColor: this.props.backgroundColor,
            height: this.props.height,
            borderRadius: this.props.borderRadius
          }
        ]} 
        onLayout={(event) => this.setState({containerWidth: event.nativeEvent.layout.width})}
      >
        <Animated.View 
          style={{
            backgroundColor: this.props.buttonColor,
            position: 'absolute',
            left: this.state.animation,
            width: '50%',
            height: '100%',
            borderRadius: this.props.borderRadius
          }}
        />
        {this.props.options.map((item, index) => (
          <TouchableOpacity 
            style={styles.option} 
            onPress={() => {
              this.props.onPress(item.value);
              Animated.timing(this.state.animation, {
                duration: this.props.animationDuration,
                toValue: index * (this.state.containerWidth / this.props.options.length),
                useNativeDriver: false
              }).start();
            }} 
            key={item.toString() + index}
          >
            <Text style={{ color: this.props.textColor }}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  option: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SwitchSelector;