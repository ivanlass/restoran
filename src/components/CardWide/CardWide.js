import Card from 'react-bootstrap/Card'
import NumberPicker from '../sharedComponents/NumberPicker/NumberPicker';
import styles from "./cardWide.module.css"
import sharedStyles from '../../utils/sharedStyles.module.css'


function CardWide() {
  return (
    <div className={styles['card-wide']}>
      <Card >
        <Card.Img  style={{height:"200px"}} variant="top" src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2%2FBabySpinach.jpg&w=750&q=75" />
        <Card.Body>
          <h3 className={sharedStyles['label']}>6 KM</h3>
          <h3 className={sharedStyles['label-dim']}>Cobanac</h3>
        </Card.Body>
        <NumberPicker />
      </Card>
    </div>
    );
  }
  
export default CardWide;
  