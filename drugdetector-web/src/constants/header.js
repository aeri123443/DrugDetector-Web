import '../styles/header.css';
import '../styles/color.css';
import '../styles/body.css';

const Header = (props) => {
  return (
    <header>
        <div class="wrap_header">
            <nav>
                <i class="logo"></i>
                <ul>
                    <li>
                        <div class="div_nav">
                            <span>사용자 관리</span>
                        </div>
                    </li>
                    <li>
                        <div class="div_nav">
                            <span class="nav_selected">이력 및 알림 관리</span>
                        </div>
                    </li>
                    <li>
                        <div class="div_nav">
                            <span>통계 분석</span>
                        </div>
                    </li>
                </ul>
            </nav>
            <div class="wrap_user">
                <div>&#9660; <span id="text_user-name">홍길동</span> 님 </div>
                <i class="menu_user"></i>
            </div>
        </div>
    </header>
  );
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default Header;
