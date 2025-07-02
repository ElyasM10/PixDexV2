import { Stack } from "expo-router";
import { DataProvider } from "../src/contexto/DataContext";

export default function RootLayout() {
  return (
    <DataProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </DataProvider>
  );
}