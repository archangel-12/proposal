<h1 align="center">
  <br>
  <a href="https://maps.app.goo.gl/nXSSRhYwREe6CQks6"><img src="https://www.dbl.id/uploads/school/13178/683-SMAN_17_SURABAYA.png" alt="smantass" width="100"></a>
  <br>
  Description
</h1>

#### <div align="center">For <img src="https://www.svgrepo.com/show/405511/flag-for-flag-indonesia.svg" alt="id_flag" width="20px" style="vertical-align: text-bottom;"> translation, please refer to [this file](/core/readme.md)</div>


### 1. So what is this?

> This repository serves as a sort of folder or a collection of files and images for my proposed website for the [Senior High School 17 of Surabaya](https://maps.app.goo.gl/nXSSRhYwREe6CQks6). While I acknowledge that the code structure might not be perfect and could face challenges when deployed online, it represents a starting point for this project :)

### 2. Why am I doing this?

This is my way of showing appreciation to the school where I interned for almost four months. The experience taught me new skills, not only in web development but also in handling and understanding kids. Although I’m aware that teaching isn’t my strong suit, the internship gave me invaluable life lessons, and I feel indebted to the school.

### 3. How to properly download and view collections of folders and files?

- View the source code directly

   You can do this by clicking the `.` button or changing the repository link to `.dev`. Essentially, just replace the `.com` domain with `.dev`. GitHub, the platform where I archive all my projects, introduced this concept to make code editing easier. If you're still unsure how this works, refer to the demonstration below or the detailed explanation [here](https://github.com/github/dev).

   ![github dev](https://user-images.githubusercontent.com/856858/130119109-4769f2d7-9027-4bc4-a38c-10f297499e8f.gif)

- Want to Download?

  There are several ways to download and view the source code locally. I’ve categorized them into __Conventional__ and __Quick__ methods. Let’s start with the Conventional method.


  - ### Conventional
      1. First, download the repository’s folder by clicking the `Code <>` button, then selecting `Download Zip Folder`. This will download the files and folders as a zipped folder. __Keep in mind that you're downloading files from this repository__, not a virus or malware. Hopefully, this is clear,
      2. Next, download the necessary platforms, starting with a [code editor](https://code.visualstudio.com/) and a [runtime environment](https://nodejs.org/en) to execute the code,
      3. Once you've completed the first step, import all the downloaded folders into your code editor. Just drag and drop them, and the code editor will automatically initialize all the files in the folder,
      4. Now, install the required plugins. Press the key combination `CTRL + SHIFT + \` on your keyboard. This will open a terminal at the bottom of the editor. The terminal is where we’ll specify the tools we need for viewing or editing the code,
      5. Next, navigate to the `core` folder by typing:
         ```sh
         cd core
         ```
         This will direct the terminal to the `core` folder where I’ve stored all the necessary files

      6. Download all required dependencies by typing:
         ```sh
         ./run.sh
         ```
         This command instructs the terminal to fetch all the tools and plugins needed,

      7. Congratulations! You’ve completed the conventional method. Now, simply click the localhost link formatted as `http://localhost:3000/`. Enjoy exploring!


   - ### Quick Method

      Since GitHub was acquired by [Microsoft](https://www.nytimes.com/2018/06/04/technology/microsoft-github-cloud-computing.html) and following the Covid pandemic, GitHub introduced [Codespaces](https://github.com/features/codespaces). Codespaces is essentially a __virtual IDE__, which is particularly useful for those with low-performance laptops. It allows editing, saving, and installing tools without direct configuration on your local device. Here’s how to use the quick method:

      1. Create a GitHub account. If this is your [first time](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github) accessing GitHub, you’ll need to sign up. You can use email accounts from Google, Apple, or Facebook to create an account,
      2. Once you have an account, navigate to Codespaces by clicking `Code <>` and then selecting `Codespaces`, located near the Local option,
      3. Click "*Create codespace on main*". GitHub may suggest forking the repository, but if you don’t encounter a warning, you’re on the right track,
      4. Let GitHub initialize the files automatically. This might take a moment,
      5. Once ready, open the terminal. The method is the same as step 4 in the __conventional method__
      6. Finally, apply the same commands as step 5 in the conventional method
      
      Here’s a demonstration of how to use Codespaces:

      ![github codespace](https://luke.geek.nz/assets/images/OpenCodespace-7ded5b93f6b3d8f25a98c42f2503235b.gif)

### 3. What tools and plugins did you use while creating this website proposal?
   1. Any kind of *Virtual* IDE: Primarily used <a href="https://www.gitpod.io/"><img src="https://www.svgrepo.com/show/373626/gitpod.svg" alt="gitpod" width="20px" style="vertical-align: text-bottom;"></a> or <a href="https://idx.google.com/"><img src="https://cdn.brandfetch.io/idH-6nF2GH/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" alt="idx" width="20px" style="vertical-align: text-bottom;"></a> for a cloud-based development environment.

   2. Runtime: Leveraged <a href="https://bun.sh/"><img src="https://bun.sh/logo.svg" alt="bun" width="20px" style="vertical-align: text-bottom;"></a> for its performance and modern <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://www.svgrepo.com/show/349419/javascript.svg" alt="js" width="20px" style="vertical-align: text-bottom;"></a> runtime capabilities.

   3. Framework: Built the project using <a href="https://nextjs.org/"><img src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" alt="next" width="20px" style="vertical-align: text-bottom;"></a> for its robust features and [server-side rendering](https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering).

   4. Styling: Implemented <a href="https://tailwindcss.com/"><img src="https://www.svgrepo.com/show/374118/tailwind.svg" alt="tailwind" width="20px" style="vertical-align: text-bottom;"></a> for utility-first styling.
   
   5. Component Library: Used <a href="https://ui.shadcn.com/"><img src="https://logolist.net/wp-content/uploads/2024/04/shadcn-ui.svg" alt="ui" width="20px" style="vertical-align: text-bottom;"></a> to streamline UI development.

   6. Language: Mostly in <a href="http://typescriptlang.com/"><img src="https://www.svgrepo.com/show/439022/typescript.svg" alt="ui" width="20px" style="vertical-align: text-bottom;"></a> for type safety and maintainability.

   7. Content Writing: Utilized <a href="https://mdxjs.com/"><img src="https://www.svgrepo.com/show/373768/light-mdx.svg" alt="ui" width="30px" style="vertical-align: middle;"></a> to integrate markdown with [jsx](https://react.dev/learn/writing-markup-with-jsx) for a seamless content experience.

   8. [AI](https://v0.dev/) for seeking reference

### 4. What else should I know?

This repository is protected by the <a href="/LICENSE"><img src="https://www.svgrepo.com/show/444064/legal-license-mit.svg" width="40px" style="vertical-align: middle;"></a> & <a href="/license-CC-BY-4.0"><img src="https://blog.okfn.org/files/2014/01/cc40-itshere-2751.png" width="30px" style="vertical-align: middle;"></a> which means you're free to use, copy, modify, and distribute the code as long as you include the original license. It’s like borrowing a tool from someone but giving them credit for it

[![let it happen](https://github.com/archangel-12/proposal/actions/workflows/main.yml/badge.svg?event=workflow_dispatch)](https://github.com/archangel-12/proposal/actions/workflows/main.yml)

[![CodeQL](https://github.com/archangel-12/proposal/actions/workflows/github-code-scanning/codeql/badge.svg?branch=master)](https://github.com/archangel-12/proposal/actions/workflows/github-code-scanning/codeql)