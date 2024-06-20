import React from "react";
import { View, Text, Button } from "react-native";
class Component extends React.Component {
    //1
    /*생성자 : 클래스 컴포넌트가 생성될때 호출  */
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      count: 0, //count 0으로 초기값 성정
    };
  }

  //3
  componentDidMount() {
    console.log("didMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  //2
  /*컴포넌트가 렌더링 될때 마다 호출  */
  render() {
    console.log("render");
    return (
      <View>
        <Text>You clicked {this.state.count} times</Text>
        <Button
          title="Click me"
          onPress={() => this.setState({ count: this.state.count + 1 })}
        />
      </View>
    );
  }
}

export default Component;