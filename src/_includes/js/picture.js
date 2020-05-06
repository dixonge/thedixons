
module.exports = (url, alt = "Missing alt text") => {
    return `<picture>
    <source srcset="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_320/TheDixons/${url}" media="(max-width: 320px)">
    <source srcset="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_375/TheDixons/${url}" media="(max-width: 375px)">
    <source srcset="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_414/TheDixons/${url}" media="(max-width: 414px)">
    <source srcset="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_756/TheDixons/${url}" media="(min-width: 755px)">
    <img src="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_756/TheDixons/${url}" alt="${alt}" />
  </picture>`;
  };