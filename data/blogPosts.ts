export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'mastering-mobile-development-in-2024',
    title: 'Mastering Mobile Development in 2024',
    author: 'Jane Doe',
    date: 'August 16, 2024',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600',
    excerpt: 'A deep dive into the latest trends and technologies shaping the future of mobile app development, from cross-platform frameworks to AI integration.',
    content: `
      <p class="mb-6 text-lg">The mobile development landscape is in a constant state of flux. As we move through 2024, several key trends are defining how we build, deploy, and interact with mobile applications. Staying ahead of the curve is essential for any developer or business looking to make an impact.</p>
      <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600" alt="Modern development workspace" class="rounded-xl my-8 shadow-lg" />
      <h3 class="text-2xl font-bold mt-8 mb-4">The Rise of Cross-Platform Frameworks</h3>
      <p class="mb-6 text-lg">Frameworks like React Native and Flutter continue to dominate, offering the ability to write code once and deploy it across both iOS and Android. This not only saves development time and cost but also ensures a consistent user experience. In 2024, their performance is closer than ever to native applications, making them a viable choice for even the most demanding apps.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">AI and Machine Learning Integration</h3>
      <p class="mb-6 text-lg">Artificial Intelligence is no longer a buzzword; it's a core feature. From personalized user experiences and predictive text to advanced image recognition, integrating AI/ML models into mobile apps is becoming standard practice. Services like TensorFlow Lite and Core ML make it easier than ever to run powerful models directly on a user's device.</p>
      <blockquote class="border-l-4 border-teal-500 pl-6 py-2 my-8 text-xl italic text-gray-600">
        "The best apps are not just functional, they are intelligent. They anticipate user needs and provide solutions before the user even asks."
      </blockquote>
      <p class="text-lg">As we look to the future, the fusion of mobile technology with other emerging fields like Augmented Reality (AR) and the Internet of Things (IoT) will open up even more exciting possibilities. The key is to build flexible, scalable applications that can adapt to the next wave of innovation.</p>
    `,
  },
  {
    id: 'the-art-of-immersive-game-design',
    title: 'The Art of Immersive Game Design',
    author: 'John Smith',
    date: 'July 22, 2024',
    image: 'https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600',
    excerpt: 'Explore the principles of creating captivating game worlds that engage players on a deeper level. From storytelling to sound design, we cover it all.',
    content: `
      <p class="mb-6 text-lg">What separates a good game from a great one? Often, the answer lies in immersion. An immersive game is one that pulls the player out of their reality and into the game world, making them forget they are holding a controller or tapping a screen.</p>
      <img src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600" alt="Person playing a video game" class="rounded-xl my-8 shadow-lg" />
      <h3 class="text-2xl font-bold mt-8 mb-4">Storytelling as the Foundation</h3>
      <p class="mb-6 text-lg">A compelling narrative is the backbone of an immersive experience. It gives players a reason to care about the world and their role within it. Whether it's a grand epic or a subtle environmental narrative, the story provides context and emotional weight to the player's actions.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">The Power of Sound</h3>
      <p class="mb-6 text-lg">Never underestimate the power of audio. A dynamic soundtrack that adapts to the gameplay, realistic sound effects, and high-quality voice acting can elevate a game world from a collection of pixels to a living, breathing place. Sound design is a critical, yet often overlooked, component of immersion.</p>
      <ul class="list-disc list-inside text-lg space-y-2 my-6">
        <li><strong>Dynamic Music:</strong> Music should change based on the player's situation (e.g., exploration vs. combat).</li>
        <li><strong>Environmental Audio:</strong> The sound of wind in the trees or rain on a tin roof makes a world feel real.</li>
        <li><strong>Feedback Sounds:</strong> Actions should have satisfying sounds, reinforcing the player's interaction with the world.</li>
      </ul>
      <p class="text-lg">By focusing on these core pillars—story, visuals, and sound—developers can create truly unforgettable gaming experiences that resonate with players long after they've put the game down.</p>
    `,
  },
];
