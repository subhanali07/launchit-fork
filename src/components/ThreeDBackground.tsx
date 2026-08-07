import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'

const INK = '#17150f'
const PINK = '#ff2e9a'

type DodecahedronProps = {
  position: [number, number, number]
  scale?: number
  color?: string
  speed?: number
}

function Dodecahedron({ position, scale = 1, color = PINK, speed = 0.01 }: DodecahedronProps) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * speed
    ref.current.rotation.y += delta * speed * 0.7
  })

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.15} flatShading />
    </mesh>
  )
}

function Stars() {
  const ref = useRef<THREE.Points>(null)
  const geometry = useMemo(() => {
    const count = 180
    const positions = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2
      sizes[i] = Math.random() * 0.045 + 0.015
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
    return geo
  }, [])

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.02
  })

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        opacity: 0.4,
        depthWrite: false,
        uniforms: { uColor: { value: new THREE.Color(INK) } },
        vertexShader: `
          attribute float size;
          varying vec3 vColor;
          void main() {
            vColor = vec3(0.09, 0.08, 0.06);
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * (140.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          void main() {
            float d = distance(gl_PointCoord, vec2(0.5));
            float alpha = smoothstep(0.5, 0.2, d);
            gl_FragColor = vec4(vColor, alpha);
          }
        `,
      }),
    [],
  )

  return <points ref={ref} geometry={geometry} material={material} />
}

export default function ThreeDBackground() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.4} />
        <Stars />
        <Dodecahedron position={[-3.6, 1.9, -2.5]} scale={1.5} speed={0.015} />
        <Dodecahedron position={[3.4, -1.6, -4]} scale={0.85} color={INK} speed={0.02} />
        <Dodecahedron position={[2.2, 2.4, -6]} scale={0.5} speed={0.03} />
      </Canvas>
    </div>
  )
}
