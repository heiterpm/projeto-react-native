import { Image, View, StyleSheet } from "react-native";
import Texto from "../../../components/Texto";


export default Item = ({item:{nome, imagem}}) => {
    return <View key={nome} style={estilos.item}>
        <Image source={imagem} style={estilos.imagem}/>
        <Texto style={estilos.nome}>{nome}</Texto>
    </View>
}

const estilos = StyleSheet.create({
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#C5C5C5',
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: 'center',
    },
    imagem: {
        width: 46,
        height: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: '#464646'
    }
})