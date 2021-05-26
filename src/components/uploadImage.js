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
      <Image
        source={{
          uri: avatar
            ? avatar.uri
            : "https://mltmpgeox6sf.i.optimole.com/w:761/h:720/q:auto/https://redbanksmilesnj.com/wp-content/uploads/2015/11/man-avatar-placeholder.png"
        }}
        style={styles.avatar}
      />
      <TouchableOpacity style={styles.button} 
      onPress={imagePickerCall}>
        <Text style={styles.buttonText}>Adicionar foto</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    marginLeft:70,
    alignItems:"center",
  },
  button: {
    width: 100,
    height: 20,
    borderRadius: 3,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white"
  },
  avatar: {
    width:80,
    height:80,
    borderRadius:40
  }
});