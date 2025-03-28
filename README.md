# TravelPrep 🧳✈️
## A Smart Packing List App for Travelers

TravelPrep is a modern React Native mobile application that helps travelers organize their packing by providing an intuitive interface to create, categorize, and track items they need for their trips.

## Screenshots

<div style="display: flex; justify-content: space-between;">
  <img src="assets/images/packingListComponentImg.png" width="30%" alt="Home Screen" />
  <img src="https://i.imgur.com/placeholder2.png" width="30%" alt="Packing List" />
  <img src="https://i.imgur.com/placeholder3.png" width="30%" alt="Profile Screen" />
</div>
*Replace with your actual screenshot image URLs*

## Features ✨

- **Intuitive Landing Page** with quick access to app features
- **Dynamic Packing List** with add, edit, and remove functionality
- **Category-based Organization** (Essentials, Clothing, Electronics)
- **Item Filtering** to focus on specific categories
- **Multiple Sorting Options** (by name, category, or quantity)
- **Packing Progress Tracking** with visual indicators
- **Quantity Management** for each item
- **User Profile** with stats and settings
- **Clean, Modern UI** designed for a seamless user experience

## Technologies Used 🛠️

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)
- [Expo Vector Icons](https://docs.expo.dev/guides/icons/)

## Installation 📋

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/travelprep.git
   cd travelprep
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

## Running the App 🚀

### Development Mode

1. **Start the Expo development server**
   ```bash
   npx expo start
   ```

2. **Run on Device/Simulator**
   - Scan the QR code with the Expo Go app on your device
   - Press `a` to open on Android emulator
   - Press `i` to open on iOS simulator

### Building for Production

1. **Build for Android**
   ```bash
   eas build -p android
   ```

2. **Build for iOS**
   ```bash
   eas build -p ios
   ```

## How to Use 📱

1. **Start Screen**
   - Launch the app to see the welcome screen
   - Tap "Get Started" to proceed to the main app

2. **Adding Items**
   - Use the input field at the top to add new items
   - Select a category for each item when prompted

3. **Managing Your List**
   - Filter items by tapping category pills
   - Sort items using the sort options
   - Toggle items as packed/unpacked by tapping the circle
   - Adjust quantities using the +/- buttons
   - Remove items by tapping the trash icon

4. **Profile**
   - Log out to return to the start screen

## Project Structure 📁
