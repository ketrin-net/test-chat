import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Message } from '../models/Message';
import { MessageMok } from '../mok/MessageMok';

export interface ChatState {
  currentSectionId: number | null;
  messages: Message[];
}

const initialState: ChatState = {
  currentSectionId: null,
  messages: [],
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    openChat: (state, action: PayloadAction<{ sectionId: number }>) => {
      const sectionId = action.payload.sectionId;
      state.currentSectionId = sectionId;
      state.messages = MessageMok.filter((item) => item.sectionId === sectionId);
    },
    addMessage: (state, action: PayloadAction<{ textMessage: string }>) => {
      const newMessage = {
        id: 253,
        isMy: true,
        isUnread: true,
        text: action.payload.textMessage,
        sendDate: new Date().toISOString(),
        sectionId: state.currentSectionId as number,
      }
      state.messages.push(newMessage);
    },
  },
});

export const { openChat, addMessage } = chatSlice.actions;
export const selectMessages = (state: RootState) => state.chat.messages;
export const chatReducer = chatSlice.reducer;
