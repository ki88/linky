import shortid from 'shortid';

const generateSid = () => shortid({
  characters: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
});

export default generateSid;
