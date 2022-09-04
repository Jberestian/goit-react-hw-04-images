import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    image_type: 'photo',
    key: '7985885-d9ba141b4ce017599a5dbc073',
    safesearch: true,
    orientation: 'horizontal',
    per_page: 12,
  },
});

export const getImages = async (page = 1, value) => {
  const { data } = await instance.get('', {
    params: {
      q: value,
      page,
    },
  });

  return data;
};
