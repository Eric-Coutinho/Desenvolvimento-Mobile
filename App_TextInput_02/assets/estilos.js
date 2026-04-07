import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
    },
    header: {
        justifyContent: 'center',
        backgroundColor: '#d4d4d4',
        padding: 24,
        borderRadius: 16,
        marginTop: 24,
        width: 360,
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    texto: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 8,
    },
    formulario: {
        marginTop: 24,
        width: 360,
    },
    inputs: {
        marginTop: 16,
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 8,
        marginBottom: 12,
        width: '100%',
        placeholderTextColor: '#616161',
        fontSize: 16,
    }
});

export default estilos;