import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import HomePage from "../Sreens/User/Home/HomePage";
import AccountPage from "../Sreens/User/Account/AccountPage";
import UsersOrdersPage from "../Sreens/User/UserOrders/UsersOrdersPage";
import CartPage from "../Sreens/User/Cart/CartPage";

const Tab = createMaterialBottomTabNavigator();
function TabNavigator() {
 

  return (
    <Tab.Navigator
      className="bg-green-200"
      tabBarOptions={{
        showLabel: false,
        style: { backgroundColor: "red", border: 1 },
        className: "bg-red-300",
      }}
    >
      
          <Tab.Screen
            name="Home"
            component={HomePage}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ focused }) => (
                <View className="text-center  items-center bg-slate-600">
                  <MaterialCommunityIcons
                    name="home"
                    size={24}
                    color={focused ? "#08C25E" : "gray"}
                  />

                  <Text
                    className="my-1 text-xs text-gray-500 w-12 text-center"
                    style={{
                      color: focused ? "#08C25E" : "gray",
                      
                    }}
                  >
                    Home
                  </Text>
                </View>
              ),
            }}
          />

          <Tab.Screen
            name="Cart"
            component={CartPage}
            options={{
              tabBarLabel: "",

              tabBarIcon: ({ focused }) => (
                <View className="text-center  items-center rounded-full relative ">
                  
                  <FontAwesome5
                    name="shopping-basket"
                    size={20}
                    color={focused ? "#08C25E" : "gray"}
                  />
                  <Text
                    className="my-1 text-xs text-gray-500 text-center"
                    style={{
                      color: focused ? "#08C25E" : "gray",
                      
                    }}
                  >
                    Cart
                  </Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="userOrders"
            component={UsersOrdersPage}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ focused }) => (
                <View className="text-center  items-center">
                  <MaterialCommunityIcons
                    name="shopping-outline"
                    size={20}
                    color={focused ? "#08C25E" : "gray"}
                  />
                  <Text
                    className="my-1 text-xs text-gray-500 text-center w-[100%]"
                    style={{
                      color: focused ? "#08C25E" : "gray",
                      
                    }}
                  >
                  Orders
                  </Text>
                </View>
              ),
            }}
          />
         
     
      <Tab.Screen
      name="Account"
      component={AccountPage}
      options={{
        tabBarLabel: "",
        tabBarIcon: ({ focused }) => (
          <View className="text-center  items-center">
            <MaterialCommunityIcons
              name="account-multiple"
              size={20}
              color={focused ? "#08C25E" : "gray"}
            />
            <Text
              className="my-1 text-xs  text-center w-[100%] "
              style={{
                color: focused ? "#08C25E" : "gray",
                
              }}
            >
              Account
            </Text>
          </View>
        ),
      }}
    />
    </Tab.Navigator>
  );
}

export default TabNavigator;
