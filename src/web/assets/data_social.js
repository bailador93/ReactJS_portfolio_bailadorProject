export const DATA_SOCIAL = [
    {
        title: "Facebook",
        icon: "/icons/facebook.png",
        url: "https://www.facebook.com/bailadev93/"
    },
    {
        title: "Github",
        icon: "/icons/github.png",
        url: "https://github.com/bailador93"
    },
    {
        title: "LinkedIn",
        icon: "/icons/linkedin.png",
        url: "https://www.linkedin.com/in/bailador93/"
    },
    {
        title: "Youtube",
        icon: "/icons/youtube.png",
        url: "https://www.youtube.com/@bailadev93"
    },
    {
        title: "Spotify",
        icon: "/icons/spotify.png",
        url: "https://open.spotify.com/user/31oa5atuh7kwrpcffsh674pwhqqe?si=1f16a1c23516444d"
    }
].sort((a, b) => a.title !== b.title ? a.title < b.title ? -1 : 1 : 0);