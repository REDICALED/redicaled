import { ProjectCard } from "@/components/ProjectCard";
import fdf from "@/assets/fdf.png";
import hnhyn from "@/assets/hnhynkr.png";
import duldol from "@/assets/duldol.png";
import pong from "@/assets/pong.png";
import text from "@/assets/1111.png";
import { useState } from "react";


export const Projects = (props: any) => {
    const [description, ShowDescription] = useState(false);
    const [project, setProject] = useState("hnhyn");

    return (
        <div id="projects" className="transform-none text-center grid grid-rows-4 h-[200vh] gap-0">
        <ProjectCard 
        title="Artist Websites" 
        date="2024. 02 ~ " 
        img={ project === "hnhyn" ? hnhyn : duldol}
        description={
        <p> 
            <p className="text-xl font-semibold">작가 웹사이트 개발 외주 </p>
            <div className="flex">
            <a target="_blank" className=" pr-5 group font-semibold text-2xl" href='https://www.hnhyn.kr'>
                <span onMouseEnter={()=>setProject("hnhyn")} className="text-base font-normal group-hover:font-bold "> www.hnhyn.kr  </span>
                <div className="bg-black h-[1px] w-0 group-hover:w-full transition-all duration-500"></div>
            </a>
            <a target="_blank" className=" pr-5 group font-semibold text-2xl" href='https://www.duldoljimi.com'>
                <span onMouseEnter={()=>setProject("duldol")} className="text-base font-normal group-hover:font-bold "> www.duldoljimi.com  </span>
                <div className="bg-black h-[1px] w-0 group-hover:w-full transition-all duration-500"></div>
            </a>
            </div>

            React를 이용한 프론트 구현, Git - Vercel을 이용한 <span className=" font-semibold">배포 자동화 구현</span><br />
            REST API를 이용한 관리자, 에디터 기능 구현과 배포 자동화를 통한 <span className=" font-semibold"> 비용 최적화</span><br />
            <span className=" font-semibold">작가와의 협업</span>을 통한 개개인 맞춤형 UX/UI 디자인 구현<br />
            <span className=" font-semibold">1인 개발</span>로 사이트 기획, 디자인, 코드 개발, 퍼블리싱 경험 <br />
        </p>
        }
        stack={["React", "Vercel", "Octokit", "TailwindCSS", "TypeScript", "FramerMotion"]}
        num={props.num}
        />
        <ProjectCard 
            title="42 Projects" 
            date="2022. 03 ~ 2024. 02" 
            img={fdf}
            description={
            <p> 
                <span className="text-xl font-semibold"> 42서울 본 과정 교육 과제 </span><br />
                Linux Shell, C, C++ 등 30여개의 과제를 통한 <span className=" font-semibold">핵심 CS 지식 학습</span><br />
                Shell, Os, 가상환경, Raycasting, IRC(Internet Relay Chat) 등 <span className=" font-semibold">C/C++</span>로 구현<br />
                저수준 환경에서의 소켓통신, 3D 시각화 등 독창적인 소프트웨어 개발 경험<br />
                2년 기간 동안 <span className=" font-semibold">동료 학습</span>을 통한 협업 경험 <br />
            </p>
            }
            stack={["Linux", "C", "C++", "Docker", "Nest.Js", "React", "Makefile"]}
            num={props.num}
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
                게임 개발, 백엔드, 프론트 총 5명의 팀원과의  <span className=" font-semibold">협업 경험</span>
            </p>
            }
            stack={["React", "Postgresql", "Docker", "Nest.Js", "TypeScript"]}
            num={props.num}
            />

        <ProjectCard 
            title="TEXT SITE, 2022" 
            date="2022. 11 ~ 2022. 12" 
            img={text}
            description={
            <p> 
                <span className="text-xl font-semibold"> 중앙대 사진학과 졸업전시 VISION 2022 </span><br />
                2022 중앙대 사진학과 졸업전시 작품 프로그래밍 개발<br />
                일반인에게 낯선 Shell 환경에서의 전시 참여 방식 구현<br />
                <button  onClick={()=>{ShowDescription(!description);}} className="  italic font-semibold underline ">작품 설명 </button> <br/>
                { <span className={ description ? "opacity-100 ease-in-out transition-all duration-500" : " h-0 fixed opacity-0 ease-in-out transition-all duration-500" }>
                링크를 타고 특정 페이지 안에 머무르며 끊임없이 다른 곳들을 염두에 두는 읽기와 쓰기는 그것이 공간성을 가졌음을 암시한다. 내가 머무르고 있는 그 공간은 어디일까?컴퓨터에서 알파벳처럼 문자로 인식되는 그림인 이모지(Emoji)를 들여다 보며 공간을 떠올리게 하는 두 개의 단서를 찾았다. <br/>
                각각 두 개의 공간을 이미지로 연장하여 앞뒤로 나란히 배치했다. 먼저 이모지의 외형에 비친 흐릿한 푸른빛과 붉은 빛을 보며 형태에 암시된 공간을 감각했다. 이 색들을 추출해 그라데이션을 만든 뒤 AI 이미지 프로그램에 입력해 풍경 이미지를 획득했다. 두번째로 이모지를 비롯하여 컴퓨터에서 사용되는 모든 문자 언어가 가지고 있는 고유한 자리인 유니코드(Unicode)를 보며 구글의 좌표코드(Plus codes)와 기능적으로 형태적으로 유사함을 느꼈다.<br/>
                유니코드를 좌표코드처럼 해석하여 지구상의 위치를 찍어주는 임의의 프로그램을 만들어, 해당 위치의 위성 사진을 획득했다.<br/>
                하나의 문자에서 기인한 두 개의 공간은 실재하는 듯 실재하지 않거나, 실재하지만 그 연결고리는 모호한 별개의 공간이다. 이 만남은 어울리는 듯 어긋나며 눈앞의 놓인 공간이 결국 어디인지 헷갈리게만 만든다. 이렇듯 혼란한 위치 감각은 웹에서 느끼는 어렴풋한 공간감과 연결된다. 공간은 있지만 위치는 없는, 명확한 경로도 없는 공허한 어딘가를 감각해 보려 했다.
                </span> 
            }
        
                </p>
                
            }
            stack={["Linux", "C", "Web Art"]}
            num={props.num}
            />
            </div>
    )
}