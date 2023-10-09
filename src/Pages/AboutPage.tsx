const AboutPage = () => {
  return (
    <div className="flex flex-col gap-4 max-w-[750px] mx-auto mt-8">
      <h2 className="text-3xl">Pokédex</h2>
      <hr className="border-gray-300" />
      <p>
        This is my version of the TrueCoders Pokédex project. It is intended as
        a display of our mastery of React, React-Router, and APIs.
      </p>
      <h3 className="text-2xl">Technologies Used</h3>
      <hr className="border-gray-300" />

      <p>
        I used TypeScript, React, React-Router, react context API, Tailwindcss
        and Material Tailwind to build this app.
      </p>
      <h3 className="text-2xl">Functionality</h3>
      <hr className="border-gray-300" />
      <p>
        The user is greeted with a list of the original 151 Pokémon which they
        can filter by name, type and weaknesses. The user can then click on a
        Pokémon on the list and view more details about that Pokémon, including
        checking the details of each of that Pokémon's evolutions.
      </p>
    </div>
  );
};
export default AboutPage;
