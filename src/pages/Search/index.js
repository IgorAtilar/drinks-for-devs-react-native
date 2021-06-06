import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import Drinks from "../../Drinks";

export default function Search({ route }) {
  const navigation = useNavigation();
  const listAllDrinks = route.params?.drinks;
  const search = route.params?.search;
  const [drinksSearch, setSearch] = useState(getSearch(listAllDrinks, search));
  function getSearch(arr, search) {
    let aux = [];

    arr.forEach((value) => {
      let teste = value.strDrink;
      teste = teste.toUpperCase();
      search = search.toUpperCase();

      if (teste.search(search) != -1) {
        aux.push(value);
      }
    });
    if(aux.length === 0){
      aux.push({
        idDrink: "404404404404404404404404404404404404404404404",
        strDrink: "404",
      })
    }
    return aux;
  }

  function getNewSearch(str) {
    setSearch(getSearch(listAllDrinks, str));
  }

  function retornar() {
    navigation.navigate("Home");
  }
  const header = "<Drinks \nfor Devs/>";
  return (
    <View style={{ backgroundColor: "#423560", flex: 1 }}>
      <View style={styles.container} showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={retornar}>
          <FontAwesome
            style={{ marginTop: 16 }}
            color="#f5f5f5"
            name="chevron-left"
            size={42}
          />
        </TouchableOpacity>
        <Text style={styles.textHeader}>{header}</Text>
        <View style={styles.inputSearchArea}>
          <TextInput
            style={styles.inputSearch}
            placeholder="Search"
            placeholderTextColor="rgba(66, 53, 96, 0.6)"
            underlineColorAndroid="transparent"
            onChangeText={(text) => getNewSearch(text)}
          ></TextInput>

          <FontAwesome
            style={styles.inputButton}
            color="rgba(66, 53, 96, 0.6)"
            name="search"
            size={20}
          />
        </View>

        <FlatList
          style={styles.recipesList}
          showsVerticalScrollIndicator={false}
          data={drinksSearch}
          keyExtractor={(item) => item.idDrink}
          renderItem={({ item }) => <Drinks data={item} />}
        />
      </View>
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
  textHeader: {
    color: "#F5F5F5",
    fontSize: 24,
    fontWeight: "bold",
    shadowColor: "#000",
    textAlign: "center"
  },
  drinkThumb: {
    width: 300,
    height: 300,
    borderRadius: 16,
  },
  containerThumb: {
    marginTop: 32,
    marginBottom: 12,
    alignItems: "center",
  },
  inputSearchArea: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputSearch: {
    color: "rgba(66, 53, 96, 0.6)",
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    height: 42,
    paddingLeft: 12,
    width: "100%",
    zIndex: 1,
    marginTop: 32,
    marginBottom: 32,
  },
  inputButton: {
    marginLeft: -40,
    zIndex: 10,
    marginTop: 32,
    marginBottom: 32,
  },
});
