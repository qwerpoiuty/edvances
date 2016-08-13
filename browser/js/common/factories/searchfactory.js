app.factory('searchFactory', function($http) {
    var searchFactory = {}
    var s = searchFactory

    s.searchClassroomsByTags = function(tags) {
        return $http.get("/api/classrooms/search", tags)
            .then(function(response) {
                return response.data
            })
    }




    return searchFactory
})