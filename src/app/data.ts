

export interface Project {
    name: string;
    src?: string;
    languages: string[];
    frameworks: string[];
    description: string;
    public: boolean;
  };

export let myProjects: Project[] = [
    {
        name: "teseo",
        languages: ["Scala"],
        frameworks: [],
        description:"A library to build customizable algorithms through Scala's implicits. The user can specify a pipeline of smaller algorithms interacting through functional operators like map and zip. Then, it will be resolved downstream, totally or partially, through the use of implicits. Alternative to ZIO's automatic layer construction with less overhead.",
        public: true,
    },
    {
        name: "SIDH",
        languages: ["Haskell"],
        frameworks: [],
        description: "Library containing an implementation of the SIDH cryptographic protocol at type-level. It also implements elliptic curves cryptographic primitives.",
        public: true,
    },
    {
        name: "Collectionist",
        src: "Collectionist-server",
        languages: ["Scala"],
        frameworks: ["ZIO", "Spark"],
        description: "Lightweight REST API to store and retrieve books using ZIO HTTP. It allows the registration of users and a recommendation system based on Spark.",
        public: true,
    },
    {
        name: "timersr",
        languages: ["Rust"],
        frameworks: [],
        description:"WIP",
        public: false,
    },
    {
        name: "Personal webpage",
        src: "dev-web",
        languages: ["Typescript"],
        frameworks: ["Angular"],
        description:"The code behind this web and a small incursion in the front-end world. It's a work in progress that will continue to develop, hopefully, for a long time.",
        public: true,
    },

  ];