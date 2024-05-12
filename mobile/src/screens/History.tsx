import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { SectionList, Heading, VStack, Text } from "native-base";
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
          <Heading fontFamily={"heading"} color={"gray.200"} fontSize={"md"} mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        contentContainerStyle={!exerciseHistory.length && { flex: 1, justifyContent: "center", alignItems: "center" }}
        px={8}
        ListEmptyComponent={() => (
          <Text color={"gray.100"} textAlign={"center"}>
            Não há exercícios registrados ainda.{"\n"}
            Vamos fazer exercícios hoje?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}
