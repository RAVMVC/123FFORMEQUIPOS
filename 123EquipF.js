(function(){
window.addEventListener('load', function(){
	var sourceControlId = 112363805, /** ID OF THE SENDER CONTROL **/
	targetControlId = 112364323, /** ID OF THE RECEIVER CONTROL **/

	sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId),
	targetControlInstance = loader.getEngine().getDocument().getElementById(targetControlId);

	sourceControlInstance.on('value-change', function(){
		targetControlInstance.setValue( sourceControlInstance.getValue() );
	});

	targetControlInstance.setValue( sourceControlInstance.getValue() );
});
})();

