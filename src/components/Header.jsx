// 画像をそれぞれimportします。パスに注意してください。
import CoverImage from '../images/cover.jpeg';
import ProfileImage from '../images/icon.png';

export const Header = () => {
  return (
    <header className="main-cover" style={{ backgroundImage: `url(${CoverImage})` }}>
      {/* overlayはカバー画像の上に透過して表示される背景要素です */}
      <div className="overlay"></div>
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            {/* カバー画像 */}
            <div className="profile-thumb" style={{ backgroundImage: `url(${ProfileImage})` }}></div>
            {/* 名前と肩書はみなさんのお名前や肩書を自由に入れてください */}
            <h1 className="title-text">あなたの名前</h1>
            <h3 className="title-text">あなたの肩書(ex.Engineer)</h3>
            <ul className="social-icons">
              <li className="icon-link">
                {/* TODO */}
              </li>
              <li className="icon-link">
                {/* TODO */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
