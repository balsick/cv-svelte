<script>
  import HW from "./components/HighlightWord.svelte";
  import CVS from "./components/CVSection.svelte";
  import Divider from "./components/CVDivider.svelte";
  import pdf from "./assets/cv.pdf";
  import Fa from 'svelte-fa';

  import { faLocationDot, faBirthdayCake, faBuildingColumns, faMobile, faAt, faDatabase, faMicrochip, faPersonRays, faLanguage, faThumbsUp, faBookOpen, faPersonSwimming, faFutbol, faArrowTrendUp, faTv, faDownload } from '@fortawesome/free-solid-svg-icons'

  import { faReact, faVuejs, faJava, faJs, faAws, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons'
  let downloadRef

  const skills = [
    "java",
    "react",
    "vuejs",
    "aws",
    "nodejs",
    "spring",
    "docker",
    "npm",
    "postgresql",
    "firebase",
    "influx",
    "redis",
  ]
  const personalInfo = [
    {
      icon: faBirthdayCake,
      text: "December 03, 1992",
    },
    {
      icon: faAt,
      text: "balsick@gmail.com",
    },
    {
      icon: faLocationDot,
      text: "Torino (TO) - Italy",
    },
    {
      icon: faMobile,
      text: "+39 340 14 66 912",
    },
    {
      icon: faGithub,
      text: "balsick",
    },
    {
      icon: faStackOverflow,
      text: "user:2331491",
    },
  ]

  const languages = {
    Italian: "Native speaker",
    English: "Fluent",
  }

  const passions = [
    {
      icon: faBookOpen,
      text: "Reading (find me on Goodreads)",
    },
    {
      icon: faPersonSwimming,
      text: "Swimming, running, trekking",
    },
    {
      icon: faFutbol,
      text: "Watching sports",
    },
    {
      icon: faTv,
      text: "Movies and TV shows",
    },
    {
      icon: faArrowTrendUp,
      text: "Finance",
    },
  ]

  const experiences = [
    {
      title: "Freelance",
      since: "2022",
      description:
        "I have started helping companies speed up the development of their projects",
    },
    {
      title: "Software Architect @ AEC Soluzioni srl",
      since: "February, 2015",
    },
  ]
</script>

<main class="bg-primary ">
  <div class="container mx-auto columns-1 h-full px-0 print-font">
    <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-2 gap-x-0 h-full w-full">

      <div id="left" class="col-span-1 bg-primary grid grid-cols-1 gap-y-1 sm:mx-8 mx-0 mt-0 px-2 sm:px-4 pt-2 sm:pt-4 text-sm text-white align-content-start">
        <div class="block sm:hidden">
          <h1 class="text-4xl text-start"><HW>Enrico</HW> Balsamo</h1>
          <h6 class="text-start font-semibold">Software is my thing</h6>
        </div>
        <div class="no-print col-auto sm:hidden block pt-2 flex ">
          <a href={pdf} bind:this={downloadRef} download class="grow-0 flex rounded bg-white text-primary p-1 uppercase font-bold text-decoration-none"><Fa icon={faDownload} />&nbsp;Download</a>
        </div>
        <div class="w-full mx-auto justify-content-center"><img alt="Picture of me" src="/me.png" class="rounded-full" /></div>
        <Divider />
        <CVS icon={faPersonRays} title="Personal Information" data={personalInfo} ></CVS>
        <CVS icon={faMicrochip} title="Main technologies">
          <div class="mx-0 mt-0 px-0 columns-4">
            {#each skills as s, i (s + i)}
            <img src={`/skills/icon/${s}.svg`} class="m-auto h-9 my-2" alt={s}/>
            {/each}
          </div>
        </CVS>
        <CVS icon={faBuildingColumns} title="University">
          <span><b>2018</b> - Master's Degree in Computer Engineering</span>
          <span><b>2014</b> - Bachelor's Degree in Computer Engineering</span>
        </CVS>
        <CVS icon={faLanguage} title="Languages">
          {#each Object.entries(languages) as [level, lang], i (lang)}
          <span><b>{lang}</b> - { level }</span>
          {/each}
        </CVS>
        <CVS icon={faThumbsUp} title="What I like" data={passions} noDivider />
      </div>

      <div id="right" class="grid grid-cols-4 col-span-1 sm:col-span-2 gap-x-8 bg-white mx-0 mt-0 px-8 pt-4 align-content-start">
        <div class="hidden sm:block col-span-3">
          <h1 class="text-5xl text-start mb-2 font-medium"><HW>Enrico</HW> Balsamo</h1>
          <h6 class="text-start font-medium">Software is my thing</h6>
        </div>
        <!-- <div class="no-print col-auto hidden sm:block pt-2">
          <a href={pdf} download class="rounded bg-white text-primary p-1 uppercase font-bold text-decoration-none"><Fa icon={faDownload} />&nbsp;Download</a>
        </div> -->
        <div class="no-print col-auto hidden sm:block pt-2 flex ">
          <a href={pdf} bind:this={downloadRef} download class="grow-0 flex rounded bg-white text-primary p-1 uppercase font-bold text-decoration-none"><Fa icon={faDownload} />&nbsp;Download</a>
        </div>
        <Divider class="hidden sm:inline col-span-full"/>
        <p class="text-justify col-span-full">Long time passionate to logic and models abstraction, to the extraction of Mathematics
from the real world to solve the most trivial daily problems, I've found in Computer
Science the realization of my expressiveness and insight. Passion for tech projected me
to the most important choices for my studies and work career. Willful and pushing, I
never give up to the resolution of any kind of problem or the full achievement of my
goals, leaving binaries and classic patterns to find the most effective solutions.</p>
        <Divider white class="col-span-full"/>
        <!-- <div class="pt-4"></div> -->
        <h5 class="text-xl pt-4 col-span-full"><HW uppercase primary bold>technical Skills and knowledge</HW></h5>
        <Divider class="col-span-full"/>
        <p class="text-justify col-span-full">
        In my everyday job in the company I have almost exclusively worked in, I have spent most of the time developing
        and growing a complex software platform spaning many services on several entities, first on each
        customer's on premise installation, then on standard <HW>cloud</HW> implementations.<br/>
        The job of each component might be completely different from one another, so choosing the best strategies and
        technologies for developing, communicating and deploying was essential.<br/>
        This way I have been able to learn very vary technologies, on each part of a running IT business, and under my guidance
        old tech and approaches were replaced with new modern and fresh <HW>microservices-oriented</HW> ways of thinking.<br/>
        <HW>Separation of concerns</HW> is my thing, and I'd rather add lines of code and complexity than hardcode,
        having in mind that this way of coding eventually decreases the lines of code and the overall complexity.
        I always look for configurability, because it allows <HW>reusability</HW> and eventual cost-saving,
        but I am not a blind fan: sometimes, quick and simple is better.<br/>
        Given the time I have worked in that company and its nature of being a startup, and the centrality of my position,
        saying that I am a <HW>full-stack developer</HW> is indeed the truth. From acquiring the customer's needs, developing the backend business logic,
        designing the database model and optimizing queries, to develop the core UI framework and implementations on both Java Swing fat-client and browser,
        designing and developing custom mobile apps. But also deploying via custom services, docker instances, kubernetes.<br/>
        <HW>Name some tech</HW>, I have probably made at least some experience with it.
        </p>
        <Divider class="col-span-full" white />
        <!-- <div class="pt-4"></div> -->
        <h5 class="pt-4 text-xl col-span-full"><HW primary uppercase bold>Professional experiences</HW></h5>
        <Divider class="col-span-full" />
        {#each experiences as { title, description, since}, i (title + i)}
        <p class="col-span-full">
          <b>{ title }</b>
          {#if since}(since { since }){/if}
          {#if description}: { description }{/if}
        </p>
        {/each}
        <div class="pt-6"></div>
        <!-- <div class="pt-4"></div> -->
      </div>
      <div class="col-span-full w-full m-0 h-auto bg-primary text-white px-4 pb-2 pt-2 text-xs items-end">
          This CV was made using Svelte and tailwindcss. Was it necessary? No, but more fun. Source code on github.<br/>
          In compliance with the Italian legislative Decree no. 196 dated 30/06/2003, I hereby authorize you to use and process my personal details contained in this document.
      </div>
    </div>
  </div>
</main>
