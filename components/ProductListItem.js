import React from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

function ProductListItem(props ) {
  props.product.image =
    props.product.image.replace(/250/g, "50") +
    "?productId=" +
    props.product.id;
  const handlePress = () => {
    props.navigation.navigate('Product Details' , { productId : props.product.id })
  }
  return (
    <TouchableOpacity onPress = {() => handlePress()}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: 5,
          marginBottom: 5,
          paddingBottom: 5,
        }}
      >
        <Image
          style={{ marginLeft: 3, height: 50, width: 50, borderRadius: 100 }}
          source={{ uri: props.product.image }}
        />
        <View style={{ flex: 1 }}>
          <Text
            style={{
              marginLeft: 5,
              marginTop: 5,
              fontSize: 14,
              color: "#512B0B",
            }}
          >
            {props.product.name}
          </Text>
          <Text style={{ marginLeft: "76%", marginTop: 5 }}>
            {props.product.price} ͼ
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ProductListItem;
