import { useParams } from 'react-router-dom';
import './Color.css';

export default function Color() {
  const { r, g, b } = useParams();

  return (
    <div className='color' style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      <h1>
        R: {r} G: {g} B: {b}
      </h1>
    </div>
  );
}
