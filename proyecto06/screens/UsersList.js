import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { database } from '../database/firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Usuarios from './Usuarios';

const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const collectionRef = collection(database, 'usuarios'); // Corregido el nombre de la colección
        const q = query(collectionRef, orderBy('name'));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setUsers(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    email: doc.data().email,
                    name: doc.data().name,
                    phone: doc.data().phone
                }))
            );
        });

        return () => unsubscribe();
    }, []);

    return (
        <View>
            <Text>UsersList</Text>
            {users.map((usuario) => (
                <Usuarios key={usuario.id} {...usuario} />
            ))}
        </View>
    );
}

export default UsersList;
