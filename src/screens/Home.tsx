import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import HomeHeader from "@components/HomeHeader";
import { HStack, VStack, FlatList, Heading, Text } from "native-base";
import { useState } from "react";

const groupsMoc = [
  "Perna",
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

const exercisesMoc = ["Puxada Alta", "Remada"];

export function Home() {
  const [groups, setGroups] = useState(groupsMoc); // [1
  const [exercises, setExercises] = useState(exercisesMoc); // [1
  const [groupSelected, setGroupSelected] = useState("perna");

  const handleGroupSelected = (group: string) => {
    setGroupSelected(group);
  };

  return (
    <VStack flex={1}>
      <HomeHeader />

      <HStack>
        <FlatList
          data={groups}
          keyExtractor={(group) => group}
          horizontal
          renderItem={({ item: group }) => (
            <Group
              onPress={() => handleGroupSelected(group)}
              name={group}
              isActive={groupSelected.toLocaleLowerCase() === group.toLocaleLowerCase()}
            />
          )}
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{
            px: 8,
            my: 10,
            maxHeight: 10,
          }}
        />
      </HStack>

      <VStack flex={1} px="8">
        <HStack justifyContent={"space-between"} mb={5}>
          <Heading color={"gray.200"} fontSize={"md"}>
            Exercicios
          </Heading>

          <Text color={"gray.200"} fontSize={"sm"}>
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <ExerciseCard />}
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{
            paddingBottom: 20,
          }}
        />
      </VStack>
    </VStack>
  );
}
