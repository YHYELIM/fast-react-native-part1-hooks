import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import StateWithClassComponent from './StateWithClassComponent';
import StateWithFunctionalComponent from './StateWithFunctionalComponent';
import UseEffectWithClassComponent from './UseEffectWithClassComponent';
import UseEffectWithFunctionalComponent from './UseEffectWithFunctionalComponent';
import CustomHook from './CustomHook';
import { useState } from 'react';

export default function App() {
  const [isTrue, setIsTrue] = useState(true);

  return (
    <View style={styles.container}>
  {/* <StateWithClassComponent />  */}
  {/* <StateWithFunctionalComponent/> */}
    {/* {isTrue ? <UseEffectWithClassComponent/> : null} */}
    {/*true 일때만 UseEffectWithClassComponent 렌더링*/}
    {/* <UseEffectWithFunctionalComponent/> */}
    <CustomHook/>
    
    <Button title='toggle' onPress={()=> setIsTrue(!isTrue)}> 
      {/*버튼을 눌렀을 때 setIsTrue 호출해서 isTrue 반전 시킴 */}

    </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',    alignItems: 'center',
    justifyContent: 'center',
  },
});
