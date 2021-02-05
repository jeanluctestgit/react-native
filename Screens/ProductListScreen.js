import React , { useEffect, useState }  from 'react'
import ProductListItem from '../components/ProductListItem';
import {
    FlatList,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    StatusBar,
    View,
    Image,
  } from "react-native";
import ProductApi from '../api/product';

function ProductListScreen({ navigation }) {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  } , []);


  const loadProducts = async () => {
    const response = await ProductApi.getProductsApi();
    setProducts(response.data.data);
  }
    return (
        <FlatList
        data={products}
        keyExtractor={(product) => product.id.toString()}
        renderItem={({ item }) => {
          return <ProductListItem product={item} navigation = { navigation } />;
        }}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                marginBottom: 5,
                marginTop: 5,
                borderBottomColor: "grey",
                borderBottomWidth: 1,
              }}
            />
          );
        }}
      />
    )
}

export default ProductListScreen
