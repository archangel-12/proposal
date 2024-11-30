### <div align="center">The Explanation</div>

#### <div align="center">For ![terjemahan bahasa Indonesia](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/20px-Flag_of_Indonesia.svg.png) translation, please refer to [this file](/core/README.md)</div>

---

### So what is this?

This repository serves as a sort of folder or a collection of files and images for my proposed website for Senior High School 17 of Surabaya. While I acknowledge that the code structure might not be perfect and could face challenges when deployed online, it represents a starting point for this project.

### Why am I doing this?

This is my way of showing appreciation to the school where I interned for almost four months. The experience taught me new skills, not only in web development but also in handling and understanding kids. Although I’m aware that teaching isn’t my strong suit, the internship gave me invaluable life lessons, and I feel indebted to the school.

### What tools and plugins did you use while creating this website proposal?
1. Any kind of Integrated Development Environment (IDE)

   By default, an IDE (Integrated Development Environment) is like a free, open-source text editor that is affordable and allows you to save files directly to the cloud. As a developer, I use these tools because they let me edit code online without needing to install extra software on my computer. However, the main reason I rely on this is that my laptop struggles with running heavy coding applications and often slows down or encounters errors :)

2. [Runtime](https://bun.sh/)

   In a world of webdev, "_runtime_" refers to the period when a script or program is actively running in a browser or server, executing the code written by the developer. It's important because this is when the program interacts with users, handles data, or performs tasks in real-time. Now, me as the creator rely on runtime environments to execute code dynamically, rather than just preparing static files, enabling features like user interactions or fetching data from a database. 
   
   Think of runtime like a live performance in a theater. Before the show, everything scripts, costumes, props is prepared and rehearsed, similar to how code is written and tested beforehand. But the actual performance, where actors bring the story to life in front of an audience, is the runtime. This is when everything happens in real-time, just as a web app processes inputs, displays results, or interacts with a server while a user is engaging with it

3. [Language](https://www.typescriptlang.org/) & Its [sister](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

   By default, JavaScript is the language of the web. It runs in every browser and is essential for creating interactive websites. However, as projects grow larger and more complex, JavaScript can become harder to manage because it doesn’t check for certain types of mistakes (bugs) while writing code. This is where TypeScript comes in. TypeScript is like JavaScript’s "_big sister_". It builds on JavaScript by adding features like type-checking, which helps developers catch errors early, and better tools for organizing large codebases. TypeScript makes it easier to understand, maintain, and scale projects while still working seamlessly with JavaScript. Developers can write TypeScript code, and it gets converted (or “_compiled_”) into plain JavaScript so that it can run in browsers or on servers. Many developers love TypeScript because it gives them confidence that their code will behave as expected, which reduces bugs and speeds up development in the long run. But at the same time, developers keep mentioning JavaScript because TypeScript wouldn’t exist without it. In the end, all TypeScript code must become JavaScript to work on the web. 
   
   Imagine JavaScript as a freehand sketch, It’s quick, flexible, and you can draw whatever comes to mind. But as your drawing becomes more detailed and you want precision, freehand drawing gets tricky. TypeScript is like adding a ruler and templates to your toolkit. You can still sketch freely, but now you have tools that help you draw straight lines and maintain proportions, making the final piece more polished and reliable. Just as every TypeScript project ultimately relies on JavaScript to work, even the most precise drawings start with a simple pencil line

4. [Styling](https://tailwindcss.com/)

   By default, [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) (_Cascading Style Sheets_) is the standard language for styling websites. It allows developers to define how elements on a page should look—like their colors, sizes, layouts, and more. CSS is powerful and essential, but as projects grow larger, managing styles can become frustrating. One of the biggest complaints developers have about CSS is how hard it is to keep things organized. Styles can conflict with each other, especially in larger projects, and figuring out why something looks wrong can feel like "_untangling a giant ball of yarn_". Another issue is consistency, Ensuring every page or component looks cohesive often requires a lot of repetitive work. This is where tools like Tailwind step in. Instead of writing long, custom CSS files, you style elements by adding specific class names like `bg-blue-500` (_for a blue background_) or `text-center` (_to center text_). This approach makes styles reusable, reduces the chance of conflicts, and speeds up development. It also makes your code more predictable and easier to maintain. 
   
   Imagine CSS as having a box of craft supplies—you have paints, brushes, paper, and glue, and you can create anything you want from scratch. It’s creative, but as your project grows, it becomes messy, and finding the right tool in your box takes longer. Tailwind CSS, on the other hand, is like having a well-organized toolkit where every tool has a specific purpose and is labeled clearly. Instead of spending time digging through supplies, you grab exactly what you need and build faster while keeping everything neat and consistent.

5. [Framework](https://nextjs.org/)

   By default, JavaScript allows developers to create interactive websites, but as applications became more complex, managing all the moving parts became challenging. [React](https://react.dev/) was introduced as a library, a _collection of tools designed to make it easier to build user interfaces by breaking them into reusable components_. But while React is great for building pieces of an app, it’s not a complete solution for creating entire applications. This is where "_framework_" come into play. In a word of webdev, a framework is like a pre-built structure that provides developers with tools and rules to build applications more efficiently. Frameworks typically handle things like routing (navigating between pages), state management (tracking data), and performance optimizations, so developers don’t have to create these systems from scratch. Next is a framework built on top of React. It takes React’s capabilities and adds features like server-side rendering (which helps with [SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) and page speed), built-in routing, and easy integration for APIs or static files. These features solve many of the pain points developers face when using React alone, making Next.js an excellent choice for building modern web applications.

6. [Component Library](https://ui.shadcn.com/)

   By default, when building user interfaces, developers use CSS frameworks like Tailwind or libraries like React to style and manage components. These tools make it easier to create visually appealing and interactive websites. However, as projects grow, managing the design system and maintaining consistency across components can become challenging. This is where **component libraries** come into play. Component libraries provide pre-designed, reusable building blocks (_like buttons, modals, and forms_) that help developers maintain a consistent look and feel throughout their applications. But even with component libraries, developers often face trade-offs—some libraries are rigid and don’t allow much customization, while others are too minimal, requiring a lot of extra work. shadcn/ui was created to address these issues. It combines the flexibility of Tailwind CSS with the power of a component library. Instead of just giving you fixed components, it provides a collection of well-designed, accessible components that you can customize and own. This means the components are not locked into a specific style or library—they integrate seamlessly with your project and remain fully adaptable as your app evolves. 
   
   Imagine you’re building a house. Pre-made furniture is like typical component libraries, it’s convenient but hard to modify if you want something unique. Tailwind CSS, on the other hand, is like having raw materials—wood, nails, and tools—to craft your furniture, giving you full control but requiring time and effort. shadcn/ui is like receiving high-quality, customizable furniture kits. The pieces are ready to assemble, but you can paint, tweak, and arrange them however you want, making them uniquely yours while saving time.

7. [MDX](https://mdxjs.com/)

   By default, [Markdown](https://daringfireball.net/projects/markdown/syntax) is a simple language used to write content for the web. It's great for creating documents like README files or blog posts because it’s easy to read and write. However, Markdown has limitations, while it works well for basic text formatting, it struggles when you need to add dynamic functionality, like embedding interactive components or using React elements in your content. This is where MDX (Markdown + [JSX](https://react.dev/learn/writing-markup-with-jsx)) comes in. MDX is an extended version of Markdown that lets you use React components directly within your Markdown files. It combines the simplicity of Markdown with the power of React, enabling developers to create rich, interactive content. For example, in an MDX file, you can write plain text alongside custom components like charts, buttons, or forms, all in one place. MDX is especially popular in projects like documentation sites or blogs because it allows developers to seamlessly integrate code and content. Instead of separating the two into different files, you can keep everything in one file, making it easier to manage and maintain :)

<br />

### What else should I know?

This repository is protected by the [MIT License](/LICENSE). This means you're free to use, copy, modify, and distribute the code as long as you include the original license. It’s like borrowing a tool from someone but giving them credit for it