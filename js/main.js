// const createPhotoDescription = () => {
//   return {
// id: '',
// url: '',
// description: '',
// likes: '',
// comments: []
//   }
// }


// Получить Id от 1 до 25
const getidentifierPhoto = () => {
  const idPhoto=[];
  for(let i=1; i<=25;i++){
    const identifierPhoto = {
        id: i,
   }
   idPhoto.push(identifierPhoto)
  }
    return idPhoto
}

console.log(getidentifierPhoto())


// Количество like - число от 15 до 200

const likes = getRandomLikes = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(15), Math.abs(200)));
  const upper = Math.floor(Math.max(Math.abs(15), Math.abs(200)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}
console.log(getRandomLikes(15, 200))


const getComments = () => {
  const listComments = [];
  for (let i = 0; i <= 30; i++) {
    const obj = {
        id: i,
        avatar: '',
        message: '',
        name: ''
   }
   listComments.push(obj)
  }
    return listComments
}
console.log(getComments())


// id
function createIdGenerator () {
 let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const generatePhotoId = createIdGenerator();

console.log (generatePhotoId());

// Получить текст комментария

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createMessages = (message) => {
  const randomMessage = getRandomInteger(0, messages.length - 1);

  return {
    message: messages[randomMessage]
  }
};

console.log(createMessages())

// Получить имя автора

const names = [
  'Анна',
  'Андрей',
  'Иван',
  'Мария',
  'Вера'
]

const createName = (name) => {
  const randomName = getRandomInteger(0, names.length - 1);

  return {
    name: names [randomName]
  }
};

console.log (createName());


const createPhotoDescription = () => {
  return {
id: getidentifierPhoto(),
url: 'photos/{{i}}.jpg',
description: 'Классное фото!',
likes: getRandomLikes(),
comments: []
  }
}

console.log (createPhotoDescription())
