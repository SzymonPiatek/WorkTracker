import BackButton from '@/components/button/BackButton';
import Button from '@/components/button/Button';
import { workUrl } from '@/constants';
import { styles } from '@/styles/styles';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert, Text, View } from 'react-native';

export default function AddTimePage() {
  const navigation = useNavigation();
  const [isEntry, setIsEntry] = useState(true);
  const [timestamp, setTimestamp] = useState(new Date());

  const handleAddTime = async () => {
    try {
      const response = await fetch(workUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isEntry, timestamp }),
      });

      const data = await response.json();
      Alert.alert(data.success ? 'Sukces' : 'Błąd', data.message);

      if (response.ok) {
        navigation.goBack();
      }
    } catch (error: any) {
      Alert.alert('Błąd', error.message);
    }
  };

  return (
    <View style={styles.mainTimeContainer}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.header}>Dodaj czas</Text>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
        <Button
          onPress={() => setIsEntry(!isEntry)}
          children={isEntry ? 'Wejście' : 'Wyjście'}
          type='outline'
          icon={isEntry ? 'arrow-circle-right' : 'arrow-circle-left'}
          iconStyle={[{ color: `${isEntry ? 'green' : 'red'}` }]}
        />
        <Button onPress={handleAddTime} children='Odbij się' />
      </View>

      <BackButton navigation={navigation} />
    </View>
  );
}
