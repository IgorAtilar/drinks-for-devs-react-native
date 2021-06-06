import React, { useState, useEffect } from "react";
import api from "./src/services/api";
import HomeScreen from "./src/pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Loading from "./src/pages/Loading";
import Result from "./src/pages/Result";
import Search from "./src/pages/Search";
const Stack = createStackNavigator();
export default function App() {
  const [drinks, setDrink] = useState([]);
  const [loading, setLoading] = useState(true);
  const arr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  let aux = [];

  useEffect(() => {
    async function getApi() {
      for (let i = 0; i < arr.length; i++) {
        try {
          let response = await api.get("search.php?f=" + arr[i]);
          if (response.data.drinks) {
            response.data.drinks.forEach((element) => {
              aux.push(element);
            });
          }
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
      setDrink(aux);
    }
    getApi();
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    const home = () => <HomeScreen data={drinks} />;

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Result"
            component={Result}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
