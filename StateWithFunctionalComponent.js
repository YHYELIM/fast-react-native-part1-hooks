import React, { useState } from "react";
import { View, Text, Button, Switch, TextInput } from "react-native";

const Component = () => {
  const [count, setCount] = useState(0); // number
//const result = useState(0);
//const conunt = result[0];
//const setCount = result [1];

// const arr = [1,2,3];
//   배열의 각 원소에 접근 
//   const first = arr[0];
//   const second = arr[1];
//   const third = arr[2];
//-> const [first, second, third] = arr; //한줄로 표현 
const[isOn, setIsOn] = useState(false);
const[name, setName] = useState(""); //초기값 : 빈 String 
  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} /> 

      <Text>-------</Text>
      
      <Switch
      value={isOn}
      onValueChange={v=>{
        console.log('v',v);
        setIsOn(v);
      }}
      />

      <Text>-------</Text>
      <TextInput
      value={name}
      onChangeText={v=>{
        console.log('v', v);
        setName(v);
      }}
      style={{backgroundColor: "pink"}} //TextInput 범위 확인 
      />
      
    </View>
  );
};

export default Component;
























//  const [isOn, setIsOn] = useState(false); // boolean
//const [name, setName] = useState(""); // string




/* 
      <Switch
        value={isOn}
        onValueChange={(v) => {
          console.log("v", v);
          setIsOn(v);
        }}
      />

      
      <TextInput
        value={name}
        onChangeText={(v) => {
          console.log("v", v);
          setName(v);
        }}
      /> */