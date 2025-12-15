import './Header.scss';
import avatarImg from '../../assets/images/avatar.jpg';
import DateRange from '../ DateRange/DateRange';

function Header() {
  return (
    <header className="profile">
      <div className="profile__avatar">
        <img
          className="profile__avatar-img"
          src={avatarImg}
          alt="Profile avatar"
        />
      </div>
      <div className="profile__info">
        <div className="profile__info-top">
          <h1 className="profile__name">monblanproject</h1>
          <div className="profile__startDate">Start on 17-02-2016</div>
        </div>

        <ul className="profile__stats">
          <li className="profile__stats-item">
            <strong>870</strong> posts
          </li>
          <li className="profile__stats-item">
            <strong>11,787</strong> followers
          </li>
          <li className="profile__stats-item">
            <strong>112</strong> following
          </li>
        </ul>

        <DateRange />
      </div>
    </header>
  );
}

export default Header;
