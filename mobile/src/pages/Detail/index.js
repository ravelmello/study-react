import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';

import styles from './styles';

import iconLogo from '../../assets/logo.png';

export default function Detail() {

    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;


    const bodyMessage = `Olá, ${incident.name}! Estou entrando em contato pois gostaria de ajudar no caso da "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(incident.value)}`;



    function navigateBack() {
        navigation.goBack();
    }


    function sendMail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [`${incident.email}`],
            body: bodyMessage
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${bodyMessage}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={iconLogo} />

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name='arrow-left' size={18} color="#E02041" />
                </TouchableOpacity>

            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG: </Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>Titulo: </Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>Descrição: </Text>
                <Text style={styles.incidentValue}>{incident.description}</Text>

                <Text style={styles.incidentProperty}>Valor: </Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(incident.value)}</Text>

            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o Dia!</Text>
                <Text style={styles.heroTitle}>Seja o Heroi desse Caso</Text>

                <Text style={styles.heroDescription}>Entre em contato</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}