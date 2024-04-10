import {
  useMultiChatLogic,
  MultiChatWindow,
  MultiChatSocket,
} from "react-chat-engine-advanced";
import ChatHeader from "./ChatHeader";
import StandardMessageForm from './StandardMessageForm'

const Chat = () => {
    const chatProps = useMultiChatLogic(
      import.meta.env.VITE_PROJECT_ID,
      "testUser",
      "1234"
    );
  
    return (
      <div style={{ flexBasis: "100%" }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow
          {...chatProps}
          style={{ height: "100vh" }}
          renderChatHeader={(chat) => <ChatHeader chat={chat} />}
          renderMessageForm={(props) => {
            return (
                <StandardMessageForm props={props} activeChat= {chatProps.chat }/>
            )
          }}
        />

      </div>
    );
  };
  
  export default Chat;
  