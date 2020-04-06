import React,{useState} from 'react';
import { StyleSheet, Text, View,Image, Button, Alert, TextInput,ImageBackground, TouchableOpacity } from 'react-native';

export default function App() {
  
  const iniciar=()=>{
    if(usuario != ""){
      if(contrasena != "") {
        alert("Login correcto, Bienvenido: "+usuario);
      } else {
        alert("Debes escribir tu contraseña");
      }
    } else {
      alert("Debes escribir tu usuarios");
    }
  }

  const [usuario, setusuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [inicio, setInicio] = useState("Iniciar sesion");
  
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Image style={{width:300, height:300,margin:'auto'}} source={require('./assets/logo_movil.png')}></Image>            
        </View>
        <View style={styles.form}>
          <Text style={{fontSize: 30}}>{inicio}</Text>
          <TextInput placeholder="Usuario" style={styles.textInput} onChangeText={(text)=>setusuario(text)}></TextInput>
          <TextInput secureTextEntry={true} style={styles.textInput} placeholder="Contraseña" onChangeText={(text)=>setContrasena(text)}></TextInput>
          <TouchableOpacity style={{backgroundColor:'#227CBB', width:350, height:50, borderColor:'white', borderRadius:30, marginTop:40, justifyContent: 'center', alignItems:'center'}} onPress = {() => {iniciar()}}> 
            <Text style={{color:'#ffffff', fontSize:20}}>Iniciar sesion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    height: 700,
    width: 800,
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  
  form:{
    flex:2,
    justifyContent:"center",
    alignItems:"center",
  },
  
  text:{
    color:'#ffffff',
    fontSize:25 ,
    padding:30
  },
  
  textInput:{
    borderWidth:1,
    width:350,
    height:50,
    borderRadius:20,
    paddingLeft:10,
    paddingRight:5,
    marginTop:15,
    marginBottom:10,
    opacity:.5,
  }
});