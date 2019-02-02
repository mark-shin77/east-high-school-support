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
    getReport: function(id) {
        // console.log(id)
        return axios.get(`/api/report/${id}`);
    }
};
