import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { SectionList, Heading, VStack } from "native-base";
import { useState } from "react";

export function History() {
  const [exerciseHistory, setExerciseHistory] = useState([
    {
      title: "26.08.22",
      data: ["Puxada Frontal", "Remada baixa"],
    },
    {
      title: "24.08.22",
      data: ["Puxada Frontal"],
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />
      <SectionList
        sections={exerciseHistory}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading color={"gray.200"} fontSize={"md"} mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        px={8}
      />
    </VStack>
  );
}
