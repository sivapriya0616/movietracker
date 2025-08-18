import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return (
    <Stack>
      {/* Tabs Layout */}
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />

      {/* Dynamic movie details page */}
      <Stack.Screen
        name="movies/[id]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
