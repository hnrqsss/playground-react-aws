module.exports = {
  listCats: async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "List cats",
        },
        null,
        2
      ),
    };
  },
  showCat: async (event) => {
    const { id } = event.pathParameters;

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Show cat " + id,
        },
        null,
        2
      ),
    };
  },
  editCat: async (event) => {
    const { id } = event.pathParameters;

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "edit cat " + id,
        },
        null,
        2
      ),
    };
  },
  createCat: async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Create cat",
      }),
    };
  },
  deleteCat: async (event) => {
    const { id } = event.pathParameters;

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Delete cat " + id,
        },
        null,
        2
      ),
    };
  },
};
