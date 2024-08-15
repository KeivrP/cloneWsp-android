export type User = {
    image: string,
    name: string
  }

  export type lastMessage = {
    text: string,
    createdAt: string
  }

  export type ChatsList = {
    id: string
    user: User
    lastMessage: lastMessage
  }

  export type Message = {
    id: string
    text: string
    createdAt: string
    user: {
      id: string
      name: string
    }

  }
