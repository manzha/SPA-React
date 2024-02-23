import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const lngs = {
  "en": { nativeName: 'English' },
  "es": { nativeName: 'Spanish' }
};

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Driscolls App
          </span>
        </Link>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link to="/Users" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          {t('users.title')}
          </Link>
          <Link to="/News" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          {t('news.title')}
          </Link>
        </div>
      </div>
      {Object.keys(lngs).map((lng) => (
            <button className="m-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng as keyof typeof lngs].nativeName}
            </button>
          ))}
    </nav>
  );
};

export default Header;
