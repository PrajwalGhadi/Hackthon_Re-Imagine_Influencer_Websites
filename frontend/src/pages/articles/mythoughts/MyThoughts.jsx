import clsx from "clsx";
import ArticleContent from "../ArticleContent";
import { useState, useEffect } from "react"; // Import useEffect

const MyThoughts = ({ myThoughts }) => {

  // It was taking time so taken help of Gemini to generate a search feature. I have understand the feature and then tried implemented by my own
  const [searchItem, setSearchItem] = useState("");

  // Initialize filteredPosts with all posts initially
  const [filteredPosts, setFilteredPosts] = useState(myThoughts?.mythoughts.posts || []);

  // Use useEffect to update filteredPosts when myThoughts.posts changes
  // This is important because myThoughts might be an asynchronous prop
  useEffect(() => {
    setFilteredPosts(myThoughts?.mythoughts?.posts || []);  //setting the post if available or empty []
  }, [myThoughts?.mythoughts?.posts]);


  // Handling the input change
  const handleInputChange = (e) => {

    // Setting the serachInput
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    // Filter the posts based on the title if seach input is included
    const filteredItems = myThoughts?.mythoughts?.posts?.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Setting the filteredItem in filterPost variable
    setFilteredPosts(filteredItems || []);
  };

  return (
    <section
      id="Mythoughts"
      className={clsx(
        "flex flex-col justify-between font-[Inter] mt-15 gap-10",
        "lg:flex-row lg:mt-0"
      )}
    >
      <div className="w-full flex justify-between p-5 gap-4 flex-col lg:flex-row md:flex-row">
        <div className="lg:w-[35%] h-[40vh] md:w-[65%] md:h-[30vh] lg:h-[35vh] rounded-2xl shadow-[0px_4px_10px_rgba(0,0,0,0.25)] bg-[#e3e8d0] flex flex-col items-center py-10">
          <h1 className="text-2xl font-bold text-shadow-lg/15">ARTICLES</h1>

          <div className="w-full py-10 flex flex-col gap-4 text-center px-5 md:px-2">
            {[
              "💭 MyThoughts",
              "📚 Knowledge Management",
              "🩺 Medical Studies",
            ].map((item, index) => {
              return (
                <h1
                  key={index}
                  className="text-lg py-3 font-light md:px-1  text-shadow-lg/20 bg-[#fef4ec] shadow-[0px_4px_10px_rgb(0,0,0,0.25)] rounded-xl hover:active:scale-95  hover:bg-[#8484fa] hover:text-white hover:shadow-[0px_4px_10px_rgb(0,0,0,0.5)] hover:rounded-xl hover:transition-all hover:ease-in hover:duration-200 md:text-md"
                >
                  {item}
                </h1>
              );
            })}
          </div>
        </div>

        <div className="w-[100%]  h-[80vh] rounded-2xl shadow-[0px_4px_10px_rgba(0,0,0,0.25)] py-10 px-5 flex flex-col gap-5 overflow-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {/* Searchbar */}
          <div className="flex items-center justify-center -mt-5">
            <input
              type="text"
              placeholder="Search Blog..."
              className="bg-gray-100 p-3 rounded-2xl border-gray-300 border-1 outline-none focus:border-[#8a2be2] shadow-[0px_4px_10px_rgba(0,0,0,0.25)]"
              value={searchItem}
              onChange={handleInputChange}
            />
            {/* You can remove the ul/li for filteredUsers as it's not needed for this search functionality */}
          </div>

          {/* Creating the card for blog posts */}
          {filteredPosts?.reverse().map((item, index) => { // Use filteredPosts here
            return (
              <div
                key={item.id || index} // Add a unique key, preferably item.id if available
                className={` flex flex-col gap-2 rounded-2xl py-4 ${
                  index % 2 === 0
                    ? "bg-[#cfcff1] hover:bg-[#8484fa] hover:text-white"
                    : "bg-[rgba(187,187,200,0.5)] hover:bg-[#5e5e64] hover:text-white"
                }  shadow-[0px_4px_10px_rgba(0,0,0,0.25)] hover:scale-100 hover:mx-2 hover:transition-all hover:ease-in hover:duration-300 hover:active:scale-97`}
              >
                <div className="px-5 flex gap-5">
                  <small>{item?.date}</small> <small>{item?.readTime}</small>
                </div>

                <div className="px-5 flex flex-col gap-2">
                  <h1 className="font-bold ">{item?.title}</h1>
                  <p className="text-lg opacity-75 hover:opacity-100">
                    <ArticleContent
                      html={item?.content?.slice(0, 775) + "..."}
                    />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MyThoughts;