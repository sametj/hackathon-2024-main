![header-readme](img-readme/header-readme.png)

<br>

## 🛡 Index
- [🗝️ Key Features](#-key-features)
- [⚔️ Technologies Used](#-technologies-used)
- [🚪 Key Directories and Files](#-key-directories-and-files)
- [## 🖥️ Installation](#️-installation)
- [⚜ Usage](#-usage)
- [🏰 Process](#-process)
- [🧠 Brainstorm Process](#-brainstorm-process)
- [🙃 Before](#-before)
- [🙂 After](#-after)
- [👑 Challenges](#-challenges)
- [🎯 Future Plans](#-future-plans)
- [📜 File Structure](#-file-structure)

<br>

## 🗝️ Key Features
- **Dark Mode**: Toggle between light and dark themes.
- **Responsive Design**: Adapts to various screen sizes.
- **Interactive 3D Models**: Embedded 3D models using Three.js.
- **Search Functionality**: Search bar for finding board games.
- **Calendar Integration**: Calendar to view upcoming events.
- **Dynamic Pages**: Multiple dynamic pages (Home, Board Games, Calendar, Menu, Press).

## ⚔️ Technologies Used
- SCSS
- Typescript
- React
- React Three Fiber & React Three drei
- Vite
- Blender

### 🚪 Key Directories and Files

- **public**: Static assets like SVGs.
- **src**: Source code directory.
  - **assets**: Images, icons, and branding assets.
  - **components/R3FCanvas**: 3D canvas component.
  - **context**: Context providers for state management.
  - **features**: Modular feature components (board games, calendar, home, menu).
  - **hooks**: Custom React hooks.
  - **layouts**: Layout components including footer and navbar.
  - **pages**: Page components for different routes.
  - **routes**: Route definitions.
  - **styles**: SCSS styles organized by abstracts, base, components, and themes.
  - **utils**: Utility functions and constants.
  - **App.tsx**: Main app component.
  - **main.tsx**: Entry point of the application.
- **config files**: Configuration files for TypeScript, Vite, ESLint, etc.


## 🖥️ Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/sipnplay.git
   cd sipnplay
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

## ⚜ Usage
### Running the Project

To run the project, use the following command:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the application in action.

### Building for Production

To build the project for production, use the command:

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

## 🏰 Process
Initially, we implemented foundational features (FF) and added calendar content to enhance user functionality. Ensuring compliance with licensing and updating the README.md file, alongside creating an image folder for documentation purposes, were the early steps. Next, installing and implementing SASS and a CSS reset helped maintain consistent and manageable styling throughout the project.

The creation of the page layout set the structural foundation, followed by implementing routes and pages to ensure seamless navigation. Developing the navbar and incorporating a responsive mixin allowed for a dynamic and adaptable user interface. Establishing default sizes for padding, gaps, margins, and typography, as well as adding a default color scheme, laid the groundwork for a cohesive design.

Styling the navbar and creating a hook for the navbar buttons enhanced interactivity and user experience. Adjusting the logo color to accommodate dark mode, and implementing dark mode itself, were essential for modern design standards. Organizing the folder structure kept the project maintainable and scalable.

Integrating dependencies such as React-three Fiber and Drei facilitated advanced 3D graphics capabilities, which were vital for the visual appeal of the board game store website. Fixing folder inconsistencies ensured a clean and organized codebase.

Creating specific pages like the calendar and implementing board game functionalities enriched the site’s content. Developing the home screen and menu page, followed by extensive color modifications, helped in achieving the desired aesthetic.

Making the website more SEO-friendly improved visibility and search engine ranking, while addressing inconsistent naming conventions enhanced code readability and maintenance. Adding a footer and creating a user interface for the menu page contributed to a complete and user-friendly site. Finally, modifying the home page, adding default background colors, completing the menu, and incorporating chess pieces on the home screen rounded off the development process, resulting in a polished and engaging website.

## 🧠 Brainstorm Process
![brainstorm1](img-readme/brainstorm1.png)

![brainstorm2](img-readme/brainstorm2.png)

![brainstorm3](img-readme/brainstorm3.png)

## 🙃 Before
![before-sipnplay](img-readme/before-sipnplay.png)

## 🙂 After
![after-sipnplay](img-readme/after-sipnplay.png)

## 👑 Challenges
- Initial idea:
	A 3D tablet on a desk with a board game and the menu would "pop up" from the tablet and have interactive 3D items when you scroll through the menu.
	A 3D notice board for the home page with post-its with main information like hours & location, how it works. 
    We're trying to work with warm colors like orange and yellow, but we couldn't find a color palette that the group liked. 
- How we work on these challenges:
    We used 3D models on the home page in a way that would attract attention, but that would work on desktops and look mobile-friendly too, as the bulletin board didn't work on Safari, we decided to go with another course of action, that was working with smaller pieces of 3D that would interact in a friendly when with mobile and desktop.
    We ended up doing the same for the menu, as the table with the tablet was causing incompatibility on the mobile device, and the focus was on creating an interface that operates on both the monitor and the mobile, we had to do some changes for the amount of 3D on the menu page.
    We ended up opting for a warm color, but towards pastel and clean. 

## 🎯 Future Plans
- Work on the 3D menu interactivity, so that each dish and drink has a 3D model 
- Make the calendar more interactive so new events are automatically inputted when a form is filled
- Make the board games page more interactive so new games are automatically inputted when a form is filled
- Do final touches on pieces of information that the company should have a say 

For developers it always looks like something is missing or could be worked on more, especially doing a project like this in only 24 hours. So the future plans are things we know it looks amazing but could look even better.

## 📜 File Structure
```
.
├── img-readme
│   └── sipnplay-readme.jpg
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   ├── brand
│   │   │   ├── sipnplay-dark.svg
│   │   │   └── sipnplay.svg
│   │   └── icons
│   │       ├── facebook.svg
│   │       ├── instagram.svg
│   │       ├── moon.svg
│   │       ├── phone.svg
│   │       ├── sun-mobile.svg
│   │       └── sun.svg
│   ├── components/R3FCanvas
│   │   ├── R3FCanvas.tsx
│   │   └── R3FCanvas.types.ts
│   ├── context
│   │   ├── DarkModeContext.tsx
│   │   └── darkModeContext.types.ts
│   ├── features
│   │   ├── board-games
│   │   │   ├── components
│   │   │   │   ├── BoardGames.tsx
│   │   │   │   └── SearchBar.tsx
│   │   │   ├── boardGames.module.scss
│   │   │   └── BoardGames.tsx
│   │   ├── calendar
│   │   │   ├── components
│   │   │   │   └── CalendarItem.tsx
│   │   │   ├── calendar.module.scss
│   │   │   ├── Calendar.tsx
│   │   │   └── Calendar.types.ts
│   │   ├── Home
│   │   │   ├── assets
│   │   │   │   ├── KingPiece.glb
│   │   │   │   ├── KnightPiece.glb
│   │   │   │   ├── QueenPiece.glb
│   │   │   │   └── RookPiece.glb
│   │   │   ├── components
│   │   │   │   └── HomeInfo.tsx
│   │   │   ├── models
│   │   │   │   ├── KingPiece.tsx
│   │   │   │   ├── KingPiece.tsx
│   │   │   │   ├── KnightPiece.tsx
│   │   │   │   ├── QueenPiece.tsx
│   │   │   │   └── RookPiece.tsx
│   │   │   ├── home.module.scss
│   │   │   └── Home.tsx
│   │   └── Menu
│   │       ├── assets
│   │       │   ├── CoffeeCup.glb
│   │       │   ├── Burher.glb
│   │       │   ├── CoffeeCup.glb
│   │       │   └── Fries.glb
│   │       ├── components
│   │       │   ├── MenuButtons.tsx
│   │       │   ├── MenuItemInfo.tsx
│   │       │   └── MenuItemList.tsx
│   │       ├── model
│   │       │   ├── Boba.tsx
│   │       │   ├── Burguer.tsx
│   │       │   ├── CoffeeCup.tsx
│   │       │   └── Fries.tsx
│   │       ├── menu.module.scss
│   │       ├── Menu.tsx
│   │       ├── menu.types.ts
│   │       └── menuItems.ts
│   ├── hooks
│   │   └── useLocalStorageState.tsx
│   ├── layouts
│   │   └── footer
│   │       ├── footer.module.scss
│   │       ├── Fotter.tsx
│   │       ├── layout
│   │       │   ├── layout.module.scss
│   │       │   └── Layout.tsx
│   │       ├── navbar
│   │       │   └── components
│   │       │       └── DarkModeToggle.tsx
│   │       ├── hooks
│   │       │   └── useToggleMenu.tsx
│   │       ├── navbar.module.scss
│   │       └── Navbar.tsx
│   ├── pages
│   │   ├── BoardGamesPage.tsx
│   │   ├── CalendarPage.tsx
│   │   ├── GiftCardsPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── MenuPage.tsx
│   │   └── PressPage.tsx
│   ├── routes
│   │   └── Routes.tsx
│   ├── styles
│   │   ├── abstracts
│   │   │   └── _mixins.scss
│   │   ├── base
│   │   │   ├── _base.scss
│   │   │   ├── _reset.scss
│   │   │   ├── _sizes.scss
│   │   │   └── _typography.scss
│   │   ├── components
│   │   │   └── _button.scss
│   │   ├── themes
│   │   │   ├── _dark.scss
│   │   │   └── _light.scss
│   │   └── main.scss
│   ├── utils
│   │   ├── constants.ts
│   │   ├── functions.ts
│   │   └── functions.types.ts
│   ├── App.tsx
│   ├── declarations.d.ts
│   ├── main.tsx
│   └── vite-env.d.ts
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## License

This project is licensed under the GPL-3.0 License. See the [LICENSE](LICENSE) file for details.
