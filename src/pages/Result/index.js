import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

export default function Result({ route }) {
  const navigation = useNavigation();
  function retornar() {
    navigation.navigate("Home");
  }
  return (
    <View style={{backgroundColor: "#423560", flex: 1}}>
       <ScrollView style={styles.container}  showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={retornar}>
      <FontAwesome
            style={{marginTop: 16}}
            color="#f5f5f5"
            name="chevron-left"
            size={42}
          />
      </TouchableOpacity>
      <View style={styles.containerThumb}>
      <Image
        style={styles.drinkThumb}
        source={{
          uri: route.params?.strDrinkThumb,
        }}
      />
      </View>
     
      <Text style={styles.strDrink}>{route.params?.strDrink}</Text>
      <Text style={styles.strCategory}>{route.params?.strCategory}</Text>
      <Text style={styles.strInstructions}>{route.params?.strInstructions}</Text>
      <Text style={styles.strTitleGlass}>Glass</Text>
      <Text style={styles.strGlass}>{route.params?.strGlass}</Text>
      <Text style={styles.strTitleIngredients}>Ingredients</Text>
      <Text style={styles.strIngredients}>{route.params?.ingredients}</Text>
    </ScrollView>
    </View>
   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    marginLeft: 20,
    marginRight: 20,
  },
  drinkThumb: {
    width: 300,
    height: 300,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#f5f5f5"
  },
  containerThumb: {
    marginTop: 32,
    marginBottom: 12,
    alignItems: "center"
  },
  strDrink:{
    color: "#EE6151",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 6
  },
  strCategory: {
    color: "rgba(238, 97, 81, 1)",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 16
  },
  strInstructions: {
    color: "#f5f5f5",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 16
  },
  strTitleGlass:{
    color: "rgba(238, 97, 81, 1)",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 6
  },
  strGlass: {
    color: "#EE6151",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 16
  },
  strTitleIngredients:{
    color: "rgba(238, 97, 81, 1)",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 6
  },
  strIngredients: {
    color: "#f5f5f5",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 16
  },

});