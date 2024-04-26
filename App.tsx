import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className='flex-1 bg-[#131016] p-6'>
      <Text className='text-[#FDFCFE] text-2xl font-medium mt-12'>
        React
      </Text>
      <Text className='text-white'>Nome do Evento</Text>
    </View>
  );
}