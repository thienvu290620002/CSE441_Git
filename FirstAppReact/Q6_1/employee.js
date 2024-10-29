import { TextInput, View ,Button ,Text, Alert} from "react-native";

export default function Employee (props)
{
    const handleUpdate = () => {
        Alert.alert("Successful !")
    }
    return(
        <View> 
            <Text>Full Name:</Text>
            <TextInput>{props.name}</TextInput>
            <Text>Age:</Text>
            <TextInput>{props.age}</TextInput>
            <Text>Occupation:</Text>
            <TextInput>{props.occupation}</TextInput>
            <Button onPress={handleUpdate} title="Update"></Button>
        </View>
    );
}