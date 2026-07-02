type NewsCardProps = {
  title: string;
  description: string;
  image: string;
  source: string;
  publishedAt: string;
  url: string;
};
const NewsCard=({title,description,image,source,publishedAt,url,}:NewsCardProps)=>{
    return(
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all hover:shadow-xl">
        <div className="flex flex-col md:flex-row">

            <div className="md:w-1/3">
            <img
                src={image}
                alt={title}
                className="h-56 w-full object-cover md:h-full"
            />
            </div>

            <div className="flex flex-1 flex-col justify-between p-6">

            <div>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                {source}
                </span>

                <h2 className="mt-4 text-2xl font-bold text-gray-900">
                {title}
                </h2>

                <p className="mt-3 line-clamp-3 text-gray-600">
                {description}
                </p>
            </div>

            <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-gray-500">
                {publishedAt}
                </span>

                <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                >
                Read More →
                </a>
            </div>

            </div>
        </div>
        </div>
    )
}
export default NewsCard