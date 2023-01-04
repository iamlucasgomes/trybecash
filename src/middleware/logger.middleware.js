const logger = (req, res, next) => {
  const { method } = req;
  const { path } = req;
  const date = new Date();
  const { peopleId } = req.params;

  const log = {
    timestamp: Date.now(),
    personId: peopleId,
    event: `${method}: ${path} - ${date}`,
  };

  req.log = log;
  next();
};

module.exports = logger;