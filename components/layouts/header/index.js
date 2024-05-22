import { useSelector } from 'react-redux';

export const Header = () => {
  const rtl = useSelector((state) => state.language.theme);
  return (
    <>
        <header>
            <h1>URL Data Fetcher</h1>
        </header>
    </>
  );
};

export default Header;
