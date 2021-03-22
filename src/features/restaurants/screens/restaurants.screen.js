import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { ThemeContext } from "styled-components";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs((props) => ({
  contentContainerStyle: {
    // padding: props.theme.space[3],
    padding: 16,
  },
}))``;

export const RestaurantsScreen = () => {
  const theme = useContext(ThemeContext);
  console.log("Current theme: ", theme.space[3]);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        theme={theme}
        data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name.toString()}
      />
    </SafeArea>
  );
};
