import Link from "next/link";
import HomeContentTitle from "./HomeContentTitle";

export const BlogPageBlogList = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
];
export const HomePageBlogList = BlogPageBlogList.slice(0, 4);

const Blog = (props) => {
  return (
    <div>
      <HomeContentTitle title="Blog" />
      {props.blogList.map((blog) => {
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
