import { View, Text, TouchableOpacity } from "react-native";

type Props = {
   name: string;
   onRemove: (name: string) => void;
}

export function Participant({ name, onRemove }: Props){
   return (
      <View className="bg-[#1F1E25] flex-row justify-center items-center rounded-md mb-4 p-y pl-2">
         <Text className="text-white flex-1">
            {name}
         </Text>
         <TouchableOpacity onPress={()=> onRemove(name)} className='w-10 h-10 rounded-lg bg-red-400 justify-center items-center'>
          <Text className='text-white text-lg'>
            -
          </Text>
        </TouchableOpacity>
      </View>
   )
}