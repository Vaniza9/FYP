import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Alert, Modal } from "react-native";
import { TextInput, Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
/* error at these two comments */
const Home = () => {
  const [modal, setmodal] = useState(false);

  const pickFromGallery = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (granted) {
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      console.log(data);
    } else {
      Alert.alert("you need to give up permission to work");
    }
  };
  const pickFromCamera = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA);
    if (granted) {
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
    } else {
      Alert.alert("you need to give up permission to work");
    }
  };
  return (
    <View style={styles.root}>
      <View>
        <Button
          style={styles.inputStyle}
          icon="camera"
          mode="contained"
          theme={theme}
          onPress={() => pickFromGallery}
        >
          Start Navigation
        </Button>
        <Button
          style={styles.inputStyle}
          icon="camera"
          mode="contained"
          theme={theme}
          onPress={() => pickFromCamera}
        >
          What is in front ?
        </Button>
      </View>
    </View>
  );
};

const theme = {
  colors: {
    primary: "#006aff",
  },
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 20,
  },
  inputStyle: {
    margin: 15,
  },
});

export default Home;
