import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAge } from "../actions/ageActions";
import { View } from "react-native";
import { RadioButton } from "react-native-paper";
import { Button } from "react-native-elements";
import { getScore } from "../actions/scoreAction";

export const SortScore = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = React.useState("0");

  const handleClick = (value: string) => {
    setValue(value);
    dispatch(getScore(Number(value)));
    setIsOpen(!isOpen);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const sortings: { [id: string]: string } = {
    "0": "No sort",
    "-1": "Descending",
    "1": "Ascending",
  };

  if (isOpen) {
    return (
      <View>
        <Button
          title={"Sort Score: " + sortings[value]}
          onPress={toggle}
          type="solid"
        />
        <RadioButton.Group
          onValueChange={(value) => handleClick(value)}
          value={value}
        >
          <RadioButton.Item label="No sort" value="0" />
          <RadioButton.Item label="Ascendig" value="1" />
          <RadioButton.Item label="Descending" value="-1" />
        </RadioButton.Group>
      </View>
    );
  } else {
    return <Button title={"Sort Score: " + sortings[value]} onPress={toggle} />;
  }
};