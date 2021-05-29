import logo from './logo.svg';
import './App.css';
import { Canvas } from 'react-three-fiber';
import Sphere from './Sphere';
import Skybox from './Skybox';
import CameraControls from './CameraControls';

function App() {
  return (
    <Canvas>
      <Sphere />
      <Skybox />
      <CameraControls />
    </Canvas>
  );
}

export default App;
