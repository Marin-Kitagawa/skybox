import React, { useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { 
    useFrame, 
    useThree,
    extend 
} from 'react-three-fiber';
extend({ OrbitControls })
function CameraControls() {
    const {
        camera, 
        gl: { domElement }
    } = useThree();
    const controls = useRef();
    useFrame(() => controls.current.update());
    return (
        <orbitControls
            ref={controls}
            args={[camera, domElement]}
            autoRotate={true}
            enableZoom={false}
        />
    )
}

export default CameraControls


