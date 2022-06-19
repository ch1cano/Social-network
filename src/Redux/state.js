const state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 12 },
      { id: 2, message: "It`s my first post", likesCount: 32 },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Sergey" },
      { id: 2, name: "Artem" },
      { id: 3, name: "Anton" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Sveta" },
      { id: 6, name: "Victor" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Yo" },
      { id: 4, message: "Good luck" },
      { id: 5, message: "Okey" },
    ],
  },

  sidebar: [
    { id: 1, name: "Andrew" },
    { id: 2, name: "Maksim" },
    { id: 3, name: "Artem" },
  ],
};

export default state;
