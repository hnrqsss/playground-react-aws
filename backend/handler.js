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
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Show cat " + event.id,
        },
        null,
        2
      ),
    };
  },
  editCat: async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "edit cat " + event.id,
        },
        null,
        2
      ),
    };
  },
  createCat: async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Create cat",
        },
        null,
        2
      ),
    };
  },
  deleteCat: async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Delete cat " + event.id,
        },
        null,
        2
      ),
    };
  },
};
