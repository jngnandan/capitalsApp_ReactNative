import { StatusBar } from 'expo-status-bar';
import { Text, View, Picker } from 'react-native';
export default function App() {
  return (
    <View className="flex flex-col justify-center items-center h-screen bg-blue-300 px-12">
      <View className="bg-white rounded h-40 w-full flex flex-col justify-center items-center">
      <Text className="text-2xl" >Capitals and Countries</Text>
      </View>
    </View>
  );
}
