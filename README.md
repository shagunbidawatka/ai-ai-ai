# AI Tools Hub

AI Tools Hub is a comprehensive directory of AI tools designed to enhance workflows for developers, creators, marketers, and productivity enthusiasts. The platform provides real-time AI news updates, tool comparisons, and user reviews to help users make informed decisions.

## Features

- **Theme Toggle**: Switch between light, dark, and system themes.
- **AI Tools Directory**: Explore AI tools categorized for developers, creators, marketing, and productivity.
- **Real-time AI News**: Stay updated with the latest AI news fetched from a live API.
- **User Reviews and Ratings**: Share and read reviews on various AI tools.
- **Newsletter Signup**: Subscribe to receive the latest AI news and updates.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/ai-tools-hub.git
   cd ai-tools-hub
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   - Create a `.env.local` file in the root directory.
   - Add your News API key:
     ```
     NEXT_PUBLIC_NEWS_API_KEY=your_api_key_here
     ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- **`app/`**: Contains the main application components and pages.
- **`components/`**: Reusable UI components such as buttons, cards, and headers.
- **`data/`**: Placeholder for static data files (if needed).
- **`public/`**: Static assets like images and fonts.
- **`styles/`**: Global styles and CSS files.

## API Integration

The project uses the [NewsAPI](https://newsapi.org/) to fetch real-time AI news. Ensure you have a valid API key and set it in your environment variables.

## Deployment

The project can be deployed on platforms like Vercel, Netlify, or any other service that supports Next.js applications.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or support, please contact [your-email@example.com](mailto:your-email@example.com).
