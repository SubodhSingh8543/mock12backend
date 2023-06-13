const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
    company: String,
    postedAt: String,
    city: String,
    location: String,
    role: String,
    level: String,
    contract: String,
    position: String,
    language: String
}, {
    versionKey: false
});

const JobModel = mongoose.model("job", jobSchema);

module.exports = { JobModel };