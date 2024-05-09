import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import { Participant } from '../../components/parcitipant';
import { useState } from 'react';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participant, setParticipant] = useState<string>('');

  function handleParticipantAdd(){
    if(participants.includes(participant)) return Alert.alert('Participante Existe', 'Já existe um participante com esse nome.');

    setParticipants([...participants, participant]);
    setParticipant('');
  }

  function handleParticipantRemove(name: string){
    Alert.alert('Remover', `Remover o participante ${name} ?`, [{ text: 'Sim', onPress: ()=> Alert.alert('Deletado!') }, { text: 'Não', style: 'cancel' }]);

    setParticipants(participants.filter(part => part != name))
  }

  return (
    <View className='flex-1 bg-[#131016] p-6'>
      <Text className='text-white text-2xl font-medium mt-12'>
        Nome do Evento
      </Text>
      <Text className='text-[#6B6B6B]'>Sexta, 4 de novembro de 2022</Text>

      <View className='flex-row gap-4 mt-4 mb-8'>
        <TextInput 
          value={participant} 
          onChangeText={setParticipant} 
          placeholder='Nome do participante' 
          placeholderTextColor='#6B6B6B' 
          className='flex-1 bg-[#1F1E25] rounded-md text-white p-2'
        />
        <TouchableOpacity onPress={handleParticipantAdd} className='w-11 h-11 rounded-lg bg-green-400 justify-center items-center'>
          <Text className='text-white text-lg'>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant name={item} onRemove={handleParticipantRemove}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text className='text-white text-center text-lg'>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  );
}