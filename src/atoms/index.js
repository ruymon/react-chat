import { atom } from 'recoil';

export const messagesState = atom({
  key: 'messagesState',
  default: [],
});

export const participantsState = atom({
  key: 'participantsState',
  default: {},
});

export const chatRoomInfoState = atom({
  key: 'chatRoomInfoState',
  default: [],
});