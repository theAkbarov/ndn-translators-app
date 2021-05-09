import { Link } from 'react-router-dom';

import './Header.scss'





import { useTranslation } from "react-i18next";

const Header = () => {
	
  const { t, i18n } = useTranslation();


	window.addEventListener('scroll', () => {
		const Header = document.querySelector('.header')
		if (window.scrollY > 95) {
			Header.style.background = "#D6DFEE"
			document.getElementById('header-links').classList.add('color-header')
		} else {
			Header.style.background = "transparent"
			document.getElementById('header-links').classList.remove('color-header')
		}
	})



	function BurgerButton() {
		const menuWrapper = document.querySelector('#menu-mobile');
		menuWrapper.classList.toggle('active')
		document.getElementById('body').classList.toggle('no-scrol')
		document.getElementById('burger-icon').classList.toggle('none')
		// document.getElementById('closs-icon').classList.toggle('show')

	}

	const handleClick = (lang) => {
		i18n.changeLanguage(lang);
	}
	
	function ClosseBurgerMenu() {
		const menuWrapper = document.querySelector('#menu-mobile');
		menuWrapper.classList.remove('active')
		document.getElementById('body').classList.remove('no-scrol')
		document.getElementById('burger-icon').classList.remove('none')
		
	}

	return (
    <header className="header">
      <div className="header-inner container">
        <Link to={`/`} className="header-inner-left">
          {/* <img src="" alt="logo" className="header-inner-left-logo"/> */}
          Translators.uz
        </Link>

        <div className="menu-mobile " id="menu-mobile">
          <nav className="header-inner-nav">
            <ul className="header-inner-nav-inner" id="header-links">
              <li className="header-inner-nav-inner-item">
                <Link
                  to="/"
                  className="header-inner-nav-inner-item__link"
                  onClick={ClosseBurgerMenu}
                >
                  {t("sidebar.home")}
                </Link>
              </li>
              <li className="header-inner-nav-inner-item">
                <Link
                  to="/about-us"
                  className="header-inner-nav-inner-item__link"
                  onClick={ClosseBurgerMenu}
                >
                  {t("sidebar.about_us")}
                </Link>
              </li>
              <li className="header-inner-nav-inner-item">
                <Link
                  to="/services"
                  className="header-inner-nav-inner-item__link"
                  onClick={ClosseBurgerMenu}
                >
                  {" "}
                  {t("sidebar.services")}
                </Link>
              </li>
              {/* <li className="header-inner-nav-inner-item">
								<Link to="/team" className="header-inner-nav-inner-item__link">
									Team
								</Link>
							</li> */}
              <li className="header-inner-nav-inner-item">
                <Link
                  to="/contacts"
                  className="header-inner-nav-inner-item__link"
                  onClick={ClosseBurgerMenu}
                >
                  {" "}
                  {t("sidebar.contacts")}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header-inner-links">
            <div className="wrapper">
              <button onClick={() => handleClick("eng")}>ENG</button>
              <button onClick={() => handleClick("ru")}>RU</button>
              <button onClick={() => handleClick("uz")}>UZ</button>
            </div>
            <a
              href="https://www.facebook.com/translators.uz"
              target="blabk"
              className="header-inner-links-item"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
                  fill="#fff"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/translators.uz/"
              target="blabk"
              className="header-inner-links-item"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                  fill="#FFF"
                />
                <path
                  d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                  fill="#FFF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                  fill="#FFF"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="burger-menu" onClick={BurgerButton}>
          <div id="burger-icon">
            <svg
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="3" fill="white" />
              <rect y="7" width="20" height="3" fill="white" />
              <rect y="14" width="20" height="3" fill="white" />
            </svg>
          </div>
          <div id="closs-icon">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.99989 6.37869L2.98948 0.368286L0.868164 2.48961L6.87857 8.50001L0.868164 14.5104L2.98948 16.6317L8.99989 10.6213L15.0103 16.6317L17.1316 14.5104L11.1212 8.50001L17.1316 2.48961L15.0103 0.368286L8.99989 6.37869Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;