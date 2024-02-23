import { useLocation } from "react-router-dom";
 
// This can be improved, the news api that I found won't fetch the whole content of an article. I am passing what I had but we could fetch the whole article when requested in here by ID
function NewsDetail() {
  const location = useLocation()
  const { title, content, sourceName, imageURL } = location.state

    return (
      <div className="max-w-sm w-full lg:max-w-full lg:flex m-5">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          title="Placeholder image"
        >
          <img src={imageURL} className="card-img-top h-48 " alt="..." />
        </div>
        <div className="p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              {title}
            </div>
            <p className="text-gray-700 text-base">
            {content}
            </p>
          </div>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="https://placehold.co/50"
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{sourceName}</p>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default NewsDetail;