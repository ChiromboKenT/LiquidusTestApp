import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator, StyleSheet, SafeAreaView } from 'react-native';
import { Chat, MessageType } from '@flyerhq/react-native-chat-ui';
import { useChat } from '@vectara/react-chatbot/lib/useChat';
import { CHAT_CONFIG } from '@config/chat.config';
import chatTheme from '@theme/chat.theme';

const App = () => {
  const {
    sendMessage,
    messageHistory,
    isLoading,
    isStreamingResponse,
    hasError,
  } = useChat({
    customerId: CHAT_CONFIG.VECTARA_CUSTOMER_ID || 'fallback_customer_id',
    corpusIds: CHAT_CONFIG.VECTARA_CORPUS_IDS || ['fallback_corpus_id'],
    apiKey: CHAT_CONFIG.VECTARA_API_KEY || 'fallback_api_key',
    enableStreaming: false,
    language: 'eng',
    enableFactualConsistencyScore: true,
    summaryPromptName: 'vectara-experimental-summary-ext-2023-10-23-med',

  });

  const [messages, setMessages] = useState<MessageType.Any[]>([]);
  const user = { id: 'your_user_id' };

  useEffect(() => {
    const convertedMessages = messageHistory.map(msg => [
      {
        author: { id: 'vectara' },
        createdAt: Date.now(),
        id: `${msg.id}-answer`,
        text: msg.answer || "Waiting for more data...",
        type: 'text' as const,
      },
      {
        author: user,
        createdAt: Date.now(),
        id: `${msg.id}-question`,
        text: msg.question,
        type: 'text' as const,
      }
    ]).flat();
    setMessages(convertedMessages);
  }, [messageHistory]);

  const handleSendPress = (inputText: string) => {
    try {
      sendMessage({ query: inputText });
      const newMessage: MessageType.Text = {
        author: user,
        createdAt: Date.now(),
        id: uuidv4(),
        text: inputText,
        type: 'text',
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.floor(Math.random() * 16);
      const v = c === 'x' ? r : (r % 4) + 8;
      return v.toString(16);
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isLoading || isStreamingResponse ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Loading...</Text>
        </View>
      ) : null}
      <Chat
        enableAnimation
        theme={chatTheme}
        messages={messages}
        onSendPress={message => handleSendPress(message.text)}
        user={user}
      />
      {hasError && <Text style={styles.errorText}>An error occurred while communicating with the server.</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    padding: 10,
  },
});

export default App;
