import Link from "next/link";
import HomeContentTitle from "./HomeContentTitle";

const blogList = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

const Blog = () => {
  return (
    <div>
      <HomeContentTitle title="Blog" />
      {blogList.map((blog) => {
        return (
          <Link href="/blogPage/1" key={blog.id}>
            <a className="mt-6 block hover:opacity-60">
              <h3 className="text-[22px] font-bold">This is a header</h3>
              <p className="mt-2 text-ellipsis font-medium line-clamp-2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
              <p className="mt-2 text-xs font-bold text-[#909296]">
                2022.07.11
              </p>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
