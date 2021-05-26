import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";

import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import Axios from "axios";

export function UploadImage() {
  const [avatar, setAvatar] = useState();

  async function imagePickerCall() {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);

      if (status !== "granted") {
        alert("Nós precisamos dessa permissão.");
        return;
      }
    }

    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All
    });

    if (data.cancelled) {
      return;
    }

    if (!data.uri) {
      return;
    }

    setAvatar(data);
  }

  async function uploadImage() {
    const data = new FormData();

    data.append("avatar", {
      uri: avatar.uri,
      type: avatar.type
    });

    await Axios.post("http://localhost:3333/files", data);
  }

  return (
    
    <View style={styles.container}>
      <Text style={styles.textAjuda}>Corte o seu Qr code de acordo com o exemplo a baixo</Text>
        <Image
            source={{
            uri: avatar
                ? avatar.uri
                : "https://miro.medium.com/max/640/0*zPG9dqz508rmRR70."
            }}
            style={styles.avatar}
        />
        <TouchableOpacity style={styles.button} 
        onPress={imagePickerCall}>
            <Text style={styles.buttonText}>Adicionar Qr Code</Text>
        </TouchableOpacity>
        
    </View>
  );
}

const styles = StyleSheet.create({

  textAjuda:{
    marginLeft:0,
    color: "black"},

  buttonText: {
    marginLeft:100,
    color: "black"
  },
  avatar: {
    marginLeft:40,
    marginTop:20,
    width:250,
    height:250,
  }
});