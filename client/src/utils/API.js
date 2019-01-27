import axios from "axios";

export default {
    getVolunteers: function() {
        return axios.get("/api/volunteers");
    },
    getActiveSignups: function() {
        return axios.get("/api/signups/active");
    },
    getAllSignups: function() {
        return axios.get("/api/signups/all");
    },
    getReport: function() {
        return axios.get("/api/report/:id");
    }
};
