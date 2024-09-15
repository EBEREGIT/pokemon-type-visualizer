# Pokémon Type Distribution Visualizer

## Overview

The **Pokémon Type Distribution Visualizer** is a React application that fetches data from the PokéAPI to visualize the distribution of Pokémon types for the first 151 Pokémon (Generation 1). This application presents the distribution in a bar chart, allowing users to easily see which types are most common. The project includes features such as data fetching, transformation, charting, loading states, error handling, and more.

## Demo

- [Netlify Link](https://pokemon-types-chart.netlify.app/)
- [Cloudflare Link](https://pokemon-type-chart.pages.dev/)

---

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Running the Project](#running-the-project)
5. [File Structure](#file-structure)
6. [Approach and Solution](#approach-and-solution)
   - [Data Fetching](#data-fetching)
   - [Data Transformation](#data-transformation)
   - [Charting](#charting)
   - [Styling](#styling)
   - [Additional Features](#additional-features)
7. [Bonus Features](#bonus-features)
8. [Challenges Faced](#challenges-faced)
9. [Future Improvements](#future-improvements)
10. [License](#license)

---

## Features

- Fetches Pokémon data for the first 151 Pokémon from the PokéAPI.
- Transforms the data to calculate the count of Pokémon for each type.
- Displays a bar chart of Pokémon type distribution using a charting library.
- Supports a toggle to display type counts or percentages.
- Responsive design for a seamless experience across different screen sizes.
- Implements a loading state while fetching data and error handling in case of API failures.
- Light and Dark mode functionality

---

## Technologies Used

- **[React.js](https://react.dev/)**: JavaScript library for building user interfaces.
- **[Recharts](https://recharts.org/en-US/)**: Charting library for data visualization.
- **[Material UI (MUI)](https://mui.com/)**: For styling the UI and ensuring responsiveness.
- **[PokéAPI](https://pokeapi.co/)**: The source of Pokémon data.
- **[TypeScript](https://www.typescriptlang.org/)**: For typechecking, application logic and data transformation.
- **[Axios](https://axios-http.com/docs/intro)**: To make API call.
- **[Framer](https://www.framer.com/motion/)**: React Animation Library.
- **[Vite](https://vitejs.dev/)**: Tool for Installing Frontend Frameworks and libraries.
- **[ESLint](https://eslint.org/)**: To find bugs early and enforce best practices.

---

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```javascript
   git clone https://github.com/EBEREGIT/pokemon-type-visualizer

   cd pokemon-type-chart
   ```

2. Install dependencies:

   ```javascript
   npm install
   ```

3. Create an `.env` file in the root directory if you want to add any environment variables. However, no specific environment variables are required for this project.

---

## Running the Project

To start the development server, use the following command:

```javascript
npm run dev
```

This will run the app in development mode. Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser.

The page will reload if you make edits, and you will also see any lint errors in the console.

To create a production build:

```javascript
npm run build
```

---

## File Structure

```javascript

├── src
│   ├── assets
│   │   └── types.ts
│   ├── components
│   │   ├── Buttons
│   │   │   └── IconBtn.tsx
│   │   ├── Feedback
│   │   │   ├── Loader.tsx
│   │   │   └── toast.tsx
│   │   ├── Footer
│   │   │   ├── index.tsx
│   │   │   └── RepoRedirect.tsx
│   │   ├── General
│   │   │   ├── Animate.tsx
│   │   │   ├── Layout.tsx
│   │   │   ├── ModeToggle.tsx
│   │   │   └── Navigation.tsx
│   │   ├── Grid
│   │   │   ├── full.tsx
│   │   │   └── Half.tsx
│   │   └── nav
│   │   │   ├── search.tsx
│   │   │   │   ├── MobileSearchInput.tsx
│   │   │   │   ├── searchButton.tsx
│   │   │   │   └── searchInput.tsx
│   │   │   ├── index.tsx
│   │   │   └── Logo.tsx
│   ├── constants
│   │   └── index.ts
│   ├── hooks
│   │   ├── useGetPokemonSingleVsDualTypes.tsx
│   │   └── useGetPokemonTypes.tsx
│   ├── pages
│   │   ├── home
│   │   │   ├── Reports
│   │   │   │   ├── chart
│   │   │   │   │   ├── BarChart
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── title.tsx
│   │   │   │   │   │   └── visualizer.tsx
│   │   │   │   │   └── PieChart
│   │   │   │   ├── index.tsx
│   │   │   │   ├── PokemonTypes.tsx
│   │   │   │   └── SingleVsDoubleTypes.tsx
│   │   │   ├── SearchResults
│   │   │   │   ├── pokemon
│   │   │   │   │   ├── Cry.tsx
│   │   │   │   │   ├── heading.tsx
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── item.tsx
│   │   │   │   ├── index.tsx
│   │   │   │   └── Pokemons.tsx
│   │   │   ├── sectionHeading
│   │   │   │   ├── countsAndPercentagesToggle.tsx
│   │   │   │   ├── index.tsx
│   │   │   │   ├── label.tsx
│   │   │   │   └── title.tsx
│   │   │   ├── heading.tsx
│   │   │   └── index.tsx
│   │   └── NotFound
│   ├── stateManager
│   │   ├── General.tsx
│   │   ├── Pokemon.tsx
│   │   ├── Theme.tsx
│   │   └── variable.tsx
│   ├── utils
│   │   └── helpers.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
└── README.md
```

---

## Approach and Solution

### Data Fetching

I used the PokéAPI to fetch the first 151 Pokémon. Since each Pokémon’s types are in their individual detail objects, multiple API requests were required. I handled this efficiently using `Promise.all` to fetch the details for all Pokémon in parallel.

```javascript
  // ./src/stateManager/Pokemon.tsx
  const getPokemons = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(`${BaseUrl}?limit=151`);
      const pokemonUrls = response?.data?.results?.map(
        (pokemon: BasicPokemon) => pokemon.url
      );

      const pokemonDetails = await Promise.all(
        pokemonUrls.map((url: string) => axios.get(url))
      );

      const allPokemonData = pokemonDetails.map((pokemon) => pokemon.data);

      setPokemons(allPokemonData);

      setIsSuccessful(true);

    } catch (error: any) {
      setIsError(true);
      setFeedback(`Error fetching Pokémon data:, ${error?.message as string}`);
    } finally {
      reset();
    }
  };
```

### Data Transformation

The Pokémon data was transformed to count how many Pokémon belonged to each type. If a Pokémon had multiple types, I incremented the count for each type. This logic was put in a hook to keep the code modular. The hook also called other utility functions defined in the `helpers.ts` file to help separate concerns.

```javascript
// ./src/hooks/useGetSortedPokemonTypes.tsx
import { useContext, useMemo } from "react";
import { Variable } from "../stateManager/variable";
import {
  getPokemonTypesCount,
  setupPokemonTypes,
  sortPokemonObject,
} from "../utils/helpers";
import { SortedPokemon } from "../assets/types";

const useGetSortedPokemonTypes = (): SortedPokemon[] => {
  const { pokemons } = useContext(Variable);

  const pokemonMap: Record<string, number> = useMemo(
    () => getPokemonTypesCount(pokemons),
    [pokemons]
  );

  const sortedPokemonTypes: SortedPokemon[] = useMemo(() => {
    const pokemonMapEntries: Array<[string, number]> =
      sortPokemonObject(pokemonMap);
    return setupPokemonTypes(pokemonMapEntries);
  }, [pokemonMap]);

  return sortedPokemonTypes;
};

export default useGetSortedPokemonTypes;

```

### Charting

I used **Recharts** to create the bar chart. The chart data was sorted in descending order of Pokémon count. The chart also supports a toggle to switch between displaying raw counts and percentages. It was designed for reusability.

```javascript
// ./src/pages/home/Reports/chart/BarChart/index.tsx

import { SortedPokemon } from "../../../../../assets/types";
import Layout from "../../../../../components/General/Layout";
import Animate from "../../../../../components/General/Animate";
import Title from "./title";
import Visualizer from "./visualizer";

type BarChartComponentProps = {
  data: SortedPokemon[];
  label: string;
};

export default function BarChartComponent({
  data,
  label,
}: BarChartComponentProps) {
  return (
    <Animate
      content={
        <Layout
          content={
            <>
              {/* chart title */}
              <Title label={label} />

              {/* chart body */}
              <Visualizer data={data} />
            </>
          }
        />
      }
    />
  );
}


```

### Styling

CSS and **Material UI (MUI)** were used to style the app, ensuring a visually appealing and responsive layout. Unique colors were also auto generated and assigned to each Pokémon type to make the chart more engaging.

```javascript
// ./src/utils/helpers.ts
export const generateRandomColors = (num: number): string[] => {
  if (num <= 0) return [];

  const colors: Set<string> = new Set<string>();

  while (colors.size < num) {
    const newColor: string =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

    colors.add(newColor);
  }

  return Array.from(colors);
};
```

### Additional Features

- **Loading Spinner**: A spinner is displayed while data is being fetched.
- **Error Handling**: If the API call fails, a user-friendly error message is shown.
- **Count vs. Percentage Toggle**: Users can switch between seeing raw counts or percentages for each type.
- **Mode Switch**: Added a button that is used to switch the UI between `light` and `dark` mode. By default, it takes the user's system setting.

---

## Bonus Features

- **Single-type vs Dual-type Chart**: I implemented a second chart showing the distribution of single-type and dual-type Pokémon. Here is the data transformation hook:

```javascript
// ./src/hooks/useGetPokemonSingleVsDualTypes.tsx
import { useContext, useMemo } from "react";
import { Variable } from "../stateManager/variable";
import {
  getPokemonSingleVsDualTypesCount,
  setupPokemonTypes,
  sortPokemonObject,
} from "../utils/helpers";
import { SortedPokemon } from "../assets/types";

const useGetPokemonSingleVsDualTypes = (): SortedPokemon[] => {
  const { pokemons } = useContext(Variable);

  const pokemonMap: Record<string, number> = useMemo(
    () => getPokemonSingleVsDualTypesCount(pokemons),
    [pokemons]
  );

  const sortedPokemonSingleVsDualTypes: SortedPokemon[] = useMemo(() => {
    const pokemonMapEntries: Array<[string, number]> =
      sortPokemonObject(pokemonMap);
    return setupPokemonTypes(pokemonMapEntries);
  }, [pokemonMap]);

  return sortedPokemonSingleVsDualTypes;
};

export default useGetPokemonSingleVsDualTypes;
```

The code above calls other utility functions in the `helpers.ts` file.

- **Search Functionality**: i added a search bar that allows users to filter Pokémon by name. The following code is the search algorithm:

```javascript
  // ./src/stateManager/General.tsx
  const searchItems = () => {
    if (!search.trim()) {
      setSearchResult([]);
      return;
    }

    if (!pokemons?.length) {
      setSearch("");
      setFeedback("No Pokémon available to search.");
      setIsError(true);
      reset()
    }

    const normalizedSearch = search.toLowerCase().replace(/\s+/g, "");

    const results = pokemons.filter(({ name }) =>
      name.toLowerCase().replace(/\s+/g, "").includes(normalizedSearch)
    );

    if (results.length) {
      setSearchResult(results);
    } else {
      setSearchResult([]);
    }

    window.scrollTo({
      top: 10,
      behavior: "smooth",
    });
  };
```

---

## Challenges Faced

- **API Rate Limits**: The PokéAPI has rate limits and I needed to retrieve data for 151 pokemons. To solve this problem, I optimized API calls using `Promise.all` and handled possible errors properly. This saved time of execution and avoided possible timeout.

- **Data Transformation**: Handling Pokémon with multiple types while ensuring accurate counting for each type was a challenge but I overcame it using befitting data structures and algorithm.

- **Design Challenges**: Coming up with the right design, font, and color was another challenge. To solve this, I sketch out wireframes or mockups using tools like Figma and a sketch pad before diving into implementation. It helped clarify my vision and identify potential issues early. I also reviewed existing design systems and UI kits to provide inspiration and guidance.

- **Deprecation of MUI Components**: Since it was the first time using MUI v6, I noticed that some component has been deprecated or will soon be. So I checked the MUI migration guide and documentation for updates and recommended replacements. I also checked community forums and GitHub issues related to what I was facing.

- **Recharts X-axis and Y-axis Issues**: The chart component was throwing error in the console relating to the both axis. So I consulted the library’s documentation and examples. Finally, I checked community forums and GitHub issues related to what I was facing.

---

## Future Improvements

- Implement unit tests for the data transformation logic using **Jest**, **Jasmine** or other testing library.
- Add and enhance animations across the application for a more dynamic user experience.
- Improve accessibility by adding ARIA labels and screen reader support.
- Possible Typing improvements or addition.
- Upgrade design and algorithms.

---

## License

This project is licensed under the MIT License.
