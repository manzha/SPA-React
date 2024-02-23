import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
 
function NewsItem(props: { desc: any; title: any; imageURL: any; newsUrl: any; sourceName: any; content: any;}) {
  const { t } = useTranslation();
    let {
        desc, title, imageURL,
        newsUrl, sourceName, content
    } = props;

    return (
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          title="Placeholder image"
        >
          <img src={imageURL} className="card-img-top h-48 " />
        </div>
        <div className="p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              {title}
            </div>
            <p className="text-gray-700 text-base">
            {desc}
            </p>
            <Link to="/News/Details" state={{ title, content, sourceName, imageURL }} className="text-gray-900 leading-none mt-5 hover:underline font-bold">{t('news.keepreading')}</Link>
          </div>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="https://placehold.co/50"
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{sourceName}</p>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default NewsItem;