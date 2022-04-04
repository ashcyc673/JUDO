const Experience = require("./experience_schema");
const Result = require("./result_schema");
setInterval(() => {
  Experience.aggregate([
    {
      $group: {
        _id: "$experienceID",
        count: { $sum: 1 },
      },
    },
  ]).then((records) => {
    records.forEach((record) => {
      Result.findOneAndUpdate(
        {
          "record.key": record._id,
        },
        {
          record: {
            key: record._id,
            value: record.count,
          },
        },
        { upsert: true },
        (error, result) => {}
      );
    });
  });
}, 1000);
