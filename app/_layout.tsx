import { Stack } from 'expo-router';
import 'react-native-reanimated';

// SplashScreen.preventAutoHideAsync();

const IS_LOGGED_IN = true; // Replace with your authentication logic

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  // const [loaded, error] = useFonts({
  //   // 'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
  //   // 'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
  //   // 'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
  //   // 'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
  //   // 'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
  //   ...FontAwesome.font,
  // })

  // useEffect(() => {
  //   if (error) throw error;
  // }, [error]);

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <Stack>
      <Stack.Protected guard={IS_LOGGED_IN}>
        <Stack.Screen name="(private)" options={{ headerShown: false }} />
      </Stack.Protected>

      <Stack.Protected guard={!IS_LOGGED_IN}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack.Protected>
      {/* <StatusBar style="auto" /> */}
    </Stack>
    // </ThemeProvider>
  );
}