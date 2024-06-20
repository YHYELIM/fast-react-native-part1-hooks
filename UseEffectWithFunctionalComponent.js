import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  Switch,
  ActivityIndicator,
} from "react-native";

const Component = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(true);
  const [input, setInput] = useState("");
  const [isRefresh, setIsRefresh] = useState(false);


  useEffect(() => {
    console.log("didMount");
  }, []);

  useEffect(() => {
    console.log("didUpdate - count", count);
  }, [count]);

  useEffect(() => {
    console.log("didUpdate - isOn", isOn);
  }, [isOn]);

  useEffect(() => {
    console.log("didUpdate - input", input);
  }, [input]);

/*특정 시간 이후에 false 로 바꿔줘 */
  useEffect(() => {
    if (isRefresh) {
      setTimeout(() => {
        setIsRefresh(false);
      }, 2000);
    }
  }, [isRefresh]);

  useEffect(()=>{
//의존성 배열의 값들이 바뀌었을때 첫번째 인자에 있는 함수를 호출
//의존성 배열의 값이 없기 때문에 제일 최초에 한번만 실행이 됨 
console.log('didMount');
  },[]);
  useEffect(()=>{
   
    console.log('didUpdate - count', count);
      },count);
    useEffect(()=>{
       
        console.log('didUpdate - isOn', isOn);
          },isOn);

 
    


  return (
    <View style={{ alignItems: "center" }}>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />

      <Text style={{ marginVertical: 15 }}>
        -------------------------------------------------
      </Text>
      <Switch value={isOn} onValueChange={setIsOn} />

      <Text style={{ marginVertical: 15 }}>
        -------------------------------------------------
      </Text>

      <Text>input: {input}</Text>
      <TextInput
        value={input}
        onChangeText={setInput}
        style={{ borderBottomWidth: 1, borderColor: "grey" }}
      />

      <Text style={{ marginVertical: 15 }}>
        -------------------------------------------------
      </Text>
      <Button
        title="새로고침!"
        onPress={() => {
          setIsRefresh(true);
        }}
      />
      {isRefresh && <ActivityIndicator />} 
      {/*isRefresh 가 됐을때 데이터를 불러 와라 */}
    </View>
  );
};

export default Component;