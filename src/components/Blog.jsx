import dayjs from "dayjs";
import Link from "next/link";
import { removeTags } from "src/utils/removeTags";
import HomeContentTitle from "./HomeContentTitle";

const Blog = (props) => {
  const blogDataList = props.blogData;
  return (
    <div>
      <HomeContentTitle title="Blog" />
      {blogDataList.map((blog) => {
        return (
          <Link href={`/blogPage/${blog.id}`} key={blog.id} prefetch={false}>
            <a className="mt-6 block transition duration-200 hover:opacity-60 ">
              <h3 className="text-[22px] font-bold">{blog.title}</h3>
              <div
                className="mt-2 text-ellipsis font-medium line-clamp-2"
                id="blogList" //idを指定して、id以下のCSSを指定したい
              >
                {removeTags(blog.body)}
              </div>
              <time
                dateTime={blog.publishedAt}
                className="mt-2 text-xs font-bold text-[#909296]"
              >
                {dayjs(blog.publishedAt).format("YYYY.MM.DD")}
              </time>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
