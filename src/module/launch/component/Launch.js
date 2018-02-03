import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { View, Image, Text, Dimensions, StyleSheet, Platform, TouchableOpacity, Animated, Easing } from 'react-native'

import Logo1 from './Logo11.png'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    width: height - Platform.select({
      ios: 65,
      android: 45
    }),
    marginLeft: 10,
    height: undefined,
    alignSelf: 'center',
  },
  wrapImage: {
    width,
    height: 320,
    marginTop: Platform.select({
      ios: 65,
      android: 45
    })
  },
  textButton: {
    backgroundColor: 'transparent',
    fontSize: 28,
    color: 'rgb(177, 118, 45)',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textFooter: {
    backgroundColor: 'transparent',
    fontSize: 24,
    color: 'rgb(93, 44, 18)',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    flex: 1
  },
  buttonStart: {
    height: 45,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 15,
    borderRadius: 5
  },
  button: {
    height: 45,
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderRadius: 5,
    marginHorizontal: 50,
    backgroundColor: 'rgb(252, 225, 202)'
  },
  wrapButtonStart: {
    marginTop: 80
  },
  wrapButtonGroup: {
    marginTop: 20
  }
})

class Launch extends Component {

  state = {
    animateButtonStart: new Animated.Value(0),
    animateButtonLogo: new Animated.Value(1),
    animateButtonLogoOpacity: new Animated.Value(1),
  }

  valueAnimateButtonLogo = 1.2
  isStartAnimateButtonLogo = true

  componentDidMount() {
    this.animateLogo()
  }

  animateLogo() {
    const value = this.valueAnimateButtonLogo === 1.2 ? 1 : 1.2
    this.valueAnimateButtonLogo = value
    Animated.timing(this.state.animateButtonLogo, {
      toValue: value,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      this.isStartAnimateButtonLogo && this.animateLogo()
    })
  }

  startAnimateButtonGroup() {
    Animated.timing(this.state.animateButtonStart, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.bezier(0.785, 0.135, 0.15, 0.86),
    }).start()
  }

  handleOnStart() {
    this.isStartAnimateButtonLogo = false
    // logo opacity
    Animated.timing(this.state.animateButtonLogoOpacity, {
      toValue: 0.3,
      duration: 1000,
      useNativeDriver: true,
    }).start()
    // logo zoom out
    Animated.timing(this.state.animateButtonLogo, {
      toValue: 0.8,
      duration: 1000,
      easing: Easing.bezier(0.86, 0, 0.07, 1),
      useNativeDriver: true,
    }).start()
    this.startAnimateButtonGroup()
  }

  renderButtonGroup() {
    const opacity = this.state.animateButtonStart.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    })
    const translateY = this.state.animateButtonStart.interpolate({
      inputRange: [0, 1],
      outputRange: [-300, -150],
    })
    const scale = this.state.animateButtonStart.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    })
    return (
      <Animated.View
        style={[
          styles.wrapButtonGroup,
          {
            opacity,
            transform: [
              {scale, },
              {translateY},
              {perspective: 1000},
            ]
          }
        ]}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Collect Stamp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { marginTop: 30 }]}>
          <Text style={styles.textButton}>Shop</Text>
        </TouchableOpacity>
      </Animated.View>
    )
  }

  renderButtonStart() {
    const opacity = this.state.animateButtonStart.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    })
    const translateY = this.state.animateButtonStart.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -300],
    })
    const scale = this.state.animateButtonStart.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    })
    // this.isStartAnimateButtonLogo
    return (
      <Animated.View
        style={[
          styles.wrapButtonStart,
          {
            opacity,
            transform: [
              {scale, },
              {translateY},
              {perspective: 1000},
            ]
          }
        ]}>
        <TouchableOpacity style={styles.buttonStart} onPress={() => this.handleOnStart()}>
          <Text style={styles.textButton}>Start</Text>
        </TouchableOpacity>
      </Animated.View>
    )
  }

  render() {
    return (
      <LinearGradient
        colors={[ 'rgb(230, 202, 134)', 'rgb(225, 179, 70)',]}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0, 0.5]}
      >
        <View styly={styles.container}>
          <Animated.View
              style={[styles.wrapImage, 
              {
                transform: [
                  {scale: this.state.animateButtonLogo},
                  {perspective: 1000},
                ],
                opacity: this.state.animateButtonLogoOpacity
              }
            ]}>
            <Image
              resizeMode='cover'
              source={Logo1}
              style={[
                styles.image,
                
              ]}
            />
          </Animated.View>
         {this.renderButtonStart()}
         {this.renderButtonGroup()}
        </View>
         <Text style={styles.textFooter}>{'Let\'s enjoy your \n Stamp'}</Text>
      </LinearGradient>
    )
  }
}


export default Launch
