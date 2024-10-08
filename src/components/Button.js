import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons'

const IconButton = ({ onPress, icon, color }) => {
    return (
        <Pressable onPress={onPress}>
            <Ionicons name={icon} color={color} size={24}></Ionicons>
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    star: {
       
    }
})