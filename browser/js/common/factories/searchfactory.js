app.factory('searchFactory', function($http){
	var searchFactory = {}

	searchFactory.searchClassroomsByTag = function(tags){
		// Tags is an Array
		console.log(tags)
		return $http.put("/api/classrooms/search", tags)
			.then(function(response){
				return response.data
			})
	}
	return searchFactory
})