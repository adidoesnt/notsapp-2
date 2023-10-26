const RES = {
  SUCCESS: {
    DEFAULT: {
      status: 200,
      message: "OK",
    },
  },
  ERROR: {
    INTERNAL: {
      status: 500,
      message: "Internal server error",
    },
    NOT_FOUND: {
      status: 404,
      message: "Requested resource not found",
    },
  },
};

export default RES;
