import React from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';

export default function Settings() {
  const [receiveNotifications, setReceiveNotifications] = React.useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuraciones</Text>
      <View style={styles.option}>
        <Text style={styles.optionText}>Recibir Notificaciones</Text>
        <Switch
          value={receiveNotifications}
          onValueChange={(value) => setReceiveNotifications(value)}
        />
      </View>
      <TouchableOpacity style={styles.option} onPress={() => console.log('Cambiar idioma')}>
        <Text style={styles.optionText}>Idioma</Text>
        <Text style={styles.optionValue}>Español</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => console.log('Cambiar tema')}>
        <Text style={styles.optionText}>Tema Oscuro</Text>
        <Switch value={false} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => console.log('Notificaciones por SMS')}>
        <Text style={styles.optionText}>Notificaciones por SMS</Text>
        <Switch value={true} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => console.log('Cambiar contraseña')}>
        <Text style={styles.optionText}>Cambiar Contraseña</Text>
        <Text style={styles.optionValue}>********</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  optionValue: {
    fontSize: 16,
    color: '#555',
  },
});
