import Navigation from './navigation';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Mantener la pantalla de carga visible
        SplashScreen.preventAutoHideAsync();

        // Cargar fuentes
        await Font.loadAsync({
          'Carattere-Regular': require('./assets/fonts/Carattere-Regular.ttf'),
          'DMSans-ExtraLight': require('./assets/fonts/DMSans-ExtraLight.ttf'),
          'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf')
        });

      } catch (e) {
        console.warn(e);
      } finally {
        // Ocultar la pantalla de carga
        setFontsLoaded(true);
        SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Navigation />
  )
}