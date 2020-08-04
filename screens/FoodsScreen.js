import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import DrawerMenuButton from '../components/DrawerMenuButton';

const FoodsScreen = ({navigation}) => {
  const createButton = () => {
    return <DrawerMenuButton navigation={navigation} />;
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: createButton,
    });
  }, []);

  return (
    <View>
      <Text>Foods Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default FoodsScreen;
