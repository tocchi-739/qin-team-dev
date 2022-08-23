import dayjs from "dayjs";
import Link from "next/link";
import HomeContentTitle from "./HomeContentTitle";

const Blog = (props) => {
  const blogDataList = props.blogData;
  return (
    <div>
      <HomeContentTitle title="Blog" />
      {blogDataList.map((blog) => {
        return (
          <Link href={`/blogPage/${blog.id}`} key={blog.id}>
            <a className="mt-6 block hover:opacity-60">
              <h3 className="text-[22px] font-bold">{blog.title}</h3>
              <div
                className="mt-2 text-ellipsis font-medium line-clamp-2"
                dangerouslySetInnerHTML={{ __html: blog.body }}
              />
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
