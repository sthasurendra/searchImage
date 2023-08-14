import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID qnZBwDlOv2JdnNvhL33PIQCKU9dlgOj4okQ9_QZ2QHA',
  },
});

//** Creating custom client */
