/*각 기능마다 커스텀 훅 만들어서 가독성 높임 */
import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";

const InputBox=(props)=>{
    return (
        <View style={{flexDirection:"row"}}>
            <TextInput 
            value={props.value}
            onChangeText={props.onChangeText}
            //onChangeText {(v)=> {setName(v);}}
            style={{borderBottomWidth: 1, width: 200}}
            placeholder={props.placeholder}
            />
            <Button title="초기화" onPress={props.onReset}/> 
            </View>
    )
}

//use 라고 붙여야함
//훅 생성 
const useInput = (initialValue)=>{
    const [value, setValue] = useState(initialValue); //초기값 : 받아온 initalValue값

    const resetValue = ()=>setValue(initialValue);
    return {
        value,
        setValue,
        resetValue,
    }
}


const CustomHook=()=>{
    // const [name, setName] = useState("");
    const{
        value: name,
        setValue: setName,
        resetValue: resetName,
    } = useInput("");
    // const name = output.value;
    // const setName = output.setValue;
    // const resetName = output.resetValue;
    //->
//이렇게 바꾸기 가능 
//이름 재서언 해주면 됨 

    const {
        value: age,
        setValue: setAge,
        resetValue: resetAge,
    } = useInput("");

    const {
        value: city,
        setValue: setCity,
        resetValue: resetCity,
    } = useState("");


    
    return(

       <View>
       <InputBox
       value ={name}
       onChangeText={setName}
       placeholder="이름을 입력해 주세요"
       onReset={resetName}
       />
         <InputBox
       value ={age}
       onChangeText={setAge}
       placeholder="나이를 입력해 주세요"
       onReset={resetAge}
       />

         <InputBox
       value ={city}
       onChangeText={setCity}
       placeholder="도시를 입력해 주세요"
       onReset={resetCity}
       />

       </View>
    );
}

export default CustomHook;// 바깥쪽에서 CustomHook 사용 가능 