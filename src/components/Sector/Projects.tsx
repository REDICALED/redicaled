import { ProjectCard } from "@/components/ProjectCard";
import fdf from "@/assets/fdf.png";
import hnhyn from "@/assets/hnhynkr.png";
import pong from "@/assets/pong.png";
import text from "@/assets/1111.png";


export const Projects = () => {
    return (
        <div
        >
        <h1 id="projects" className=" my-5 text-center text-4xl">Projects</h1>
        <hr className=" h-0.5 mx-[10vw] bg-black" />
        <div className="mx-[10vw] transform-none  ">
            <ProjectCard 
            title="HnHyn.kr" 
            date="2024. 02 ~ " 
            img={hnhyn}
            description={
            <p> 
                <span className="text-xl font-semibold">작가 웹사이트 개발 외주 </span>
                <a target="_blank" className=" italic font-bold hover:underline transition-all duration-300 underline" href="https://www.hnhyn.kr">(www.hnhyn.kr)</a><br />
                React를 이용한 프론트 구현, Git - Vercel을 이용한 <span className=" font-semibold">배포 자동화 구현</span><br />
                최소한의 REST API 기능 구현과 배포 자동화를 통한 <span className=" font-semibold"> 비용 최적화</span><br />
                <span className=" font-semibold">작가와의 협업</span>을 통한 UX/UI 디자인 구현<br />
                <span className=" font-semibold">1인 개발</span>로 사이트 디자인 기획, 디자인, 코드 개발, 퍼블리싱 경험 <br />
            </p>
            }
            stack={["React", "Vercel", "Octokit", "TailwindCSS", "TypeScript", "FramerMotion"]}
            lastline={true}
            />
        <ProjectCard 
            title="42 Projects" 
            date="2022. 03 ~ 2024. 02" 
            img={fdf}
            description={
            <p> 
                <span className="text-xl font-semibold"> 42서울 본 과정 교육 과제 </span><br />
                Linux Shell, C, C++ 등 저수준에서의 <span className=" font-semibold">핵심 CS 지식 학습</span><br />
                Shell, Raycasting, IRC(Internet Relay Chat) 등 자체 라이브러리만으로 <span className=" font-semibold">C/C++</span>로 구현<br />
                저수준 환경에서의 소켓통신, 3D 시각화 등 독창적인 소프트웨어 개발 경험<br />
                2년 기간 동안 <span className=" font-semibold">동료 학습</span>을 통한 협업 경험 <br />
            </p>
            }
            stack={["Linux", "C", "C++", "Docker", "Nest.Js", "React", "Makefile"]}
            lastline={true}
            />

        <ProjectCard 
            title="Pong Game" 
            date="2023. 10 ~ 2023. 12" 
            img={pong}
            description={
            <p> 
                <span className="text-xl font-semibold"> 웹 게임 서비스 PONG </span><br />
                Nest.js, Postgresql을 기반으로 한 <span className=" font-semibold">백엔드 구현 </span><br />
                REST API, Oauth, 소켓 통신에 대한 이해도 학습<br />
                <span className=" font-semibold">작가와의 협업</span>을 통한 UX/UI 디자인 구현<br />
            </p>
            }
            stack={["React", "Postgresql", "Docker", "Nest.Js", "TypeScript"]}
            lastline={true}
            />
            <ProjectCard 
            title="Pong Game" 
            date="2023. 10 ~ 2023. 12" 
            img={text}
            description={
            <p> 
                <span className="text-xl font-semibold"> VISION 2022 전시 프로그래밍 도움 (토이프로젝트)</span><br />
                2022 중앙대 사진학과 전시 참여자들을 위한 프로그래밍 개발<br />
                일반인에게 다소 낯선 Shell 환경에서의 전시 참여 경험 유도<br />
            </p>
            }
            stack={["Linux", "C", "Web Art"]}
            lastline={false}
            />
        </div>
        </div>
    )
}