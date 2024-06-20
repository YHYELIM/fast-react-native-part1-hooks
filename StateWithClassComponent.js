
import React from "react";
import { View, Text, Button } from "react-native";

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, //count 초기값 
    };
  }

  render() {
    return (
      <View>
        <Text>You clicked {this.state.count} times</Text>
        <Button
          title="Click me"
          onPress={() => this.setState({ count: this.state.count + 1 })}// 현재 count 값에 +1 setState 
        />
      </View>
    );
  }
}

export default Component;
