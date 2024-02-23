import { Group } from "@components/Group";
import HomeHeader from "@components/HomeHeader";
import { HStack, VStack, FlatList } from "native-base";
import { useState } from "react";

const groupsMoc = [
  "perna",
  "costa",
  "ombro",
  "peito",
  "biceps",
  "triceps",
  "abdomen",
  "antebraco",
  "panturrilha",
  "gluteo",
];

export function Home() {
  const [groups, setGroups] = useState(groupsMoc); // [1
  const [groupSelected, setGroupSelected] = useState("perna");

  const handleGroupSelected = (group: string) => {
    setGroupSelected(group);
  };

  console.log(groups);

  return (
    <VStack flex={1}>
      <HomeHeader />

      <HStack>
        <FlatList
          data={groups}
          keyExtractor={(group) => group}
          horizontal
          renderItem={({ item: group }) => (
            <Group onPress={() => handleGroupSelected(group)} name={group} isActive={groupSelected === group} />
          )}
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{
            px: 8,
            my: 10,
            maxHeight: 10,
          }}
        />
      </HStack>
    </VStack>
  );
}
