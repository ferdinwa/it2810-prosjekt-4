import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TextStyle,
  ViewStyle,
} from "react-native";
import { SearchBar, Text, Button } from "react-native-elements";
import { Filter } from "./Filter";
import { getPlayers } from "../actions/playerActions";
import { IAppState } from "../interfaces";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../actions/modalActions";

export const Search = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (name: string) => {
    setName(name);
  };

  const pos = useSelector((state: IAppState) => state.position);
  const nat = useSelector((state: IAppState) => state.nation);
  const clu = useSelector((state: IAppState) => state.club);
  const ag = useSelector((state: IAppState) => state.age);
  const scor = useSelector((state: IAppState) => state.score);

  const handleSubmit = (show: boolean) => {
    getPlayers(name, pos, nat, clu, ag, scor, dispatch, 10, 0);
    dispatch(setModal(show));
  };

  const pmodal = useSelector((state: IAppState) => state.pmodal);

  return (
    <View>
      <Text style={styles.header}> FutHeader</Text>
      <View>
        <SearchBar
          placeholder="Search for FUT-players"
          value={name}
          onChangeText={handleChange}
        />
      </View>

      <Filter />
      <Button
        buttonStyle={{ borderRadius: 0 }}
        style={styles.button}
        title="SEARCH"
        onPress={() => handleSubmit(true)}
        type="solid"
      />
    </View>
  );
};

interface Styles {
  header: TextStyle;
  button: ViewStyle;
  page: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  header: {
    fontSize: 60,
    fontStyle: "italic",
    color: "#940000",
    textAlign: "center",
    marginTop: "50%",
    marginBottom: "5%",
  },

  button: {
    marginTop: 10,
  },
  page: {
    height: "100%",
  },
});
