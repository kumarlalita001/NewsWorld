export const search = async (req, res) => {
  console.log("i am lalit");
  const searchParam = req.params.name;

  console.log(searchParam, "search");

  const url = `https://gnews.io/api/v4/search?q=${searchParam}&apikey=50367a772719fc330cb5ea114e6d9ce8`;

  const topHeadline = `https://gnews.io/api/v4/top-headlines?category=${searchParam}&apikey=50367a772719fc330cb5ea114e6d9ce8`;

  try {
    const response = await fetch(url);
    const responseData = await response.json();
    return res.status(200).json({
      success: true,
      data: responseData,
      message: "Successfully Searched",
    });
  } catch (err) {
    console.log("ERROR AT SEARCH", err.message);
    return res
      .status(500)
      .json({ success: false, data: null, message: "Server Error" });
  }
};
