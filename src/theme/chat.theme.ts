import { Theme } from '@flyerhq/react-native-chat-ui';

const chatTheme: Theme = {
  colors: {
    primary: '#18dbe8ff', // New cyan color for primary elements
    secondary: '#dfdfdf', // New yellow color for secondary text and components
    error: '#DC2626', // Redefined error color from new color palette
    background: '#FFFFFF', // Darker background
    inputBackground: '#353a3fff', // Strong gray for input background
    inputText: '#FFFFFF', // White text for inputs for contrast
    userAvatarImageBackground: '#353a3fff',
    receivedMessageDocumentIcon: '',
    sentMessageDocumentIcon: '',
    userAvatarNameColors: [],
  },
  fonts: {
    // Assuming fonts from your existing theme
    dateDividerTextStyle: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#FFFFFF', // White for better contrast
    },
    emptyChatPlaceholderTextStyle: {
      fontSize: 16,
      color: '#6e757cff', // Light gray for placeholder text
    },
    inputTextStyle: {
      fontSize: 16,
      color: '#FFFFFF', // Maintaining white for input text
    },
    receivedMessageBodyTextStyle: {
      fontSize: 14,
      color: '#0D0E0F', // White text for readability
    },
    sentMessageBodyTextStyle: {
      fontSize: 14,
      color: '#0D0E0F', // Dark text for contrast on cyan background
    },
    receivedMessageCaptionTextStyle: {
      fontSize: 14,
      color: '#0D0E0F', // White for all received message details
    },
    receivedMessageLinkDescriptionTextStyle: {
      fontSize: 14,
      color: '#FFFFFF',
    },
    receivedMessageLinkTitleTextStyle: {
      fontSize: 14,
      color: '#FFFFFF',
    },
    sentMessageCaptionTextStyle: {
      fontSize: 14,
      color: '#0D0E0F',
    },
    sentMessageLinkDescriptionTextStyle: {
      fontSize: 14,
      color: '#0D0E0F',
    },
    sentMessageLinkTitleTextStyle: {
      fontSize: 14,
      color: '#0D0E0F',
    },
    userAvatarTextStyle: {
      fontSize: 14,
      color: '#FFFFFF',
    },
    userNameTextStyle: {
      fontSize: 14,
      color: '#FFFFFF',
    },
  },
  insets: {
    // Assuming insets from your existing theme
    messageInsetsHorizontal: 12,
    messageInsetsVertical: 8,
  },
  borders: {
    // Assuming borders from your existing theme
    inputBorderRadius: 5,
    messageBorderRadius: 15,
  },
};

export default chatTheme;
