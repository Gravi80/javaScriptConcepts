var subject = (function() {
	var observers = [];

	var getIndexOf = function(observer) {
		for (var index = 0; index < observers.length; index++) {
			if (observers[i] === observer) return index;
		}
		return -1;
	}

	var getObserver = function(index) {
		return observers[index];
	}

	var removeObserverAt = function(index) {
		observers.splice(index, 1);
	}

	return {
		addObserver: function(observer) {
			observers.push(observer);
		},
		getObserversCount: function() {
			return observers.length;
		},
		removeObserver: function(observer) {
			removeObserverAt(getIndexOf(observer));
		},
		notify: function(data) {
			var observerCount = this.getObserversCount();
			for (var index = 0; index < observerCount; index++) {
				getObserver(index).update(data);
			}
		}
	};
})();