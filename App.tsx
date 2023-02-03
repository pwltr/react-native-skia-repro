import React, {ReactElement} from 'react';
import {StyleSheet} from 'react-native';
import {
  Canvas,
  Fill,
  LinearGradient,
  useComputedValue,
  useValue,
  vec,
} from '@shopify/react-native-skia';

const App = (): ReactElement => {
  const size = useValue({width: 0, height: 0});
  const start = vec(0, 0);
  const end = useComputedValue(() => vec(0, size.current.height), [size]);
  const colors = ['#111', '#000'];

  return (
    <Canvas style={styles.canvas} onSize={size}>
      <Fill>
        <LinearGradient start={start} end={end} colors={colors} />
      </Fill>
    </Canvas>
  );
};

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
  },
});

export default App;
