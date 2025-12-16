import './BackgroundDecor.scss';
import BottomDecor from './BottomDecor';
import TopDecor from './TopDecor';

function BackgroundDecor({ variant }) {
  return (
    <div className={`background-decor background-decor--${variant}`}>
      {variant === 'top' && <TopDecor />}
      {variant === 'bottom' && <BottomDecor />}
    </div>
  );
}

export default BackgroundDecor;
