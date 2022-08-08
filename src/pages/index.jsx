import Button from "src/components/Button";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import HomeContentTitle from "src/components/HomeContentTitle";

const Home = () => {
  return (
    <div class="m-auto max-w-[390px]">
      <Header />
      <main>
        <div class="h-[248px] bg-[#E64980] text-white">
          <div class="mx-auto w-[358px] pt-[53.5px]">
            <h2>Shimabu IT University</h2>
            <p>しまぶーのポートフォリオのためのページです</p>
            <ul class="mt-[43.5px] flex">
              <li class="mr-2">twitter</li>
              <li class="mr-2">facebook</li>
              <li>radio</li>
            </ul>
          </div>
        </div>
        <div>
          <HomeContentTitle title="Blog" />
          <div class="mx-auto w-[358px]">
            <h3>This is a header</h3>
            <p class="mt-2 text-ellipsis">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consuequ
            </p>
            <p class="mt-2">2022.07.11</p>
          </div>
          <Button text="View All" />
        </div>
        <div>
          <HomeContentTitle title="Protfolio" />
          <div>
            <img></img>
            <h3>IT KINGDOM</h3>
            <p>
              当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうどいい難易度の制作物です。
            </p>
            <date>2021.10-2021.12</date>
          </div>
          <Button text="View All" />
        </div>
        <div>
          <HomeContentTitle title="GitHub" />
          <div>
            <h3>lightsound/nexts-tailwind</h3>
            <p>Next.js starter template.</p>
            <ul>
              <li>☆117</li>
              <li>アイコン 18</li>
            </ul>
            <div>横棒</div>
            <div>
              <ul>
                <li>○</li>
                <li>TypeScript</li>
                <li>65.5%</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>○</li>
                <li>Javascript</li>
                <li>33.7%</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>○</li>
                <li>Other</li>
                <li>0.8%</li>
              </ul>
            </div>
          </div>
          <Button text="View on GitHub" />
        </div>
        <div>
          <HomeContentTitle title="Twitter" />
          <div>中身</div>
          <Button text="View on Twitter" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
