const version = 'v1';

export const API_HOST = 'https://...' + version;

export type UserUrl = {
  verification: string;
};

const API_URL: {
  users: UserUrl;
} = {
  users: {
    verification: '/users/verification',
  },
};

export default API_URL;
