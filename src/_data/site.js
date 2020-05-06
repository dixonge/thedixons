/**
  This file can be accessed using: {{ site.title }}
*/

const year = new Date().getFullYear();

module.exports = {
  annee: `${year}`,
  allowDarkMode: true,
  lang: "en", // for html tag
  title: "The Dixons",
  description: "The Dixons - A Colonial Quaker Family",
  url: "https://thedixons.net", // Don't end with a slash /
  brandName: "The Dixons", // for copyright and legal page

  author: {
    name: "Glenn Dixon", // For posts meta and Open Graph meta (FB and Twitter)
    email: "donblanco@posteo.net",
    github: "https://github.com/dixonge/thedixons-mf-11ty",
    twitter: "https://twitter.com/realglenndixon",
  },

  meta_data: {
    theme_color: "#ffffff", // used in Chrome, Firefox OS and Opera
    default_social_image: "https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto/TheDixons/avatar-small.png", // For Open Graph meta
    locale: "en_US", // For Open Graph meta
    twitter_username: "@realglenndixon", // For Twitter Open Graph meta
  },
};
