import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import Drinks from "../../Drinks";
import { useNavigation } from "@react-navigation/native";

export default function Home(props) {
  const drinks = props.data;
  const navigation = useNavigation();

  const [listAllDrinks, setListDrinks] = useState(drinks);
  const [recipesName, setRecipesName] = useState("All Drinks Recipes");

  const [menuColorCocktail, setColorCocktail] = useState([
    "transparent",
    "#423560",
    "#F5F5F5",
    "#F5F5F5",
  ]);
  const [menuColorShot, setColorShot] = useState([
    "transparent",
    "#423560",
    "#F5F5F5",
    "#F5F5F5",
  ]);
  const [menuColorDrinks, setColorDrinks] = useState([
    "transparent",
    "#423560",
    "#F5F5F5",
    "#F5F5F5",
  ]);
  const [menuColorAllDrinks, setColorAllDrinks] = useState([
    "#EE6151",
    "#EE6151",
    "transparent",
    "#EE6151",
  ]);
  function getCocktail(arr) {
    let aux = [];
    arr.map((value) => {
      if (value.strCategory.match("Cocktail")) {
        aux.push(value);
      }
    });
    return aux;
  }
  function getShot(arr) {
    let aux = [];
    arr.map((value) => {
      if (value.strCategory.match("Shot")) {
        aux.push(value);
      }
    });
    return aux;
  }
 function getDrinks(arr) {
    let aux = [];

    arr.map((value) => {
      if (value.strCategory.match("Ordinary Drink")) {
        aux.push(value);
      }
    });
    return aux;
  }

  const flatListRef = React.useRef();
  const ITEM_HEIGHT = 170;

  const toTop = () => {
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  };

  function irSearch(str) {
    navigation.navigate("Search", { drinks: drinks, search: str });
  }
  const header = "<Drinks \nfor Devs/>";
  function changeToAllDrinks() {
    setListDrinks(drinks);
    setRecipesName("All Drinks Recipes");
    setColorAllDrinks(["#EE6151", "#EE6151", "transparent", "#EE6151"]);
    setColorCocktail(["transparent", "#423560", "#F5F5F5", "#F5F5F5"]);
    setColorShot(["transparent", "#423560", "#F5F5F5", "#F5F5F5"]);
    setColorDrinks(["transparent", "#423560", "#F5F5F5", "#F5F5F5"]);
  }
  function changeToCocktail() {
    setListDrinks(getCocktail(drinks));
    setRecipesName("Cocktail Recipes");
    setColorCocktail(["#EE6151", "#EE6151", "transparent", "#EE6151"]);
    setColorAllDrinks(["transparent", "#423560", "#F5F5F5", "#F5F5F5"]);
    setColorShot(["transparent", "#423560", "#F5F5F5", "#F5F5F5"]);
    setColorDrinks(["transparent", "#423560", "#F5F5F5", "#F5F5F5"]);
  }
  function changeToShot() {
    setListDrinks(getShot(drinks));
    setRecipesName("Shot Recipes");
    setColorShot(["#EE6151", "#EE6151", "transparent", "#EE6151"]);
    setColorAllDrinks(["transparent", "#423560", "#F5F5F5", "#F5F5F5"]);
    setColorCocktail(["transparent", "#423560", "#F5F5F5", "#F5F5F5"]);
    setColorDrinks(["transparent", "#423560", "#F5F5F5", "#F5F5F5"]);
  }
  function changeToDrinks() {
    setListDrinks(getDrinks(drinks));
    setRecipesName("Drinks Recipes");
    setColorDrinks(["#EE6151", "#EE6151", "transparent", "#EE6151"]);
    setColorAllDrinks(["transparent", "#423560", "#F5F5F5", "#F5F5F5"]);
    setColorCocktail(["transparent", "#423560", "#F5F5F5", "#F5F5F5"]);
    setColorShot(["transparent", "#423560", "#F5F5F5", "#F5F5F5"]);
  }
  
  function handleSubmit(event){
    irSearch(event.nativeEvent.text)
  }

  useEffect(()=>{
    toTop()
  },[listAllDrinks])

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.textHeader}>{header}</Text>
        <Text style={styles.textDiscover}>Discover</Text>
        <View style={styles.inputSearchArea}>
          <TextInput
            style={styles.inputSearch}
            placeholder="Search"
            placeholderTextColor="rgba(66, 53, 96, 0.6)"
            underlineColorAndroid="transparent"
            onSubmitEditing={(event) => handleSubmit(event)}
          ></TextInput>

          <FontAwesome
            style={styles.inputButton}
            color="#423560"
            name="search"
            size={20}
          />
        </View>

        <View style={styles.menuDrinks}>
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={changeToAllDrinks}
          >
            <View
              style={{
                backgroundColor: menuColorAllDrinks[2],
                alignItems: "center",
                justifyContent: "center",
                width: 70,
                height: 70,
                borderRadius: 50,
                borderColor: menuColorAllDrinks[0],
                borderWidth: 4,
              }}
            >
              <FontAwesome
                style={(styles.inputButton, { textAlign: "center" })}
                color={menuColorAllDrinks[1]}
                name="border-all"
                size={32}
              />
            </View>
            <Text
              style={{
                color: menuColorAllDrinks[3],
                marginTop: 12,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              All Drinks
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={changeToCocktail}
          >
            <View
              style={{
                backgroundColor: menuColorCocktail[2],
                alignItems: "center",
                justifyContent: "center",
                width: 70,
                height: 70,
                borderRadius: 50,
                borderColor: menuColorCocktail[0],
                borderWidth: 4,
              }}
            >
              <FontAwesome
                style={(styles.inputButton, { textAlign: "center" })}
                color={menuColorCocktail[1]}
                name="cocktail"
                size={32}
              />
            </View>
            <Text
              style={{
                color: menuColorCocktail[3],
                marginTop: 12,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Cocktail
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={changeToShot}
          >
            <View
              style={{
                backgroundColor: menuColorShot[2],
                alignItems: "center",
                justifyContent: "center",
                width: 70,
                height: 70,
                borderRadius: 50,
                borderColor: menuColorShot[0],
                borderWidth: 4,
              }}
            >
              <FontAwesome
                style={(styles.inputButton, { textAlign: "center" })}
                color={menuColorShot[1]}
                name="glass-whiskey"
                size={32}
              />
            </View>
            <Text
              style={{
                color: menuColorShot[3],
                marginTop: 12,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Shot
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={changeToDrinks}
          >
            <View
              style={{
                backgroundColor: menuColorDrinks[2],
                alignItems: "center",
                justifyContent: "center",
                width: 70,
                height: 70,
                borderRadius: 50,
                borderColor: menuColorDrinks[0],
                borderWidth: 4,
              }}
            >
              <FontAwesome
                style={(styles.inputButton, { textAlign: "center" })}
                color={menuColorDrinks[1]}
                name="glass-martini-alt"
                size={32}
              />
            </View>
            <Text
              style={{
                color: menuColorDrinks[3],
                marginTop: 12,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Drinks
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.textRecipes}>Recipes</Text>
        <Text style={styles.textRecipesName}>{recipesName}</Text>
        <FlatList
          style={styles.recipesList}
          showsVerticalScrollIndicator={false}
          data={listAllDrinks}
          ref={flatListRef}
          getItemLayout={(listAllDrinks,index) => ({length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index})}
          keyExtractor={(item) => item.idDrink}
          renderItem={({ item }) => <Drinks data={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menuDrinks: {
    flexDirection: "row",
    marginTop: 32,
    justifyContent: "space-around",
  },
  textMenu: {
    marginTop: 12,
    fontWeight: "bold",
    fontSize: 16,
  },
  imageMenu: {
    width: 70,
    height: 70,
  },
  container: {
    flex: 1,
    marginTop: 32,
    marginLeft: 20,
    marginRight: 20,
  },
  background: {
    backgroundColor: "#423560",
    flex: 1,
  },
  textHeader: {
    color: "#F5F5F5",
    fontSize: 24,
    fontWeight: "bold",
    shadowColor: "#000",
    marginTop: 32
  },
  textDiscover: {
    color: "rgba(238, 97, 81, 0.8)",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 32,
    marginBottom: 16,
  },
  textRecipes: {
    color: "rgba(238, 97, 81, 0.8)",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 32,
    marginBottom: 4,
  },
  textRecipesName:{
    color: "rgba(238, 97, 81, 1)",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 4,
    marginBottom: 16,
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
  },
  inputButton: {
    marginLeft: -40,
    zIndex: 10,
  },
});
