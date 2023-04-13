import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useEffect, useContext } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { OptionsContext } from "@options";

const Splash = ({
  route,
  duration,
  onDurationEnd
}) => {
  const navigation = useNavigation();
  const {} = route.params || {};
  const options = useContext(OptionsContext);

  const handleDurationEnd = () => {
    options.hide();

    if (onDurationEnd) {
      onDurationEnd();
    }

    if (options.onDurationEnd) {
      options.onDurationEnd();
    }
  };

  useEffect(() => {
    if (duration || options.duration) {
      setTimeout(() => {
        handleDurationEnd();
      }, duration || options.duration);
    } else {
      handleDurationEnd();
    }
  }, []);
  return <Pressable onPress={() => {
    navigation.navigate("signin");
  }}><View>
    </View></Pressable>;
};

Splash.propTypes = {
  duration: PropTypes.number,
  onDurationEnd: PropTypes.func
};
export default {
  title: "Splash",
  navigator: Splash
};