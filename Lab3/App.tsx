import React, { useState } from 'react';
import ProductList from './Question1/Products';
import Product_Add from './Question2/Product_Add';
import ProductDetail from './Question4/Product_Detail';
import ProductSearch from './Question3/Product_Search';
import { BottomNavigation } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Route {
  key: string;
  title: string;
  icon: string;
  focusedIcon?: string; // Thêm thuộc tính focusedIcon, có thể là không bắt buộc
}

const App = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState<Route[]>([
    { key: 'ProductList', title: 'Products', icon: 'list' },
    { key: 'Product_Add', title: 'Add', icon: 'add' },
    { key: 'ProductSearch', title: 'Search', icon: 'search' },
    { key: 'Product_Detail', title: 'Detail', icon: 'info' },
  ]);

  const renderIcon = ({ route, focused, color }: { route: Route; focused: boolean; color: string }) => {
    return <Icon name={route.icon} size={30} color={color} />;
  };

  const renderScene = BottomNavigation.SceneMap({
    ProductList: ProductList,
    Product_Add: Product_Add,
    ProductSearch: ProductSearch,
    Product_Detail: ProductDetail,
  });

  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        renderIcon={renderIcon}
      />
    </SafeAreaProvider>
  );
};

export default App;