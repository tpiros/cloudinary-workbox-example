const currentDateTime = new Date();
const news = [{
  title: 'Roma beats Torino',
  slug: 'Edin Dzeko scored a late stunning goal to snatch a 1-0 win for Roma at Torino in their opening Serie A game on Sunday.',
  image: 'https://res.cloudinary.com/tamas-demo/image/upload/pwa/dzeko.jpg',
  added: new Date(currentDateTime.getFullYear(), currentDateTime.getMonth(), currentDateTime.getDate(), currentDateTime.getHours() - 1, currentDateTime.getMinutes() - Math.floor(Math.random() * 4 + 1), 0)
}, {
  title: 'Hungary beats US with penalties',
  slug: 'The fourth game brought tremendous excitements as Hungary and the US were entangled to an enormous battle which was decided in a shootout where the home side prevailed.',
  image: 'https://res.cloudinary.com/tamas-demo/image/upload/pwa/hungarywp.jpg',
  added: new Date(currentDateTime.getFullYear(), currentDateTime.getMonth(), currentDateTime.getDate(), currentDateTime.getHours() - 2, currentDateTime.getMinutes() - Math.floor(Math.random() * 6 + 1), 0)
}, {
  title: 'Konta wins in Connecticut',
  slug: 'British number one Johanna Konta continued her US Open preparation with a first-round win over Germany\'s Laura Siegemund at the Connecticut Open.',
  image: 'https://res.cloudinary.com/tamas-demo/image/upload/pwa/konta.jpg',
  added: new Date(currentDateTime.getFullYear(), currentDateTime.getMonth(), currentDateTime.getDate(), currentDateTime.getHours() - 2, currentDateTime.getMinutes() - Math.floor(Math.random() * 8 + 1), 0)
}];

module.exports = {
  news
};