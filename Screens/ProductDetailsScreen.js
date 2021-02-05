import React, { useEffect, useState } from "react";
import { View, Image, Text, Dimensions } from "react-native";
import ProductApi from "../api/product";

function ProductDetailsScreen(props) {
  const [product, setProduct] = useState([]);
  console.log(props.route)
  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const response = await ProductApi.getOneProduct(props.route.params.productId);
    response.data.data.image += "?id=" + response.data.data.id;
    setProduct(response.data.data);
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        marginTop: 5,
        marginBottom: 5,
        paddingBottom: 5,
      }}
    >
      <Image
        style={{
          marginLeft: 3,
          height: Dimensions.get("window").height * 0.6,
          width: "100%",
        }}
        source={{ uri: product.image }}
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
          {product.name}
        </Text>
        <Text style={{ marginLeft: "76%", marginTop: 5 ,color : 'darkred' , fontWeight : 'bold'}}>
          {product.price} ͼ
        </Text>
        <Text style={{ marginLeft: 5, marginTop: 5 }}>
          {product.description}
        </Text>
      </View>
    </View>
  );
}

export default ProductDetailsScreen;
