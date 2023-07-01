export const ResponseCreator = (data, success, msg, status) => {
  return {
    success: success,
    message: msg,
    data: data,
    status: status,
  };
};
