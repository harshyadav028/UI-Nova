# UI Nova

UI Nova is a Next.js project that leverages the Gemini AI to generate JSX UI code dynamically. The generated JSX is rendered on the website for preview and can be copied easily. Users can refresh the UI and adjust according to there needs.

## Features
- **Generate JSX UI Code**: Uses Gemini AI to create JSX UI dynamically.
- **Render UI Preview**: Displays the generated JSX UI directly on the website.
- **Copy JSX Code**: A button to copy the generated code for easy use.
- **Refresh UI**: Regenerate a new JSX UI layout instantly.

## Installation & Setup
Follow these steps to set up and run UI Nova locally:

### Prerequisites
- Node.js (>= 18.x.x)
- npm or yarn
- API key for Gemini AI

### Clone the Repository
```sh
git clone https://github.com/yourusername/ui-nova.git
cd ui-nova
```

### Install Dependencies
Using npm:
```sh
npm install
```
Or using yarn:
```sh
yarn install
```

### Set Up Environment Variables
Create a `.env.local` file in the root directory and add the following:
```
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
```

### Run the Development Server
```sh
npm run dev
```
Or using yarn:
```sh
yarn dev
```
The project will be running at `http://localhost:3000`.

## Deployment
Deployed on Vecel.

## Upcoming Features
- More Advanced AI
- Accurate Rendering (as there is no tool in NextJS 15 till now to render the jsx code properly)
- Glimpse of the UI on your provided project link feature to visualize the UI better.

## License
MIT License

